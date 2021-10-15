import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

// Components
import Navbar from "../Component/Navbar";
import FoodTab from "../Component/FoodTab";

// redux action
import { getCart } from "../Redux/Reducer/Cart/cart.action";

const HomeLayout = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCart());
  }, []);

  return (
    <>
      <Navbar />
      <FoodTab />
      <div className="container mx-auto px-4 lg:px-20 ">{props.children}</div>
    </>
  );
};

export default HomeLayout;