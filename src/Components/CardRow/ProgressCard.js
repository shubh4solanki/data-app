import React from "react";
import { ProgressBar } from "react-bootstrap";
import "./CardRow.css";

const ProgressCard = ({ progressData, progressbarInfo }) => {
  return (
    <div className="progress-container">
      <ProgressBar style={{ height: "10px" }} className="mb-2">
        <ProgressBar
          variant="success"
          now={progressbarInfo?.valid.percentage}
          key={1}
        />
        <ProgressBar
          variant="warning"
          now={progressbarInfo?.mismatched.percentage}
          key={2}
        />
        <ProgressBar
          variant="danger"
          now={progressbarInfo?.missing?.percentage}
          key={3}
        />
      </ProgressBar>
      <div className="pb-2">
        <div className="d-flex justify-content-between">
          <div className="d-flex progress-box justify-content-between">
            <div className="description d-flex align-items-center">
              Valid <div className="box valid" />
            </div>
            <div className="px-2 description">
              {progressbarInfo?.valid.total}
            </div>
          </div>
          <div className="other-data">{progressbarInfo?.valid.percentage}%</div>
        </div>
        <div className="d-flex justify-content-between">
          <div className="d-flex progress-box justify-content-between">
            <div className="description d-flex align-items-center">
              Mismatched <div className="box mismatched" />
            </div>
            <div className="px-2 description">
              {progressbarInfo?.mismatched.total}
            </div>
          </div>
          <div className="other-data">
            {progressbarInfo?.mismatched.percentage}%
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div className="d-flex progress-box justify-content-between">
            <div className="description d-flex align-items-center">
              Missing <div className="box missing" />
            </div>
            <div className="px-2 description">
              {progressbarInfo?.missing.total}
            </div>
          </div>
          <div className="other-data">
            {progressbarInfo?.missing.percentage}%
          </div>
        </div>
      </div>
      <div className="d-flex progress-box justify-content-between">
        <div className="description ">Unique</div>
        <div className="description px-2">{progressData?.uniqueCount}</div>
      </div>
      <div className="d-flex justify-content-between">
        <div className="d-flex progress-box justify-content-between">
          <div className="description d-flex align-items-center">
            Most Common
          </div>
          <div className="px-2 description">
            {progressData?.commonItem?.title}
          </div>
        </div>
        <div className="other-data">
          {progressData?.commonItem?.percentage}%
        </div>
      </div>
    </div>
  );
};

export default ProgressCard;
