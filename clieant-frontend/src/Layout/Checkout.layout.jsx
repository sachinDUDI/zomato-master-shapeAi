import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

// components
import Navbar from "../Component/Navbar/CheckoutNavbar";
// redux action
import { getCart } from "../Redux/Reducer/Cart/cart.action";

const CheckoutLayout = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCart());
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 lg:px-20 ">{props.children}</div>
    </>
  );
};

export default CheckoutLayout;