import CategoryCard from '@/components/atoms/category-card/CategoryCard'
import React from 'react'

const CategoryList = () => {
  return (
    <div className="flex flex-row w-full overflow-x-scroll gap-4">
        <CategoryCard/>
        <CategoryCard/>
        <CategoryCard/>
  </div>
  )
}

export default CategoryList