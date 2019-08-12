import React, { Component } from 'react'

export class EyesOnMe extends Component {

    handleFocus = () => {
        console.log('Good!')
    }

    handleBlur = () => {
        console.log('Hey! Eyes on me!')
    }

    render() {
        return (
            <div>
                <button
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                />
            </div>
        )
    }
}

export default EyesOnMe
// Code EyesOnMe Component Here
