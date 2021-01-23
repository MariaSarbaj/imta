import React from 'react';

const HowWeWork = props => {

    const stepsArray = props.array
    const stepsRender = stepsArray.map((step, index) =>
        <div key={index+1*3} className={'howwework__item'}>

            <div className={'howwework__balloon howwework__balloon--'+index+1}>
                <img src={step.imgBaloon} alt={step.desc}/>
                <span className={'howwework__stage'}>{step.stage}</span>
            </div>
            <div className={'howwework__strip'}>
                <img src={step.imgStrip} alt={step.desc}/>
            </div>
            <span className={'howwework__desc'}>{step.desc}</span>

        </div>
    )

  return (
   <section className={'howwework'}>
       <div className={'howwework__wrapper'}>
           <h2 className={'howwework__title'}>{props.title}</h2>
           <p>{props.subtitle}</p>
           <div className={'howwework__scheme'}>
               {stepsRender}
           </div>

       </div>

   </section>
  );
 }


export default HowWeWork;