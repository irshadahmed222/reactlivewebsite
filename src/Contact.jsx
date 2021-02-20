import React, { useState } from 'react';

const Contact = () =>{
    const [data, setData] = useState({
        flname:"",
        phone:"",
        email:"",
        desc:""
    });
    const formSubmit = (e) =>{
        e.preventDefault();
        alert(`My Name is ${data.flname} my contact details ${data.phone} email is ${data.email} and the message I typed in ${data.desc}`);
    }
    const inputChangeEnt =(event) =>{
        const {name, value} = event.target;
        setData((preData)=>{
            return{
                ...preData,
                [name] : value
            }
        })
    }
  return(
    <>
    <div className="my-5">
        <h1 className="text-center">Our Services</h1>
    </div>
    <div className="container">
        <div className="row">
            <div className="col-md-6 col-10 mx-auto">
                <form onSubmit={formSubmit}>
                <div class="mb-3">
                    <label for="flname" class="form-label">Full Name</label>
                    <input 
                    type="text" class="form-control" 
                    id="flname"
                    name="flname" 
                    value={data.flname}
                    onChange={inputChangeEnt}
                    placeholder="Type your full name" />

                    <label for="number" class="form-label">Phone Number</label>
                    <input 
                    type="number" class="form-control" 
                    id="phone" 
                    name="phone"
                    value={data.phone}
                    onChange={inputChangeEnt}
                    placeholder="Type your phone number" />

                    <label for="email" class="form-label">Email address</label>
                    <input 
                    type="email" class="form-control" 
                    id="email" 
                    name="email"
                    value={data.email}
                    onChange={inputChangeEnt}
                    placeholder="name@example.com" />
                    
                    <label for="desc" class="form-label">Message</label>
                    <textarea class="form-control" 
                    id="desc" 
                    name="desc"
                    value={data.desc}
                    onChange={inputChangeEnt}
                    rows="3" />
                    </div>
                    <div class="col-auto">
                        <button type="submit" class="btn btn-primary mb-3">Send Details</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}
export default Contact;