import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
export default function Create({createRestaurant}) {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "Del Taco",
        address: "0912 N. Main St",
        city: "Orangetown",
        state: "OR",
        zip: "91234",
        phone: "000-000-0000",
        email: "admin@deltaco.com",
        image: "https://www.nrn.com/sites/nrn.com/files/del-taco-exterior-promo.jpg", 
    });

    function handleChange(event) {
        const updatedForm = {
        ...form,
        [event.target.name]: event.target.value
        };
        setForm(updatedForm);
    }

    function handleSubmit(event) {
        event.preventDefault();
        createRestaurant(form);
        navigate("/home");
    }

  return (
    <div>
      <br />
        <h2>Add Restaurant</h2>
      <form onSubmit={(event)=>{handleSubmit(event)}}>
        <div class="form-group">
          <label for="Name">Name</label>
          <input
            type="text"
            name="name"
            class="form-control"
            id="Name"
            placeholder={form.name}
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div class="form-group">
          <label for="Address">Address</label>
          <input
            type="text"
            name="address"
            class="form-control"
            id="Address"
            placeholder={form.address}
            value={form.address}
            onChange={handleChange}
          />
        </div>
        <div class="form-group">
          <label for="City">City</label>
          <input
            type="text"
            name="city"
            class="form-control"
            id="City"
            placeholder={form.city}
            value={form.city}
            onChange={handleChange}
          />
        </div>
        <div class="form-group">
          <label for="State">State</label>
          <input
            type="text"
            name="state"
            class="form-control"
            id="State"
            placeholder={form.state}
            value={form.state}
            onChange={handleChange}
          />
        </div>
        <div class="form-group">
          <label for="Zip">Zip</label>
          <input
            type="text"
            name="zip"
            class="form-control"
            id="Zip"
            placeholder={form.zip}
            value={form.zip}
            onChange={handleChange}
          />
        </div>
        <div class="form-group">
          <label for="Phone">Phone</label>
          <input
            type="text"
            name="phone"
            class="form-control"
            id="Phone"
            placeholder={form.phone}
            value={form.phone}
            onChange={handleChange}
          />
        </div>
        <div class="form-group">
          <label for="Email">Email</label>
          <input
            type="text"
            name="email"
            class="form-control"
            id="Email"
            placeholder={form.email}
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div class="form-group">
          <label for="Image">Image</label>
          <input
            type="text"
            name="image"
            class="form-control"
            id="Image"
            placeholder={form.image}
            value={form.image}
            onChange={handleChange}
          />
        </div>
        <br />
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
      <Footer></Footer>
    </div>
  );
}
