import React, {Component} from 'react';
import './style.css';

class StopWatch extends Component {

    constructor(props) {

        super(props)

        this.state = {
            time: 0, 
            isPaused: false,
            isZero: true
        }

        this.pauseTimer = this.pauseTimer.bind(this)
        this.resetTimer = this.resetTimer.bind(this)

    }

    pauseTimer() {
        let currentTime = this.state.time
        this.setState({
            isPaused: true, 
            time: currentTime
        })
    }

    resetTimer() {
        this.setState({
            time: 0,
            isZero: true
        })
    }

    componentDidMount() {

        setInterval(() => {

            if (this.state.time < 60 && !this.state.isPaused) {

                this.setState({
                    time: this.state.time + 1, 
                    isZero: false
                })

            }

            else if (!this.state.isPaused) {
                this.setState({
                    time: 0, 
                    isZero: true
                })
            }

        }, 1000);

    }

    render() {
        
        let today       = new Date();
        let day         = today.getDate();
        let month       = today.getMonth();
        let year        = today.getFullYear();
        let parsedDate  = day + '-' + month + '-' + year 
        
        return (
            <div>
                StopWatch Component
                <div id="clock">
                    <p className="date">{parsedDate}</p>
                    <p className="time">00:00:0{this.state.time}</p>
                    <p className="text">DIGITAL CLOCK with React.js</p>
                </div>
                <div className="btn" onClick={this.pauseTimer}>{ this.state.isZero ? 'Start' : 'Stop' }</div>
                <div className="btn" onClick={this.resetTimer}>Reset</div>
            </div>
        )
    }

}

export default StopWatch