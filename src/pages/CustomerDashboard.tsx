import React from 'react';
import { Package, Bell } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import { useOrderStore } from '../store/orderStore';
import { OrderTracker } from '../components/OrderTracker';

export function CustomerDashboard() {
  const user = useAuthStore((state) => state.user);
  const getCustomerOrders = useOrderStore((state) => state.getCustomerOrders);
  
  const orders = user ? getCustomerOrders(user.id) : [];

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">My Orders</h1>
        <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          <Bell className="w-5 h-5 mr-2" />
          Set Alert
        </button>
      </div>

      {orders.length > 0 ? (
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold">
                    Order #{order.orderNumber}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {new Date(order.orderDate).toLocaleDateString()}
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full text-sm font-medium capitalize bg-blue-100 text-blue-800">
                  {order.shippingMethod}
                </span>
              </div>

              <OrderTracker status={order.status} className="mb-6" />

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Tracking Number</p>
                  <p className="font-medium">{order.tracking}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Packages</p>
                  <p className="font-medium">{order.packages}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Weight</p>
                  <p className="font-medium">{order.weight} lbs</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total Cost</p>
                  <p className="font-medium">${order.totalCost.toFixed(2)}</p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t">
                <p className="text-sm text-gray-500">Description</p>
                <p className="mt-1">{order.description}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-lg shadow-md">
          <Package className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No Orders Yet
          </h3>
          <p className="text-gray-500">
            Your orders will appear here once you make a purchase.
          </p>
        </div>
      )}
    </div>
  );
}