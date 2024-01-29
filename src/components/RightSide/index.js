import React, { useState } from "react";
import styles from "./rightSide.module.css"
const RightSide = () => {
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <div className={styles.rightSide}>
      <div>
        <label for="pet-select">Choose a pet:</label>

        <select
          name="variants"
          id="variants-select"
          onChange={(e) => setSelectedValue(e.target.value)}
        >
          <option value="">Select FROM Variants</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
          <option value="spider">Spider</option>
          <option value="goldfish">Goldfish</option>
        </select>
      </div>
    </div>
  );
};

export default RightSide;
