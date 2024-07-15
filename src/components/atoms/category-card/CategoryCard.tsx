import Image from 'next/image'
import React from 'react'

const CategoryCard = () => {
  return (
    <div
      className="min-w-36 h-38 rounded-lg border p-2 shadow bg-white flex flex-col justify-between hover:z-50"
    >
      <div className="w-16 h-16 flex justify-center items-center mx-auto bg-gray-500 rounded-full overflow-hidden">
          <Image
            src=""
            width={100}
            height={100}
            alt={`category`}
            className="w-full h-full object-cover"
          />
      </div>
      <div className="flex flex-col items-center flex-grow p-2">
        <p className="text-black font-bold">tes</p>
      </div>
    </div>
  )
}

export default CategoryCard