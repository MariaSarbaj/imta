import React from 'react';
import {NavLink} from "react-router-dom";

const ProductsOffer = props => {

    const products = props.array
    const productsList = products.map((product, index) =>
        <NavLink key={index} to={'/'} className={'productsList'}>
            <img key={index+1} className={'features-item__icon features-item__icon--web' + index} src={product.img} alt={product.productDescription}/>
            <h2 key={index+2} className={'features-item__title'}>{product.productTitle}</h2>
            <p key={index+3} className={'features-item__desc'}>{product.productDescription}</p>
        </NavLink>
    )

  return (
   <section className={'features'}>
       <h2 className={'features__title'}>{props.title}</h2>
       <h3 className={'features__subtitle'}>{props.subtitle}</h3>
       <div className={'features__wrapper'}>
           {productsList}
       </div>

   </section>
  );
 }


export default ProductsOffer;