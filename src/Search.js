import React, { Component } from 'react'
import getFilteredUsers from '../server'
import './styles/search.css';

class Search extends Component {

    constructor(props) {
        super(props)
        this.state = {
            inputValue: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        event.preventDefault()
        let nullException = !event.target.value && !event.target.getAttribute('data-value') ? "" : null
        this.setState({
            inputValue: event.target.value || event.target.getAttribute('data-value') || nullException
        })
    }

    render() {
        console.log(this.state.inputClicked)
        let resultsJSX = this.state.inputValue ? getFilteredUsers(this.state.inputValue).map((user, i) => {
            return (
                <a className="dropdown-item" href="" key={i} data-value={user.firstname + " " + user.lastname} onClick={this.handleChange}>
                    {user.firstname} {user.lastname}
                </a>
            )
        }) : null
        
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                    </div>
                    <div className="col-sm-12 col-md-8">
                        <div className="search-container">
                            <br />
                            <h1>Name Search App</h1>
                            <div className="rule-divider"></div>
                            <input className="form-control form-control-lg search-input" type="text" data-toggle={this.state.inputClicked ? '' : 'dropdown'} placeholder="Search for names" value={this.state.inputValue} onChange={this.handleChange} aria-haspopup="true" aria-expanded="false" data-offset="0,10,0" />
                            <div className="dropdown-menu search-dropdown" aria-labelledby="user names">
                                {resultsJSX}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                    </div>
                </div>
            </div>
        )
    }
}

export default Search