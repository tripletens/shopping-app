import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './statics/header';

import Footer from './statics/footer';
import Home from './home';
import ShopCategory from './shopcategory';
import ProductDetails from './productdetails';
import ProductCheckout from './productcheckout';
import ShoppingCart from './shoppingcart'; 
import OrderConfirm from './orderconfirm';
import Blog from './blog';
import BlogDetails from './blogdetails';
import Login from './login';
import Register from './register';
import Tracking from './tracking';
// import Elements from './elements';
import Contact from './contact';
import './App.css';

function App() {
  return (
    <react-fragment> 
      
      <Router>
        <div>
          < Header />
          <Route exact path="/" component={Home} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact-us" component={Contact} />
          <Route path="/category" component={ShopCategory} />
          <Route path="/product-details" component={ProductDetails} />
          <Route path="/product-checkout" component={ProductCheckout}/>
          <Route path="/shopping-cart" component={ShoppingCart}/>
          <Route path="/confirm-order" component={OrderConfirm}/>
          <Route path="/blog-details" component={BlogDetails}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/tracking" component={Tracking}/>

        </div>
      </Router>

      {/* <ShopCategory/> */}
      {/* <ProductDetails/> */}
      {/* <ProductCheckout/> */}
      {/* <ShoppingCart/> */}
      {/* <OrderConfirm/> */}
      {/* <Blog/> */}
      {/* <BlogDetails/> */}
      {/* <Login/> */}
      {/* <Tracking/> */}
      {/* <Elements/> */}
      {/* <Contact/> */}
      <Footer/>
    </react-fragment>
  );
}

export default App;
