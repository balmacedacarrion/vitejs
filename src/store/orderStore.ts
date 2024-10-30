import { create } from 'zustand';
import { Order, OrderStatus, ShippingMethod } from '../types';

type OrderState = {
  orders: Order[];
  addOrder: (order: Omit<Order, 'id'>) => void;
  updateOrder: (id: string, updates: Partial<Order>) => void;
  getOrderByNumber: (orderNumber: string) => Order | undefined;
  getCustomerOrders: (customerId: string) => Order[];
};

// Mock data
const mockOrders: Order[] = [
  {
    id: '1',
    orderNumber: '12345',
    status: 'in_transit',
    shippingMethod: 'air',
    orderDate: '2024-02-28',
    customerId: '2',
    description: 'Electronics package',
    tracking: 'TR123456789',
    packages: 2,
    weight: 15.5,
    totalCost: 250.00,
  },
];

export const useOrderStore = create<OrderState>((set, get) => ({
  orders: mockOrders,
  addOrder: (order) => {
    const newOrder = {
      ...order,
      id: Math.random().toString(36).substr(2, 9),
    };
    set((state) => ({ orders: [...state.orders, newOrder] }));
  },
  updateOrder: (id, updates) => {
    set((state) => ({
      orders: state.orders.map((order) =>
        order.id === id ? { ...order, ...updates } : order
      ),
    }));
  },
  getOrderByNumber: (orderNumber) => {
    return get().orders.find((order) => order.orderNumber === orderNumber);
  },
  getCustomerOrders: (customerId) => {
    return get().orders.filter((order) => order.customerId === customerId);
  },
}));