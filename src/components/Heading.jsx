import React from "react";
import styled from "styled-components";
import { ContactCard } from "./ContactCard";

const StyledHeading = styled.div`
  display: flex;
  justify-content: center;
  text-align: left;
  h1 {
    font-size: 1.7rem;
    padding: 25px;
  }
  @media all and (max-width: 768px) {
    flex-direction: column;
    h1 {
      margin: 5px;
      padding: 5px;
    }
  }
  align-items: center;
  margin: 0 auto;
`;

const Heading = ({ className, data }) => {
  return (
    <StyledHeading className={`heading ${className}`}>
      <h1>Account Overview</h1>
      <ContactCard data={data} />
    </StyledHeading>
  );
};

export { Heading };
