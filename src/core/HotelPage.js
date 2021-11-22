import React from "react";
import { Col, Card } from "react-bootstrap";
import CallButton from "./CallNowButton";
import img from "/images/img_avatar.png";

export default class HotelsPage extends React.Component {
  render() {
    return (
      <Col className="HotelPageCardPadding">
        <Card style={{ width: "20rem", margin: "auto" }}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{this.props.hotel["שם"]}</Card.Title>
            <Card.Text className="align-right">
              טלפון: {this.props.hotel["בית"]}-{this.props.hotel["טלפון"]}{" "}
              <br />
              כתובת: {this.props.hotel["שם רחוב"]}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <CallButton />
          </Card.Footer>
        </Card>
      </Col>
    );
  }
}
