export default function BannerSlider({restaurants}){
    return(
        <div className="banner-slider owl-carousel">
            {restaurants.map((restaurant,index) => {
                return(
                    <div key={index} className="item">
                        <img style={{height:"250px", width:"267px"}} src={restaurant.image} alt="img"/>
                    </div>
                )
            }
            )}
        </div>
    )
    
}


/* <div className="banner-slider owl-carousel">
<div className="item">
    <img src="assets/img/banner/1.png" alt="img"/>
</div>
<div className="item">
    <img src="assets/img/banner/2.png" alt="img"/>
</div>
<div className="item">
    <img src="assets/img/banner/3.png" alt="img"/>
</div>
</div>  */