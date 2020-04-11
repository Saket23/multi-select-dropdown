import React from "react";

import "../styles/list.css";

const List = ({ options, selected, handleListOnClick }) => {
  return (
    <div className="list">
      {options &&
        options.map((value, index) => {
          return (
            <div className="list__item" key={index}>
              <input
                type="checkbox"
                onClick={handleListOnClick(value)}
                value={selected[index] ? true : false}
              />
              {value}
            </div>
          );
        })}
    </div>
  );
};

export default List;
