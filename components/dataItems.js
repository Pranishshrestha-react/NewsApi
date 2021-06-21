import React , {Component} from 'react';
import {ListItem, Left, Thumbnail, Body, Right, Button, Text} from 'native-base';
import {View} from 'react-native';
import Time from '../components/time';

export default class DataItem extends Component {

    constructor(props) {
        super(props);
        this.data = props.data;
    }

    handlePress = () => {
        const {url, title} = this.data; 
        this.props.onPress({url, title});
    }

    render() {
        return (
            <ListItem thumbnail>
                <Left>
                    <Thumbnail square source={{ uri: this.data.urlToImage != null ? this.data.urlToImage : 'https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg' }} />
                </Left>
                <Body>
                    <Text numberOfLines={2}>{this.data.title}</Text>
                    <Text note numberOfLines={2}>{this.data.description}</Text>
                    <View style={{flex: 1, flexDirection:'row', marginTop: 8}}>
                        <Text note style={{fontSize:11}}>{this.data.source.name}</Text>
                        <Time time={this.data.publishedAt}/>

                    </View>
                </Body>
                <Right>
                    <Button transparent onPress={this.handlePress}>
                        <Text>View</Text>
                    </Button>
                </Right>
            </ListItem>
        );
    }
}