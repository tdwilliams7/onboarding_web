import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import {
  StyledTitle,
  StyledContent,
  StyledName,
  StyledSection,
  StyledSectionTitle,
  StyledItem,
  StyledListItem
} from './style';
import { $pastelGray } from '../../GlobalStyles/colors';

class Home extends Component {
  render() {
    return (
      <Grid container spacing={0}>
        <StyledTitle item xs={12}>
          <div>Home</div>
        </StyledTitle>
        <StyledContent container spacing={0}>
          <StyledSection container spacing={0}>
            <Grid item xs={1} />
            <StyledSectionTitle item xs={8}>
              Incomplete tasks (#)
            </StyledSectionTitle>
            <ListItem />
            <ListItem />
            <ListItem />
          </StyledSection>
          <StyledSection container spacing={0}>
            <Grid item xs={1} />
            <StyledSectionTitle item xs={8}>
              Awesome People (new)
            </StyledSectionTitle>
            <ListItem />
            <ListItem />
            <ListItem />
          </StyledSection>
          <StyledSection container spacing={0}>
            <Grid item xs={1} />
            <StyledSectionTitle item xs={8}>
              Lists
            </StyledSectionTitle>
            <ListItem />
            <ListItem />
            <ListItem />
          </StyledSection>
        </StyledContent>
      </Grid>
    );
  }
}

const ListItem = () => {
  return (
    <StyledListItem container spacing={0}>
      <Grid item xs={1} />
      <StyledItem item xs={8}>
        name special
      </StyledItem>
      <Grid item xs={3} />
      <Grid item xs={1} />
      <Grid item xs={8}>
        <hr style={{ borderTop: `${$pastelGray}` }} />
      </Grid>
      <Grid item xs={3} />
    </StyledListItem>
  );
};

export default Home;
