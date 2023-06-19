import { useEffect } from "react";
import { Overlay, Photo } from "./Modal.styled";

const Modal = ({ active, setActive, children, closeModal }) => {
  const handleClick = (e) => {
    e.stopPropagation();
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 27) {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal]);

  return (
    <Overlay onClick={() => setActive(false)}>
      <Photo onClick={handleClick}>{children}</Photo>
    </Overlay>
  );
};

export default Modal;




// import {useEffect} from "react";
// import { Overlay } from "./Modal.styled";
// import { Photo } from "./Modal.styled";


// const Modal = ({ active, setActive, children }) => {
//   const handleClick = (e) => {
//     e.stopPropagation();
//   };
  
//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (event.keyCode === 27) {
//         // closeModal ();
//       }
//     };
  
//     window.addEventListener("keydown", handleKeyDown)
    
//     return() => {
//       window.removeEventListener("keydown", handleKeyDown)
//     }
//   }, [])

//   return (
//     <Overlay onClick={() => setActive(false)}>
//       <Photo onClick={handleClick}>
//         {children}
//       </Photo>
//     </Overlay>
//   );
// };

// export default Modal;



