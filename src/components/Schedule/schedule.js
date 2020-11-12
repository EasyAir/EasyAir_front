import React, {useState, Fragment, Component} from 'react';
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import SchedulModal from './component'
import './schedule.css'

function Schedule() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
    <div className="scheduleBody">
      <Calendar
        onChange={onChange}
        value={value}
      />
      <SchedulModal></SchedulModal>
    </div>
    </div>
  );
}
export default Schedule;