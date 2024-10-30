import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useOrderStore } from '../store/orderStore';
import { OrderTracker } from '../components/OrderTracker';
import { Order } from '../types';

export function TrackOrder() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState<Order | null>(null);
  const getOrderByNumber = useOrderStore((state) => state.getOrderByNumber);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const order = getOrderByNumber(searchTerm);
    setSearchResult(order || null);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Track Your Order</h1>
      
      <form onSubmit={handleSearch} className="mb-8">
        <div className="flex gap-4">
          <div className="flex-1">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Enter order number or tracking number"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <Search className="w-5 h-5" />
          </button>
        </div>
      </form>

      {searchResult ? (
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-6">
            <OrderTracker status={searchResult.status} />
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Order Number</h3>
              <p className="mt-1 text-lg font-semibold">{searchResult.orderNumber}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Tracking Number</h3>
              <p className="mt-1 text-lg font-semibold">{searchResult.tracking}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Shipping Method</h3>
              <p className="mt-1 text-lg capitalize">{searchResult.shippingMethod}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Order Date</h3>
              <p className="mt-1 text-lg">{new Date(searchResult.orderDate).toLocaleDateString()}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Packages</h3>
              <p className="mt-1 text-lg">{searchResult.packages}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Weight</h3>
              <p className="mt-1 text-lg">{searchResult.weight} lbs</p>
            </div>
          </div>
        </div>
      ) : searchTerm && (
        <div className="text-center py-8">
          <p className="text-gray-500">No order found with the provided number.</p>
        </div>
      )}
    </div>
  );
}