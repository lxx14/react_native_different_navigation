import React, { Component } from 'react';
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';

import { changeIconActionType } from '../../actions';
import { styles } from './styles';

class User extends Component {
    constructor(props) {
        super(props)
    }

    goToChat = () => {
        const { user: { id, messages }, navigation, changeIconActionType } = this.props;
        changeIconActionType(true);
        navigation.navigate("Dialog",
            {
                itemId: id,
                messages: messages
            }
        )
    }

    render() {
        const { name, online, chats, messages } = this.props;
        return (
            <TouchableWithoutFeedback onPress={this.goToChat}>
                <View style={!chats ? styles.container : styles.containerChats}>
                    <Image
                        style={!chats ? styles.image : styles.imageChats}
                        source={require('../../../assets/images/user_logo.png')}
                    />
                    <View style={styles.textContainer}>
                        <Text style={!chats ? styles.text : styles.textChat}>{name}</Text>
                        {online && <Text style={online === 'online' ? styles.onlineTextActive : styles.onlineText}>{online}</Text>}
                        {chats && <Text style={styles.messagePreview}>{messages[messages.length - 1].text}</Text>}
                        {chats && <Text style={styles.textDate}>{messages[messages.length - 1].date}</Text>}
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const mapStateToProps = (state) => ({
    arrow: state.title.showArrow
})

const mapDispatchToProps = {
    changeIconActionType
}

export default connect(mapStateToProps, mapDispatchToProps)(User);