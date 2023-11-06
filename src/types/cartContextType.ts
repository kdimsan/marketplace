export interface CartContextProps {
  cartItems: Array<{ id: string; size: string; quantity: number }>;
  addToCart: (id: string, size: string) => void;
  decreaseFromCart: (id: string, size: string) => void;
  removeFromCart: (id: string, size: string) => void;
}
