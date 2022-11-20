import { cleanup } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { addItem } from "../store";
import { useDispatch } from "react-redux";

function Detail(props) {
  const [alarm, setAlarm] = useState(true);
  const { id } = useParams();
  const [tap, setTap] = useState(0);
  let [fade1, setFade1] = useState("");
  let product = props.shoes.find(function (x) {
    return x.id == id;
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goToCart = () => {
    navigate("/cart");
  };

  useEffect(() => {
    const a = setTimeout(() => {
      setAlarm(false);
    }, 150);
    return () => {
      cleanup(a);
    };
  }, []);

  useEffect(() => {
    setFade1("end");
    return () => {
      setFade1("");
    };
  }, []);

  return (
    <div className={"container start" + fade1}>
      {
        <div className="container">
          {alert === true ? (
            <div className="alert alert-warning">
              1초 이내 구매 시 신발 공짜
            </div>
          ) : null}
          <div className="row">
            <div className="col-md-6">
              <img
                alt="#"
                src={`https://codingapple1.github.io/shop/shoes${+id + 1}.jpg`}
                // 나누기는 숫자형으로 자동변환되서 계산됨 ==자동형변환
                width="100%"
              />
            </div>
            <div className="col-md-6 mt-4">
              {/* <input placeholder="수량 입력란" type="number"></input> */}
              <h4 className="pt-5">{product?.title}</h4>
              <p>{product?.content}</p>
              <p>{product?.price}원</p>
              <button
                className="btn btn-danger"
                onClick={() => {
                  goToCart();
                  dispatch(addItem({ id: 1, name: "Red Knit", count: 1 }));
                }}
              >
                주문하기
              </button>
            </div>
          </div>
          <Outlet />

          <Nav variant="tabs" defaultActiveKey="link0">
            <Nav.Item>
              <Nav.Link
                onClick={() => {
                  setTap(0);
                }}
                eventKey="link0"
              >
                버튼0
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                onClick={() => {
                  setTap(1);
                }}
                eventKey="link1"
              >
                버튼1
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                onClick={() => {
                  setTap(2);
                }}
                eventKey="link2"
              >
                버튼2
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <TapContent tap={tap} shoes={props.shoes} />
        </div>
      }
    </div>
  );
}

const TapContent = ({ tap, shoes }) => {
  const [fade, setFade] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setFade("end");
    }, 200);
    return () => {
      setFade("");
    };
  }, [tap]);

  return (
    <div className={"start " + fade}>
      {
        [
          <div>{shoes[0].title}</div>,
          <div>{shoes[1].title}</div>,
          <div>{shoes[2].title}</div>,
        ][tap]
      }
    </div>
  );
};
export default Detail;
