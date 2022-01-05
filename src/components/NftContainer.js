import React, { Component } from 'react';
import axios from 'axios';
import './NftContainer.css';

// Component
import { Collections } from './Collections';
import NftItem from './NftItem';

const displayCollections = Collections.map((c, idx) => {
    return (
        <NftItem
            key={idx}
            name={c.name}
            slug={c.slug}
            description={c.description}
            image_url={c.image_url}
            floor_price={c.floor_price}
        />
    );
});

class NftContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            slug: '',
            description: '',
            image_url: '',
            floor_price: ''
        }
    }

    render() {
        return (
            <div>
                <nav class="navbar" role="navigation" aria-label="main navigation">
                    <div class="container">
                        <div class="navbar-brand">
                            <a class="navbar-item" href="https://bulma.io">
                                <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
                            </a>


                            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                            </a>
                        </div>


                        <div id="navbarBasicExample" class="navbar-menu">
                            <div class="navbar-end">
                                <a href="/" class="navbar-item"> Home </a>
                                <a class="navbar-item"> NFT Collections </a>
                                <a class="navbar-item"> NFT Markets </a>
                            </div>
                        </div>
                    </div>
                </nav>
                <section class="hero is-medium">
                    <div class="hero-body has-text-centered">
                        <h1 class="title is-2">Search for NFT</h1>
                        <div id="hero-input-group" class="field has-addons has-addons-centered">
                            <div class="control">
                                <input class="input is-medium" type="text" placeholder="Search..." />
                            </div>
                            <div class="control">
                                <a class="button is-medium is-primary">
                                    <i class="fal fa-search"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <div class="container is-max-desktop">
                    <section class="featured">
                        <div class="level">
                            <div class="level-left">
                                <div class="level-item">
                                    <h2 class="subtitle">Top NFT on OpenSea</h2>
                                </div>
                            </div>
                            <div class="level-right">
                                <div class="level-item">
                                    <div class="field has-addons has-addons-centered">
                                        <div class="control">
                                            <a class="button is-small" disabled>
                                                <i class="far fa-chevron-left"></i>
                                            </a>
                                        </div>
                                        <div class="control">
                                            <a class="button is-small">
                                                <i class="far fa-chevron-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="columns">
                            {/* Add Nft Component Here */}
                            {displayCollections}
                        </div>
                    </section>
                    <section class="featured">
                        <div class="level">
                            <div class="level-left">
                                <div class="level-item">
                                    <h2 class="subtitle">Top NFT on Solanart</h2>
                                </div>
                            </div>
                            <div class="level-right">
                                <div class="level-item">
                                    <div class="field has-addons has-addons-centered">
                                        <div class="control">
                                            <a class="button is-small" disabled>
                                                <i class="far fa-chevron-left"></i>
                                            </a>
                                        </div>
                                        <div class="control">
                                            <a class="button is-small">
                                                <i class="far fa-chevron-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="columns">
                            {/* Add Nft Component Here */}
                            {displayCollections}
                        </div>
                    </section>
                    <section class="featured">
                        <div class="level">
                            <div class="level-left">
                                <div class="level-item">
                                    <h2 class="subtitle">Top NFT on CNFT</h2>
                                </div>
                            </div>
                            <div class="level-right">
                                <div class="level-item">
                                    <div class="field has-addons has-addons-centered">
                                        <div class="control">
                                            <a class="button is-small" disabled>
                                                <i class="far fa-chevron-left"></i>
                                            </a>
                                        </div>
                                        <div class="control">
                                            <a class="button is-small">
                                                <i class="far fa-chevron-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="columns">
                            {/* Add Nft Component Here */}
                            {displayCollections}
                        </div>
                    </section>
                    <section class="categories">
                        <div class="columns is-multiline">
                            <div class="column is-6">
                                <div class="category">
                                    <h1 class="title is-5">
                                        Billing & Accounts <span>5 articles</span>
                                    </h1>
                                    <hr />
                                    <ul>
                                        <li>
                                            <i class="fas fa-caret-right fa-xs icon-padding-right" />
                                            General Billing Overview
                                        </li>
                                        <li>
                                            <i class="fas fa-caret-right fa-xs icon-padding-right" />
                                            Changing the Account Owner
                                        </li>
                                        <li>
                                            <i class="fas fa-caret-right fa-xs icon-padding-right" />
                                            Downloading/Printing Your Invoices
                                        </li>
                                        <li>
                                            <i class="fas fa-caret-right fa-xs icon-padding-right" />
                                            Downloading/Printing Your Invoices
                                        </li>
                                        <li>
                                            <i class="fas fa-caret-right fa-xs icon-padding-right" />
                                            What to Do When Your Card is Declined
                                        </li>
                                    </ul>
                                    <h3 class="category-more">View All <i class="far fa-arrow-right icon-padding-left" /></h3>
                                </div>
                            </div>
                            <div class="column is-6">
                                <div class="category">
                                    <h1 class="title is-5">
                                        FAQs <span>7 articles</span>
                                    </h1>
                                    <hr />
                                    <ul>
                                        <li>
                                            <i class="fas fa-caret-right fa-xs icon-padding-right" />
                                            Why Isn't My Custom Profile Data Showing on My Tickets?
                                        </li>
                                        <li>
                                            <i class="fas fa-caret-right fa-xs icon-padding-right" />
                                            Why Won't My Gmail SMTP Settings Work?
                                        </li>
                                        <li>
                                            <i class="fas fa-caret-right fa-xs icon-padding-right" />
                                            Is There a Customer Portal My Users Can Log in To?
                                        </li>
                                        <li>
                                            <i class="fas fa-caret-right fa-xs icon-padding-right" />
                                            How Do I Export My Contacts, Tickets, Reports?
                                        </li>
                                        <li>
                                            <i class="fas fa-caret-right fa-xs icon-padding-right" />
                                            How Do I Search for a Number?
                                        </li>
                                    </ul>
                                    <h3 class="category-more">View All <i class="far fa-arrow-right icon-padding-left"></i></h3>
                                </div>
                            </div >
                            <div class="column is-6">
                                <div class="category">
                                    <h1 class="title is-5">
                                        Getting Started <span>6 articles</span>
                                    </h1>
                                    <hr />
                                    <ul>
                                        <li>
                                            <i class="fas fa-caret-right fa-xs icon-padding-right" />
                                            Creating a New Conversation
                                        </li>
                                        <li>
                                            <i class="fas fa-caret-right fa-xs icon-padding-right" />
                                            Assigning Conversations and Changing Status
                                        </li>
                                        <li>
                                            <i class="fas fa-caret-right fa-xs icon-padding-right" />
                                            Adding Internal Notes
                                        </li>
                                        <li>
                                            <i class="fas fa-caret-right fa-xs icon-padding-right" />
                                            Configuring Your Inbox View
                                        </li >
                                        <li>
                                            <i class="fas fa-caret-right fa-xs icon-padding-right" />
                                            Snoozing a Conversation
                                        </li >
                                    </ul >
                                    <h3 class="category-more">View All <i class="far fa-arrow-right icon-padding-left" /></h3>
                                </div >
                            </div >
                            <div class="column is-6">
                                <div class="category">
                                    <h1 class="title is-5">
                                        Users & Groups <span>3 articles</span>
                                    </h1>
                                    <hr />
                                    <ul>
                                        <li>
                                            <i class="fas fa-caret-right fa-xs icon-padding-right" />
                                            Understanding User Roles
                                        </li>
                                        <li>
                                            <i class="fas fa-caret-right fa-xs icon-padding-right" />
                                            Creating a Group
                                        </li>
                                        <li>
                                            <i class="fas fa-caret-right fa-xs icon-padding-right" />
                                            Editing the Role of a User
                                        </li>
                                    </ul >
                                    <h3 class="category-more">View All <i class="far fa-arrow-right icon-padding-left" /></h3>
                                </div >
                            </div >
                        </div >
                    </section >
                </div >
                <footer class="footer">
                    <div class="container">
                        <div class="content has-text-centered">
                            <div class="links">


                                <div class="level-item">
                                    <a href="#">Link One</a>
                                </div>
                                <div class="level-item">
                                    <a href="#">Link One</a>
                                </div>
                                <div class="level-item">
                                    <a href="#">Link One</a>
                                </div>
                            </div>
                            <p>
                                <a href="https://bulma.io">
                                    <img src="https://bulma.io/images/made-with-bulma.png" alt="Made with Bulma" width="128" height="24" />
                                </a>
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default NftContainer;