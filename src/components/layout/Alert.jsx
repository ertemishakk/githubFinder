import React from 'react'

export const Alert = (props) => {

    // console.log(props.alert)

    return (

        props.alert !== null && (
            <div className={`alert alert-${props.alert.type}`}>
                <i className="fas fa-info-circle">
                    {props.alert.msg}
                </i>
            </div>
        )

    )
}

export default Alert