import { ChevronLeft } from "lucide-react";
import React from "react";

const RenewalForm = () => {
  return (
    <div className="w-full px-4 pt-2 md:px-20 lg:px-40">
      <div>
        <a href="/admin/form-list" className="flex mb-4">
          <ChevronLeft />
          <span> Back</span>
        </a>
      </div>
      <div className="min-h-screen flex items-center justify-center bg-lime-500 p-4">
        <div className="bg-white border border-green-200 rounded-xl p-8 max-w-md w-full shadow-md">
          <div className="flex flex-col items-center mb-6">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              {/* <span className="text-green-600 font-bold text-xl">mymeals</span> */}
              <img
                src="./images/logo.png"
                alt=""
                className="w-24 flex items-center justify-center mx-auto"
              />
            </div>
            <h2 className="text-xl font-semibold text-gray-800">Renewal</h2>
          </div>

          {/* Order Number */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-1">
              Order no. <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter your order number"
            />
          </div>

          {/* Location */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">
              Location <span className="text-red-500">*</span>
            </label>
            <p className="text-sm text-gray-500 mb-3">
              Please proceed only if you are continuing with the same delivery
              location or have confirmed the new location with the MYMEALS team.
            </p>
            <div className="space-y-2">
              <label className="flex items-center gap-3 p-2 border rounded-full cursor-pointer hover:bg-green-50">
                <input
                  type="radio"
                  name="location"
                  value="old"
                  className="accent-green-500"
                />
                <span>Old</span>
              </label>
              <label className="flex items-center gap-3 p-2 border rounded-full cursor-pointer hover:bg-green-50">
                <input
                  type="radio"
                  name="location"
                  value="new"
                  className="accent-green-500"
                />
                <span>New</span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button className="w-full py-2 px-4 bg-green-500 text-white rounded-full hover:bg-green-600 transition">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenewalForm;
