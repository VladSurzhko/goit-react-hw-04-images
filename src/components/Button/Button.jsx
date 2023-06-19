

import { BtnLoadMore } from "./Button.styled";

const Button = ({ onLoadMore }) => {
    return (
      
            <BtnLoadMore onClick={onLoadMore}>Load More</BtnLoadMore>
           
  );
};

export default Button;