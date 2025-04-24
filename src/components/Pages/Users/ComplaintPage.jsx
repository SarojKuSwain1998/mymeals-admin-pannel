import { useState } from "react";

const ComplaintPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;
    if (!name || !email || !subject || !message) return;

    console.log("Complaint submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="w-full min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <div className="px-4 pt-10 pb-6 md:px-20 lg:px-40">
        <h1 className="text-4xl font-bold mb-4">We're Here to Help</h1>
        <p className="text-gray-600 text-lg">
          Have a concern or issue? Fill out the form below to let us know. Our
          support team will get back to you as soon as possible.
        </p>
      </div>

      {/* Main Form Section */}
      <div className="px-4 md:px-20 lg:px-40 grid lg:grid-cols-3 gap-8">
        {/* Complaint Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded shadow-md p-6 space-y-5 lg:col-span-2"
        >
          <h2 className="text-2xl font-semibold mb-4">Complaint Form</h2>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Describe your complaint..."
            rows="5"
            className="w-full border px-4 py-2 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Submit Complaint
          </button>

          {submitted && (
            <p className="text-green-600 mt-2">
              Complaint submitted successfully!
            </p>
          )}
        </form>

        {/* Sidebar / Help Section */}
        <div className="bg-white rounded shadow-md p-6 space-y-4">
          <h2 className="text-xl font-semibold">Need Immediate Help?</h2>
          <p className="text-sm text-gray-600">
            For urgent issues, feel free to reach out through:
          </p>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>
              📞 <strong>Phone:</strong> +1 (800) 123-4567
            </li>
            <li>
              📧 <strong>Email:</strong> support@example.com
            </li>
            <li>
              💬 <strong>Live Chat:</strong> Available 9am - 5pm
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ComplaintPage;
