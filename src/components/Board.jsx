import React from "react";
import styled from "styled-components";
import { faUpload, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PropTypes } from "prop-types";

const StyledBoard = styled.div`
  background-color: white;
  width: 50%;
  @media all and (max-width: 768px) {
    width: 100%;
  }
  margin: 30px 0;
  border-radius: 7px;
  text-align: left;
  & .titleWrapper {
    padding: 10px 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    & p {
      width: 100%;
    }
    & h2 {
      margin-left: 10px;
    }
    & .uploadIcon {
      font-size: 1.5rem;
      path {
        fill: #3eb1eb;
      }
    }
    & .infoIcon {
      font-size: 1.5rem;
      margin-left: auto;
      cursor: pointer;
      path {
        fill: #a3a0a0;
      }
    }
  }
  & .data-table {
    display: flex;
    justify-content: center;
    width: 100%;
    flex-wrap: wrap;
    align-items: center;
    border-top: 1px solid #d4d4d4;
    & .data-item {
      display: flex;
      flex: 1;
      flex-direction: column;
      text-align: left;
      padding: 40px 25px;
      @media all and (max-width: 768px) {
        width: 100%;
        flex: unset;
      }
      &:first-child {
        border-right: 1px solid #d4d4d4;
      }
      & .percent {
        font-size: 2.7rem;
        color: #27ad5b;
        font-weight: bold;
      }
      & .info {
        color: #a3a0a0;
        text-transform: uppercase;
        font-weight: bold;
      }
    }
  }
`;

const Board = ({ className, data }) => {
  const sucessRate =
    Math.round((data.successfulUploads / data.uploads) * 1000) / 10;
  const linesRate =
    Math.round((data.linesSaved / data.linesAttempted) * 1000) / 10;
  return (
    <StyledBoard className={className}>
      <div className="titleWrapper">
        <FontAwesomeIcon icon={faUpload} className="uploadIcon" aria-hidden />
        <h2>Sales</h2>
        <FontAwesomeIcon icon={faInfoCircle} className="infoIcon" aria-hidden />
        <p>
          You had <strong>{data.uploads} uploads</strong> and{" "}
          <strong>{data.linesSaved}</strong> lines added
        </p>
      </div>
      <div className="data-table">
        <div className="data-item">
          <span className="percent">{sucessRate}%</span>
          <span className="info">Upload success</span>
        </div>
        <div className="data-item">
          <span className="percent">{linesRate}%</span>
          <span className="info">Lines saved</span>
        </div>
      </div>
    </StyledBoard>
  );
};

Board.propTypes = {
  uploads: PropTypes.number.isRequired,
  successfulUploads: PropTypes.number.isRequired,
  linesAttempted: PropTypes.number.isRequired,
  linesSaved: PropTypes.number.isRequired,
  lastUploadDate: PropTypes.number.isRequired,
};

export { Board };
