import React, { PureComponent } from "react";

import List from "./List";
import Trigger from "./Trigger";

import "../styles/index.css";

class Container extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
      selectAllSelected: false,
      searchValue: "",
      isDropdownVisible: true
    };
    this.ref = React.createRef();
    this.setIsDropdownVisible = this.setIsDropdownVisible.bind(this);
  }

  componentDidMount() {
    const { isDropdownVisible } = this.state;
    if (isDropdownVisible) {
      document.addEventListener("mousedown", this.handleClick);
    }
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClick);
  }

  handleListOnClick = option => event => {
    const { selected } = this.state;
    let newArray = [];
    newArray = event.target.checked
      ? selected.concat([option])
      : selected.filter(name => option !== name);
    this.setState({ selected: newArray });
  };

  handleRemoveSelected = index => event => {
    const { selected } = this.state;
    const array = [...selected];
    array.splice(index, 1);
    this.setState({ selected: array });
  };

  handleSelectAll = event => {
    const { options } = this.props;
    event.target.checked
      ? this.setState({ selected: options })
      : this.setState({ selected: [] });
    this.setState({ selectAllSelected: event.target.checked, searchValue: "" });
  };

  handleSearchChange = event => {
    this.setState({ searchValue: event.target.value });
  };

  setIsDropdownVisible() {
    this.setState({ isDropdownVisible: !this.state.isDropdownVisible });
  }

  handleClick = e => {
    if (
      this.ref &&
      this.ref.current &&
      this.ref.current.innerHTML.includes(e.target.innerHTML)
    ) {
      // inside click
      return;
    }
    // outside click
    this.setIsDropdownVisible(false);
  };

  render() {
    const { options } = this.props;
    const {
      selected,
      selectAllSelected,
      searchValue,
      isDropdownVisible
    } = this.state;
    const dropdownOptions = options.filter(option => {
      return option.includes(searchValue);
    });
    return (
      <div className="container">
        <div className="container__dropdown" ref={this.ref}>
          <Trigger
            selected={selected}
            handleRemoveSelected={this.handleRemoveSelected}
            setIsDropdownVisible={this.setIsDropdownVisible}
            isDropdownVisible={isDropdownVisible}
          />
          {isDropdownVisible && (
            <List
              options={dropdownOptions}
              handleListOnClick={this.handleListOnClick}
              selected={selected}
              handleSelectAll={this.handleSelectAll}
              selectAllSelected={selectAllSelected}
              handleSearchChange={this.handleSearchChange}
              searchValue={searchValue}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Container;
