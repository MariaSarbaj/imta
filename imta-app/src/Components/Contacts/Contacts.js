import React from 'react';

const Contacts = props => {
  return (
   <div className={'contacts'}>
       <div className={'contacts__item'}>
           <img className={'contacts__icon'} src={props.imgCont} alt="Company Contacts"/>
           <a className={'contacts__tel'} href={"tel: " + props.tel}>{props.text}</a>
           <a className={'contacts__mail'} href={"mailto: " + props.email+props.etext}>{props.email}</a>
       </div>
       <a className={'contacts__item'} href={props.link} target="_blank" rel="noreferrer">
           <img className={'contacts__icon'} src={props.imgAdr} alt="Company Address"/>
           <p className={'contacts__mail'}>{props.adr}</p>
       </a>

   </div>
  );
 }


export default Contacts;