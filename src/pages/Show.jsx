import Footer from "../components/Footer";
import { useParams } from "react-router";
import { Link, useNavigate } from "react-router-dom";


export default function Show({restaurants, deleteRestaurant}){
    const navigate = useNavigate();
    const {id} = useParams();

    const restaurant = restaurants.find(restaurant => restaurant._id === id);

    function handleDelete(id){
        deleteRestaurant(id);
        navigate("/home");
    }

    return(
        <>
    <div className="single-restuarent-area">
        <div className="single-banner-area" style={{backgroundImage: `url(${restaurant.image})`}}>
            <div className="container" style={{position: "relative"}}>
                <Link className="btn back-page-btn" to={"/home"}><i className="ri-arrow-left-s-line"></i></Link>
                <div className="btn-area">
                    <Link to={`/update/${id}/`}><button  className="btn back-page-btn" >+</button ></Link>
                    <button className="btn back-page-btn" onClick={()=>{handleDelete(id)}}>x</button>
                </div>
                <div className="restuarent-details">
                    <div className="media">
                        <div className="thumb">
                            <img src={restaurant.image} style={{maxHeight:"70px"}} alt="img"/>
                            <span>Open</span>
                        </div>
                        <div className="media-body">
                            <h3>{restaurant.name}</h3>
                            <p>{restaurant.address}</p>
                            <p>{restaurant.city}</p>
                        </div>
                    </div>
                    <div className="rating">
                        <span>
                            <i className="ri ri-star-fill"></i>
                            4.9 <span>(6k)</span>
                        </span>
                        <p> <img src="../assets/img/icon/timer.png" alt="img"/>  20-25 Min</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="single-page-details">
            <div className="container">
                <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                            {restaurant.menu.map((item,index) => {
                                return(
                                    <div key={index} className="single-item-wrap">
                                        <div className="thumb">
                                            <img src={item.image} style={{marginRight:"25px",width:"130px",height:"130px"}} alt="img"/>
                                        </div>
                                        <div className="details">
                                            <h6><Link to={"/"}>{item.name}</Link></h6>
                                            <p>{item.description}</p>
                                            <span className="price">price {item.price}</span>
                                        </div>
                                        <Link className="btn back-page-btn" to={"/"}><i className="ri-arrow-right-s-line"></i></Link>
                                    </div>
                                )
                            })}
                </div>
                </div>
            </div>
        </div>
            
    </div>
      
        <Footer/>
        </>
    )
}