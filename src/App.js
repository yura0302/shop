import "./App.css";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import 이미지이름 from "./bg.png";
import { useState } from "react";
import data from "./data";

function App() {
  const [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">홈</Nav.Link>
            <Nav.Link href="#features">전체상품</Nav.Link>
            <Nav.Link href="#question">묻고 답하기</Nav.Link>
            <Nav.Link href="#news">공지사항</Nav.Link>
            <Nav.Link href="#info">판매자 정보</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div
        className="main-bg"
        style={{ backgroundImage: "url(" + 이미지이름 + ")" }}
      ></div>

      <Container>
        <Row>
          {shoes.map((a, i) => {
            return <Card shoes={shoes[i]} i={i}></Card>;
          })}
        </Row>
      </Container>
    </div>
  );
}

function Card(props) {
  return (
    <>
      <Col sm>
        <img
          alt="#"
          src={
            "https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"
          }
          width={"80%"}
        ></img>
        <h4>{props.shoes.title}</h4>
        <p>{props.shoes.price}</p>
      </Col>
    </>
  );
}

export default App;
