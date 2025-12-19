
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  special?: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
