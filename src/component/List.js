import React from "react";

import "../styles/list.css";

const List = ({
  options,
  selected,
  handleListOnClick,
  handleSelectAll,
  selectAllSelected,
  handleSearchChange,
  searchValue
}) => {
  return (
    <div className="list">
      <div className="list__fixed">
        <div className="list__item list__select-all">
          <input
            type="checkbox"
            onChange={handleSelectAll}
            value={selectAllSelected}
          />
          Select all
        </div>
        <div className="list__item list__search">
          <input
            type="text"
            onChange={handleSearchChange}
            value={searchValue}
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="list__wrapper">
        {options &&
          options.map((value, index) => {
            return (
              <div className="list__item" key={index}>
                <input
                  type="checkbox"
                  onChange={handleListOnClick(value)}
                  checked={selected.indexOf(value) !== -1 ? true : false}
                />
                {value}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default List;
