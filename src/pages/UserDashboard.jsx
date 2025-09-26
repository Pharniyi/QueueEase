import React, { useState } from "react";
import { Users, X } from "lucide-react";

/* Simple Card wrapper that accepts className */
const Card = ({ children, className = "", onClose }) => (
  <div className={`relative rounded-2xl shadow-md bg-white ${className}`}>
    {onClose && (
      <button className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 cursor-pointer">
        <X className="w-5 h-5" onClick={onClose} />
      </button>
    )}
    {children}
  </div>
);

/* Card content */
const CardContent = ({ children, className = "" }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

/* Reusable button component (was missing in your snippet) */
const Button = ({ children, className = "", ...props }) => (
  <button
    {...props}
    className={`px-4 py-2 rounded-xl font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-1 ${className}`}
  >
    {children}
  </button>
);

export default function UserDashboard() {
  // State for managing active queues and modal
  const [activeQueues, setActiveQueues] = useState([
    {
      id: 1,
      name: "Optometric Consultant",
      position: 1,
      status: "now",
      color: "blue"
    },
    {
      id: 2,
      name: "Acme Pharmacy",
      position: 4,
      status: "waiting",
      color: "green"
    }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedFacility, setSelectedFacility] = useState(null);

  // Available medical facilities
  const availableFacilities = [
    { id: 1, name: "Optometric Consultant", type: "IT Support" },
    { id: 2, name: "Acme Pharmacy", type: "Pharmacy" },
    { id: 3, name: "City General Hospital", type: "Hospital" },
    { id: 4, name: "Downtown Medical Center", type: "Medical Center" },
    { id: 5, name: "Urgent Care Express", type: "Urgent Care" },
    { id: 6, name: "Family Health Clinic", type: "Clinic" }
  ];

  // Get available facilities (not already in active queues)
  const getAvailableFacilities = () => {
    const activeFacilityIds = activeQueues.map(queue => queue.id);
    return availableFacilities.filter(facility => !activeFacilityIds.includes(facility.id));
  };

  // Handle joining a queue
  const handleJoinQueue = (facility) => {
    const randomPosition = Math.floor(Math.random() * 10) + 1; // Random position 1-10
    const newQueue = {
      id: facility.id,
      name: facility.name,
      position: randomPosition,
      status: randomPosition === 1 ? "now" : "waiting",
      color: ["blue", "green", "purple", "orange", "red"][Math.floor(Math.random() * 5)]
    };

    setActiveQueues([...activeQueues, newQueue]);
    setShowModal(false);
  };

  // Handle leaving a queue
  const handleLeaveQueue = (queueId) => {
    setActiveQueues(activeQueues.filter(queue => queue.id !== queueId));
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">QueueEase</h1>

        <div className="flex items-center gap-3">
          <Button onClick={() => setShowModal(true)} className="bg-blue-600 text-white cursor-pointer">Join a Queue</Button>
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-gray-600">👤</span>
          </div>
        </div>
      </header>

      {/* Active Queues */}
      <section>
        <h2 className="text-lg font-semibold text-gray-700 mb-3">Active Queues</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {activeQueues.map((queue) => (
            <Card key={queue.id} onClose={() => handleLeaveQueue(queue.id)}>
              <CardContent>
                <div className="flex items-center gap-2 mb-2">
                  <Users className={`w-5 h-5 text-${queue.color}-600`} />
                  <h3 className="font-semibold text-gray-900">
                    {queue.name}
                  </h3>
                </div>

                <p className="text-sm text-gray-600">
                  {queue.status === "now" ? (
                    <>Your Turn: <span className="text-blue-600 font-medium">Now!</span></>
                  ) : (
                    <>Next: <span className="text-gray-600 font-medium">{queue.position - 1} people</span></>
                  )}
                </p>
                <p className="text-gray-800 mt-1 font-bold">Your Position: {queue.position}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Modal for Facility Selection */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-96 max-w-[90vw]">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Join a Queue</h2>
              <button onClick={() => setShowModal(false)} className="text-gray-600 cursor-pointer hover:text-gray-800">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-3 max-h-64 overflow-y-auto scrollbar-hide" >
              {getAvailableFacilities().map((facility) => (
                <div
                  key={facility.id}
                  onClick={() => handleJoinQueue(facility)}
                  className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition"
                >
                  <h3 className="font-medium text-gray-900">{facility.name}</h3>
                  <p className="text-sm text-gray-600">{facility.type}</p>
                </div>
              ))}
            </div>

            {getAvailableFacilities().length === 0 && (
              <p className="text-gray-600 text-center mt-4">No available facilities to join.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}