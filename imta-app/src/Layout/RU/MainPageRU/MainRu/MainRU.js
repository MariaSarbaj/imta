import React from 'react';
import {DataRu} from '../../../../Data/DataRu'
import FirstScreen from "../../../../Components/FirstScreen/FirstScreen";
import ProductsOffer from "../../../../Components/ProductsOffer/ProductsOffer";
import Portfolio from "../../../../Components/Portfolio/Portfolio";

const MainRu = () => {
  return (
   <main>
       <div className={'wrapper'}>
            <FirstScreen
                title={DataRu.FirstScreen.title}
                subtitle={DataRu.FirstScreen.subtitle}
                link1={DataRu.FirstScreen.button1link}
                link2={DataRu.FirstScreen.button2link}
                text1={DataRu.FirstScreen.button1text}
                text2={DataRu.FirstScreen.button2text}
            />
       </div>
       <ProductsOffer
           title={DataRu.ProductsOffer.title}
           subtitle={DataRu.ProductsOffer.subTitle}
           array={DataRu.ProductsOffer.Products}
       />
       <Portfolio
            title={DataRu.Portfolio.title}
            subtitle={DataRu.Portfolio.subTitle}
            array={DataRu.Portfolio.Projects}
       />

    Main {DataRu.main}
   </main>
  );
 }


export default MainRu;