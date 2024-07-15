import CarouselComp from '@/components/atoms/carousel/carousel'
import CategoryList from '@/components/molecules/category-list/CategoryList'
import ProductList from '@/components/molecules/product-list/ProductList'
import React from 'react'

const Home = () => {
  return (
    <section>
      <CarouselComp />
      <div className="w-full h-auto mt-6 ">
        <div className="p-2 mt-5 mb-5">
          <p className="font-bold text-xl">Category</p>
        </div>
        <div className="flex flex-row w-full justify-center">
          <CategoryList />
        </div>
        <div className="p-2 mt-5 mb-5">
          <p className="font-bold text-xl">All Products</p>
        </div>
        <ProductList />
      </div>
    </section>
  )
}

export default Home