import React from "react";

interface Props {
  price: number | undefined;
  discount: number | undefined;
  className?: string;
}

const PriceView = ({ price, discount, className }: Props) => {
  return (
    <div>
      <p>{price}</p>
    </div>
  );
};

export default PriceView;
