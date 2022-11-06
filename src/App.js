import "./App.css";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import 이미지이름 from "./bg.png";

function App() {
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
          <Col sm>
            <img
              alt="#"
              src="https://codingapple1.github.io/shop/shoes1.jpg"
              width={"80%"}
            ></img>
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
          <Col sm>
            <img
              alt="#"
              src="https://codingapple1.github.io/shop/shoes2.jpg"
              width={"80%"}
            ></img>
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
          <Col sm>
            <img
              alt="#"
              src="https://codingapple1.github.io/shop/shoes3.jpg"
              width={"80%"}
            ></img>
            <h4>상품명22222222</h4>
            <p>상품설명</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
