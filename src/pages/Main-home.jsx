import { Link } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Home({restaurants, createRestaurant}) {
    return(
    <>
    <Header
        createRestaurant = {createRestaurant}
    />
    <div className="container">
        <div className="main-home-area pt-0">            
            <h5 className="section-title">All Restaurant</h5>
            {restaurants.map((restaurant,index) => {
                    return(
                            <div className="single-product-wrap" key={index}>
                                <div className="thumb">
                                    <Link to={"/restaurant/"+restaurant._id}>
                                        <img src={restaurant.image} alt="img"/>
                                    </Link>
                                    <a className="fav-btn" href={'#'}><i className="fa fa-heart"></i></a>
                                </div>

                                <div className="details">
                                    <h6><Link to={"/restaurant/"+restaurant._id}>{restaurant.name}</Link> <span>Open</span></h6>
                                    <div className="ratting">
                                        <i className="ri-star-fill ps-0"></i>4.9
                                        <span>(6k)</span>
                                        <span>{restaurant.address}</span>
                                    </div>
                                    <span>20-25 Min <span className="ms-3">Free Delivery</span></span>
                                </div>
                            </div>           
                    )
                })
            }        
        </div>
    </div>  
    <Footer/>
    </>
    )    
}