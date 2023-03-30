import React from 'react';
class DigitalClock extends React.Component{
    state={d:new Date()};
    componentDidMount(){
        this.timerID=setInterval(()=>{
            this.setState({d:new Date()})
        },1000);
    };
    render(){
        return(
            <div>
                <h1>Digital Clock Demo</h1>
                <h1>{this.state.d.toLocaleTimeString()}</h1>
            </div>
        );
    };
}
export default DigitalClock;