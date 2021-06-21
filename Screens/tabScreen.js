import React, { Component } from 'react';
import { Container, Header, Tab, Tabs,Body,Title, Left, Right } from 'native-base';
import TabOne from '../Screens/tabOne';
import TabTwo from '../Screens/tabTwo';
import TabThree from '../Screens/tabThree';
export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor:'#F6C987'}}>
            <Left/>
            <Body>
                <Title style={{color:'#2D6E7F'}}
                >Go-Pro News</Title>
            </Body>
            <Right/>
        </Header>
        <Tabs tabBarUnderlineStyle={{backgroundColor:'#2B6C6D'}} >
          <Tab tabStyle={{backgroundColor:'#F6C987'}} activeTabStyle={{backgroundColor:'#F1BD81'}} textStyle={{color:'#2D6E7F'}} activeTextStyle={{color:'#2B6C6D'}} heading="General">
            <TabOne />
          </Tab>
          <Tab tabStyle={{backgroundColor:'#F6C987'}} activeTabStyle={{backgroundColor:'#F1BD81'}} textStyle={{color:'#2D6E7F'}} activeTextStyle={{color:'#2B6C6D'}} heading="Business">
            <TabTwo />
          </Tab>
          <Tab tabStyle={{backgroundColor:'#F6C987'}} activeTabStyle={{backgroundColor:'#F1BD81'}} textStyle={{color:'#2D6E7F'}} activeTextStyle={{color:'#2B6C6D'}} heading="Technology">
            <TabThree />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}