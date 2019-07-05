import React from 'react';
import {Text,View,StyleSheet,Dimensions} from 'react-native';

const { width, height } = Dimensions.get('window');

export default EmployeeList = ({data}) => {
    console.log("props",data)
    return (
        <View style={styles.cardStyle}>
                <Text style={styles.headerText}>{data.name}</Text>
                <View style={styles.flexDirectionRow}>
                    <Text style={{color:'white'}}>Age:{data.age}</Text>
                    <Text style={{color:'white'}}>Gender:{data.gender}</Text>
                </View>
                    <Text style={styles.footerText}>Email:{data.email}</Text>
                    <Text style={styles.footerText}>PhoneNO:{data.phoneNo}</Text>
            </View>
    )
}

const styles = StyleSheet.create({
    cardStyle: {
        marginTop:10,
        width: width * 0.8,
        height: height * 0.25,
        backgroundColor: 'transparent',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        borderRadius:20,
        borderColor:'white',
        borderWidth:10,
        padding:10,
        justifyContent:'space-around',
    },
    headerText:{textAlign:'center',color:'white',fontSize:20},
    flexDirectionRow:{flexDirection:'row',justifyContent:'space-around'},
    footerText:{color:'white',textAlign:'center'}
})