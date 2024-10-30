import React from 'react';
import { useForm } from 'react-hook-form';
import { Settings as SettingsIcon, DollarSign, Users, Bell } from 'lucide-react';

type ShippingRates = {
  airPricePerLb: number;
  seaPricePerLb: number;
  airCostPerLb: number;
  seaCostPerLb: number;
};

export function Settings() {
  const { register, handleSubmit } = useForm<ShippingRates>({
    defaultValues: {
      airPricePerLb: 2.50,
      seaPricePerLb: 1.75,
      airCostPerLb: 1.80,
      seaCostPerLb: 1.20,
    },
  });

  const onSubmit = (data: ShippingRates) => {
    console.log('Updated shipping rates:', data);
    // In a real app, this would update the rates in the backend
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center mb-8">
        <SettingsIcon className="w-8 h-8 text-blue-600 mr-3" />
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <DollarSign className="w-6 h-6 text-green-600 mr-2" />
            <h2 className="text-xl font-semibold">Shipping Rates</h2>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Air Shipping Price (per lb)
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">$</span>
                  </div>
                  <input
                    type="number"
                    step="0.01"
                    {...register('airPricePerLb')}
                    className="pl-7 block w-full rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Sea Shipping Price (per lb)
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">$</span>
                  </div>
                  <input
                    type="number"
                    step="0.01"
                    {...register('seaPricePerLb')}
                    className="pl-7 block w-full rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Air Shipping Cost (per lb)
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">$</span>
                  </div>
                  <input
                    type="number"
                    step="0.01"
                    {...register('airCostPerLb')}
                    className="pl-7 block w-full rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Sea Shipping Cost (per lb)
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">$</span>
                  </div>
                  <input
                    type="number"
                    step="0.01"
                    {...register('seaCostPerLb')}
                    className="pl-7 block w-full rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Update Rates
              </button>
            </div>
          </form>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <Users className="w-6 h-6 text-purple-600 mr-2" />
              <h2 className="text-xl font-semibold">User Management</h2>
            </div>
            <p className="text-gray-600 mb-4">Manage system users and their permissions.</p>
            <button className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
              Manage Users
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <Bell className="w-6 h-6 text-yellow-600 mr-2" />
              <h2 className="text-xl font-semibold">Notification Settings</h2>
            </div>
            <p className="text-gray-600 mb-4">Configure system notifications and alerts.</p>
            <button className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
              Configure Notifications
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}