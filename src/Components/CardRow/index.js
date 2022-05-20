import React, { useState, useEffect } from "react";
import DetailCard from "./DetailCard";
import ProgressCard from "./ProgressCard";
import { getCardData, findProgressInfo } from "../../helper";
import "./CardRow.css";

const CardRow = ({ cardInfo, rows }) => {
  const [cardDetails, setCardDetails] = useState([]);
  const [progressbarInfo, setProgressbarInfo] = useState([]);

  const getDetails = () => {
    let cardDetail = [];
    let progressInfo = [];

    cardInfo.forEach((field) => {
      // Extracting a coulmn/field from all rows
      let fieldData = rows?.map((item) => item[field.title]);

      // Calculating required data from field data
      const calculateVal = getCardData(fieldData);

      // Data analysis for mismatch, missing and valid values
      progressInfo.push(findProgressInfo(fieldData));

      cardDetail.push(calculateVal);
    });

    setCardDetails(cardDetail);
    setProgressbarInfo(progressInfo);
  };

  useEffect(() => {
    getDetails();
  }, [rows]);

  return (
    <div>
      {cardInfo.map((item, index) => {
        return (
          <div className="container border-bottom p-3" key={index}>
            <div className="title">
              <span className="title-text">A</span> {item?.title}
            </div>
            <div className="description">{item?.description}</div>
            <div className="card-container">
              <DetailCard
                details={item}
                detailData={cardDetails[index]?.detailCardData}
              />
              <ProgressCard
                progressData={cardDetails[index]?.progressCardData}
                progressbarInfo={progressbarInfo[index]}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardRow;
