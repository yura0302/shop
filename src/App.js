import "./App.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import 이미지이름 from "./bg.png";
import { useState } from "react";
import data from "./data";
import Detail from "./pages/Detail";
import Error from "./Error";
import Event from "./pages/Event";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import _ from "lodash";

function App() {
  const [shoes, setShoes] = useState(data);
  const navigate = useNavigate();
  const [button, setButton] = useState(1);
  const [load, setLoad] = useState(false);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">ShoeShop</Navbar.Brand>
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
            <>
              <div
                className="main-bg"
                style={{ backgroundImage: "url(" + 이미지이름 + ")" }}
              ></div>
              <div className="container">
                <div className="row">
                  {shoes.map((item, i) => {
                    return <Card key={item.id} shoes={shoes[i]}></Card>;
                  })}
                </div>
              </div>

              <button
                onClick={() => {
                  setLoad(true);
                  setButton(button + 1);
                  if (button === 1) {
                    axios
                      .get("https://codingapple1.github.io/shop/data2.json")
                      .then((result) => {
                        const copy = _.union(shoes, result.data);
                        setShoes(copy);
                      })
                      .catch(() => {
                        console.log("히히 못줘");
                      })
                      .finally(() => {
                        setLoad(false);
                      });
                  } else if (button === 2) {
                    axios
                      .get("https://codingapple1.github.io/shop/data3.json")
                      .then((result) => {
                        const copy = _.union(shoes, result.data);
                        setShoes(copy);
                      })
                      .catch(() => {
                        console.log("히히 못줘");
                      })
                      .finally(() => {
                        setLoad(false);
                      });
                  } else if (button >= 3) {
                    alert("이게 끝임");
                  }
                }}
              >
                더보기
              </button>
            </>
          }
        ></Route>
        <Route path="/detail/:id" element={<Detail shoes={shoes} />}>
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

function Card({ shoes }) {
  return (
    <>
      <div className="col-md-4">
        <img
          alt="#"
          src={
            "https://codingapple1.github.io/shop/shoes" +
            (shoes.id + 1) +
            ".jpg"
          }
          width={"80%"}
        ></img>
        <h4>{shoes.title}</h4>
        <p>{shoes.price}</p>
        <Link to={`/detail/${shoes.id}`}>
          <button type="button" className="btn btn-primary">
            더보기
          </button>
        </Link>
      </div>
    </>
  );
}

export default App;
