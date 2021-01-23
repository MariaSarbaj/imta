import React from 'react';
import {DataRu} from '../../../../Data/DataRu'

import Contacts from "../../../../Components/Contacts/Contacts";
import About from "../../../../Components/About/About";
import FooterLinks from "../../../../Components/FooterLinks/FooterLinks";

const FooterRu = () => {
  return (
   <footer className={'footer'}>
       <div className={'footer__wrapper'}>
           <Contacts
               imgCont={DataRu.Contacts.TelMailPic}
               imgAdr={DataRu.Contacts.AddressPic}
               tel={DataRu.Tel.Num}
               text={DataRu.Tel.Text}
               email={DataRu.Email}
               adr={DataRu.Address.text}
               link={DataRu.Address.link}
               etext={DataRu.EmailText}
           />

           <About
                title={DataRu.About.Title}
                text={DataRu.About.Text}
                array={DataRu.Social}
           />

           <FooterLinks
                array={DataRu.FooterLinks}
           />

       </div>

   </footer>
  );
 }


export default FooterRu;