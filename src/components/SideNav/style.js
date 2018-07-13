import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { $platinum } from '../../GlobalStyles/colors';

export const StyledBody = styled.div`
  background-color: #002642;
  min-height: 100%;
`;

export const StyledTitle = styled.div`
  font-size: 2em;
  margin-bottom: 0.6em;
`;

export const StyledButton = styled.button`
  background-color: #de6b48;
  color: inherit;
  border: none;
  margin-bottom: 1.5em;

  :hover {
    box-shadow: 1px 1px 1px #fff;
    font-size: 1.2em;
    color: white;
    cursor: pointer;
  }
`;

export const StyledLinkGroup = styled.div`
  margin-bottom: 0.6em;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${$platinum};
  :hover {
    color: #de6b48;
  }
`;

export const StyledIconList = styled.div``;
