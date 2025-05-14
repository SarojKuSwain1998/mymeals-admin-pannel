import { ChevronLeft } from "lucide-react";
import React from "react";

const UpdateContactForm = () => {
  return (
    <div className="w-full px-4 pt-2 md:px-20 lg:px-40">
      <div>
        <a href="/form-list" className="flex mb-4">
          <ChevronLeft />
          <span> Back</span>
        </a>
      </div>
      <div className="min-h-screen flex items-center justify-center bg-lime-500 p-4">
        <div className="bg-white border border-green-200 rounded-xl p-8 max-w-md w-full shadow-md">
          {/* Header */}
          <div className="flex flex-col items-center mb-6">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <img
                src="./images/logo.png"
                alt=""
                className="w-24 flex items-center justify-center mx-auto"
              />
            </div>
            <h2 className="text-xl font-semibold text-gray-800">
              Update Contact no.
            </h2>
          </div>

          {/* Shared label class for consistency */}
          <style jsx>{`
            .form-label {
              @apply block text-gray-700 font-medium text-sm mb-1;
            }
          `}</style>

          {/* Order No. */}
          <div className="mb-4">
            <label className="form-label">
              Order no. <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="As assigned by official team"
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Name */}
          <div className="mb-4">
            <label className="form-label">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="form-label">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Plan */}
          <div className="mb-4">
            <label className="form-label">
              Plan <span className="text-red-500">*</span>
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400">
              <option value="">Select your Plan</option>
              <option value="basic">Basic</option>
              <option value="premium">Premium</option>
            </select>
          </div>

          {/* Old Phone No. */}
          <div className="mb-4">
            <label className="form-label">
              Old Phone no. <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-2">
              <span className="text-green-600 text-xl">🇮🇳</span>
              <input
                type="tel"
                placeholder="Enter old number"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
          </div>

          {/* New Phone No. */}
          <div className="mb-6">
            <label className="form-label">
              New Phone no. <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-2">
              <span className="text-green-600 text-xl">🇮🇳</span>
              <input
                type="tel"
                placeholder="Enter new number"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
          </div>

          {/* Submit */}
          <div>
            <button className="w-full py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateContactForm;
