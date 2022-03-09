import React  from 'react'
import Button from './Button'
class Counter extends React.Component{

    constructor(){
        super()
        this.state={
        counter:0
    }
        }
        add =()=>{
            this.setState({counter:this.state.counter+1})

        }
        decrease=()=>{
            if(this.state.counter>0){
               this.setState({counter:this.state.counter-1})
            }
          
            
        }
        render(){
           return(
                 <div>
                     <h1>{this.state.counter}</h1>
                     <Button title="increase" clickHandler={this.add}/>
                     <Button title="decrease" clickHandler={this.decrease}/>
                 </div>
           )
             
           
        }
           
    } 
    export default Counter
