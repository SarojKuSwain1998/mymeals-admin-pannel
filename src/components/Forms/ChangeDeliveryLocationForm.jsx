import { ChevronLeft } from "lucide-react";
import React, { useState } from "react";

export default function ChangeDeliveryLocationForm() {
  const [formData, setFormData] = useState({
    orderNo: "",
    name: "",
    email: "",
    phone: "",
    plan: "",
    confirmedLocation: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Submit form data here
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

          <h2 className="text-lg font-semibold text-gray-800 mb-1">
            CHANGE DELIVERY LOCATION
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            Please share your location through whatsapp for the confirmation
            before proceeding
          </p>

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
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
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

          <div className="mb-6 text-left">
            <label className="inline-flex items-start space-x-2">
              <input
                type="checkbox"
                name="confirmedLocation"
                checked={formData.confirmedLocation}
                onChange={handleChange}
                className="mt-1"
                required
              />
              <span className="text-sm text-gray-700">
                <strong>
                  Yes I have confirmed the location from official Team
                </strong>
                <br />
                <span className="text-xs text-gray-500">
                  Make sure you proceed only after getting confirmation of the
                  from official team.
                </span>
              </span>
            </label>
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
