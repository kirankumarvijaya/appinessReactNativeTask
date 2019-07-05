import React, { Component } from 'react';
import {  View, ActivityIndicator, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import * as actions from './actionCreators';
import { bindActionCreators } from 'redux';
import EmployeeList from '../../component/EmployeeList';

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            employeeList: []
        }
    }

    componentDidMount() {
        this.props.action.getEmployeesListMethod();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.employeeList != this.props.employeeList) {
            setTimeout(() => {
                this.setState({
                    employeeList: nextProps.employeeList.user
                })
            }, 5000)
        }
    }

    render() {
        return (
            <ImageBackground style={styles.mainContainer}
                source={require('../../assets/dashboardbg.jpg')}>
                {this.state.employeeList.length == 0 ? this.showActivityIndicator() : this.showEmployeeList()}
            </ImageBackground>
        )
    }

    showEmployeeList() {
        return <ScrollView contentContainerStyle={{alignItems:'center'}}>
            {
                this.state.employeeList.map((employee,key)=>{
                    return (
                        <View key={key}>
                            <EmployeeList data={employee} />
                        </View>
                    )
                })
            }
            </ScrollView>
    }

    showActivityIndicator() {
        return (<View style={styles.container}>
            <ActivityIndicator size="large" color="#fff" />
        </View>)
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    
})

const mapStateToProps = (state) => ({
    employeeList: state.DashboardReducer.employeeList
})

const mapDispatchToProps = (dispatch) => ({
    action: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
