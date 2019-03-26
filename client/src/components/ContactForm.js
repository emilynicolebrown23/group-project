import React from 'react'



const ContactForm = (props) => {
    const { handleSubmit, handleChange, name, email, phone, info } = props
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
            <input
                className = "text-area"
                type="text-area"
                name="info"
                value={info}
                
                onChange={handleChange}/>
             <button className="contact-button">Submit</button>
        </form>
    )
}

export default ContactForm