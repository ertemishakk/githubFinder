import React from "react";
import Navbar from './components/layout/Navbar'
import axios from 'axios'
import Users from './components/users/Users'
import Search from './components/users/Search'
import Alert from './components/layout/Alert'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import About from './components/pages/About'


class App extends React.Component {

  state = {
    users: [],
    loading: false,
    alert: null
  }

  // async componentDidMount() {

  //   this.setState({ loading: true })

  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

  //   this.setState({ loading: false, users: res.data })

  //   console.log(res.data)

  // }

  searchUsers = async (text) => {

    this.setState({ loading: true })

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

    this.setState({ loading: false, users: res.data.items })

    console.log(res.data)
  }


  clearUsers = () => {
    this.setState({ users: [], loading: false })
  }

  setAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } })
  }


  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className='container'>
            <Switch>
              <Route exact path='/'>
                <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers}
                  showClear={this.state.users.length > 0 ? true : false}
                  setAlert={this.setAlert} />
                <Users loading={this.state.loading} users={this.state.users} />
                <Alert alert={this.state.alert} />
              </Route>
              <Route exact path='/about' component={About} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
