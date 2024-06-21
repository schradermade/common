import { Subjects } from './subjects';
import { OrderStatus } from './types/order-status';

export interface OrderCreatedEvent {
  subject: Subjects.OrderCreated;
  data: {
    id: string;
    status: OrderStatus;
    userId: string;
    // expiresAt is a Date object in the order model
    // however here we will represent it as a string
    // so that we can control how the timezone on it gets set
    expiresAt: string;
    ticket: {
      id: string;
      price: number;
    }
  }
}