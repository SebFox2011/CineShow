import React, {Component} from 'react'

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {searchText: "", placeholder: "Tapez votre film ..."};
    }

    handleChange(event) {
        console.log(event.target.value);
        this.setState({searchText: event.target.value});
    }

    render() {

        return (
            <div>
                <input onChange={this.handleChange.bind(this)} placeholder={this.state.placeholder}/>
                
            </div>
        )
    }
}

export default SearchBar;

/*
* import React,{Component}  from 'react'

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {searchText: "", placeholder: "Tapez votre film ..."};
    }

    handleChange(event) {
        console.log(event.target.value);
        this.setState({searchText: event.target.value});
    }

    render() {

        return {
            <input onChange={this.handleChange.bind(this)} placeholder={this.state.placeholder}/>
        }
    }

}

export default SearchBar;*/