import React from 'react'

const ContactForm = () => {
    const { handleSubmit, handleChange, name, email, phone, info, }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={name}
                placeholder="Full Name"
                onChange={handleChange} />
            />
            <input
                type="email"
                name="email"
                value={email}
                placeholder= "email" 
                onChange={handleChange}/>
            <input
                type="number"
                name="phone"
                value={phone}
                placeholder="phone number"
                onChange={handleChange}/>
            <h2>Please share details of your situation</h2>
            <input
                type="text-area"
                name="info"
                value={info}
                onChange={handleChange}/>
           <h2>Please answer the following questions so we can better assess your needs</h2> 
           <h5>1. Has your partner ever threatened violence?</h5>
            <input
                type="checkbox"
                name="q1"
                value={q1}
                onChange={handleChange}/>
            <h5>2. Has your partner ever taken your cell phone?</h5>
            <input
                type="checkbox"
                name="q2"
                value={q2}
                onChange={handleChange}/>
            
            <button>Submit</button>
                

        </form>
    )
}

export default ContactForm