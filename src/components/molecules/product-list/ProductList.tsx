import ProductCard from '@/components/atoms/product-card/ProductCard'
import React from 'react'

const ProductList = () => {
  return (
    <div className="flex justify-center flex-wrap w-full overflow-x-scroll gap-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
  </div>
  )
}

export default ProductList