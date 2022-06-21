import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Footer from "../components/Footer";

export default function Update({restaurants, updateRestaurant}) {
    const navigate = useNavigate();
    const {id} = useParams();
    const restaurant = restaurants.find(restaurant => restaurant._id === id);

    const [form, setForm] = useState({
        name: restaurant.name,
        address: restaurant.address,
        city: restaurant.city,
        state: restaurant.state,
        zip: restaurant.zip,
        phone: restaurant.phone,
        email: restaurant.email,
        image: restaurant.image,
    });



    function handleSubmit(event){
        event.preventDefault();
        updateRestaurant(id,form);
        navigate("/restaurant/"+id);
    }

    function handleChange(event){
        const updatedForm = {
            ...form,
            [event.target.name]: event.target.value
        };
        setForm(updatedForm);
    }

    return (
<div>
      <br />
        <h2>Update</h2>
        <h3>{restaurant.name}</h3>
      <form onSubmit={(event)=>{handleSubmit(event)}}>
        <div className="form-group">
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="Name"
            placeholder={form.name}
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Address">Address</label>
          <input
            type="text"
            name="address"
            className="form-control"
            id="Address"
            placeholder={form.address}
            value={form.address}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="City">City</label>
          <input
            type="text"
            name="city"
            className="form-control"
            id="City"
            placeholder={form.city}
            value={form.city}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="State">State</label>
          <input
            type="text"
            name="state"
            className="form-control"
            id="State"
            placeholder={form.state}
            value={form.state}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Zip">Zip</label>
          <input
            type="text"
            name="zip"
            className="form-control"
            id="Zip"
            placeholder={form.zip}
            value={form.zip}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Phone">Phone</label>
          <input
            type="text"
            name="phone"
            className="form-control"
            id="Phone"
            placeholder={form.phone}
            value={form.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Email">Email</label>
          <input
            type="text"
            name="email"
            className="form-control"
            id="Email"
            placeholder={form.email}
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Image">Image</label>
          <input
            type="text"
            name="image"
            className="form-control"
            id="Image"
            placeholder={form.image}
            value={form.image}
            onChange={handleChange}
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
     
    </div>
    )
}