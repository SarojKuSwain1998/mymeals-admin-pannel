// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

// import "leaflet/dist/leaflet.css";

import { CheckCircle, Clock, Truck } from "lucide-react";
import { useState } from "react";
import { Button, Card, CardContent } from "@mui/material";

export default function TrackOrder() {
  // Sample data
  const [deliveryStatus, setDeliveryStatus] = useState("Out for Delivery"); // 'Delivered', 'Pending'
  const deliveryLocation = { lat: 28.6448, lng: 77.2167 };

  return (
    <div className="p-6 space-y-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold">Order Tracking</h1>

      <Card>
        <CardContent className="p-4 space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500 text-sm">Order ID: #ORD12345</p>
              <h2 className="text-xl font-semibold">Paneer Tiffin Combo</h2>
            </div>
            <span className="inline-flex items-center gap-2 text-blue-600 font-medium">
              <Truck className="w-5 h-5" /> {deliveryStatus}
            </span>
          </div>

          {/* Progress bar */}
          <div className="flex items-center gap-4">
            <Step title="Order Placed" done />
            <Step title="Preparing" done />
            <Step
              title="Out for Delivery"
              done={deliveryStatus !== "Pending"}
            />
            <Step title="Delivered" done={deliveryStatus === "Delivered"} />
          </div>
        </CardContent>
      </Card>

      {/* Delivery Person Info */}
      <Card>
        <CardContent className="p-4 space-y-2">
          <h3 className="text-lg font-semibold">Delivery By</h3>
          <p>Name: Ankit Sharma</p>
          <p>Phone: 98765 43210</p>
          <Button variant="outline">Call Now</Button>
        </CardContent>
      </Card>

      {/* Map */}
      <Card>
        <CardContent className="p-0">
          {/* <MapContainer
            center={[deliveryLocation.lat, deliveryLocation.lng]}
            zoom={15}
            scrollWheelZoom={false}
            className="h-64 rounded-b-2xl"
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[deliveryLocation.lat, deliveryLocation.lng]}>
              <Popup>Ankit is here. ETA: 12:45 PM</Popup>
            </Marker>
          </MapContainer> */}
        </CardContent>
      </Card>

      {/* Order Summary */}
      <Card>
        <CardContent className="p-4 space-y-2">
          <h3 className="text-lg font-semibold">Order Summary</h3>
          <p>Meal: Paneer Butter Masala, 3 Roti, Rice, Salad</p>
          <p>Delivery Address: 123, Sector 45, Noida</p>
          <p>Payment: ₹120 (Cash on Delivery)</p>
        </CardContent>
      </Card>
    </div>
  );
}

// Reusable Step component
function Step({ title, done }) {
  return (
    <div className="flex items-center space-x-1 text-sm">
      {done ? (
        <CheckCircle className="text-green-500 w-4 h-4" />
      ) : (
        <Clock className="text-gray-400 w-4 h-4" />
      )}
      <span className={done ? "text-green-600" : "text-gray-500"}>{title}</span>
    </div>
  );
}
