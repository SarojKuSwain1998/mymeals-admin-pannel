import { ChevronLeft } from "lucide-react";
import React, { useState } from "react";

export default function ComplaintForm() {
  const [formData, setFormData] = useState({
    orderNo: "",
    name: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    plan: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Complaint Submitted:", formData);
    // Submit logic here
  };

  return (
    <div className="w-full px-4 pt-2 md:px-20 lg:px-40">
      <div>
        <a href="/form-list" className="flex mb-4">
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
            <img src="./images/logo.png" alt="Logo" className="w-24 mx-auto" />
          </div>

          <h2 className="text-lg font-semibold text-gray-800 mb-6">
            Complaint
          </h2>

          {/* Order Number */}
          <div className="mb-4 text-left">
            <label className="block text-base font-medium text-gray-800 mb-2">
              Order No. *
            </label>
            <input
              type="text"
              name="orderNo"
              value={formData.orderNo}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

          {/* Name */}
          <div className="mb-4 text-left">
            <label className="block text-base font-medium text-gray-800 mb-2">
              Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="mb-4 text-left">
            <label className="block text-base font-medium text-gray-800 mb-2">
              Phone Number *
            </label>
            <div className="flex items-center border border-gray-300 rounded-full p-2">
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

          {/* Address */}
          <div className="mb-4 text-left">
            <label className="block text-base font-medium text-gray-800 mb-2">
              Your Address *
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
              className="w-full border border-gray-300 rounded-full p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />

            <div className="flex gap-2">
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                className="w-1/3 border border-gray-300 rounded-full p-2 focus:outline-none"
                required
              />
              <input
                type="text"
                name="state"
                placeholder="State / Province"
                value={formData.state}
                onChange={handleChange}
                className="w-1/3 border border-gray-300 rounded-full p-2 focus:outline-none"
                required
              />
              <input
                type="text"
                name="zip"
                placeholder="ZIP / Postal code"
                value={formData.zip}
                onChange={handleChange}
                className="w-1/3 border border-gray-300 rounded-full p-2 focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Plan */}
          <div className="mb-6 text-left">
            <label className="block text-base font-medium text-gray-800 mb-2">
              Plan *
            </label>
            <select
              name="plan"
              value={formData.plan}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
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
            className="w-full bg-green-800 text-white py-2 rounded-full hover:bg-green-900 transition"
          >
            Next →
          </button>
        </form>
      </div>
    </div>
  );
}
