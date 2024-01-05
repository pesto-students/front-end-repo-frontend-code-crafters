import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { addProduct, removeProduct } from "./app/store.js";
// import Button from "./Button.js";
import apple from "../assets/products/apple.png";
import addToCart from "../assets/products/cart.png";

export default function Product(props) {
  // const { details } = props;

  // const dispatch = useDispatch();

  // const cart = useSelector((state) => state.cart);
  // const productFromCart = cart.find((product) => product.id === details.id);
  // const quantity = productFromCart ? productFromCart.quantity : 0;

  // const onProductAdd = () => {
  //   dispatch(addProduct(details));
  // };
  // const onProductDelete = () => {
  //   dispatch(removeProduct(details));
  // };

  return (
    <div className="ml-5 mt-5 h-80 w-64 border border-gray-100 rounded-lg text-black">
    <Link to={`/*`}>

    <img className="px-1 pt-1 mb-1" src={apple} alt="Apple" />
    </Link>
  <div className="flex justify-center items-center">
    <div>

    <p className="text-xs pl-4 text-gray-500">Product Name</p>
    <p className="text-xs pl-4 text-gray-900 mb-0.5">
    ₹Product Price{" "}
      <span className="text-gray-400 line-through">₹29.99</span>
    </p>
    <p className="text-xs pl-4 text-gray-700">Rating</p>
    </div>
    <img src={addToCart} alt="" className="h-8 w-8 ml-auto mr-4" />
  </div>
  </div>
    // <div className="product">
    //   <div className="product-image-container">
    //     <Link to={`/products/${details.id}`}>
    //       <img
    //         src={details.image}
    //         width="100"
    //         height="100"
    //         className="product-image"
    //         alt={details.name}
    //       />
    //     </Link>
    //     {quantity > 0 && (
    //       <div className="product-quantity-container">
    //         <div className="product-quantity">{quantity}</div>
    //       </div>
    //     )}
    //   </div>
    //   <div className="product-info">
    //     <h3>{details.name}</h3>
    //     <p>{details.description}</p>
    //   </div>
    //   <div className="product-checkout">
    //     <div>
    //       {quantity > 0 && (
    //         <Button
    //           outline
    //           onClick={() => onProductDelete(details.id)}
    //           className="product-delete"
    //         >
    //           x
    //         </Button>
    //       )}
    //     </div>
    //     <Button outline onClick={() => onProductAdd(details)}>
    //       ${details.price}
    //     </Button>
    //   </div>
    // </div>
  );
}
