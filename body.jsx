import React, { Component } from "react";
import { Container, Content } from "./bodyStyle";
import img from "../rasm/img.png";

export default class body extends Component {
  render() {
    return (
      <Container>
        <Container.Left>
          <Content>
            Making time a good time by making food the good food.
          </Content>
        </Container.Left>
        <Container.Right src={img} alt="ashjk" />
      </Container>
    );
  }
}
