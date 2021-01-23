import React from 'react';

const Partners = props => {

    const partnerList = props.partners

    const partners = partnerList.map((item, index) =>
        <img key={index+1*3} src={item.img} alt={item.partnerName}/>
    )

  return (
   <section className={'partners'}>
       <div className={'partners__wrapper'}>
           {partners}
       </div>

   </section>
  );
 }


export default Partners;