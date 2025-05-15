import { ChevronLeft } from "lucide-react";
import React, { useState } from "react";

export default function PauseAndResumeForm() {
  const [formData, setFormData] = useState({
    orderNo: "",
    name: "",
    phone: "",
    email: "",
    plan: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // send formData to API here
  };

  return (
    <div className="w-full px-4 pt-2 md:px-20 lg:px-40">
      <div>
        <a href="/admin/form-list" className="flex mb-4">
          <ChevronLeft />
          <span> Back</span>
        </a>
      </div>
      <div className="min-h-screen bg-lime-500 flex justify-center items-center px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-md border border-green-300 max-w-md w-full text-center"
        >
          <div className="mb-6">
            {/* <div className="mx-auto w-24 h-24 rounded-full bg-green-100 flex items-center justify-center text-xl font-semibold text-green-700">
              mymeals
            </div> */}
            <img
              src="./images/logo.png"
              alt=""
              className="w-24 flex items-center justify-center mx-auto"
            />
          </div>

          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            PAUSE and RESUME YOUR MEAL
          </h2>

          <div className="mb-4 text-left">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Order no. *
            </label>
            <input
              type="text"
              name="orderNo"
              value={formData.orderNo}
              onChange={handleChange}
              placeholder="As assigned by official team"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

          <div className="mb-4 text-left">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              NAME *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

          <div className="mb-4 text-left">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone number *
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg p-2">
              <span className="mr-2 text-gray-600">🇮🇳</span>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full focus:outline-none"
                required
              />
            </div>
          </div>

          <div className="mb-4 text-left">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg p-2">
              <span className="mr-2 text-gray-600">📧</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full focus:outline-none"
                required
              />
            </div>
          </div>

          <div className="mb-6 text-left">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              PLAN *
            </label>
            <select
              name="plan"
              value={formData.plan}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            >
              <option value="">Select your Plan</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="custom">Custom</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
