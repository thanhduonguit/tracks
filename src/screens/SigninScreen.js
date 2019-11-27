import React, {useContext} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {NavigationEvents} from 'react-navigation';
import AuthForm from './../components/AuthForm';
import NavLink from './../components/NavLink';
import {Context} from './../context/AuthContext';

const SigninScreen = () => {
    const {state, signin, clearErrorMessage} = useContext(Context);

    return (
        <View style={styles.container}>
            <NavigationEvents
                onWillBlur={clearErrorMessage}
            />
            <AuthForm 
                headerText="Sign In For Tracker"
                errorMessage={state.errorMessage}
                submitButtonText="Sign In" 
                onSubmit={signin}
            />
            <NavLink
                routeName="Signup"
                text="Don't have an account? Sign up here."
            />
        </View>
    );
};

SigninScreen.navigationOptions = () => {
    return {
        header: null
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
    }
});

export default SigninScreen;
