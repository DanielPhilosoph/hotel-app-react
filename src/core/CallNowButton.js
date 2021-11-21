import React from "react";
import { Button } from "react-bootstrap";

export default class CallButton extends React.Component {
  constructor(props) {
    super(props);
    this.name = this.props.name;
  }

  render() {
    return (
      <div>
        <Button
          type="button"
          data-name={this.name}
          variant="outline-success"
          size="sm"
        >
          Call me now!
        </Button>
      </div>
    );
  }
}
