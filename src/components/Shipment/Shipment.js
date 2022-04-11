import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Shipment = () => {
  const [user] = useAuthState(auth);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  //   const [error, setError] = useState('');

  //   const navigate = useNavigate();

  const handleNameBlur = (event) => {
    setName(event.target.value);
  };

  const handleAddressBlur = (event) => {
    setAddress(event.target.value);
  };

  const handlePhoneBlur = (event) => {
    setPhone(event.target.value);
  };

  const handleCreateUser = (event) => {
    event.preventDefault();
  };

  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Shipping Information</h2>
        <form onSubmit={handleCreateUser}>
          <div className="input-group">
            <label htmlFor="name">Your Name</label>
            <input
              onBlur={handleNameBlur}
              type="text"
              name="name"
              id=""
              placeholder="Type Your Name"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input readOnly
              type="email"
              name="email"
              id=""
              value={user?.email}
            />
          </div>
          <div className="input-group">
            <label htmlFor="address">Address</label>
            <input
              onBlur={handleAddressBlur}
              type="text"
              name="address"
              id=""
              placeholder="Type Your Address"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="phone">Your Phone</label>
            <input
              onBlur={handlePhoneBlur}
              type="text"
              name="phone"
              id=""
              placeholder="Type again Your Phone"
              required
            />
          </div>
          <input type="submit" className="form-submit" value="Sign Up" />
        </form>
       
      </div>
    </div>
  );
};

export default Shipment;
