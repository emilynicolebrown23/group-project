import React from 'react'

const DangerForm = (props) => {
    const {  yes, no } = props
    return (
        <form>
            <h5>Please answer the following questions so we can better assess your needs</h5> 
                <h5>1. Has your partner ever threatened violence?</h5>
                    <input className="checkbox" name="q1" type="radio" value= {yes} onChange={handleChange}/> <br></br>
                    <input className="checkbox" name="q1" type="radio" value={no}/><br></br>
                    
                <h5>2. Has your partner ever taken your cell phone?</h5>
                    <input className="checkbox" name="q2" type="radio" value= {yes} onChange={handleChange}/> <br></br>
                    <input className="checkbox" name="q2" type="radio" value={no}/><br></br>
                   
                <h5>3. Do you feel anxious or nervous when you are around your partner?</h5>
                    <input className="checkbox" name="q3" type="radio" value= {yes} onChange={handleChange}/> <br></br>
                    <input className="checkbox" name="q3" type="radio" value={no}/><br></br>
                    
                <h5>4.Do you watch what you are doing in order to avoid making your partner angry or upset? </h5>
                    <input className="checkbox" name="q4" type="radio" value= {yes} onChange={handleChange}/> <br></br>
                    <input className="checkbox" name="q4" type="radio" value={no}/><br></br>
                    
                <h5>5. Do you feel obligated or coerced into having sex with your partner? </h5>
                    <input className="checkbox" name="q5" type="radio" value= {yes} onChange={handleChange}/> <br></br>
                    <input className="checkbox" name="q5" type="radio" value={no}/><br></br>
                    
                <h5>6. Are you afraid of voicing a different opinion than your partner?</h5>
                    <input className="checkbox" name="q6" type="radio" value= {yes} onChange={handleChange}/> <br></br>
                    <input className="checkbox" name="q6" type="radio" value={no}/><br></br>
                    
                <h5>7. Does your partner criticize you or embarrass you in front of others? </h5>
                    <input className="checkbox" name="q7" type="radio" value= {yes} onChange={handleChange}/> <br></br>
                    <input className="checkbox" name="q7" type="radio" value={no}/><br></br>
                   
                <h5>8. Does your partner check up on what you have been doing, and 002at believe your answers?</h5>
                    <input className="checkbox" name="q8" type="radio" value= {yes} onChange={handleChange}/> <br></br>
                    <input className="checkbox" name="q8" type="radio" value={no}/><br></br>
                    
                <h5>9. Is your partner jealous, such as accusing you of having affairs? </h5>```
                    <input className="checkbox" name="q9" type="radio" value= {yes} onChange={handleChange}/> <br></br>
                    <input className="checkbox" name="q9" type="radio" value={no}/><br></br>
                    
                <h5>10. Does your partner tell you that he or she will stop beating you when you start behaving yourself?</h5>
                    <input className="checkbox" name="q10" type="radio" value= {yes} onChange={handleChange}/> <br></br>
                    <input className="checkbox" name="q10" type="radio" value={no}/><br></br>
                   
        <button>Submit</button>

        </form>
    )
}

export default DangerForm
