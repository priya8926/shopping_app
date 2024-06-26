import React from 'react'
import cat1 from '../../img/cat-1.jpg';
import cat2 from '../../img/cat-2.jpg'
import cat3 from '../../img/cat-3.jpg'
import cat4 from '../../img/cat-4.jpg'
import cat5 from '../../img/cat-5.jpg'
import cat6 from '../../img/cat-6.jpg'
import offer1 from '../../img/offer-1.png'
import offer2 from '../../img/offer-2.png'
import Carousel from '../Layout/Carousel'
import Metadata from '../Layout/Metadata';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
        <Metadata title="Home -- EShopper"/>
            <Carousel/>
            <div className="container-fluid pt-5">
                <div className="row px-xl-5 pb-3">
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div
                            className="d-flex align-items-center border mb-4"
                            style={{ padding: 30 }}
                        >
                            <h1 className="fa fa-check text-primary m-0 mr-3" />
                            <h5 className="font-weight-semi-bold m-0">Quality Product</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div
                            className="d-flex align-items-center border mb-4"
                            style={{ padding: 30 }}
                        >
                            <h1 className="fa fa-shipping-fast text-primary m-0 mr-2" />
                            <h5 className="font-weight-semi-bold m-0">Free Shipping</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div
                            className="d-flex align-items-center border mb-4"
                            style={{ padding: 30 }}
                        >
                            <h1 className="fas fa-exchange-alt text-primary m-0 mr-3" />
                            <h5 className="font-weight-semi-bold m-0">14-Day Return</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div
                            className="d-flex align-items-center border mb-4"
                            style={{ padding: 30 }}
                        >
                            <h1 className="fa fa-phone-volume text-primary m-0 mr-3" />
                            <h5 className="font-weight-semi-bold m-0">24/7 Support</h5>
                        </div>
                    </div>
                </div>
            </div>
            {/* Featured End */}

            {/* Categories Start */}
            <div className="container-fluid pt-5">
                <div className="row px-xl-5 ">
                    <div className="col-lg-4 col-md-6 pb-1">
                        <div
                            className="cat-item d-flex flex-column border mb-4"
                            style={{ padding: 30 }}
                        >
                            {/* <p className="text-right">15 Products</p> */}
                            <Link to="/Products" className="cat-img position-relative overflow-hidden mb-3">
                                <img className="img-fluid" src={cat1} alt="" />
                           </Link>
                            <h5 className="font-weight-semi-bold m-0">Men's dresses</h5>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 pb-1">
                        <div
                            className="cat-item d-flex flex-column border mb-4"
                            style={{ padding: 30 }}
                        >
                            {/* <p className="text-right">15 Products</p> */}
                            <Link to="/Products" className="cat-img position-relative overflow-hidden mb-3">
                                <img className="img-fluid" src={cat2} alt="" />
                           </Link>
                            <h5 className="font-weight-semi-bold m-0">Women's dresses</h5>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 pb-1">
                        <div
                            className="cat-item d-flex flex-column border mb-4"
                            style={{ padding: 30 }}
                        >
                            {/* <p className="text-right">15 Products</p> */}
                            <Link to="/Products" className="cat-img position-relative overflow-hidden mb-3">
                                <img className="img-fluid" src={cat3} alt="" />
                           </Link>
                            <h5 className="font-weight-semi-bold m-0">Baby's dresses</h5>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 pb-1">
                        <div
                            className="cat-item d-flex flex-column border mb-4"
                            style={{ padding: 30 }}
                        >
                            {/* <p className="text-right">15 Products</p> */}
                            <Link to="/Products" className="cat-img position-relative overflow-hidden mb-3">
                                <img className="img-fluid" src={cat4} alt="" />
                           </Link>
                            <h5 className="font-weight-semi-bold m-0">Accerssories</h5>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 pb-1">
                        <div
                            className="cat-item d-flex flex-column border mb-4"
                            style={{ padding: 30 }}
                        >
                            <p className="text-right">15 Products</p>
                            <Link to="/Products" className="cat-img position-relative overflow-hidden mb-3">
                                <img className="img-fluid" src={cat5} alt="" />
                           </Link>
                            <h5 className="font-weight-semi-bold m-0">Bags</h5>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 pb-1">
                        <div
                            className="cat-item d-flex flex-column border mb-4"
                            style={{ padding: 30 }}
                        >
                            <p className="text-right">15 Products</p>
                            <Link to="/Products" className="cat-img position-relative overflow-hidden mb-3">
                                <img className="img-fluid" src={cat6} alt="" />
                           </Link>
                            <h5 className="font-weight-semi-bold m-0">Shoes</h5>
                        </div>
                    </div>
                </div>
            </div>
            {/* Categories End */}
            {/* Offer Start */}
            <div className="container-fluid offer pt-5">
                <div className="row px-xl-5">
                    <div className="col-md-6 pb-4">
                        <div className="position-relative bg-secondary text-center text-md-right text-white mb-2 py-5 px-5">
                            <img src={offer1} alt="" />
                            <div className="position-relative" style={{ zIndex: 1 }}>
                                <h5 className="text-uppercase text-primary mb-3">
                                    20% off the all order
                                </h5>
                                <h1 className="mb-4 font-weight-semi-bold">Spring Collection</h1>
                                <Link to="/Products" className="btn btn-outline-primary py-md-2 px-md-3">
                                    Shop Now
                               </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 pb-4">
                        <div className="position-relative bg-secondary text-center text-md-left text-white mb-2 py-5 px-5">
                            <img src={offer2} alt="" />
                            <div className="position-relative" style={{ zIndex: 1 }}>
                                <h5 className="text-uppercase text-primary mb-3">
                                    20% off the all order
                                </h5>
                                <h1 className="mb-4 font-weight-semi-bold">Winter Collection</h1>
                                <Link to="/Products" className="btn btn-outline-primary py-md-2 px-md-3">
                                    Shop Now
                               </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Offer End */}
        </>

    )
}

export default Home
