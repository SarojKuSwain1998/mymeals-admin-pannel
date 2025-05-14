const FormListPage = () => {
  const forms = [
    { name: "Pause and Resume Form", href: "/pauseandresume" },
    { name: "Renewal Form", href: "/renewal" },
    { name: "Update Contact Form", href: "/update-contact" },
    {
      name: "Change Delivery Location Form",
      href: "/change-delivery-location",
    },
    { name: "Complaint Form", href: "/complaint-form" },
  ];

  return (
    <div className="min-h-screenpy-10 px-4 md:px-20 lg:px-40">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Service Forms
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {forms.map((form, index) => (
          <a
            key={index}
            href={form.href}
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 border border-gray-200 hover:border-blue-500"
          >
            <h2 className="text-lg font-semibold text-gray-800">{form.name}</h2>
            <p className="text-sm text-gray-500 mt-1">Click to open form</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default FormListPage;
