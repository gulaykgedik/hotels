import { FC } from "react";
import { Link } from "react-router-dom";
import { usePlaces } from "../../utils/service";

const Header: FC = () => {
  const { data } = usePlaces();
  return (
    <header className="border-b border-zinc-300">
      <div className="container flex justify-between">
        <div className="flex gap-10 items-center">
          <h1 className="text-2xl font-bold md:text-3xl">Tripster</h1>
          <nav className="gap-5 flex items-center">
            <Link to="/" className="font-semibold text-lg">
              Oteller ({data?.length})
            </Link>
            <Link to="/" className="max-md:hidden font-semibold text-lg">
              Popüler
            </Link>
            <Link to="/create" className="font-semibold ">
              Oluştur
            </Link>
          </nav>
        </div>

        <div className="flex gap-2 items-center">
          <button className="border border-blue-500 rounded-full py-1 px-5 max-md:hidden">
            Kayıt Ol
          </button>
          <button className="bg-blue-500 text-white rounded-full py-1 px-5 ">
            Giriş yap
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
