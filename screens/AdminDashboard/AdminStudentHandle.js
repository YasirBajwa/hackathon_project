

import React,{useState,useEffect} from 'react';
import { ScrollView, View,TouchableOpacity} from 'react-native';
import { Card, CardItem, Text, Body } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import {connect} from 'react-redux';
import styles from './styleAdminStudentHandle';
import firebase from '../../config/firebase';


const AdminStudentHandle = (props) => {
  let [firebaseData,setFirebaseData] = useState([]);
  const myNavigation = props.navigation

  useEffect( () =>{
    async function myFunc(){
      const arr = []
      await  firebase.database().ref('/').child(`register_students`).on('child_added', (data)=>{
        arr.push(data.val())
        setFirebaseData(arr);
      })
    }
    myFunc();
  },[])
const  deleteStudent = async (index) => {
  await firebase.database().ref('register_students').child(index).remove();
  firebaseData.splice(index);
  setFirebaseData([...firebaseData]);
  alert('User has been deleted permanently');
  myNavigation.navigate('AdminDashboard')

}
  return (
    <ScrollView > 
            <View style={{flex:1}} >
            <View style={{flex:1}}>
              <View style={styles.header__title}>
                <Text style={styles.header__title__text}> SAYALNI SCHOOL SYSTEM</Text>
              </View>
            </View>
             <View >
               <Text style={styles.blood__card__title}>Student Personal Detail</Text>
             </View>
             <View >
               <Text style={{textAlign:'center'}}>Admin has all the rights to view ,edit and delete the data</Text>
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
                          <View style={styles.blood__card__box__header__c2__txt}  >
                            <TouchableOpacity onPress={ () => deleteStudent(data.key)}>
                                <Text style={{color:'white'}}>DELETE USER</Text>
                            </TouchableOpacity>

                          </View>
                     </View>
                     </CardItem>
                   <CardItem style={styles.blood__card__box__body}> 
                     <Body>
                       <View style={styles.blood__card__box__body__wrapper}>
                       <View style={styles.blood__card__box__body__c1}>
                           <View>
                             <Text style={{color:'green'}}>Education : </Text> 
                             <Text>{data.degreeType}</Text>
                          </View>
                          <View style={{marginTop:10}}>
                             <Text style={{color:'green'}}>Marks :  </Text> 
                             <Text>{data.cgpa}</Text>
                          </View>
                          <View style={{marginTop:10}}>
                             <Text style={{color:'green'}}>Skills :  </Text> 
                             <Text>{data.skill}</Text>
                          </View>
                          <View style={{marginTop:10}}>
                             <Text style={{color:'green'}}>Registeration Number :</Text>
                             <Text> {data.registrationNumber} </Text> 
                          </View>
                          <View style={{marginTop:10}}>
                             <Text style={{color:'green'}}>Current Semester : </Text> 
                              <Text> {data.semester} </Text> 
                          </View>
                          <View style={{marginTop:10}}>
                             <Text style={{color:'green'}}>Email Address : </Text> 
                              <Text> {data.emailAddress} </Text> 
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
  );
};



const mapStateToProps= (state) =>({
    // users: state.users,
})

const mapDispatchToProps= (dispatch) =>({
//   product_page: (data) => dispatch(product_page(data)) 
})

export default connect(mapStateToProps,mapDispatchToProps)( AdminStudentHandle);
