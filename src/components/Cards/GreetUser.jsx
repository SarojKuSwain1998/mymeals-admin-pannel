const GreetUser = () => {
  //   const { user } = useAuth();

  return (
    <section className=" w-full px-4 pt-2 md:px-20 lg:px-40">
      <h1 className="mb-4 text-3xl font-bold capitalize">Hello john</h1>
      <p className="mb-4  dark:text-white text-slate-600">
        Welcome to Admin Panel.
      </p>
    </section>
  );
};

export default GreetUser;
