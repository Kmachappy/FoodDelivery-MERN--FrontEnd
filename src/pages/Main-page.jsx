import { Link } from "react-router-dom"

export default function Main(){
    return(
        <div className="container">
        <div className="main-page main-page-pd d-flex align-items-center justify-content-center vh-100">
            <div className="d-block text-center">
                <img src="assets/img/Rojas-Kitchen.png" alt="img"/>
            </div>
            <div className="btn-wrap">
                <Link to={"/home"} className="btn btn-base w-100">Enter</Link>
            </div>
        </div>
    </div>
    )
}