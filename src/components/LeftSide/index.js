import React , {useEffect , useCallback , useState} from 'react'
import styles from "./leftSide.module.css"
import Calendar from '../Calender'
import { getSlot } from '@/src/slice/bookingSlice'
import moment from "moment";
const LeftSide = () => {
    const [value, setValue] = useState(moment());

    // useEffect(() => {
    //   getSlot()
    // }, [value])


    console.log(value , "value")
    
  return (
    <div className={styles.leftSide}>
    <h2>Test Service</h2>
    <p>
      <span>Timezone</span> : Asia/Calcutta
    </p>
    <Calendar value={value} onChange={setValue} />
  </div>
  )
}

export default LeftSide