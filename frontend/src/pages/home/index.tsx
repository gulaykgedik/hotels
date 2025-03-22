import { FC } from "react";
import Hero from "./hero";
import Filter from "./filter";
import List from "./list";
const Home: FC = () => {
  return (
    <div className="container mx-auto my-5">
      <Hero />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 max-lg:mt-10">
        <div>
          <Filter />
        </div>

        <div className="lg:col-span-3">
          <List />
        </div>
      </div>
    </div>
  );
};

export default Home;
