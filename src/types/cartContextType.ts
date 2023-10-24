export interface CartContextProps {
  cartItems: Array<{ id: string; size: string }>;
  addToCart: (id: string, size: string) => void;
}
