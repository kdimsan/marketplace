export interface CartContextProps {
  cartItems: Array<{ id: string; size: string; quantity: number }>;
  addToCart: (id: string, size: string) => void;
}
