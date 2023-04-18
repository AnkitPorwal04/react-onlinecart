import React from 'react'
import img1 from "../assets/macbook.jpg"
import img2 from "../assets/airjordan.png"
import { toast } from 'react-hot-toast'
import { useDispatch } from 'react-redux'

const Home = () => {

    const productList = [
        {
            name:"MacBook Pro", 
            price: 1200, 
            imgsrc: img1, 
            id: "kuchbhirandom"
        },
        {
            name:"Air Jordan", 
            price: 120, 
            imgsrc: img2, 
            id: "kuchbhirandomagain"
        },
    ]

  const dispatch = useDispatch();

  const addToCartHandler = (options) => {
    dispatch({type:"addToCart", payload:options});
    dispatch({type:"calculatePrice" });
    toast.success("Added To Cart");
  };

  return (
    <div className='home'>
        {
            productList.map(i=>(
                <ProductCard  
                    key={i.id} 
                    imgsrc={i.imgsrc} 
                    name={i.name} 
                    price={i.price} 
                    id={i.id}
                    handler={addToCartHandler}
                />
            ))
        }
    </div>
  )
}

const ProductCard = ({name, id, price, handler, imgsrc})=>(
    <div className='productCard'>
        <img src={imgsrc} alt={name} />
        <p>{name}</p>
        <h4>${price}</h4>
        <button onClick={()=>handler({name, price, id, quantity:1, imgsrc})}>Add to Cart</button>
    </div>
);

export default Home;