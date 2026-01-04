import { Product } from '@/sanity.types';
import React from 'react'

interface Props {
    product?: Product;
    className?: string;
}

const AddToCartBtn = ({ product, className }: Props) => {
  return (
    <div>
      addcart
    </div>
  )
}

export default AddToCartBtn
