import { cleanup } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";

function Detail(props) {
  const [alarm, setAlarm] = useState(true);
  const [input, setInput] = useState("");
  const { id } = useParams();
  const product = props.shoes.find((i) => i.id === id);

  useEffect(() => {
    const a = setTimeout(() => {
      setAlarm(false);
    }, 1000);
    return () => {
      cleanup(a);
    };
  }, []);

  useEffect(() => {
    if (isNaN(input) === true) {
      alert("이러지마시오");
    }
    return (
      <input
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
    );
  }, [input]);

  return (
    <div className="container">
      {alert === true ? (
        <div className="alert alert-warning">1초 이내 구매 시 신발 공짜</div>
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
          <input placeholder="수량 입력란" type="number"></input>
          <h4 className="pt-5">{product?.title}</h4>
          <p>{product?.content}</p>
          <p>{product?.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
export default Detail;
