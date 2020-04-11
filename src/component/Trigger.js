import React from "react";
import "../styles/trigger.css";

const Trigger = ({
  selected,
  isDropdownVisible,
  handleRemoveSelected,
  setIsDropdownVisible
}) => {
  return (
    <div className="trigger" onClick={setIsDropdownVisible}>
      <div className="trigger__selected">
        {selected &&
          selected.map((data, index) => (
            <div
              key={index}
              className="trigger__selected__items"
              onClick={handleRemoveSelected(index)}
            >
              <span>{data}</span>
              <span className="x">x</span>
            </div>
          ))}
      </div>
      <div className="trigger__caret">
        <span
          className={isDropdownVisible ? "caret-close" : "caret-open"}
        ></span>
      </div>
    </div>
  );
};

export default Trigger;
