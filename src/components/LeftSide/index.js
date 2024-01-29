import React, { useEffect, useCallback, useState } from "react";
import styles from "./leftSide.module.css";
import Calendar from "../Calender";
import { getSlot } from "@/src/slice/bookingSlice";
import moment from "moment";
import { useDispatch } from "react-redux";
const LeftSide = () => {
  const [value, setValue] = useState(moment());

  const dispatch = useDispatch();

  useEffect(() => {
    const start_date = value.format("YYYY-MM-DD");
    const end_date = moment(start_date).add(1, "day").format("YYYY-MM-DD");

    const data = { start_date , end_date}

    dispatch(getSlot(data));
  }, [value]);

  return (
    <div className={styles.leftSide}>
      <h2>Test Service</h2>
      <p>
        <span>Timezone</span> : Asia/Calcutta
      </p>
      <Calendar value={value} onChange={setValue} />
    </div>
  );
};

export default LeftSide;
