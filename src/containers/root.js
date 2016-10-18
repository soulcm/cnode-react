import React, { Component } from 'react';
// import Footer from 'components/footer';
import Header from 'components/header';
import VisibleTodoList from 'containers/visibleTodoList';
import Footer from 'components/footer';
// import TodoMain from 'components/todoMain';

import 'styles/index.less';

export default class Root extends Component {
    render() {
        return (
            <section className="todoapp">
                <Header />
                {this.props.children}
                <Footer />
            </section>
        )
    }
}
