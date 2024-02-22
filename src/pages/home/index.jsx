import { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/recipe-item";

export default function Home() {
  const { recipeList, loading } = useContext(GlobalContext);

  if (loading) return <div>The saying 'You are what you eat' is more accurate than you think. Choose your meals wisely!</div>;

  return (
    <div className="py-8 container mx-auto flex flex-wrap bg-gradient-to-br from-pink-400 to-lavender-200 justify-center gap-10">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <RecipeItem item={item} />)
      ) : (
        <div className="flex justify-center items-center h-screen ">
        <p className="lg:text-4xl text-xl text-center text-white font-semibold italic tracking-wide animate-pulse">
          "Embark on a culinary journey of flavor and creativity."
        
        <br />
            Let the aroma guide you to new adventures.
          </p>
      </div>
      
      )}
    </div>
  );
}
