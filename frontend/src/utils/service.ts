import { useMutation, useQuery } from "@tanstack/react-query";
import { PlacesResponse, PlaceData, PlaceResponse } from "../types";
import api from "./api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export const usePlaces = (paramsObj?: any) => {
  return useQuery({
    queryKey: ["places", paramsObj],
    queryFn: () =>
      api
        .get<PlacesResponse>("/places", { params: paramsObj })
        .then((res) => res.data.places),
    retry: 3,
    retryDelay: 1000,
  });
};

export const useCreatePlace = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ["create"],
    mutationFn: (body: PlaceData) => api.post("/places", body),
    onSuccess: (res) => {
      toast.success("Başarıyla oluşturuldu");
      navigate("/");
    },
    onError: (err) => {
      toast.error("Bir hata oluştu");
    },
  });
};

export const usePlace = (id: string) => {
  return useQuery({
    queryKey: ["place"],
    queryFn: () =>
      api.get<PlaceResponse>(`/place/${id}`).then((res) => res.data.place),
  });
};

export const useRemovePlace = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ["remove"],
    mutationFn: (id: number) => api.delete(`/place/${id}`),
    onSuccess: () => {
      toast.success("Konaklama noktası kaldırıldı");
      navigate("/");
    },

    onError: () => {
      toast.error("Bir hata oluştu");
    },
  });
};
