import React,{useContext} from 'react'
import { ShopContext} from '../Context/ShopContext'
import {useParams} from 'react-router-dom'
import Breadcrum from '../components/Breadcrums/Breadcrum';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox';
import RelatedProduct from '../components/RelatedProducts/RelatedProduct';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const Product = () => {
  const {all_product}=useContext(ShopContext);
const {productId} = useParams();
const product = all_product.find((e)=>e.id===Number(productId))
  return (
    <div className=''>
      <Navbar/>
       <Breadcrum product={product}/>
       <ProductDisplay product={product}/>
       <DescriptionBox/>
       <RelatedProduct/>
       <Footer/>
    </div>
  )
}

export default Product