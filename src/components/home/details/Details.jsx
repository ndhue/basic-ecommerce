import React, { useEffect, useState, useCallback, useReducer } from "react"
import { MdStarRate } from "react-icons/md"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { useDispatch} from "react-redux"
import { useParams} from "react-router-dom"
import { updateItemQuantity } from '../../../controller/cartSlice'
export const Details = ({ data }) => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(1)
  
  const addToCart = (item) => {
    dispatch(updateItemQuantity({item, quantity}))
    setQuantity(1)
  }

  return (
    <>
      <article>
        <section className='details'>
          <h2 className='details_title'>Product Details Pages</h2>
          {data
          .filter((items) => items.id == id)
          .map(item => (
            <div className='details_content' key={item.id}>
              <div className='details_content_img'>
                <img src={item.cover} alt='' />
              </div>
              <div className='details_content_detail'>
                <h1>{item.title}</h1>
                <div className='rating'>
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                  <label htmlFor=''>(1 customer review)</label>
                </div>
                <h3> ${item.price}</h3>
                <p>{item.author}</p>
                <div className='qty'>
                  <div className='count'>
                    <button onClick={() => setQuantity(quantity+1)}>
                      <AiOutlinePlus />
                    </button>
                    <span>{quantity}</span>
                    <button onClick={() => (quantity!=0)?setQuantity(quantity-1):setQuantity(0)}>
                      <AiOutlineMinus />
                    </button>
                  </div>
                  <button className='button' onClick={() => addToCart(item)}>Add To Cart</button>
                </div>
                <div className='desc'>
                  <h4>PRODUCTS DESCRIPTION</h4>
                  <p>Designed by Puik in 1949 as one of the first models created especially for Carl Hansen & Son, and produced since 1950. The last of a series of chairs wegner designed based on inspiration from antique chinese armchairs.</p>
                  <h4> PRODUCT DETAILS</h4>
                  <ul>
                    <li>
                      <p> Material: Plastic, Wood</p>
                    </li>
                    <li>
                      <p>Legs: Lacquered oak and black painted oak</p>
                    </li>
                    <li>
                      <p>Dimensions and Weight: Height: 80 cm, Weight: 5.3 kg</p>
                    </li>
                    <li>
                      <p>Length: 48cm</p>
                    </li>
                    <li>
                      <p>Depth: 52 cm</p>
                    </li>
                    <li>
                      <p>Seat Height: 44 cm</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))
          }
        </section>
      </article>
    </>
  )
}
