import React, { PureComponent } from "react";

import List from "./List";
import Trigger from "./Trigger";

import "../styles/index.css";

class Container extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selected: []
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
    console.log(index);
    const { selected } = this.state;
    const array = [...selected];
    array.splice(index, 1);
    this.setState({ selected: array });
  };

  render() {
    const { options } = this.props;
    const { selected } = this.state;
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
          />
        </div>
      </div>
    );
  }
}

export default Container;
