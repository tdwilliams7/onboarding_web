import React, { Component } from 'react';
import styled from 'styled-components';
import { $moonstone, $oxford, $platinum } from '../../GlobalStyles/colors';

class Home extends Component {
  render() {
    return (
      <StyledBody className="container-fluid">
        <StyledTitle className="row">
          <div className="col-12">Home</div>
        </StyledTitle>
        <StyledContent className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-1" />
              <StyledName className="col-8">Hello name</StyledName>
            </div>
            <StyledSection className="row">
              <div className="col-1" />
              <div className="col-8">
                <StyledSectionTitle>Incomplete tasks (#)</StyledSectionTitle>
              </div>
              <div className="col-4" />
            </StyledSection>
          </div>
        </StyledContent>
      </StyledBody>
    );
  }
}

const StyledBody = styled.div`
  padding: 0;
`;
const StyledTitle = styled.div`
  min-height: 3em;
  background-color: ${$oxford};
  div {
    font-size: 2em;
    color: ${$moonstone};
  }
`;

const StyledContent = styled.div`
  height: calc(100% - 3em);
`;

const StyledName = styled.div`
  font-size: 2em;
  color: ${$oxford};
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1.5em;
  margin-top: 1em;
`;

const StyledSection = styled.div``;

const StyledSectionTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  color: ${$oxford};
`;

export default Home;
