import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { $moonstone, $oxford } from '../../GlobalStyles/colors';

export const StyledTitle = styled(Grid)`
  min-height: 3em;
  background-color: ${$oxford};
  div {
    font-size: 2em;
    color: ${$moonstone};
  }
`;

export const StyledContent = styled(Grid)`
  height: calc(100% - 3em);
  background-color: $platinum;
`;

export const StyledName = styled(Grid)`
  font-size: 2em;
  color: ${$oxford};
  display: flex;
  justify-content: flex-start;
  padding-top: 1em;
`;

export const StyledSection = styled(Grid)`
  margin-top: 2em;
`;

export const StyledSectionTitle = styled(Grid)`
  display: flex;
  justify-content: flex-start;
  color: ${$oxford};
  font-size: 1.3em;
`;

export const StyledListItem = styled(Grid)`
  margin-top: 1em;
`;

export const StyledItem = styled(Grid)`
  display: flex;
  justify-content: flex-start;
  color: ${$moonstone};

  :hover {
    cursor: pointer;
    box-shadow: 1px 1px 1px ${$moonstone};
  }
`;
