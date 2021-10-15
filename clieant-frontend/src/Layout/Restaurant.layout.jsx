import React, { useState, useEffect } from "react";
import { TiStarOutline } from "react-icons/ti";
import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri";
import { BiBookmarkPlus } from "react-icons/bi";

// components
import RestaurantNavbar from "../Component/Navbar/restaurantNavbar";
import ImageGrid from "../Component/Restaurant/ImageGrid";
import InfoButtons from "../Component/Restaurant/InfoButtons";
import RestaurantInfo from "../Component/Restaurant/RestaurantInfo";
import TabContainer from "../Component/Restaurant/Tabs";
import CartContainer from "../Component/Cart/CartContainer";

;
const RestaurantLayout = (props) => {
  const [restaurant] = useState({
    images: [],
    name: "",
    cuising: "",
    address: "",
  });
  
  return (
    <>
      {" "}
      <RestaurantNavbar />
      <div className="container mx-auto px-4 lg:px-20 pb-10 ">
        <ImageGrid images={restaurant.images} />
        <RestaurantInfo
          name={restaurant?.name}
          restaurantRating={restaurant?.rating || 3.5}
          deliveryRating={restaurant?.rating || 4.0}
          cuisine={restaurant?.cuising}
          address={restaurant?.address}
        />
        <div className="my-4 flex flex-wrap gap-3">
          <InfoButtons isActive>
            <TiStarOutline /> Add Review
          </InfoButtons>
          <InfoButtons>
            <RiDirectionLine /> Direction
          </InfoButtons>
          <InfoButtons>
            <BiBookmarkPlus /> Bookmark
          </InfoButtons>
          <InfoButtons>
            <RiShareForwardLine /> Share
          </InfoButtons>
        </div>
        <div className="my-10">
          <TabContainer></TabContainer>
        </div>
        <div className="relative">{props.children}</div>
      </div>
      <CartContainer />
    </>
  );
};

export default RestaurantLayout;