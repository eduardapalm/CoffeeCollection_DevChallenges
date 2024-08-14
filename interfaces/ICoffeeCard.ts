interface ICoffeeCard {
  id: number;
  popular: boolean;
  image: string;
  name: string;
  price: string;
  rating?: number;
  votes?: number;
  available: boolean;
}

export default ICoffeeCard;
