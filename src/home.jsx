import React from 'react';
// import Header from './statics/header';
import HomeBanner from './home/homebanner';
import ProductFeature from './home/productfeature';
import TimerArea from './home/timerarea';
import Latestproduct from './home/latestproduct';
import ClientLogoArea from './home/clientlogoarea';
import MostProductArea from './home/mostproductarea';
// import Footer from './statics/footer';


function Home() {
    return (
        <react-fragment>
            {/* <Header/>   */}
            <HomeBanner />
            <ProductFeature/>
            <TimerArea/>
            <Latestproduct/>
            <ClientLogoArea/>
            <MostProductArea/>
            {/* <Footer/> */}
        </react-fragment>
    );
}

export default Home;
