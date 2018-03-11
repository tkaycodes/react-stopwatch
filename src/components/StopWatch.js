import React, {Component} from 'react';
import './style.css';

class StopWatch extends Component {

    render() {
        return (
            <div>
                StopWatch Component
                <div id="clock">
                    <p className="date">Mon Jan 14 2018</p>
                    <p className="time">03:39:00</p>
                    <p className="text">DIGITAL CLOCK with Vue.js</p>
                </div>
            </div>
        )
    }

}

export default StopWatch