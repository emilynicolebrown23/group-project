import React from 'react'
import { withShelters } from '../context/ShelterProvider'

class DangerForm extends React.Component {

    constructor(){
        super()
        this.state = {
            q1: '',
            q2: '',
            q3: '',
            q4: '',
            q5: '',
            q6: '',
            q7: '',
            q8:'',
            q9: '',
            q10: ''

        }
    }
    
    // const {  yes, no } = props
    handleChange = e => {
        this.setState ({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const count = Object.entries(this.state).reduce((final, [q, answer]) => {
            
            if(answer === "yes"){
                final += 1
            }
            return final 
        },0)
        // const level = Object.values(this.state).reduce((answer, [key, level]) => {
        //     if (dangerResult >= 8){
        //         return "high"
        //     } else if (dangerResult >= 5 && dangerResult < 8){
        //         return "moderate"
        //     } else if (dangerResult < 5 ){
        //         return "Variable"
        //         }

        // })
        console.log(this.props.final)
        this.props.setDanger(count)
        this.setState({
            q1: '',
            q2: '',
            q3: '',
            q4: '',
            q5: '',
            q6: '',
            q7: '',
            q8:'',
            q9: '',
            q10: ''
        })
    }

    render(){
        const { handleChange, handleSubmit } = this
        console.log(this.setDanger)
        return (

            <div className="danger-form">
         
                <form onSubmit={handleSubmit}>
                <h4>Danger Assessment Calculator</h4> 
                    <h5> Has your partner ever threatened violence?</h5>
                        <input className="checkbox" name="q1" type="radio" value= {'yes'} onChange={handleChange}/> Yes <br></br>
                        <input className="checkbox" name="q1" type="radio" value={'no'}/> No
                        <br/>
                        
                    <h5>Has your partner ever taken your cell phone?</h5>
                        <input className="checkbox" name="q2" type="radio" value= {'yes'} onChange={handleChange}/> Yes<br></br>
                        <input className="checkbox" name="q2" type="radio" value={'no'}/> No<br></br>
                    
                    <h5>Do you feel anxious or nervous when you are around your partner?</h5>
                        <input className="checkbox" name="q3" type="radio" value= {'yes'} onChange={handleChange}/> Yes<br></br>
                        <input className="checkbox" name="q3" type="radio" value={"no"}/> No<br></br>
                        
                    <h5>Do you watch what you are doing in order to avoid making your partner angry or upset? </h5>
                        <input className="checkbox" name="q4" type="radio" value= {"yes"} onChange={handleChange}/> Yes<br></br>
                        <input className="checkbox" name="q4" type="radio" value={"no"}/> No<br></br>
                        
                    <h5>Do you feel obligated or coerced into having sex with your partner? </h5>
                        <input className="checkbox" name="q5" type="radio" value= {"yes"} onChange={handleChange}/> Yes<br></br>
                        <input className="checkbox" name="q5" type="radio" value={"no"}/> No<br></br>
                        
                    <h5>Are you afraid of voicing a different opinion than your partner?</h5>
                        <input className="checkbox" name="q6" type="radio" value= {"yes"} onChange={handleChange}/> Yes<br></br>
                        <input className="checkbox" name="q6" type="radio" value={"no"}/> No<br></br>
                        
                    <h5>Does your partner criticize you or embarrass you in front of others? </h5>
                        <input className="checkbox" name="q7" type="radio" value= {"yes"} onChange={handleChange}/> Yes<br></br>
                        <input className="checkbox" name="q7" type="radio" value={"no"}/> No<br></br>
                    
                    <h5>Does your partner check up on what you have been doing, and believe your answers?</h5>
                        <input className="checkbox" name="q8" type="radio" value= {"yes"} onChange={handleChange}/> Yes<br></br>
                        <input className="checkbox" name="q8" type="radio" value={"no"}/> No<br></br>
                        
                    <h5>Is your partner jealous, such as accusing you of having affairs? </h5>
                        <input className="checkbox" name="q9" type="radio" value= {"yes"} onChange={handleChange}/> Yes<br></br>
                        <input className="checkbox" name="q9" type="radio" value={"no"}/> No<br></br>
                        
                    <h5>Does your partner tell you that he or she will stop beating you when you start behaving yourself?</h5>
                        <input className="checkbox" name="q10" type="radio" value= {"yes"} onChange={handleChange}/> Yes<br></br>
                        <input className="checkbox" name="q10" type="radio" value={"no"}/> No<br></br>
                    
                <button className="danger-button">Submit</button>

            </form>
            {this.setDanger}
            {this.dangerLevel}
        
        </div>
        )
    }

}

export default withShelters(DangerForm)
