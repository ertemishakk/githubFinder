import React from 'react'
import spinner from './spinner.gif'

const Spinner = () => {
    return (
        <React.Fragment>
            <img src={spinner} alt="Loading.." style={{ width: '80px', margin: 'auto', display: 'block', marginTop:'200px' }} />
        </React.Fragment>
    )
}
export default Spinner
