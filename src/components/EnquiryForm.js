import React, { useState } from "react";

export default function EnquiryForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pricelist, setPricelist] = useState("");
  const [details, setDetials] = useState("");
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    console.log("Clicked");
  };
  return (
    <div>
      <div class="form-container p-5">
        <form>
          <h1>Send Your Enquiry</h1>
          <div class="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter your name"
              name="name"
              onChange={handleChange}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter your email"
              onChange={handleChange}
              name="email"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Phone No</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Enter your phone number"
              onChange={handleChange}
              name="phone"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Price List</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Enter the details for price list"
              onChange={handleChange}
              name="pricelist"
            />
            <div class="form-group mt-3">
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Enter your enquiry details"
                onChange={handleChange}
                name="details"
              ></textarea>
            </div>
          </div>

          <button type="submit" class="btn btn-dark my-3" onClick={handleClick}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
