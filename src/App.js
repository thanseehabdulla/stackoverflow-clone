import React from 'react';
import { Header, HeaderName, Content, Grid, Row, Column, SideNav, SideNavItems, SideNavLink } from '@carbon/react';
import QuestionList from './components/question/views/QuestionList';
import './App.css';
import '@carbon/styles/css/styles.css';

function App() {
  return (
    <div className="App">
      <Header aria-label="Carbon Stack Overflow">
        <HeaderName href="#" prefix="">
          Simple Carbon Stack Overflow
        </HeaderName>
      </Header>
      <SideNav isFixedNav expanded>
        <SideNavItems>
          <SideNavLink href="#">Home</SideNavLink>
          <SideNavLink href="#">Questions</SideNavLink>
          <SideNavLink href="#">Tags</SideNavLink>
          <SideNavLink href="#">Users</SideNavLink>
        </SideNavItems>
      </SideNav>
      <Content className="main-content">
        <Grid>
          <Row>
            <Column lg={12} md={12}>
              <QuestionList />
            </Column>
          </Row>
        </Grid>
      </Content>
    </div>
  );
}

export default App;
