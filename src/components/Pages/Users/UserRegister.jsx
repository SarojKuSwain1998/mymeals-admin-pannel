import RegisterForm from "./RegisterForm";

const UserRegister = () => {
  return (
    <section className="flex  w-full justify-center px-4 pt-16   md:px-20 lg:px-40">
      <div className="relative h-auto w-11/12 rounded-md bg-white p-4 shadow md:w-8/12 lg:w-5/12 xl:w-1/2">
        <img
          src="./images/logo.png"
          alt="My Meals Logo"
          width={200}
          height={200}
          className="absolute -top-16 left-0 right-0 m-auto h-20 w-auto"
        />
        <div className="mb-4 space-y-2">
          <h1 className="text-3xl font-semibold text-slate-950">Register</h1>
          <p className="text-slate-600">Welcome to Admin Panel.</p>
        </div>
        <RegisterForm />
        {/* <p className="mt-4 text-sm text-slate-600">
          Powered by{" "}
          <a
            href="https://mymeals.in"
            alt="a sks to MyMeals Website"
            className="text-brand-950 underline underline-offset-4"
          >
            SKS
          </a>
          .
        </p> */}
      </div>
      {/* <p className="absolute  bottom-10 text-center text-sm font-medium">
        &copy; {new Date().getFullYear()}{" "}
        <a
          href="https://mymeals.in"
          alt="a sks to MyMeals Website"
          className="text-brand-950 underline underline-offset-4"
        >
          SKS
        </a>
        .
      </p> */}
    </section>
  );
};

export default UserRegister;
