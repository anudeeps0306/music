import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Post from "./Post"

type Props = {}

const Body = (props: Props) => {
  return (
    <Container fluid style={{height: "auto"}}>
        <Row style={{height: "50%"}}>
          <Col>
            <h2 className="text-center">Released this week</h2>
            <Post/>
          </Col>
        </Row>
        <Row style={{height: "50%"}}>
          <Col>
            <h2 className="text-center">Featured Playlists</h2>
          </Col>
        </Row>
    </Container>
  )
}

export default Body;