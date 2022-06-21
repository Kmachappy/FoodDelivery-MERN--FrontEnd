import { Link } from "react-router-dom"
export default function Footer(){
    return(
        <>
            <div className="main-footer-bottom d-block text-center">
                <ul>
                    <li>
                        <Link to={"/home"}>
                            <img src="../assets/img/icon/svg/home.svg" alt="icon"/>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/home"}>
                            <img src="../assets/img/icon/svg/search.svg" alt="img"/>
                        </Link>
                    </li>
                    <li className="shop-btn">
                        <Link className="menu-bar" to={"/home"}>
                            <img src="../assets/img/icon/svg/bag.svg" alt="imgt"/>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/home"}>
                            <img src="../assets/img/icon/svg/discount.svg" alt="img"/>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/home"}>
                            <img src="../assets/img/icon/svg/profile.svg" alt="img"/>
                        </Link>
                    </li>
                </ul>
            </div>        
        </>
        )
}