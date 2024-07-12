import {Link} from 'react-router-dom'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import './index.css'

const ProductCard = props => {
  useGSAP(() => {
    gsap.to('.product-item', {
      y: 15,
      opacity: 1,

      duration: 0.5,
    })
  }, [])
  const {productData} = props
  const {title, brand, imageUrl, rating, price, id} = productData

  return (
    <li className="product-item">
      <Link to={`/products/${id}`} className="link-item">
        <img src={imageUrl} alt="product" className="thumbnail" />
        <h1 className="title">{title}</h1>
        <p className="brand">by {brand}</p>
        <div className="product-details">
          <p className="price">Rs {price}/-</p>
          <div className="rating-container">
            <p className="rating">{rating}</p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/star-img.png"
              alt="star"
              className="star"
            />
          </div>
        </div>
      </Link>
    </li>
  )
}
export default ProductCard
