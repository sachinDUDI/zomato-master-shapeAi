import React, { useState } from "react";
import ImageViewer from "react-simple-image-viewer";

const MenuCollection = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [CurrentImg, setCurrentImg] = useState(0);
  const closeViewer = () => setIsMenuOpen(false);
  const openViewer = () => setIsMenuOpen(true);

  return (
    <>
      {isMenuOpen && (
        <ImageViewer
          src={props.image}
          currentIndex={CurrentImg}
          disableScroll={false}
          onClose={closeViewer}
        />
      )}
      <div
        className="w-32 h-32 md:w-48 flex flex-col md:h-48"
        onClick={openViewer}
      >
        <div className="w-full h-full overflow-hidden  rounded-lg">
          <img
            src="https://media.istockphoto.com/photos/tapas-menu-picture-id1284977814?b=1&k=20&m=1284977814&s=170667a&w=0&h=uiFpcBWFKf_wlhTfKdxuM6nyGQupRFpbD8RoBo0NOJo="
            alt="menu"
            className="w-full h-full transform transition duration-400 rounded-lg hover:scale-110"
          />
        </div>
        <div>
          <strong>Food Menu</strong>
          <p>{props.pages} Pages</p>
        </div>
      </div>
    </>
  );
};

export default MenuCollection;