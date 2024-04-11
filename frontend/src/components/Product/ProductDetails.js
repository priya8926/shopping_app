import React, { useEffect, useState } from 'react'
import Carousel from "react-material-ui-carousel"
import './ProducuDetails.css'
import { useSelector, useDispatch } from "react-redux"
import { clearErros, getProductDetails } from '../../actions/productActions'
import { useParams } from 'react-router-dom';
import ReactStars from "react-rating-stars-component"
import ReviewCart from './ReviewCart'
import Loading from '../Layout/Loader/Loading'
import { useAlert } from "react-alert"
import Metadata from '../Layout/Metadata'
import { addItemsToCart } from "../../actions/cartActions"


function ProductDetails() {
    const dispatch = useDispatch()
    const { id } = useParams();
    const alert = useAlert()
    const { product, error, loading } = useSelector(state => state.productDetails);
    const { cartItems } = useSelector(state => state.cart);

    const [quantity, setQuantity] = useState(1)

    const increaseQuantity = () => {
        if (product.stock <= quantity) return;
        const qty = quantity + 1
        setQuantity(qty)
    }
    const decreaseQuantity = () => {
        if (quantity === 1) {
            return;
        } else {
            const qty = quantity - 1
            setQuantity(qty)
        }
    }
    const addToCartHandler = () => {
        dispatch(addItemsToCart(id, quantity))
        alert.success("Item added to cart")
        console.log(cartItems, "cart")
    }
    const options = {
        edit: false,
        color: "grey",
        activeColor: "#ffc107 ",
        value: product.ratings,
        isHalf: true
    };
    useEffect(() => {
        if (error) {
            alert.error(error)
            dispatch(clearErros())
        }
        if (id) {
            dispatch(getProductDetails(id));
        }
    }, [dispatch, id, error, alert])

    return (
        <>
            {loading ? <Loading /> : (
                <>
                    <Metadata title={`${product.name} -- EShopper`} />
                    <div className="container-fluid py-5">
                        <div className="row px-xl-5 ml-5">
                            <div className="col-lg-5 ">
                                <div
                                    id="product-carousel"
                                    className="carousel slide"
                                    data-ride="carousel"
                                >
                                    <div className="carousel-inner border">
                                        <div className="carousel-item active">
                                            <Carousel>
                                                {product.images && product.images.map((item, i) => (
                                                    <div className='mt-5 mb-5' style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "30vmax" }}>
                                                        <img
                                                            className='prodImg'
                                                            key={item.url}
                                                            src={item.url}
                                                            alt={`${i} Slide`}
                                                        />
                                                    </div>
                                                ))}
                                            </Carousel>
                                        </div>
                                    </div>
                                    <a
                                        className="carousel-control-prev"
                                        href="#product-carousel"
                                        data-slide="prev"
                                    >
                                        <i className="fa fa-2x fa-angle-left text-dark" />
                                    </a>
                                    <a
                                        className="carousel-control-next"
                                        href="#product-carousel"
                                        data-slide="next"
                                    >
                                        <i className="fa fa-2x fa-angle-right text-dark" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-7 pb-5">
                                <h3 className="font-weight-semi-bold">{product.name}</h3>
                                <p>Product #{product._id}</p>
                                <div className="d-flex mb-3">
                                    <div className="text-primary mr-2">
                                        <ReactStars {...options} />
                                        <span>({product.numOfReviews}  reviews)</span>
                                    </div>
                                </div>
                                <h3 className="font-weight-semi-bold mb-4">{`₹${product.price}`}</h3>
                                <p className="mb-4">
                                    {product.description}
                                </p>
                                <div className="d-flex mb-3">
                                    <p className="text-dark font-weight-medium mb-0 mr-3">Sizes:</p>
                                    <form>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input
                                                type="radio"
                                                className="custom-control-input"
                                                id="size-1"
                                                name="size"
                                            />
                                            <label className="custom-control-label" htmlFor="size-1">
                                                XS
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input
                                                type="radio"
                                                className="custom-control-input"
                                                id="size-2"
                                                name="size"
                                            />
                                            <label className="custom-control-label" htmlFor="size-2">
                                                S
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input
                                                type="radio"
                                                className="custom-control-input"
                                                id="size-3"
                                                name="size"
                                            />
                                            <label className="custom-control-label" htmlFor="size-3">
                                                M
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input
                                                type="radio"
                                                className="custom-control-input"
                                                id="size-4"
                                                name="size"
                                            />
                                            <label className="custom-control-label" htmlFor="size-4">
                                                L
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input
                                                type="radio"
                                                className="custom-control-input"
                                                id="size-5"
                                                name="size"
                                            />
                                            <label className="custom-control-label" htmlFor="size-5">
                                                XL
                                            </label>
                                        </div>
                                    </form>
                                </div>
                                <div className="d-flex mb-4">
                                    <p className="text-dark font-weight-medium mb-0 mr-3">Colors:</p>
                                    <form>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input
                                                type="radio"
                                                className="custom-control-input"
                                                id="color-1"
                                                name="color"
                                            />
                                            <label className="custom-control-label" htmlFor="color-1">
                                                Black
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input
                                                type="radio"
                                                className="custom-control-input"
                                                id="color-2"
                                                name="color"
                                            />
                                            <label className="custom-control-label" htmlFor="color-2">
                                                White
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input
                                                type="radio"
                                                className="custom-control-input"
                                                id="color-3"
                                                name="color"
                                            />
                                            <label className="custom-control-label" htmlFor="color-3">
                                                Red
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input
                                                type="radio"
                                                className="custom-control-input"
                                                id="color-4"
                                                name="color"
                                            />
                                            <label className="custom-control-label" htmlFor="color-4">
                                                Blue
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input
                                                type="radio"
                                                className="custom-control-input"
                                                id="color-5"
                                                name="color"
                                            />
                                            <label className="custom-control-label" htmlFor="color-5">
                                                Green
                                            </label>
                                        </div>
                                    </form>
                                </div>
                                <div className="d-flex align-items-center mb-4 pt-2">
                                    <div className="input-group quantity mr-3" style={{ width: 130 }}>
                                        <div className="input-group-btn">
                                            <button className="btn btn-primary btn-minus" onClick={decreaseQuantity}>
                                                <i className="fa fa-minus" />
                                            </button>
                                        </div>
                                        <input
                                            type="text"
                                            className="form-control bg-secondary text-center"
                                            readOnly
                                            value={quantity}

                                        />
                                        <div className="input-group-btn">
                                            <button className="btn btn-primary btn-plus" onClick={increaseQuantity}>
                                                <i className="fa fa-plus" />
                                            </button>
                                        </div>
                                    </div>
                                    <button className="btn btn-primary px-3" onClick={addToCartHandler}>
                                        <i className="fa fa-shopping-cart mr-1" /> Add To Cart
                                    </button>
                                </div>
                                <p className='textcolor'>
                                    Status : {" "}
                                    <b className={product.stock < 1 ? "redColor" : "greenColor"}>
                                        {product.stock < 1 ? "OutOfStock" : " InStock"}</b>
                                </p>
                                <button className="btn btn-primary px-3">
                                    <button className='submitReview'>Submit Review</button>
                                </button>
                            </div>
                        </div>
                    </div>
                    <h5 className='reviewHeading'>REVIEWS</h5>
                    {product.reviews && product.reviews[0] ? (
                        <div className='reviews d-flex overflow-auto container px-3'>
                            {product.reviews.map((review) => (
                                <ReviewCart review={review} />
                            ))}
                        </div>
                    ) :
                        <p className='noReview'>No reviews yet</p>}
                </>)}
        </>
    )
}

export default ProductDetails
