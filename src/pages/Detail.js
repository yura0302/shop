import React from "react";
import { useParams } from "react-router-dom";

const Detail = ({ shoes }) => {
  const { id } = useParams();
  return (
    <div className="container">
      <div className="row">
        {shoes.map((item, index) => {
          return (
            <div key={item.id} className="container">
              <div className="row">
                <div className="col-md-6">
                  <img
                    src={`https://codingapple1.github.io/shop/shoes${
                      index + 1
                    }.jpg`}
                    width="100%"
                  />
                </div>
                <div className="col-md-6">
                  <h4 className="pt-5">{item.title}</h4>
                  <p>{item.content}</p>
                  <p>{item.price}</p>
                  <button className="btn btn-danger">주문하기</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Detail;
