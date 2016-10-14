import React, {Component} from 'react'
import ReactDom from 'react-dom'

export default class App extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                基本测试1
            </div>
        )
    }
}


const dom = document.getElementById('app')

ReactDom.render(<App />, dom)



