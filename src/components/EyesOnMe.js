import React from 'react';

class EyesOnMe extends React.Component {
    handleBtnFocus = () => {
        console.log('Good!')
}
    handleBtnBlur = () => {
        console.log('Hey! Eyes on me!')
    }
    render() {
        return(
            <div>
                <button onFocus={this.handleBtnFocus} onBlur={this.handleBtnBlur}/>
                    Eyes on me, please!
                
            </div>
        )
    }
}
export default EyesOnMe;
