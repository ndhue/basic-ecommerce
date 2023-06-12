import React, { useState, useEffect } from 'react'
import logo from "../assets/images/logo.svg"
import cartimg from '../assets/images/cart.png'
import { BsBagCheck } from "react-icons/bs"
import { BiSearch} from "react-icons/bi"
import { RiUser3Line } from "react-icons/ri"
import { AiOutlineHeart, AiOutlineMenu, AiOutlineClose,  AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { navlist } from '../assets/data/data'
import { Link } from 'react-router-dom'
import { connect, useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem, remove } from '../../controller/cartSlice'

export const Header = () => {

  window.addEventListener("scroll", function() {
    const header = this.document.querySelector(".header")
    header.classList.toggle("active", this.window.scrollY > 100)
  })

  const [mobile, setMobile] = useState(false)

  //add to cart
  const getData = useSelector(state => state.cartReducer.carts)

  const [cartList, setCartList] = useState(false)
  const handleClose = () => {
    setCartList(null)
  }

  // total prcie
  const [price, setPrice] = useState();
  useEffect(() => {
    const totals = () => {
      let price = 0
      getData.forEach((e, i) => {
        price = parseFloat(e.price) * e.qty + price
      })
      setPrice(price)
    }
    totals();
  }, [getData]);

  // delete cart
  const dispatch = useDispatch()
  const delet = (id) => {
    dispatch(remove(id))
  }

  // delete item
  const deletes = (id) => {
    dispatch(remove(id))
  }

  // increment item
  const increment = (e) => {
    dispatch(addItem(e))
  }

  // descriment item
  const decrement = (item) => {
    dispatch(removeItem(item))
  }

  return (
    <>
    <header className='header'>
        <div className='container'>
          <nav>
            <div className='toggle'>
              <button onClick={() => setMobile(!mobile)}>{mobile ? <AiOutlineClose className='close heIcon' /> : <AiOutlineMenu className='open heIcon' />}</button>
            </div>
            <div className='left'>
              <Link to='/'>
                <img src={logo} alt='logo' />
              </Link>
            </div>
            <div className='center'>
              <ul className={mobile ? "mobile-nav" : "menu"}>
                {navlist.map((nav, i) => (
                  <li key={i}>
                    <Link to={nav.path}>{nav.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
          <div className='right'>
            <div className='right_search'>
              <input type='text' placeholder='Search Products...' />
              <BiSearch className='serachIcon heIcon' />
            </div>
            <div className='right_user'>
              <RiUser3Line className='userIcon heIcon' />
              <AiOutlineHeart className='userIcon heIcon' />
            </div>
            <div className='right_card'>
              <button className='button' onClick={() => setCartList(!cartList)}>
                <BsBagCheck className='shop heIcon' />
                MY CART<span> ({getData.length})</span>
              </button>
              <div className={cartList ? "showCart" : "hideCart"}>
                {getData.length ? (
                  <section className='details'>
                    {getData.map((e) => (
                      <div className='details_content' key={e.id}>
                        <div className='details_content_img'>
                          <Link to={`/details/${e.id}`} onClick={handleClose}>
                            <img src={e.cover} alt='' />
                          </Link>
                        </div>
                        <div className='details_content_detail'>
                          <div className='details_content_detail_price'>
                            <p>{e.title.slice(0, 30)}...</p>
                            <p>Price : ${e.price}</p>
                                <div className='count'>
                                  <button onClick={() => increment(e)}>
                                    <AiOutlinePlus />
                                  </button>
                                  <span>{e.qty}</span>
                                  <button onClick={e.qty <= 1 ? () => deletes(e.id) : () => decrement(e)}>
                                    <AiOutlineMinus />
                                  </button>
                                </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className='details_total'>
                      <h4>Total : ${price}</h4>
                    </div>
                  </section>
                ) : (
                  <div className='empty'>
                    <p>Your cart is empty</p>
                    <img src={cartimg} alt='' />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    amount: state.amount
  }
}
connect(mapStateToProps)(Header)