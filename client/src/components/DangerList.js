import React from 'react'
import Danger from './Danger.js'


const DangerList = (props) => {
    return (
        <div className="dangerlist">
            {props.dangers.map(danger=> <Danger
                                            key={danger._id}
                                            {...danger}
                                                />)}
        </div>
    )
}

export default DangerList