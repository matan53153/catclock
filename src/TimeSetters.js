import React from "react"
import "./App.css"

function TimeSetters(props) {
    return (
        <div className="timeSetting">
            <span>{props.text}</span>
            <select onChange={props.onChange} className="optionSelection">
                <option value="1">1 AM - 2AM</option>
                <option value="2">2 AM - 3AM</option>
                <option value="3">3 AM - 4AM</option>
                <option value="4">4 AM - 5AM</option>
                <option value="5">5 AM - 6AM</option>
                <option value="6">6 AM - 7AM</option>
                <option value="7">7 AM - 8AM</option>
                <option value="8" selected>8 AM - 9AM</option>
                <option value="9">9 AM - 10AM</option>
                <option value="10">10 AM - 11AM</option>
                <option value="11">11 AM - 12PM</option>
                <option value="12">12 PM - 1PM</option>
                <option value="13">1 PM - 2PM</option>
                <option value="14">2 PM - 3PM</option>
                <option value="15">3 PM - 4PM</option>
                <option value="16">4 PM - 5PM</option>
                <option value="17">5 PM - 6PM</option>
                <option value="18">6 PM - 7PM</option>
                <option value="19">7 PM - 8PM</option>
                <option value="20">8 PM - 9PM</option>
                <option value="21">9 PM - 10PM</option>
                <option value="22">10 PM - 11PM</option>
                <option value="23">11 PM - 12AM</option>
                <option value="24">12 AM - 1AM</option>
            </select>
        </div>
    )
}

export default TimeSetters