import { Route, Routes } from "react-router-dom";
import { useState,useEffect } from "react";
import MainPage from "../pages/Main-page";
import Home from "../pages/Main-home";
import Show from "../pages/Show";
import Create from "../pages/Create";
import Update from "../pages/Update";

const api_key = 'od8ALBulHnDiQXa5eoqFv7km2SumAhl7xA6XHujD1FleB6tn9SHjMllfkhavcQRnnuPDUb_OEefLXdEhAkX3BM0095JVaCz35ESpLDP2_lHy3PcCD6f2G0eJMSqcYnYx'



export default function Main(){
    const url = 'https://fooddelivery-mern.herokuapp.com/'

    const [restaurants, setRestaurants] = useState([]);

    
    const getRestaurants = async () => {
        const response = await fetch(url + 'restaurants');
        const data = await response.json();
        setRestaurants(data);
    }

    const deleteRestaurant = async (id) => {
        try {
            await fetch(url + 'restaurants/' + id, {
                method: 'DELETE',
            });
            getRestaurants();
        } catch (error) {
            console.log(error);
        }
    }

    const updateRestaurant = async (id, data) => {
        try {
            await fetch(url + 'restaurants/' + id, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            getRestaurants();
        } catch (error) {
            console.log(error);
        }
    }

    const createRestaurant = async (data) => {
        try {
            await fetch(url + 'restaurants', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            getRestaurants();
        } catch (error) {
            console.log(error);
        }
    }


    
    useEffect(() => {
        getRestaurants();
    }
    , [])


    
    return(
        <Routes>
            <Route
                path="/"
                element={<MainPage/>}   
            />
            <Route
                path="/home" 
                element={<Home 
                    restaurants={restaurants}
                    createRestaurant={createRestaurant}
                />}
            />
            <Route
                path="/restaurant/:id"  
                element={<Show
                    restaurants={restaurants}
                    deleteRestaurant={deleteRestaurant}
                />}
            />
            <Route
                path="/create"
                element={<Create
                    createRestaurant={createRestaurant}
                />}
            />
            <Route
                path="/update/:id"
                element={<Update
                    updateRestaurant={updateRestaurant}
                    restaurants={restaurants}
                />}
            />
        </Routes>
    )
}