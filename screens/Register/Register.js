import React,{useState} from 'react';
import { ScrollView, View,Text,TouchableOpacity} from 'react-native';
import {  Form, Item, Input, Label } from 'native-base';
import Navbar from '../Navbar/Navbar';
import styles from './registerStyle'
import {connect} from 'react-redux';
import {register_user} from './../../store/action/action';


const Register = (props) =>{
    const [userName, setUserName] = useState("");
    const [userNameError,setUserNameError]=useState("") 

    const [userEmail, setUserEmail] = useState("");
    const [userEmailError,setUserEmailError]=useState("")
  
    const [userPassword, setUserPassword] = useState("");
    const [userPasswordError, setUserPasswordError] = useState("");


    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (userName === '' ){
            setUserNameError('Name is required');
          return false;
        }
        else{
            setUserNameError('')
        }
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
       props.register_user(userEmail,userPassword,myNavigation);
      //  setUserEmail('');
      //  setUserPassword('');    
      //  setUserName('')
    

 }


     return(
         <ScrollView>
         <View style={styles.container__wrapper}>
            <Navbar/>
             
          <View style={styles.login__section}>
              <View style={styles.form__section__item1}>
                        <Text style={styles.login__text}>Register Form</Text>
              </View>
          <View style={styles.form__section__item2}>
          <Form style={styles.form__section__input}>
          <Item floatingLabel>
              <Label>User Name</Label>
              <Input value={userName} onChangeText={text  => setUserName(text)} />
            </Item>
            <View ><Text style={styles.errorSet}>{userNameError}</Text></View>
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
                <Text style={styles.submit__btn__txt}>SUBMIT</Text>
              </TouchableOpacity>
          
            </View>
          </Form>
          </View>
          </View>   
        
        
        <View style={styles.register__login}>
            <Text>Have an account?</Text>
            <Text style={styles.register__text} onPress={ () =>navigation.navigate('Login')}>Login Here</Text>
        </View>
        
         </View>
         </ScrollView>
     )
}

const mapStateToProps = (state) => {
  return {
    // users: state.users,
    product_data: state.product_data

  };
};

const mapDispatchToProps= (dispatch) =>({
  register_user: (email,password,myNavigation) => dispatch(register_user(email,password,myNavigation)) 
})
export default connect(mapStateToProps,mapDispatchToProps)(Register);