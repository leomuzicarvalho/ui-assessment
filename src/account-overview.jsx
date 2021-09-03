import React from "react";
import { Heading, Board } from "./components";
import styled from "styled-components";

const StyledWrapper = styled.div`
  background-color: #f4f4f4;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

export const AccountOverview = ({ className, data }) => {
  return (
    <StyledWrapper className={className}>
      <Heading className={className} data={data.supportContact} />
      <Board className={className} data={data.salesOverview} />
    </StyledWrapper>
  );
};

export default AccountOverview;
