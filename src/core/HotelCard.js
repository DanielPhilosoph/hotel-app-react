import React from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import CallButton from "./CallNowButton";
import { kebabCase } from "../helpers/kebab";

export default class HotelCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return (
      <Col className="CardPadding">
        <Card>
          <Link
            className="hotelLinkStyle"
            to={{
              pathname: `/hotel/${encodeURI(kebabCase(this.props.name))}`,
            }}
          >
            <Card.Img variant="top" src="/images/img_avatar.png" />
            <Card.Body>
              <Card.Title>{this.props.name}</Card.Title>
              <Card.Text className="align-right">
                טלפון: {this.props.home}-{this.props.phone} <br />
                כתובת: {this.props.address}
              </Card.Text>
            </Card.Body>
          </Link>
          <Card.Footer>
            <CallButton />
          </Card.Footer>
        </Card>
      </Col>
    );
  }
}
