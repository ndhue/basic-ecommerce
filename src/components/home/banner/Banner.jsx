import React from 'react'
import { banner } from "../../assets/data/data"
export const Banner = () => {
  return (
    <>
        <section className="banner">
            <div className="posts">
                {banner.map((items)=> (
                    <div className="post" key={items.id}>
                        <div className="content">
                            <div className="img">
                                <img src={items.cover} alt=''/>
                            </div>
                            <div className="text">
                                <h2>{items.title1}</h2>
                                <h2>{items.title2}</h2>
                                <h2>{items.desc}</h2>
                                <button className='button'>Shop Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    </>
  )
}
