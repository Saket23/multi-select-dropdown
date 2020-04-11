import React, { PureComponent } from "react";

import List from "./List";
import Trigger from "./Trigger";

import "../styles/index.css";

class Container extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
      selectAllSelected: false
    };
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
    this.setState({ selectAllSelected: event.target.checked });
  };

  render() {
    const { options } = this.props;
    const { selected, selectAllSelected } = this.state;
    return (
      <div className="container">
        <div className="container__dropdown">
          <Trigger
            selected={selected}
            handleRemoveSelected={this.handleRemoveSelected}
          />
          <List
            options={options}
            handleListOnClick={this.handleListOnClick}
            selected={selected}
            handleSelectAll={this.handleSelectAll}
            selectAllSelected={selectAllSelected}
          />
        </div>
      </div>
    );
  }
}

export default Container;
