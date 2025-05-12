import { CreditCard, Home } from "lucide-react";
import Modal from "../Modal";

const IndivisualAssignOrder = ({ modalOpen, closeModal, selectedOrders }) => {
  return (
    <div>
      <Modal
        heading={"Assign Order"}
        modalOpen={modalOpen}
        closeModal={closeModal}
        selectedOrders={selectedOrders}
      >
        <div className="space-y-6 text-gray-800">
          {/* Order Info */}
          <div className="grid md:grid-cols-2 gap-6 bg-white border border-gray-300 shadow-sm px-6 py-5 rounded-lg">
            <div className="flex gap-4 items-start">
              <label className="w-32 font-semibold text-gray-600">
                Order ID:
              </label>
              <p className="text-gray-900 text-xl ">
                {selectedOrders?.orderId}
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <label className="w-32 font-semibold text-gray-600">
                Customer Name:
              </label>
              <p className="text-gray-900 text-xl ">
                {selectedOrders?.customerName}
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <label className="w-32 font-semibold text-gray-600">Meal:</label>
              <p className="text-gray-900 text-xl ">{selectedOrders?.meal}</p>
            </div>

            <div className="flex gap-4 items-start  ">
              <label className="w-32 font-semibold text-gray-600">
                Phone Number:
              </label>
              <p className="text-gray-900 text-xl ">{selectedOrders?.number}</p>
            </div>

            <div className="flex gap-4 items-start  ">
              <label className="w-32 font-semibold text-gray-600">Time:</label>
              <p className="text-gray-900 text-xl ">{selectedOrders?.time}</p>
            </div>

            <div className="flex gap-4 items-start  ">
              <label className="w-32 font-semibold text-gray-600">Date:</label>
              <p className="text-gray-900 text-xl ">{selectedOrders?.date}</p>
            </div>
          </div>

          {/* Address Heading */}
          <div className="flex items-center gap-2">
            <Home className="text-blue-600" />
            <h2 className="text-xl font-bold dark:text-white text-gray-700">
              Address
            </h2>
          </div>

          {/* Address Info */}
          <div className="grid md:grid-cols-2 gap-6 bg-white border border-gray-300 shadow-sm px-6 py-5 rounded-lg">
            <div className="flex gap-4 items-center">
              <label className="w-32 font-semibold text-gray-600">
                Address Line 1:
              </label>
              <p className="text-gray-900 text-xl ">
                {selectedOrders?.address?.adreesOne}
              </p>
            </div>

            <div className="flex gap-4 items-center">
              <label className="w-32 font-semibold text-gray-600">
                Address Line 2:
              </label>
              <p className="text-gray-900 text-xl ">
                {selectedOrders?.address?.addressTwo}
              </p>
            </div>

            <div className="flex gap-4 items-center">
              <label className="w-32 font-semibold text-gray-600">
                Landmark:
              </label>
              <p className="text-gray-900 text-xl ">
                {selectedOrders?.address?.landmark}
              </p>
            </div>

            <div className="flex gap-4 items-center">
              <label className="w-32 font-semibold text-gray-600">City:</label>
              <p className="text-gray-900 text-xl ">
                {selectedOrders?.address?.city}
              </p>
            </div>

            <div className="flex gap-4 items-center">
              <label className="w-32 font-semibold text-gray-600">State:</label>
              <p className="text-gray-900 text-xl ">
                {selectedOrders?.address?.state}
              </p>
            </div>

            <div className="flex gap-4 items-center">
              <label className="w-32 font-semibold text-gray-600">
                Country:
              </label>
              <p className="text-gray-900 text-xl ">
                {selectedOrders?.address?.country}
              </p>
            </div>

            <div className="flex gap-4 items-center">
              <label className="w-32 font-semibold text-gray-600">
                PinCode:
              </label>
              <p className="text-gray-900 text-xl ">
                {selectedOrders?.address?.pincode}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <CreditCard className="text-blue-600" />
            <h2 className="text-xl font-bold dark:text-white   text-gray-700">
              Payment Info
            </h2>
          </div>
          <div>
            <div className="flex justify-between bg-white border border-gray-300 shadow-sm px-6 py-5 rounded-lg">
              <div className="flex flex-col ">
                <label className="font-semibold text-gray-600">
                  Total Amount:
                </label>
                <p className="text-gray-900 text-xl ">
                  {selectedOrders?.payment?.amount}
                </p>
              </div>
              <div className="flex flex-col">
                <label className=" font-semibold text-gray-600">
                  Payment Method:
                </label>
                <p className="text-gray-900 text-xl">
                  {selectedOrders?.payment?.paymentMethod}
                </p>
              </div>

              <div className="flex flex-col">
                <label className=" font-semibold text-gray-600">
                  Payment Status:
                </label>
                <p className="text-gray-900 text-xl">
                  {selectedOrders?.payment?.paymentStatus}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-4">
          <label htmlFor="deliveryStatus" className="">
            Assign to delivery Partner:
          </label>
          <select
            id="deliveryStatus"
            name="deliveryStatus"
            className="border px-4 dark:text-black py-2 rounded-md"
            // onChange={handleStatusChange}
          >
            <option value="">Select Status</option>
            <option value="pending">Dk Nayak</option>
            <option value="out_for_delivery">Satish Nayak</option>
            <option value="delivered">Devsena sahani</option>
            {/* <option value="failed">Failed</option> */}
          </select>
        </div>
        <div className="py-6">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Assign
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default IndivisualAssignOrder;
