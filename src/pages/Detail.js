import React from "react";
import { Outlet, useParams } from "react-router-dom";

const Detail = (props) => {
  const { id } = useParams();
  const product = props.shoes.find((i) => {
    return i.id == id;
  });
  return (
    <div className="container">
      <div className="row">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                src="https://codingapple1.github.io/shop/shoes1.jpg"
                width="100%"
              />
            </div>
            <div className="col-md-6">
              <h4 className="pt-5">{product.title}</h4>
              <p>{product.content}</p>
              <p>{product.price}원</p>
              <button className="btn btn-danger">주문하기</button>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Detail;
