import React,{Component} from 'react'
import '../App.css'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

class EventCalendar extends Component {



    render() {
        return (
            <FullCalendar 
            
            defaultView="dayGridMonth" plugins={[dayGridPlugin]}

            />
        )
    }
}

export default EventCalendar;