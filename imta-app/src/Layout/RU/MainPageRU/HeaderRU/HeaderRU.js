import React from 'react';
import Logo from "../../../../Components/Logo/Logo";
import NavBar from "../../../../Components/NavBar/NavBar";

const HeaderRu = () => {
  return (
   <header className={'header'}>
       <div className={"header__wrapper"}>
           <Logo/>
           <NavBar/>
       </div>

   </header>
  );
 }


export default HeaderRu;