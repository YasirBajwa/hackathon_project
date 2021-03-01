import React,{useState} from 'react';
import { ScrollView, View,Text,TouchableOpacity} from 'react-native';
import {  Form, Item, Input, Label } from 'native-base';
import Navbar from '../Navbar/Navbar';
import styles from './dashboardStyle';
import {connect} from 'react-redux';
import {login_user} from './../../store/action/action';

const AdminDashboard = (props,navigation) =>{
    const [userEmail, setUserEmail] = useState("");
    const [userEmailError,setUserEmailError]=useState("")
  
    const [userPassword, setUserPassword] = useState("");
    const [userPasswordError, setUserPasswordError] = useState("");


    const handleSubmit = (evt,navigation) => {
        evt.preventDefault();
        if (userEmail === '' ){
            setUserEmailError('Email is required');
          return false;
        }
        else{
            setUserEmailError('')
        }
 
        if (userPassword === ''){
            setUserPasswordError('Password is required');
            return false;
       }
       else{
               setUserPasswordError('')
       }
       const myNavigation = props.navigation;
      //  props.login_user(userEmail,userPassword,myNavigation);
       setUserEmail('');
       setUserPassword('');    
  
 }


     return(
         <ScrollView>
         <View style={styles.container__wrapper}>
            <Navbar/>
             
          <View style={styles.login__section}>
              <View style={styles.form__section__item1}>
                        <Text style={styles.login__text}>Welcome to Admin Dashboard</Text>
              </View>
          
         </View>
         <View style={styles.dashboard__section}>
        <View  >
        <View >
              <TouchableOpacity style={styles.submit__btn}  onPress={ () => props.navigation.navigate('AdminStudentHandle')}>
                <Text style={styles.submit__btn__txt} >View Students Profiles</Text>
              </TouchableOpacity>
          
            </View>
        </View>
        <View >
        <View >
              <TouchableOpacity style={styles.submit__btn2} onPress={ () => props.navigation.navigate('AdminJobHandle')} >
                <Text style={styles.submit__btn__txt}  >View Company Jobs</Text>
              </TouchableOpacity>
          
            </View>

        </View>
        </View>

         </View>
         </ScrollView>
     )
}
const mapStateToProps = (state) => {
  return {
    product_data: state.product_data

  };
};

const mapDispatchToProps= (dispatch) =>({
  // login_user: (email,password,myNavigation) => dispatch(login_user(email,password,myNavigation)) 
})
export default connect(mapStateToProps,mapDispatchToProps)(AdminDashboard);