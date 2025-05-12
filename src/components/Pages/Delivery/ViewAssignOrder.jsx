import { Home } from "lucide-react";
import Modal from "../../Modal";

const ViewAssignOrder = ({ modalOpen, closeModal, selectedOrders }) => {
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
            <div className="flex gap-4 items-center">
              <label className="w-32 font-semibold text-gray-600">
                Order ID:
              </label>
              <p className="text-gray-900">{selectedOrders?.orderId}</p>
            </div>

            <div className="flex gap-4 items-center">
              <label className="w-32 font-semibold text-gray-600">
                Customer Name:
              </label>
              <p className="text-gray-900">{selectedOrders?.customerName}</p>
            </div>

            <div className="flex gap-4 items-center">
              <label className="w-32 font-semibold text-gray-600">Meal:</label>
              <p className="text-gray-900">{selectedOrders?.meal}</p>
            </div>

            <div className="flex gap-4 items-center">
              <label className="w-32 font-semibold text-gray-600">
                Phone Number:
              </label>
              <p className="text-gray-900">{selectedOrders?.number}</p>
            </div>

            <div className="flex gap-4 items-center">
              <label className="w-32 font-semibold text-gray-600">Time:</label>
              <p className="text-gray-900">{selectedOrders?.time}</p>
            </div>

            <div className="flex gap-4 items-center">
              <label className="w-32 font-semibold text-gray-600">Date:</label>
              <p className="text-gray-900">{selectedOrders?.date}</p>
            </div>
          </div>

          {/* Address Heading */}
          <div className="flex items-center gap-2">
            <Home className="text-blue-600" />
            <h2 className="text-xl font-bold text-gray-700 dark:text-white  ">
              Address
            </h2>
          </div>

          {/* Address Info */}
          <div className="grid md:grid-cols-2 gap-6 bg-white border border-gray-300 shadow-sm px-6 py-5 rounded-lg">
            <div className="flex gap-4 items-center">
              <label className="w-32 font-semibold text-gray-600">
                Address Line 1:
              </label>
              <p className="text-gray-900">
                {selectedOrders?.address?.adreesOne}
              </p>
            </div>

            <div className="flex gap-4 items-center">
              <label className="w-32 font-semibold text-gray-600">
                Address Line 2:
              </label>
              <p className="text-gray-900">
                {selectedOrders?.address?.addressTwo}
              </p>
            </div>

            <div className="flex gap-4 items-center">
              <label className="w-32 font-semibold text-gray-600">
                Landmark:
              </label>
              <p className="text-gray-900">
                {selectedOrders?.address?.landmark}
              </p>
            </div>

            <div className="flex gap-4 items-center">
              <label className="w-32 font-semibold text-gray-600">City:</label>
              <p className="text-gray-900">{selectedOrders?.address?.city}</p>
            </div>

            <div className="flex gap-4 items-center">
              <label className="w-32 font-semibold text-gray-600">State:</label>
              <p className="text-gray-900">{selectedOrders?.address?.state}</p>
            </div>

            <div className="flex gap-4 items-center">
              <label className="w-32 font-semibold text-gray-600">
                Country:
              </label>
              <p className="text-gray-900">
                {selectedOrders?.address?.country}
              </p>
            </div>

            <div className="flex gap-4 items-center">
              <label className="w-32 font-semibold text-gray-600">
                PinCode:
              </label>
              <p className="text-gray-900">
                {selectedOrders?.address?.pincode}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <label htmlFor="deliveryStatus" className="">
            Update Delivery Status:
          </label>
          <select
            id="deliveryStatus"
            name="deliveryStatus"
            className="border px-4 py-2 rounded-md dark:text-black border-gray-300"
            // onChange={handleStatusChange}
          >
            <option value="">Select Status</option>
            <option value="pending">Pending</option>
            <option value="out_for_delivery">Out for Delivery</option>
            <option value="delivered">Delivered</option>
            <option value="failed">Failed</option>
          </select>
        </div>
      </Modal>
    </div>
  );
};

export default ViewAssignOrder;
