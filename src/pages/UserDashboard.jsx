import React from "react";
import { Users } from "lucide-react";

/* Simple Card wrapper that accepts className */
const Card = ({ children, className = "" }) => (
  <div className={`rounded-2xl shadow-md bg-white ${className}`}>
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
                              return (
                                  <div className="p-6 bg-gray-50 min-h-screen">
                                        <header className="flex items-center justify-between mb-6">
                                                <h1 className="text-2xl font-bold text-gray-900">QueueEase</h1>

                                                        <div className="flex items-center gap-3">
                                                                  <Button className="bg-blue-600 text-white">Join a Queue</Button>
                                                                            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                                                                                        <span className="text-gray-600">👤</span>
                                                                                                  </div>
                                                                                                          </div>
                                                                                                                </header>

                                                                                                                      {/* Active Queues */}
                                                                                                                            <section>
                                                                                                                                    <h2 className="text-lg font-semibold text-gray-700 mb-3">Active Queues</h2>
                                                                                                                                            <div className="grid md:grid-cols-2 gap-4">
                                                                                                                                                      {/* Queue Card 1 */}
                                                                                                                                                                <Card>
                                                                                                                                                                            <CardContent>
                                                                                                                                                                                          <div className="flex items-center gap-2 mb-2">
                                                                                                                                                                                                          <Users className="w-5 h-5 text-blue-600" />
                                                                                                                                                                                                                          <h3 className="font-semibold text-gray-900">Tech Solutions Inc. Support</h3>
                                                                                                                                                                                                                                        </div>

                                                                                                                                                                                                                                                      <p className="text-sm text-gray-600">
                                                                                                                                                                                                                                                                      Your Turn: <span className="text-blue-600 font-medium">Now!</span>
                                                                                                                                                                                                                                                                                    </p>
                                                                                                                                                                                                                                                                                                  <p className="text-gray-800 mt-1 font-bold">Your Position: 1</p>
                                                                                                                                                                                                                                                                                                              </CardContent>
                                                                                                                                                                                                                                                                                                                        </Card>

                                                                                                                                                                                                                                                                                                                                  {/* Queue Card 2 */}
                                                                                                                                                                                                                                                                                                                                            <Card>
                                                                                                                                                                                                                                                                                                                                                        <CardContent>
                                                                                                                                                                                                                                                                                                                                                                      <div className="flex items-center gap-2 mb-2">
                                                                                                                                                                                                                                                                                                                                                                                      <Users className="w-5 h-5 text-green-600" />
                                                                                                                                                                                                                                                                                                                                                                                                      <h3 className="font-semibold text-gray-900">Acme Pharmacy</h3>
                                                                                                                                                                                                                                                                                                                                                                                                                    </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                  <p className="text-sm text-gray-600">
                                                                                                                                                                                                                                                                                                                                                                                                                                                  Next: <span className="text-gray-600 font-medium">3 people</span>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                </p>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                              <p className="text-gray-800 mt-1 font-bold">Your Position: 4</p>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          </CardContent>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    </Card>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  </section>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        );
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        }