import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, decreaseQuantity, addToCart, clearCart } from '../features/cart/cartSlice';

const Cart = () => {
  const { cartItems, totalAmount, totalQuantity } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>

      {cartItems.map(item => (
        <div key={item.id} className="flex justify-between items-center border-b py-2">
        <div>{item.brand}</div>
          <div>{item.name} (x{item.quantity})</div>
          <div>₹{item.price * item.quantity}</div>
          <div className="flex gap-2">
            <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
            <button onClick={() => dispatch(addToCart(item))}>+</button>
            <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
          </div>
        </div>
      ))}

      <div className="mt-4">
        <p>Total Items: {totalQuantity}</p>
        <p>Total Amount: ₹{totalAmount}</p>
        <button
          onClick={() => dispatch(clearCart())}
          className="mt-2 bg-red-500 text-white px-4 py-2 rounded"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};
export default Cart