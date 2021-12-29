export type State = {
  title: string;
  description: string;
  price: number;
  address: string;
  images: string[];
  details:
    | {
        rooms: number;
        bathrooms: number;
        bedrooms: number;
        kitchens: number;
      }
    | any;
  offer: string[];
};

export type PayloadEvent = {
  event: {
    target: {
      value: string;
      name: string;
    };
  };
};
