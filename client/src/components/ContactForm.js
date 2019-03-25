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
                placeholder= "email" 
                onChange={handleChange}/>
            <input
                type="tel"
                name="phone"
                value={phone}
                placeholder="phone number"
                onChange={handleChange}/>
            <h2>Please share details of your situation</h2>
            <input
                className = "text-area"
                type="text-area"
                name="info"
                value={info}
                onChange={handleChange}/>
            <div className="questions">
            <h5>Please answer the following questions so we can better assess your needs</h5> 
            <h5>1. Has your partner ever threatened violence?</h5>
                    <input className="checkbox" name="001a" type="radio" value="0"/> <br></br>
                    <input className="checkbox" name="001b" type="radio" value="0"/><br></br>
                    <input className="checkbox" name="001c" type="radio" value="0"/><br></br>
                <h5>2. Has your partner ever taken your cell phone?</h5>
                    <input className="checkbox" name="002a" type="radio" value="0"/> <br></br>
                    <input className="checkbox" name="002b" type="radio" value="0"/><br></br>
                    <input className="checkbox" name="002c" type="radio" value="0"/><br></br>
                <h5>3. Do you feel anxious or nervous when you are around your partner?</h5>
                    <input className="checkbox" name="003a" type="radio" value="0"/> <br></br>
                    <input className="checkbox" name="003b" type="radio" value="0"/><br></br>
                    <input className="checkbox" name="003c" type="radio" value="0"/><br></br>
                <h5>4.Do you watch what you are doing in order to avoid making your partner angry or upset? </h5>
                    <input className="checkbox" name="004a" type="radio" value="0"/> <br></br>
                    <input className="checkbox" name="004b" type="radio" value="0"/><br></br>
                    <input className="checkbox" name="004c" type="radio" value="0"/><br></br>
                <h5>5. Do you feel obligated or coerced into having sex with your partner? </h5>
                    <input className="checkbox" name="005a" type="radio" value="0"/> <br></br>
                    <input className="checkbox" name="005b" type="radio" value="0"/><br></br>
                    <input className="checkbox" name="005c" type="radio" value="0"/><br></br>
                <h5>6. Are you afraid of voicing a different opinion than your partner?</h5>
                    <input className="checkbox" name="006a" type="radio" value="0"/> <br></br>
                    <input className="checkbox" name="006b" type="radio" value="0"/><br></br>
                    <input className="checkbox" name="006c" type="radio" value="0"/><br></br>
                <h5>7. Does your partner criticize you or embarrass you in front of others? </h5>
                    <input className="checkbox" name="007a" type="radio" value="0"/> <br></br>
                    <input className="checkbox" name="007b" type="radio" value="0"/><br></br>
                    <input className="checkbox" name="007c" type="radio" value="0"/><br></br>
                <h5>8. Does your partner check up on what you have been doing, and 002at believe your answers?</h5>
                    <input className="checkbox" name="008a" type="radio" value="0"/> <br></br>
                    <input className="checkbox" name="008b" type="radio" value="0"/><br></br>
                    <input className="checkbox" name="008c" type="radio" value="0"/><br></br>
                <h5>9. Is your partner jealous, such as accusing you of having affairs? </h5>
                    <input className="checkbox" name="009a" type="radio" value="0"/> <br></br>
                    <input className="checkbox" name="009b" type="radio" value="0"/><br></br>
                    <input className="checkbox" name="009c" type="radio" value="0"/><br></br>
                <h5>10. Does your partner tell you that he or she will stop beating you when you start behaving yourself?</h5>
                    <input className="checkbox" name="010a" type="radio" value="0"/> <br></br>
                    <input className="checkbox" name="010b" type="radio" value="0"/><br></br>
                    <input className="checkbox" name="010c" type="radio" value="0"/><br></br>
            </div>    
                
            
            <button>Submit</button>
                

        </form>
    )
}

export default ContactForm