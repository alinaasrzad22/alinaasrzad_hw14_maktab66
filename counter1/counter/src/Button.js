import React from 'react'
class Button extends React.Component{

    render(){
        return (
            <button onClick = {this.props.clickHandler} >
             {this.props.title}
            </button>
        )
    }


}
export default Button