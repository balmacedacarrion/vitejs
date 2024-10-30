export type User = {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'customer';
};

export type OrderStatus = 'received' | 'in_transit' | 'in_nicaragua' | 'delivered';
export type ShippingMethod = 'air' | 'sea';

export type Order = {
  id: string;
  orderNumber: string;
  status: OrderStatus;
  shippingMethod: ShippingMethod;
  orderDate: string;
  customerId: string;
  description: string;
  tracking: string;
  packages: number;
  weight: number;
  totalCost: number;
};

export type AuthState = {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};