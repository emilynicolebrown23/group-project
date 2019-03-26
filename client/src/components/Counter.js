import React, { Component } from 'react'
// import Count from './Count.js'
import pic2 from '../assets/carousel-pics_0002.jpg'
import CountUp from 'react-countup'

class App extends Component {
  constructor() {
    super()
    this.state = {
      countdown1: null
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", (e) => {
      console.log(window.scrollY)
      if (window.scrollY > 1078) {
        this.createCountdown()
      }
    })
  }

  createCountdown = () => {
    this.setState({
      countdown1: (<CountUp start={3954} end={3} delay={0} >
                    {({ countUpRef }) => (
                      <div>
                        <p>
                          <span className="stat-begin">1 </span> in  <br />
                          <span className="num-count" ref={countUpRef} /> <br />
                          <p className="stat-end">women experience some form of physical violence by an intimate partner.
                                                    </p>
                        </p>
                        {/* <button onClick={start}>Start</button> */}
                      </div>
                    )}
                  </CountUp>),
      countdown2: (<CountUp start={3954} end={7} delay={0}>
          {({ countUpRef }) => (
            <div>
              <p>
              <span className="stat-begin">1 </span> in  <br />
              <span className="num-count" ref={countUpRef} /> <br />
                <p className="stat-end"> women have been injured by an intimate partner.
                                        </p>
              </p>
              {/* <button onClick={start}>Start</button> */}
            </div>
          )}
        </CountUp>),
        countdown3:(
          <CountUp start={3954} end={10} delay={0}>
            {({ countUpRef }) => (
              <div>
                <p>
                  <span className="stat-begin">1 </span> in  < br/>
                  <span className="num-count" ref={countUpRef} /> <br />
                  <p className="stat-end">women have been raped by an intimate partner.
                      </p>
                </p>
                {/* <button onClick={start}>Start</button> */}
              </div>
            )}
          </CountUp>
        )

    })
  }


  componentWillUnmount() {
    window.removeEventListener("scroll", null)
  }

  render() {

    return (
      
        <div className="stat-container">

          <img className="resources-img-2" src={pic2} alt="" />
          <div className="counter-container" >
            <div className="counter-box-1">

              {this.state.countdown1}

            </div>
            <div className="counter-box-2">
               {this.state.countdown2}
            </div>
            <div className="counter-box-3">
            {this.state.countdown3}
            </div>
          </div>  
      </div>
      
    )
  }
}

export default App