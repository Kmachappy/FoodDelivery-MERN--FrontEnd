import { Link } from "react-router-dom"

export default function Header({createRestaurant}){
    

    return(
        
        <>
         <div className="body-overlay" id="body-overlay"></div>
    <div className="td-search-popup" id="td-search-popup">
        <form action="index.html" className="search-form">
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Search....."/>
            </div>
            <button type="submit" className="submit-btn"><i className="fa fa-search"></i></button>
        </form>
    </div>
    
    <div className="container">
        <div className="main-home-area pb-0 mt-5">
            <div className="location-area">
                <div className="media">
                    <img src="assets/img/icon/map-marker.svg" alt="img"/>
                    <div className="media-body">
                        <span>Delivery to</span>
                        <select className="single-select">
                            <option>Los Angeles, CA</option>
                            <option value="asc">Orange County, CA</option>
                        </select>
                    </div>
                </div>
                <Link to={"/create"}><button className="notification-btn" >create+</button></Link>
            </div>
            <div className="home-search-wrap">
                <div className="default-form-wrap">
                    <div className="single-input-wrap">
                        <label><img src="assets/img/icon/search.svg" alt="img"/></label>
                        <input type="text" className="form-control" placeholder="Search for food"/>
                    </div>
                    <button type="button" className="btn btn-border" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <img src="assets/img/icon/filter.svg" alt="img"/>
                    </button>
                </div>
            </div>   
        </div>
    </div>

    <div className="modal fade bottom filter-modal-popup" id="exampleModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="container">
                    <h5 className="section-title">Shot by</h5>
                    <div className="home-category-slider owl-carousel">
                        <div className="item">
                            <button className="home-category-item-wrap">
                                Offer
                            </button>
                        </div>
                        <div className="item">
                            <button className="home-category-item-wrap">
                                Free Delivery
                            </button>
                        </div>
                        <div className="item">
                            <button className="home-category-item-wrap">
                                Most Popular
                            </button>
                        </div>
                        <div className="item">
                            <button className="home-category-item-wrap">
                                Online Payment
                            </button>
                        </div>
                    </div> 
                    <h5 className="section-title">Category</h5>
                    <div className="home-category-slider owl-carousel">
                        <div className="item">
                            <a className="home-category-item-wrap" href={"#"}>
                                <img src="assets/img/category/ramen.png" alt="img"/>
                                Ramen
                            </a>
                        </div>
                        <div className="item">
                            <a className="home-category-item-wrap" href={"#"}>
                                <img src="assets/img/category/pizza.png" alt="img"/>
                                Pizza
                            </a>
                        </div>
                        <div className="item">
                            <a className="home-category-item-wrap" href={"#"}>
                                <img src="assets/img/category/burger.png" alt="img"/>
                                Burger
                            </a>
                        </div>
                        <div className="item">
                            <a className="home-category-item-wrap" href={"#"}>
                                <img src="assets/img/category/drink.png" alt="img"/>
                                Soft Drinks
                            </a>
                        </div>
                        <div className="item">
                            <a className="home-category-item-wrap" href={"#"}>
                                <img src="assets/img/category/fast-food.png" alt="img"/>
                                Fast Food
                            </a>
                        </div>
                        <div className="item">
                            <a className="home-category-item-wrap" href={"#"}>
                                <img src="assets/img/category/french-fries.png" alt="img"/>
                                French Fries
                            </a>
                        </div>
                    </div> 
                    <h5 className="section-title">Price Range</h5>
                    <ul className="price-list">
                        <li><a href={"#"}>$</a></li>
                        <li><a href={"#"}>$$</a></li>
                        <li><a href={"#"}>$$$</a></li>
                        <li><a href={"#"}>$$$$</a></li>
                    </ul>
                    <button type="button" className="link-btn" data-bs-dismiss="modal">Clear All</button>
                    <button type="button" className="btn btn-base">Apply Filters</button>
                </div>              
            </div>            
        </div>
    </div>
    </>
    )
}