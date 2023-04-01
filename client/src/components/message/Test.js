import React from "react";


class Test extends React.Component{
    constructor(){
        super()
            this.state ={
                text: 'hello world'
            }
    }
    render(){
        return (
            <div>
            <h1>
                {this.state.text}
            </h1>
            </div>
    )
}
}

export default Test