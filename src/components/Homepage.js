import React, { Component } from "react";
import "./css/Homepage.css"

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
        }
    }

    handleSearch(e) {
        this.setState({
            search: e.target.value,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault(); // at the beginning of a submit function
        const searchData = {
            search: this.state.search
        };
        // axios.post(`${REACT_APP_SERVER_URL}/users/login`, searchData)
        //     .then(response => {
        //         const { token } = response.data;
        //         // save token to localStorage
        //         localStorage.setItem('jwtToken', token);
        //         // set token to headers
        //         setAuthToken(token);
        //         // decode token to get the user data
        //         const decoded = jwt_decode(token);
        //         // set the current user
        //         this.props.nowCurrentUser(decoded); // funnction passed down as props.
        //     })
        //     .catch(error => {
        //         console.log('===> Error on login', error);
        //         alert('Either email or password is incorrect. Please try again');
        //     });
    };
    render() {
        return (
            <div className="homepage">
                <h1 className="title">Welcome to NFT World!</h1>
                <section class="hero is-medium">
                    <div class="hero-body has-text-centered">
                        <h1 class="title is-2">Search for NFT Collection on OpenSea</h1>
                        <div id="hero-input-group" class="field has-addons has-addons-centered">
                            <div class="control">
                                <form onSubmit={this.handleSubmit.bind(this)}>
                                    <input
                                        class="input is-medium"
                                        type="text"
                                        placeholder="Search..."
                                        value={this.state.search}
                                        onChange={this.handleSearch.bind(this)}
                                    />
                                    <a class="button is-medium is-primary">
                                        <i class="fal fa-search"></i>
                                    </a>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Homepage;