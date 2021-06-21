 import React , {Component} from 'react';
 import {Modal, Dimensions, Share} from 'react-native';
 import { WebView} from 'react-native-webview';
 import {Container, Header, Content, Body, Left, Right, Icon, Title, Button} from 'native-base';

 const webViewHeight = Dimensions.get('window').height - 56;

 export default class ModalComponent extends Component {
    
    constructor(props) {
        super(props);
    }

    handleClose = () => {
        return this.props.onClose();
    }

    handleShare = () => {
        const {url, title} = this.props.articleData;
        let message = `${title}\n\nRead More @${url}\n\nShared via Go-Pro News App`;
        return Share.share(
            {title, message, url: message},
            {dialogTitle: `Share ${title}`}
        ); 
    }
    
    render() {
        const { showModal, articleData } = this.props;
        const { url } = articleData;
        if(url != undefined) {
         return(
            <Modal
                 animationType="slide"
                 transparent
                 visible = {showModal}
                 onRequestClose = {this.handleClose}
            >
                <Container style={{margin: 15, marginBottom:0, backgroundColor:'#fff'}}>
                    <Header style={{backgroundColor:'#F6C987'}}>
                        <Left>
                            <Button onPress={this.handleClose} transparent>
                                <Icon name="close" style={{color:'#2D6E7F', fontSize: 14}} />
                            </Button>
                        </Left>
                        <Body>
                            <Title children={articleData.title} style={{color:'#2D6E7F', fontSize: 17}}></Title>
                        </Body>
                        <Right>
                            <Button onPress={this.handleShare} transparent>
                                <Icon name="share" style={{color:'#2D6E7F', fontSize: 14}} />
                            </Button>
                        </Right>
                    </Header>
                    <Content contentContainerStyle={{height: webViewHeight}}>
                        <WebView source={{uri: url}} style={{flex:1}} onError={this.handleClose} startInLoadingState scalesPageToFit/>
                    </Content>
                </Container>

            </Modal>
         );
     } else {
         return null;
     }
    }
 }