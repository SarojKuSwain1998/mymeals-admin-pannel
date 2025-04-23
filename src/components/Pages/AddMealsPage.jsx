import { ChevronLeft } from "lucide-react";
import AddMealsForm from "../Forms/AddMealsForm";

const AddMealsPage = () => {
  return (
    <section className="w-full px-4 pt-2 md:px-20 lg:px-40">
      <div className="">
        <a href="/meals" className="flex">
          <ChevronLeft />
          <span> Back</span>
        </a>
      </div>
      <h1 className="mb-4 text-3xl text-auto font-bold capitalize">
        Add Meals Page
      </h1>
      <AddMealsForm />
    </section>
  );
};

export default AddMealsPage;
