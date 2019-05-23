import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Header() {
  return (
    <react-fragment>  
			<header className="header_area">
                <div className="top_menu row m0">
                    <div className="container">
                        <div className="float-left">
                            {/* <a href="mailto:support@colorlib.com">support@colorlib.com</a> */}
                          <Link to={`/`}>Welcome to Catalouge</Link>
                            {/* <a href="#">Welcome to Catalouge</a> */}
                        </div>
                        <div className="float-right">
                            <ul className="header_social">
                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                                <li><a href="#"><i className="fa fa-behance"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="main_menu">
                    <nav className="navbar navbar-expand-lg navbar-light main_box">
                        <div className="container">
                           
                            <a className="navbar-brand logo_h" href="index.html"><img src="img/logo.png" alt=""/></a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            
                            <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                                <ul className="nav navbar-nav menu_nav ml-auto">
                                    <li className="nav-item active">
                                      <Link to={`/`} className="nav-link">Home</Link></li>
                                    <li className="nav-item submenu dropdown">
                                        
                                        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Shop</a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                              <Link to={`/category`} className="nav-link">Shop Category</Link></li>
                                            <li className="nav-item">
                                              <Link to={`/product-details`} className="nav-link">Product Details</Link>
                                            </li>
                                            <li className="nav-item">
                                              <Link to={`/product-checkout`} className="nav-link">Product Checkout</Link>
                                            </li>
                                            <li className="nav-item">
                                              <Link to={`/shopping-cart`} className="nav-link">Shopping Cart</Link>
                                            </li>
                                            <li className="nav-item">
                                              <Link to={`/confirm-order`} className="nav-link">Confirmation</Link>
                                            </li>
                                        </ul>
                                        </li>
                                        <li className="nav-item submenu dropdown">
                                            <Link to={`/blog`} className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Blog</Link>
                                            
                                            <ul className="dropdown-menu">
                                          <li className="nav-item"><Link to={`/blog`} className="nav-link">Blog</Link></li>
                                          <li className="nav-item"><Link to={`/blog-details`} className="nav-link">Blog Details</Link></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item submenu dropdown">
                                            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages</a>
                                            <ul className="dropdown-menu">
                                          <li className="nav-item"><Link to={`/login`} className="nav-link">Login</Link></li>
                                          <li className="nav-item"><Link to={`/tracking`} className="nav-link">Tracking</Link></li>
                                          <li className="nav-item"><Link to={`/elements`} className="nav-link">Elements</Link></li>
                                            </ul>
                                            </li>
                                  <li className="nav-item"><Link to={`/contact-us`} className="nav-link">Contact</Link></li>
                                </ul>
                                <ul className="nav navbar-nav navbar-right">
                                  <li className="nav-item"><Link to={`/shopping-cart`} className="nav-link"><i className="lnr lnr lnr-cart"></i></Link></li>
                                    <li className="nav-item"><a href="#" className="search"><i className="lnr lnr-magnifier"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
    </react-fragment>
  );
}

export default Header;
