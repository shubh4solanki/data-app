import React from "react";
import "./CardRow.css";

const DetailCard = ({ detailData }) => {
  return (
    <div className="detail-container mr-3">
      <div>
        {detailData?.fieldPercentages.map((row, index) => (
          <div key={index} className="d-flex justify-content-between mt-3">
            <div className="description">{row?.title}</div>
            <div className="description percentage">{row?.percentage}%</div>
          </div>
        ))}
        <div className="d-flex justify-content-between mt-3">
          <div className="other-data">Other({detailData?.otherCount})</div>
          <div className="other-data">{detailData?.otherPercentage}%</div>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
