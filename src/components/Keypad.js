// Code Keypad Component Here
import React, { Component } from 'react';
export default class Keypad extends Component{
    constructor(){
        super()
    }



    render(){
        return(
            <div>
                <input type="password" placeholder="enter password" onKeyUp={() => console.log('Entering password...')} />
            </div>
        )
    }
}