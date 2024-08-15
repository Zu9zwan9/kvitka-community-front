export interface User {
  _id?: string;
  name: string;
  username: string;
  email: string;
  password: string;
  is_deleted?: boolean;
  role: 'root' | 'moderator' | 'editor' | 'client' | 'user';
  avatar_url?: string;
  visited_events?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Event {
  _id?: string;
  name: string;
  image_url?: string;
  rating?: number[];
  author_id: string;
  category_id: string;
  location: string;
  event_time: Date;
  is_closed?: boolean;
  is_deleted?: boolean;
  is_registration_closed?: boolean;
  prepayment_due_date: Date;
  payment_due_date: Date;
  price?: number;
  payors?: string[];
  prepayors?: string[];
  subscribers?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Category {
  _id?: string;
  name: string;
  description?: string;
  author_id: string;
  is_deleted?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Chat {
  _id?: string;
  name: string;
  users: string[];
  event_id: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Message {
  _id?: string;
  text: string;
  author_id: string;
  chat_id: string;
  img_url?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Payment {
  _id?: string;
  user_id: string;
  event_id: string;
  amount: number;
  status: string;
  createdAt?: Date;
  updatedAt?: Date;
}
