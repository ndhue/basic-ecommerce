import React, { useState } from 'react'
import { Heading } from "../../common/Heading"
import { topProducts } from "../../assets/data/data"
import { ProductItem } from "../product/ProductItem"
export const TopProduct = () => {
    const [data, setData] = useState(topProducts);
    const allCategories = ["All", ...new Set(data.map((item) => item.category))]
    const [category, setCategory] = useState(allCategories)

    const handleFilter = (category) => {
        const newItem = topProducts.filter((item) => item.category === category)
        setData(newItem)

        if(category === 'all'){
            setData(topProducts)
            return
        }
    }
  return (
    <>
        <section className="topproduct">
            <div className="container">
                <div className="head">
                    <Heading title='Top Sellling Products' desc='Meet our newbies! The latest templates uploadd to the marketplace.'/>
                    <div className="category">
                        {category.map((category,index) => (
                            <button key={index} className="button" onClick={()=> handleFilter(category)}>{category}</button>
                        ))}
                    </div>
                </div>
                    <ProductItem data={data}/>
            </div>
        </section>
    </>
  )
}
