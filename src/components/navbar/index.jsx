import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context";


export default function Navbar() {
  const { searchParam, setSearchParam , handleSubmit } = useContext(GlobalContext);

  console.log(searchParam);

  return (
    <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
      <h2 className="text-2xl font-semibold">
        <NavLink to={"/"}>FoodRecipe</NavLink>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={searchParam}
          onChange={(event) => setSearchParam(event.target.value)}
          placeholder="Enter Items..."
          className="bg-blue/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-pink-200"
          />
      </form>
      <ul className="flex gap-5">
  <li>
    <NavLink
      to={"/"}
      className="text-orange-600 hover:text-orange-800 duration-300 font-semibold"
    >
      Home
    </NavLink>
  </li>
  <li>
    <NavLink
      to={"/favorites"}
      className="text-orange-600 hover:text-orange-800 duration-300 font-semibold"
    >
      Favorites
    </NavLink>
  </li>
</ul>

    </nav>
  );
}
