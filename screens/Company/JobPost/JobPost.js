import React,{Component,useState,useEffect} from 'react';
import { StyleSheet,Button, ScrollView, View,Text,TouchableOpacity} from 'react-native';
import { Form, Item, Input, Label } from 'native-base';
import firebase from '../../../config/firebase';
import styles from './styleJob';
import { connect } from 'react-redux';

const JobPost = (props) =>{
     
    const {navigation} = props;
  
  const [jobTitle, setJobTitle] = useState("");
  const [jobTitleError,setJobTitleError]=useState('')

  const [skillRequired, setSkillRequired] = useState("");
  const [errorSkillRequired, setErrorSkillRequired] = useState("");

  const [candidate, setCandidate] = useState("");
  const [errorCandidate, setErrorCandidate] = useState("");
  
  const [jobDesc, setJobDesc] = useState("");
  const [errorJobDesc, setErrorJobDesc] = useState("");

  const [lastDate, setLastDate] = useState("");
  const [errorLastDate, setErrorLastDate] = useState("");

 
  const [applyEmail, setApplyEmail] = useState("");
  const [errorApplyEmail, setErrorApplyEmail] = useState("");


  const handleSubmit =  (evt) => {
       evt.preventDefault();
       if (jobTitle === ''){
         setJobTitleError('Job Title is required');
         return false;
       }
       else{
         setJobTitleError('')
       }

       if (skillRequired === ''){
        setErrorSkillRequired('Skill is required');
        return false;
      }
      else{
        setErrorSkillRequired('')
      }
      if (candidate === ''){
        setErrorCandidate('No of Candidate is required');
        return false;
      }
      else{
        setErrorCandidate('')
      }
      if (jobDesc === ''){
        setErrorJobDesc('Job Description is required');
        return false;
      }
      else{
        setErrorJobDesc('')
      }

      if (lastDate === ''){
        setErrorLastDate('Last date to apply is required');
        return false;
      }
      else{
        setErrorLastDate('')
      }
      if (applyEmail === ''){
        setErrorApplyEmail('Apply Email is Required');
        return false;
      }
      else{
        setErrorApplyEmail('')
      }
      const database = firebase.database().ref('company_jobs')
      const key = database.push().key;
      let job_data = {
         jobTitle,
         skillRequired,
         candidate,
         jobDesc,
         lastDate,
         applyEmail,
         key:key,
      }
      database.child(key).set(job_data).then(()=>{
        alert('Job Form has been submitted Sucessfully');
        navigation.navigate('CompanyDashboard');
       jobTitle('');
       skillRequired('');
       candidate('');
       jobDesc('');
       lastDate('');
       applyEmail('');
       myNavgation.navigate('CompanyDashboard')
     
      
       
    }).catch(function(error) {
      var errorMessage = error.message;
    //   alert('Sorry Your Job form could not be submitted',errorMessage);
      props.navigation.navigate('CompanyDashboard');

    
    });
}


     return(
         <ScrollView>
         <View style={{flex:1}}>
             <View style={styles.header__title}>
             <Text style={styles.header__title__text}> SAYALNI SCHOOL SYSTEM</Text>
            </View>
            <View style={styles.form__section}>
                 <View style={styles.form__section__item1}>
                     <Text style={styles.form__section__item1__txt}>You can Post the job detail here</Text>
                 </View>
        <View style={styles.form__section__item2}>
          <Form style={styles.form__section__input}>
          <Item floatingLabel  last>
              <Label>Job Title</Label>
              <Input  value={jobTitle} onChangeText={text  => setJobTitle(text)} />
            </Item>
            <View><Text>{jobTitleError}</Text></View>
            <Item floatingLabel last>
              <Label>Skills Required</Label>
              <Input keyboardType={'default'} value={skillRequired} onChangeText={text  => setSkillRequired(text)}  />
            </Item>
            <View><Text>{errorSkillRequired}</Text></View>
            <Item floatingLabel last>
              <Label>Number of Candidate Required</Label>
              <Input keyboardType={'numeric'} value={candidate} onChangeText={text  => setCandidate(text)}  />
            </Item>
            <View><Text>{errorCandidate}</Text></View>
            <Item floatingLabel  last>
              <Label>Description about Job</Label>
              <Input  value={jobDesc} onChangeText={text  => setJobDesc(text)} />
            </Item>
            <View><Text>{errorJobDesc}</Text></View>
            <Item floatingLabel last>
              <Label>Last date to apply</Label>
              <Input keyboardType={'numeric'} value={lastDate} onChangeText={text  => setLastDate(text)} />
            </Item>
            <View><Text>{errorLastDate}</Text></View>
            <Item floatingLabel last>
              <Label>Apply Email</Label>
              <Input keyboardType={'email-address'} value={applyEmail} onChangeText={text  => setApplyEmail(text)} />
            </Item>
            <View><Text>{errorApplyEmail}</Text></View>
            <View style={styles.submit__btn__section}>
              <TouchableOpacity style={styles.submit__btn} onPress={ (e) => handleSubmit(e)}>
                <Text style={styles.submit__btn__txt}>POST JOB</Text>
              </TouchableOpacity>
           
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
const mapStateToProps = (state) => {
    return {
      product_data: state.product_data
  
    };
  };
  
  const mapDispatchToProps= (dispatch) =>({
    // login_user: (email,password,myNavigation) => dispatch(login_user(email,password,myNavigation)) 
  })
export default connect(mapStateToProps,mapDispatchToProps) (JobPost);