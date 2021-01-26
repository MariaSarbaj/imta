import React from 'react';

const CompanyDescription = props => {

    const array = props.numbers
    const numbers = array.map((item, index) =>
        <div key={index+1*3} className={'about__item'}>
            <h4 className={'about__title'}>{item.title}</h4>
            <p className={'about__desc'}>{item.desc}</p>
            <span className={'about__number'}>{item.maxNum}</span>
        </div>

    )

  return (
   <section className={'about'}>
        <div className={'about__wrapper'}>
            <h3 className={'about__subtitle'}>{props.subTitle}</h3>
            <h2 className={'about__title'}>{props.title}</h2>
            <p className={'about__text'}>{props.text}</p>
            <img src={props.img} alt={props.title}/>

            <div className={'about__numbers'}>
                {numbers}
            </div>

        </div>
   </section>
  );
 }


export default CompanyDescription;