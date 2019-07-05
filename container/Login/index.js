import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, Button, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actionCreator';
import { StackActions, NavigationActions } from 'react-navigation';
const { width, height } = Dimensions.get('window');

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: null,
      password: null,
      isValidEmail: null,
      isValidPassword: null,
      showemailErrorMessage: false,
      showpasswrdErrorMessage: false
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.loginState===true){
      this.props.navigation.dispatch(StackActions.reset({
        index:0,
        actions:[NavigationActions.navigate({routeName:'Dashboard'})]
      }))
    }
    else{
      this.setState({
        showemailErrorMessage:true,
        showpasswrdErrorMessage:true
      })
    }
  }

  
  validateUsername(text) {
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.setState({ username: text, isValidEmail: re.test(text), showemailErrorMessage: false });
  }
  validatePassword(text) {
    this.setState({ password: text, isValidPassword: text.length > 7, showpasswrdErrorMessage: false })
  }
  showMessage() {
    if (this.state.isValidEmail == false) this.setState({ showemailErrorMessage: true })
    else this.setState({
      showemailErrorMessage: false
    })
  }
  showerrorMessage() {
    if (this.state.isValidPassword == false) this.setState({ showpasswrdErrorMessage: true })
    else this.setState({
      showpasswrdErrorMessage: false
    })
  }

  render() {
    return (
      <ImageBackground source={require('../../assets/loginbg.jpg')} style={styles.container} imageStyle={{ resizeMode: 'cover' }}>
        <View style={styles.innerContainer}>
          <Text style={styles.textStyle}>Login</Text>
          <TextInput 
            value={this.state.username} 
            placeholder="Username"
            placeholderTextColor="white"
            keyboardType={'email-address'} 
            style={[styles.textInputStyle, this.state.isValidEmail === null ? { borderColor: 'white' } : this.state.isValidEmail ? { borderColor: 'green' } : { borderColor: 'red' }]} 
            onChangeText={text => this.validateUsername(text)} onEndEditing={() => this.showMessage()}>
            </TextInput>
          <Text style={this.state.showemailErrorMessage ? { color: 'red' } : null}>
            {this.state.showemailErrorMessage ? 'Please enter a valid email' : " "}</Text>
          <TextInput 
          value={this.state.password}
          placeholder="Password" 
          secureTextEntry={true} 
          style={[styles.textInputStyle, this.state.isValidPassword === null ? { borderColor: 'white' } : this.state.isValidPassword ? { borderColor: 'green' } : { borderColor: 'red' }]} 
          onChangeText={text => this.validatePassword(text)} 
          onEndEditing={() => this.showerrorMessage()}>
          </TextInput>
          <Text style={[this.state.showpasswrdErrorMessage ? { color: 'red' } : { color: 'grey' },{textAlign:'center'}]}>
            {this.state.showpasswrdErrorMessage ? "Retry Password" : this.state.isValidPassword ? "" : "(Password Length should be > 7)"}</Text>
          <Button style={[styles.buttonStyle, { backgroundColor: (!this.state.isValidEmail && !this.state.isValidPassword) ? '#fff' : null }]} disabled={!this.state.isValidEmail && !this.state.isValidPassword}
            onPress={() => { this.props.action.loginMethod({username:this.state.username,password:this.state.password}) }} 
            title={'Login'}></Button>
        </View>
      </ImageBackground>
    )
  }
}

const mapDispatchToProps = (dispatch) =>({
  action:bindActionCreators(actions,dispatch)
})

const mapStateToProps = ( state ) => ({
 loginState : state.loginReducer.isLoginSuccess
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  innerContainer: {
    height: height * 0.5,
    width: width * 0.8,
    backgroundColor: 'rgba(0,0,0,0.8)',
    padding: 40,
    borderRadius: 35,
    borderWidth: 1,
    justifyContent: 'space-between',
  },
  textStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 30
  },
  textInputStyle: {
    backgroundColor: 'transparent',
    borderRadius: 35,
    borderWidth: 2,
    paddingVertical: 5,
    paddingHorizontal: 15,
    fontSize: 15,
    color:'white'
  },
  buttonStyle: {
    paddingTop: 5,
    borderRadius: 10,
    borderWidth: 1,
  }
});

export default connect(mapStateToProps,mapDispatchToProps)(Login);