import React,{useState} from 'react';
import { ScrollView, View,Text,TouchableOpacity} from 'react-native';
import {  Form, Item, Input, Label } from 'native-base';
import Navbar from '../Navbar/Navbar';
import styles from './styleStudent';
import {connect} from 'react-redux';
import {student_login} from '../../store/action/action';

const StudentLogin = (props,navigation) =>{
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
       setUserEmail('');
       setUserPassword('');    
  
 }


     return(
         <ScrollView>
         <View style={styles.container__wrapper}>
            <Navbar/>
             
          <View style={styles.login__section}>
              <View style={styles.form__section__item1}>
                        <Text style={styles.login__text}>Student Login Form</Text>
              </View>
          <View style={styles.form__section__item2}>
          <Form style={styles.form__section__input}>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input value={userEmail} onChangeText={text  => setUserEmail(text)} />
            </Item>
            <View ><Text style={styles.errorSet}>{userEmailError}</Text></View>
            <Item floatingLabel >
              <Label >Password</Label>
              <Input value={userPassword} onChangeText={text  => setUserPassword(text)} />
            </Item>
            <View ><Text style={styles.errorSet}>{userPasswordError}</Text></View>

            <View style={styles.submit__btn__section}>
              <TouchableOpacity style={styles.submit__btn}  onPress={ (e) => handleSubmit(e)}>
                <Text style={styles.submit__btn__txt} >SUBMIT</Text>
              </TouchableOpacity>
          
            </View>
          </Form>
          </View>
          </View>   
          <View style={styles.register__login}>
            <Text>For student registeration click below</Text>
            <Text style={styles.register__text} onPress={ () => props.navigation.navigate('StudentRegister')}>Student Registeration</Text>
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
export default connect(mapStateToProps,mapDispatchToProps)(StudentLogin);