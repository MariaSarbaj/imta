import React from 'react';
import Logo from "../../../../Components/Logo/Logo";
import NavBar from "../../../../Components/NavBar/NavBar";
import Tel from "../../../../Components/Tel/Tel";
import {DataRu} from "../../../../Data/DataRu"

const HeaderRu = () => {
  return (
   <header className={'header'}>
       <div className={"header__wrapper"}>
           <Logo/>
           <NavBar/>
           <Tel tel={DataRu.Tel.Num} text={DataRu.Tel.Text}/>
       </div>

   </header>
  );
 }


export default HeaderRu;