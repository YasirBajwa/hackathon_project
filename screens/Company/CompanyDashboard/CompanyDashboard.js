import React,{useState} from 'react';
import { ScrollView, View,Text,TouchableOpacity} from 'react-native';
import {  Form, Item, Input, Label } from 'native-base';
import Navbar from '../../Navbar/Navbar';
import styles from './styleDashboard';
import {connect} from 'react-redux';
import {student_login} from '../../../store/action/action';

const CompanyLogin = (props,navigation) =>{
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
       props.student_login(userEmail,userPassword,myNavigation);
      //  setUserEmail('');
      //  setUserPassword('');    
  
 }


     return(
         <ScrollView>
         <View style={styles.container__wrapper}>
            <Navbar/>
             
          <View style={styles.login__section}>
              <View style={styles.form__section__item1}>
                        <Text style={styles.login__text}>Company Dashboard</Text>
              </View>
          </View>  
          <View style={styles.company__job__wrapper}>
              <Text style={styles.company__job__wrapper__txt}>The company can see the student detail and find the best candidate for the job</Text>
              </View> 

           <View styles={styles.company__content}>
           <View style={styles.submit__btn__section}>
              <TouchableOpacity style={styles.submit__btn} onPress={ () => props.navigation.navigate('StudentPersonal')} >
                <Text style={styles.submit__btn__txt}  >View Student Detail</Text>
              </TouchableOpacity>
          
            </View>
            <View style={styles.submit__btn__section}>
              <TouchableOpacity style={styles.submit__btn}  onPress={ () => props.navigation.navigate('JobPost')}>
                <Text style={styles.submit__btn__txt} >Add Job Post</Text>
              </TouchableOpacity>
          
            </View>
            <View style={styles.submit__btn__section}>
              <TouchableOpacity style={styles.submit__btn}  onPress={ () => props.navigation.navigate('CompanyJobs')}>
                <Text style={styles.submit__btn__txt} >View Company Job Post</Text>
              </TouchableOpacity>
          
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
  student_login: (email,password,myNavigation) => dispatch(student_login(email,password,myNavigation)) 
})
export default connect(mapStateToProps,mapDispatchToProps)(CompanyLogin);