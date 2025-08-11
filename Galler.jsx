import img1 from '../images/image-product-1.jpg'
import img2 from '../images/image-product-2.jpg';
import img3 from '../images/image-product-3.jpg';
import img4 from '../images/image-product-4.jpg';
import plus from '../images/icon-plus.svg';
import minus from '../images/icon-minus.svg';
import cart from '../images/icon-cart.svg';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Galler = ({setCartItems}) =>{

  const[count , setCount] = useState (0);
  const images = [ img1 , img2 , img3 , img4];
  const [mainImage , setMainImage] = useState (images[0]);
  const [showPopup , setShowPopup] = useState(false);

  const currentIndex = images.indexOf(mainImage);
  const handeleNext = () =>{
    const nextIndex = (currentIndex + 1) %images.length
    setMainImage(images[nextIndex])
  }

  const handelePrev = () =>{
    const prevIndex = (currentIndex - 1+ images.length) %images.length
    setMainImage(images[prevIndex])
  }

  const handelImage = (img) =>{
    setMainImage(img)
  }

  const increase = () =>{
    setCount(prev => prev+1)
  }

  const decrease = () =>{
    if(count > 0) setCount(prev => prev -1)
  }

  const addToCart = () =>{
    if(count === 0) return;

    const newItem = {
      title:"Fall Limited Edition Sneakrs",
      price: 125,
      quantity: count,
      image: mainImage,
    }
    setCartItems(prev => [...prev, newItem]);
    setCount(0);
  }


  return(
    <div className="galler">
      <div className="row">
        <div className="col">
          <img src={mainImage} onClick={()=> setShowPopup(true)}/>
          <div className='imgs'>
            {images.map((img , index) =>{
              return(
                <img src={img} key={index} onClick={() => handelImage(img)}/>
              )
            })}
            
          </div>
        </div>
        <div className="coll">
          <h3>Sneaker Company</h3>
          <h1>Fall Limited Edition <br/> Sneakers</h1>
          <p>These low-profile sneakers are your perfect casual wear <br/> companion. Featuring a durable rubber outer sole, they’ll <br/> withstand everything the weather can offer.</p>
          <h2>$125.00<span>50%</span></h2>
          <h5>$250.00</h5>
          <div className='btm'>
          <div className='count'>
            <img onClick={decrease} src={minus}/>
            <span>{count}</span>
            <img onClick={increase} src={plus}/>
          </div>
          <div className='btn-cart'>
            <button onClick={addToCart}><img src={cart}/> Add to cart</button>
          </div>
        </div>
        </div>
      </div>
      {showPopup && (
        <div className='popup-overlay'>
          <div className='popup-content'>
              <FaChevronLeft 
                className="popup-arrow left" 
                onClick={handelePrev}
              />
            <img className="popup-main-img" src={mainImage}/>
            <FaChevronRight 
              className="popup-arrow right" 
              onClick={handeleNext}
            />
            <span className='close-btn' onClick={()=> setShowPopup(false)}>x</span>
            <div className='popup-thumbs'>
              {images.map((img, index)=>(
                <img
                key={index}
                src={img}
                className={img === mainImage ? "active": ""}
                onClick={() => setMainImage(img)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Galler;