import React, { Component } from 'react'

class Search extends Component {

    state = {
        text: ''
    }

    onChange = (e) => {
        this.setState({ text: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.text === '') {
            this.props.setAlert('Please type in something', 'danger')
        }
        else {
            this.props.searchUsers(this.state.text)
            this.setState({ text: '' })
        }


    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group my-2'>
                        <input type='text' name='text' placeholder='Search Users..' className='form-control my-2'
                            value={this.state.text} onChange={this.onChange} />
                        <input type='submit' value='Search' className='btn btn-dark btn-block' />
                    </div>
                </form>
                {this.props.showClear === true &&
                    (<button className='btn btn-primary btn-block' onClick={this.props.clearUsers}>Clear </button>)
                }

            </React.Fragment>
        )
    }
}
export default Search