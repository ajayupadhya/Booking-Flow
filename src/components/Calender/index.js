import React, { useState, useEffect } from "react";
import buildCalendar from "./buildCalender";
import styles from "./calenderStyles.module.css"

export default function Calendar({ value, onChange }) {
  const [calendar, setCalendar] = useState([]);
  //   const [value, setValue] = useState(moment());

  useEffect(() => {
    setCalendar(buildCalendar(value));
  }, [value]);

  function isSelected(day, value) {
    return value.isSame(day, "day");
  }

  function beforeToday(day) {
    return day.isBefore(new Date(), "day");
  }

  function isToday(day) {
    return day.isSame(new Date(), "day");
  }

  function dayStyles(day, value) {
    if (beforeToday(day)) return styles.before;
    if (isSelected(day, value)) return styles.selected;
    if (isToday(day)) return styles.today;
    return "";
  }

  function currMonthName() {
    return value.format("MMMM");
  }

  function currYear() {
    return value.format("YYYY");
  }

  function prevMonth() {
    return value.clone().subtract(1, "month");
  }

  function nextMonth() {
    return value.clone().add(1, "month");
  }

  function thisMonth() {
    return value.isSame(new Date(), "month");
  }

  return (
    <div className={styles.calendar}>
      <div className={styles.caledar_header}>
        <div
          className={styles.previous_year}
          onClick={() => !thisMonth() && onChange(prevMonth())}
        >
          {!thisMonth() ? String.fromCharCode(0x003C) : null}
        </div>
        <div className={styles.current}>
          {currMonthName()} {currYear()}
        </div>
        <div className={styles.next_year} onClick={() => onChange(nextMonth())}>
          {String.fromCharCode(0x003E)}
        </div>
      </div>
      <div className={styles.weekdays}>
        <p>Sun</p>
        <p>Mon</p>
        <p>Tue</p>
        <p>Wed</p>
        <p>Thu</p>
        <p>Fri</p>
        <p>Sat</p>
      </div>
      <div className={styles.calendar_body}>
        {calendar.map((week , i) => (
          <div className={styles.calendar_week} key={i}>
            {week.map((day , index) => (
              <div
                className={styles.calendar_day}
                onClick={() => !beforeToday(day) && onChange(day)}
                key={index}
              >
                <div className={dayStyles(day, value)}>
                  {day.format("D").toString()}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}