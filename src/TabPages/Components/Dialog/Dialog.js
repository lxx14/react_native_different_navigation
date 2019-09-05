import React, { Component } from 'react';
import { View, Text, TextInput, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPaperPlane, faSmile } from '@fortawesome/free-solid-svg-icons';

import { addMessageActionType } from '../../../redux/actions';
import { getMessages } from '../../../utils/getMessages';
import { setNewMessage } from '../../../utils/setNewMessage';
import { styles } from './styles';

class Dialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    handleText = (text) => {
        this.setState({ text });
    }

    addMessage = () => {
        const { addMessageActionType, navigation: { state: { params: { messages, itemId } } } } = this.props;
        const { text } = this.state;

        addMessageActionType(setNewMessage(itemId, messages, text));
        this.setState({ text: '' });
        Keyboard.dismiss()
    }

    smileHandler = () => {
        alert('not supported... yet :)')
    }

    render() {
        const { navigation: { state: { params: { messages } } } } = this.props;
        const { text } = this.state;
        const renderMessages = getMessages(messages, styles);

        return (
            <View style={styles.mainContainer}>
                <ScrollView style={styles.textContainer}>
                    {renderMessages}
                </ScrollView>
                <View>
                    <TextInput value={text} onChangeText={this.handleText} style={styles.input} placeholder='message' />
                    {text.length > 0 && <TouchableWithoutFeedback onPress={this.addMessage}>
                        <FontAwesomeIcon icon={faPaperPlane} size={25} style={styles.icon} />
                    </TouchableWithoutFeedback>}
                    <TouchableWithoutFeedback onPress={this.smileHandler}>
                        <FontAwesomeIcon icon={faSmile} size={25} style={styles.iconSmile} />
                    </TouchableWithoutFeedback>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    //.....................
});

const mapDispatchToProps = {
    addMessageActionType
};

export default connect(mapStateToProps, mapDispatchToProps)(Dialog);