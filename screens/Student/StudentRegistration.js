import React,{Component,useState,useEffect} from 'react';
import { StyleSheet,Button, ScrollView, View,Text,TouchableOpacity} from 'react-native';
import { Form, Item, Input, Label } from 'native-base';
import firebase from '../../config/firebase';
import styles from './studentRegisterStyle';

const StudentRegister = (props) =>{

  const myNavgation = props.navigation;
    // console.log('firebase ==>',firebase)
 
  const [name, setName] = useState("");
  const [nameError,setNameError]=useState('')

  const [mobileNumber, setMobileNumber] = useState("");
  const [errorMobileNumber, setErrorMobileNumber] = useState("");

  const [emailAddress, setEmailAddress] = useState("");
  const [errorEmailAddress, setErrorEmailAddress] = useState("");
  
  const [degreeType, setDegreeType] = useState("");
  const [errorDegreeType, setErrorDegreeType] = useState("");

  const [semester, setSemester] = useState("");
  const [errorSemester, setErrorSemester] = useState("");

  const [registrationNumber, setRegistrationNumber] = useState("");
  const [errorRegistrationNumber, setErrorRegistrationNumber] = useState("");

  
  const [city, setCity] = useState("");
  const [errorCity, setErrorCity] = useState("");
  
  const [cgpa, setCgpa] = useState("");
  const [errorCgpa, setErrorCgpa] = useState("");

  const [skill, setSkill] = useState("");
  const [errorSkill, setErrorSkill] = useState("");


  const handleSubmit = (evt) => {
       evt.preventDefault();
       if (name === ''){
         setNameError('Name is required');
         return false;
       }
       else{
         setNameError('')
       }

       if (mobileNumber === ''){
        setErrorMobileNumber('Mobile Number is required');
        return false;
      }
      else{
        setErrorMobileNumber('')
      }
      if (emailAddress === ''){
        setErrorEmailAddress('Email is required');
        return false;
      }
      else{
        setErrorEmailAddress('')
      }
      if (degreeType === ''){
        setErrorDegreeType('Degree is required');
        return false;
      }
      else{
        setErrorDegreeType('')
      }
      if (semester === ''){
        setErrorSemester('Semester is required');
        return false;
      }
      else{
        setErrorSemester('')
      }
      if (registrationNumber === ''){
        setErrorRegistrationNumber('Semester is required');
        return false;
      }
      else{
        setErrorRegistrationNumber('')
      }
     
      if (city === ''){
        setErrorCity('City is required');
        return false;
      }
      else{
        setErrorCity('')
      }
      if (cgpa === ''){
        setErrorCgpa('CGPA is required');
        return false;
      }
      else{
        setErrorCgpa('')
      }
      if (skill === ''){
        setErrorSkill('Skill is required');
        return false;
      }
      else{
        setErrorSkill('')
      }

      const database = firebase.database().ref('register_students')
      const key = database.push().key;
      let register_data = {
         name,
         mobileNumber,
         emailAddress,
         semester,
         registrationNumber,
         degreeType,
         city,
         skill,
         cgpa,
         key:key
      }
      database.child(key).set(register_data).then(()=>{
        alert('Your Form has been submitted Sucessfully');
       setName('');
       setMobileNumber('');
       setEmailAddress('');
       setDegreeType('');
       setSemester('');
       setRegistrationNumber('');
       setCity('');
       setCgpa('');
       setSkill('');
       myNavgation.navigate('StudentLogin')
       
    }).catch(function(error) {
      var errorMessage = error.message;
      // alert('Sorry Your form could not be submitted',errorMessage)
    
    });
}


     return(
         <ScrollView>
         <View style={{flex:1}}>
             <View style={styles.header__title}>
             <Text style={styles.header__title__text}> SAYALNI BLOOD BANK</Text>
            </View>
            <View style={styles.form__section}>
                 <View style={styles.form__section__item1}>
                     <Text style={styles.form__section__item1__txt}>Registered Students can fill the form</Text>
                 </View>
        <View style={styles.form__section__item2}>
          <Form style={styles.form__section__input}>
          <Item floatingLabel  last>
              <Label>Full Name</Label>
              <Input  value={name} onChangeText={text  => setName(text)} />
            </Item>
            <View><Text>{nameError}</Text></View>
            <Item floatingLabel last>
              <Label>Mobile Number</Label>
              <Input keyboardType={'numeric'} value={mobileNumber} onChangeText={text  => setMobileNumber(text)}  />
            </Item>
            <View><Text>{errorMobileNumber}</Text></View>
            <Item floatingLabel last>
              <Label>Email Address</Label>
              <Input keyboardType={'email-address'} value={emailAddress} onChangeText={text  => setEmailAddress(text)}  />
            </Item>
            <View><Text>{errorEmailAddress}</Text></View>
            <Item floatingLabel  last>
              <Label>Degree</Label>
              <Input  value={degreeType} onChangeText={text  => setDegreeType(text)} />
            </Item>
            <View><Text>{errorDegreeType}</Text></View>
            <Item floatingLabel  last>
              <Label>CGPA</Label>
              <Input keyboardType={'number-pad'} value={cgpa} onChangeText={text  => setCgpa(text)} />
            </Item>
            <View><Text>{errorCgpa}</Text></View>
            <Item floatingLabel  last>
              <Label>Skills</Label>
              <Input  value={skill} onChangeText={text  => setSkill(text)} />
            </Item>
            <View><Text>{errorSkill}</Text></View>
            <Item floatingLabel last>
              <Label>SEMESTER</Label>
              <Input keyboardType={'numeric'} value={semester} onChangeText={text  => setSemester(text)} />
            </Item>
            <View><Text>{errorSemester}</Text></View>
            <Item floatingLabel last>
              <Label>Student Registration Number</Label>
              <Input value={registrationNumber} onChangeText={text  => setRegistrationNumber(text)}  />
            </Item>
            <View><Text>{errorRegistrationNumber}</Text></View>
            <Item floatingLabel last>
              <Label  >Enter Address</Label>
              <Input value={city} onChangeText={text  => setCity(text)} />
            </Item>
            <View><Text>{errorCity}</Text></View>
            <View style={styles.submit__btn__section}>
              <TouchableOpacity style={styles.submit__btn} onPress={ (e) => handleSubmit(e)}>
                <Text style={styles.submit__btn__txt}>SUBMIT</Text>
              </TouchableOpacity>
            {/* <Button style={styles.submit__btn} 
             title="submit" onPress={ (e) => handleSubmit(e)}/>  */}
            </View>
            <View style={{height:20}}>

            </View>
          </Form>
      </View>

      </View>

         </View>
         </ScrollView>
     )
}

export default StudentRegister;