import React, { Component } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';


import "./css/Homepage.css"

const slides = [
    {
        image: "https://www.nftculture.com/wp-content/uploads/2021/01/opensea-banner-1170x389-1.png"
    },
    {
        image: "https://miro.medium.com/max/1400/1*pOhV0stQq5lmuWk9Azl_mw.jpeg"
    },

]

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            currentSlide: 0,
            slideLength: slides.length
        }
    }

    nextSlide = () => {
        if (this.state.currentSlide === this.state.slideLength - 1) {
            this.setState({ currentSlide: 0 })
        }
        else {
            this.setState({ currentSlide: this.state.currentSlide + 1 })
        }
    }

    prevSlide = () => {
        if (this.state.currentSlide === 0) {
            this.setState({ currentSlide: this.state.slideLength - 1 })
        }
        else {
            this.setState({ currentSlide: this.state.currentSlide - 1 })
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
            // INSERT CODE HERE
        };
    };
    render() {
        return (
            <div className="homepage">
                <div className="home-container">
                    <div className="title-box">
                        <div className="maintitle">Welcome to </div>
                        <div className="subtitle">NFT World!</div>
                    </div>
                    <section className="form-container">
                        <h1 className="form-title">Search for NFT Collections</h1>
                        <div id="hero-input-group" class="field has-addons has-addons-centered">
                            <form onSubmit={this.handleSubmit.bind(this)}>
                                <input
                                    className="input searchbar"
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
                    </section>
                    <section className="carousel">
                        <FaArrowAltCircleLeft className='left-arrow' onClick={this.prevSlide} />
                        <FaArrowAltCircleRight className='right-arrow' onClick={this.nextSlide} />
                        {slides.map((slide, index) => {
                            return (
                                <div
                                    className={index === this.state.currentSlide ? "slide active" : "slide"}
                                    key={index}
                                >
                                    {index === this.state.currentSlide && (
                                        <img src={slide.image} className="banner" />
                                    )}
                                </div>
                            )
                        })}
                    </section>
                </div>
            </div>
        )
    }
}

export default Homepage;