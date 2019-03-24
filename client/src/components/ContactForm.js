import React from 'react'



const ContactForm = (props) => {
    const { handleSubmit, handleChange, name, email, phone, info, q1, q2 } = props
    return (
        <form onSubmit={handleSubmit} className="contact-form">
                     
            <input
                type="text"
                name="name"
                value={name}
                placeholder="Full Name"
                onChange={handleChange} />
            
            <input
                type="email"
                name="email"
                value={email}
                placeholder= "Email" 
                onChange={handleChange}/>
            <input
                type="tel"
                name="phone"
                value={phone}
                placeholder="Phone Number"
                onChange={handleChange}/>

            {/* <h3>Please share details of your situation</h3> */}
            <input
                className = "text-area"
                type="text-area"
                name="info"
                value={info}
                onChange={handleChange}/>
             <button>Submit</button>
        </form>
    )
}

export default ContactForm