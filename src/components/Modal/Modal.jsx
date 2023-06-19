import React from "react";
import { Overlay } from "./Modal.styled";
import { Photo } from "./Modal.styled";


const Modal = ({ active, setActive, children }) => {
  const handleClick = (e) => {
    e.stopPropagation();
  };

  return (
    <Overlay onClick={() => setActive(false)}>
      <Photo onClick={handleClick}>
        {children}
      </Photo>
    </Overlay>
  );
};

export default Modal;



