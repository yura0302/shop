import "./App.css";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import 이미지이름 from "./bg.png";
import { useState } from "react";
import data from "./data";
import Detail from "./pages/Detail";
import Error from "./Error";
import Event from "./pages/Event";
import {
  Route,
  Routes,
  Link,
  useNavigate,
  Outlet,
  Navigate,
} from "react-router-dom";

function App() {
  const [shoes] = useState(data);
  const navigate = useNavigate();
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/Detail");
              }}
            >
              Detail
            </Nav.Link>
            <Nav.Link href="#question">묻고 답하기</Nav.Link>
            <Nav.Link href="#news">공지사항</Nav.Link>
            <Nav.Link href="#info">판매자 정보</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div
                className="main-bg"
                style={{ backgroundImage: "url(" + 이미지이름 + ")" }}
              ></div>
              <Container>
                <Row>
                  {shoes.map((item, i) => {
                    return <Card key={item.id} shoes={shoes[i]} i={i}></Card>;
                  })}
                </Row>
              </Container>
            </div>
          }
        ></Route>
        <Route path="/detail" element={<Detail shoes={shoes} />}>
          <Route path="shoes" element={<div>하이</div>} />
          <Route path="pants" element={<div>팬츠하이</div>} />
          <Route path="shirt" element={<div>셔츠하이</div>} />
        </Route>
        <Route path="/event" element={<Event></Event>}>
          <Route path="one" element={<div>첫 주문시 신발 모두 무료 </div>} />
          <Route path="two" element={<div>생일기념 쿠폰 받기</div>} />
        </Route>
        <Route path="/*" element={<Error />}></Route>
      </Routes>
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
