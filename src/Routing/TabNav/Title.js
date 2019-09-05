import React from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { changeIconActionType } from '../../TabPages/actions';
import { styles } from './styles';

const TitleComponent = (props) => {
    const { navigation, navigation: { state: { index } }, arrow, changeIconActionType, title } = props;

    const openDrower = () => {
        navigation.toggleDrawer();
    }

    const goBack = () => {
        changeIconActionType(false);
        navigation.navigate('Chats');

    }

    const changeRoute = () => {

        return (index !== 1 || arrow === false) ?
            <TouchableWithoutFeedback onPress={openDrower}>
                <FontAwesomeIcon icon={faBars} size={30} color={'#0099ff'} />
            </TouchableWithoutFeedback> :
            <TouchableWithoutFeedback onPress={goBack}>
                <FontAwesomeIcon icon={faArrowLeft} size={30} color={'#0099ff'} />
            </TouchableWithoutFeedback>
    }

    const changeRouteName = () => {
        switch (index) {
            case 0: {
                return <Text style={styles.title}>Contacts</Text>
            }
            case 1 : {
                return <Text style={styles.title}>Chats</Text>
            }
            case 2: {
                return <Text style={styles.title}>Open GL</Text>
            }
            default: return null
        }
    }

    return (
        <View style={styles.container}>
            {changeRoute()}
            {changeRouteName()}
        </View>
    )
}

const mapStateToProps = (state) => ({
    title: state.title.name,
    arrow: state.title.showArrow
});

const mapDispatchToProps = {
    changeIconActionType
};

export default connect(mapStateToProps, mapDispatchToProps)(TitleComponent);