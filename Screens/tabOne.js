import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import {Alert, View, ActivityIndicator } from 'react-native';
import { getArticles } from '../store/service/news';
import DataItem from '../components/dataItems';
import ModalComponent from '../components/modal';

export default class ListThumbnailExample extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      data : null,
      setModalVisible: false,
      modalArticleData: {}
    }
  }

  handleItemDataOnPress =(articleData) => {
    this.setState({
      setModalVisible: true,
      modalArticleData: articleData
    });
  }

  handleModalClose = () => {
     this.setState({
      setModalVisible: false,
      modalArticleData: {}
     });

  }

  componentDidMount() {
    getArticles().then(data=> {
      this.setState({
        isLoading: false,
        data: data
      });
    }, error=> {
      Alert.alert('Error', 'Something went wrong!');
    }
    )
  }

  render() {
      let view = this.state.isLoading ? (
        <View style={{justifyContent:'center', alignItems:'center'}}>
          <ActivityIndicator size="large" color="#F6C987"  animating={this.state.isLoading}/>
        </View>
      ) : (
        <List
          dataArray = {this.state.data}
          renderRow = {(item)=> {
            return <DataItem onPress={this.handleItemDataOnPress} data={item}/>
          }}
        />
      )
    return (
      <Container>
        <Content>
         {view}         
        </Content>
        <ModalComponent
          showModal={this.state.setModalVisible}
          articleData={this.state.modalArticleData}
          onClose={this.handleModalClose}
        />
      </Container>
    );
  }
}