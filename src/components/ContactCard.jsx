import React from "react";
import styled from "styled-components";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PropTypes } from "prop-types";

const CardWrapper = styled.div`
  padding: 25px;
  text-align: left;
  @media all and (max-width: 768px) {
    text-align: center;
  }
  h2 {
    font-size: 1.2rem;
    margin: 0 0 10px 0;
    color: #a3a0a0;
  }
`;

const InfoCard = styled.div`
  display: flex;
  label {
    width: 50px;
    height: 50px;
    background-color: #f9ce02;
    border-radius: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ContactDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  margin-left: 10px;
  a {
    margin-left: 9px;
    text-decoration: none;
    color: inherit;
  }
  h4 {
    margin: 0 0 10px 0;
    width: 100%;
  }
`;

const ContactCard = ({ className, data }) => {
  return (
    <CardWrapper className={className}>
      <h2>YOUR FEEFO SUPPORT CONTACT</h2>
      <InfoCard className={className}>
        <label aria-label={`contact initial: letter ${data.name[0]}`}>
          {data.name[0]}
        </label>
        <ContactDetails>
          <h4 aria-label={`contact name: ${data.name}`}>{data.name}</h4>
          <FontAwesomeIcon icon={faEnvelope} aria-hidden />
          <a
            href={`mailto:${data.email}`}
            aria-label={`contact e-mail address: ${data.email}`}
          >
            {data.email}
          </a>
          <a
            href="tel:02033624208"
            aria-label="contact phone number: 020 3362 4208"
          >
            020 3362 4208
          </a>
        </ContactDetails>
      </InfoCard>
    </CardWrapper>
  );
};

ContactCard.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export { ContactCard };
