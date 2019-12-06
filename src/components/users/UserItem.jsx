import React from 'react'

class UserItem extends React.Component {

    render() {
        return (
            <div className=" card p-3 m-2  text-center">


                <img src={this.props.user.avatar_url}
                    alt=''
                    className='rounded mx-auto'
                    style={{ width: '60px' }} />

                <div className="card-body">
                    <h5 className="card-title">{this.props.user.login}</h5>
                    <p>

                    </p>
                    <a href={this.props.user.html_url} className="btn btn-primary">Go to profile</a>

                </div>
            </div>

        )
    }
}
export default UserItem
