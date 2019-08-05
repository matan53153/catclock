import React from "react"
import TimeSetters from "./TimeSetters.js"
import "./App.css"

class Clock extends React.Component {

    state = {
        time: new Date(),
        greetingText: "MEOW"
    };

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            time: new Date()
        })
    }

    handleClick = (e) => {
        let currentHour = e.target.value
        let time = new Date()
        if (Number(currentHour) === Number(time.getHours())) {
            this.setState({
                greetingText: "GOOD MORNING!"
            })
        }
    }

    handleClick2 = (e) => {
        let currentHour = e.target.value
        let time = new Date()
        if (Number(currentHour) === Number(time.getHours())) {
            this.setState({
                greetingText: "LUNCH TIME!"
            })
        }
    }

    handleClick3 = (e) => {
        let currentHour = e.target.value
        let time = new Date()
        if (Number(currentHour) === Number(time.getHours())) {
            this.setState({
                greetingText: "GOOD NIGHT!"
            })
        }
    }

    render() {

        return (
            <div className="main">
                <h1 className="title">LOLCAT CLOCK</h1>
                <h2 className="timeHeader">I CAN HAZ TIME?</h2>
                <h2 className="time">{this.state.time.toLocaleTimeString()}.</h2>
                <div className="imageContainer">
                    <img
                        className="image"
                        src="https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg"
                    />
                    <blockquote className="text">
                        {this.state.greetingText}
                    </blockquote>
                </div>
                <TimeSetters onChange={this.handleClick} text="SET WAKE UP TIME" />
                <TimeSetters onChange={this.handleClick2} text="SET LUNCH TIME" />
                <TimeSetters onChange={this.handleClick3} text="SET NAP TIME" />
            </div>
        );
    }
}

export default Clock