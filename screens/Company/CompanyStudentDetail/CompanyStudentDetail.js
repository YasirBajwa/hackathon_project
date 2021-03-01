import React,{useState,useEffect} from 'react';
import { ScrollView, View,Text,TouchableOpacity} from 'react-native';
import { Card, CardItem, Body } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import Navbar from '../../Navbar/Navbar';
import styles from './styleStudentDetail';
import {connect} from 'react-redux';
import {student_login} from '../../../store/action/action';
import firebase from '../../../config/firebase'

const CompanyStudentDetail = (props,navigation) =>{
    let [firebaseData,setFirebaseData] = useState([]);

    useEffect( () =>{
       async function myFunc(){
        const arr = []
         await  firebase.database().ref('/').child(`register_students/register_data`).on('child_added', (data)=>{
         arr.push(data.val())
         setFirebaseData(arr);
       })
       }
       myFunc();
      
      
    
    },[])


     return(
         <ScrollView>
         <View style={styles.container__wrapper}>
            <Navbar/>
             
          <View style={styles.login__section}>
              <View style={styles.form__section__item1}>
                        <Text style={styles.login__text}>Company Student Detail</Text>
              </View>
          </View>  
          <View >
               <Text style={styles.blood__card__title}>List of All Registered Students </Text>
             </View>

             {
                firebaseData && Object.values(firebaseData).map( (data,index) =>{
                  //  user__data[name,email] = data
                  return <View style={styles.blood__card__section} key={index}>
                  <Card style={styles.blood__card__box}  >
                    <CardItem style={styles.blood__card__box__header} header>
                     <View style={styles.blood__card__box__header__c1}>
                     <View>
                     <Ionicons name="person" style={styles.blood__card__box__icon} size={40}/>
                     </View>
                     <View>
                         <Text style={styles.blood__card__box__user__name}> {data.name}</Text>
                     </View>
                     </View>
                     <View style={styles.blood__card__box__header__c2}>
                          <Text style={styles.blood__card__box__header__c2__txt}>Reg No: {data.registrationNumber}</Text>
                     </View>
                   </CardItem>
                   <CardItem style={styles.blood__card__box__body}> 
                     <Body>
                       <View style={styles.blood__card__box__body__wrapper}>
                       <View style={styles.blood__card__box__body__c1}>
                           <View style={{flex:1,flexDirection:'row'}}>
                             <Text>Degree: </Text> 
                             <Text>{data.degreeType}</Text>
                          </View>
                          <View style={{flex:1,flexDirection:'row'}}>
                             <Text>SEMESTER: </Text> 
                             <Text>{data.semester}</Text>
                          </View>
                          <View style={{flex:1,flexDirection:'row'}}>
                             <Text>Email: {data.emailAddress} </Text> 
                             {/* <Text></Text> */}
                          </View>
                          <View style={{flex:1,flexDirection:'row'}}>
                             <Text>Mobile: {data.mobileNumber} </Text> 
                             {/* <Text></Text> */}
                          </View>
                          <View style={{flex:1,flexDirection:'row'}}>
                             <Text>ADDRESS: </Text> 
                             <Text>{data.city}</Text>
                          </View>

                       </View>
                       </View>
                     </Body>
                   </CardItem>
                </Card>
            </View>
                })
             }
        
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
export default connect(mapStateToProps,mapDispatchToProps)(CompanyStudentDetail);