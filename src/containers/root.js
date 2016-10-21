import React, { Component } from 'react';

import Header from '../containers/header';
import Footer from '../components/footer';

import '../styles/index.less';

export default class Root extends Component {
    render() {
        return (
            <div>
                <section className="todoapp">
                    <Header />
                    {this.props.children}
                    <Footer />
                </section>
                <footer className="info">
                    <p>Double-click to edit a todo</p>
                    <p>Created by <a target="_blank" href="https://github.com/soulcm/react-redux-todo">soulcm</a></p>
                </footer>
            </div>

        )
    }
}
