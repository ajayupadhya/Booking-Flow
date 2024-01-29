import React, { useState, useEffect } from "react";
import styles from "./rightSide.module.css";
import { useSelector } from "react-redux";
import { DivideSlotsIntoTimeFrame } from "../../../lib/helperFunction";
import Image from "next/image";
import CircleCheck from "../../../images/svg/circleCheck.svg";
import moment from "moment";
const RightSide = () => {
  const slots = useSelector((state) => state.bookingSlice.slots);
  const [selectedValue, setSelectedValue] = useState(15);
  const [filteredSlots, setFilteredSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState({})
  useEffect(() => {
    if (slots) {
      const slotsToSend = slots?.slots?.length > 0 ? slots?.slots : [];
      const filtered = DivideSlotsIntoTimeFrame(slotsToSend, selectedValue);
      setFilteredSlots([...filtered]);
    }
  }, [selectedValue, slots]);

  const getSelectedTimeSlot = (slot) => {
    setSelectedSlot(slot)
  };

  
  

  return (
    <div className={styles.rightSide}>
      <div className={styles.selectValueContainer}>
        <label for="variants-select">SELECT FROM VARIANTS</label>

        <select
          name="variants"
          id="variants-select"
          onChange={(e) => setSelectedValue(e.target.value)}
          className={styles.selectInput}
        >
          <option value={15}>15</option>
          <option value={30}>30</option>
          <option value={60}>60</option>
        </select>
      </div>
      <hr className={styles.line} />
      <div className={styles.availableSlotsContainer}>
        <p>{moment(slots.date).format("dddd, MMM D")} - Available Slots</p>
        <div className={styles.availableSlots}>
          {filteredSlots.map((item, index) => {
            return (
              <div
                className={item === selectedSlot ? styles.singleSlotSelected : styles.singleSlots}
                key={index}
                onClick={() => getSelectedTimeSlot(item)}
              >
                <p>
                  {moment(item.start_time).format("LT")} -{" "}
                  {moment(item.end_time).format("LT")}
                </p>

                <Image src={CircleCheck} width={30} height={30} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RightSide;
