import React from 'react';
import { Package, Truck, Ship, CheckCircle } from 'lucide-react';
import { OrderStatus } from '../types';

type Props = {
  status: OrderStatus;
  className?: string;
};

const statusConfig = {
  received: { icon: Package, label: 'Received in Warehouse' },
  in_transit: { icon: Ship, label: 'In Transit' },
  in_nicaragua: { icon: Truck, label: 'Received in Nicaragua' },
  delivered: { icon: CheckCircle, label: 'Delivered' },
};

const statusOrder: OrderStatus[] = ['received', 'in_transit', 'in_nicaragua', 'delivered'];

export function OrderTracker({ status, className = '' }: Props) {
  const currentStatusIndex = statusOrder.indexOf(status);

  return (
    <div className={`w-full ${className}`}>
      <div className="flex justify-between items-center">
        {statusOrder.map((stepStatus, index) => {
          const { icon: Icon, label } = statusConfig[stepStatus];
          const isActive = index <= currentStatusIndex;
          const isLast = index === statusOrder.length - 1;

          return (
            <React.Fragment key={stepStatus}>
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    isActive ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-sm mt-2 text-center">{label}</span>
              </div>
              {!isLast && (
                <div
                  className={`flex-1 h-1 mx-2 ${
                    index < currentStatusIndex ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}