import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

import { getUser } from '../../utils/getUser';
import { styles } from './styles';

export class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }
    componentDidMount() {
        const { users: usersFromProps } = this.props;
        const users = getUser(usersFromProps, 'contacts', this.props);
        this.setState({ users });
    }

    render() {
        const { users } = this.state;

        return (
            <View style={styles.container}>
                {users}
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    users: state.users
});

export default connect(mapStateToProps)(Contacts);