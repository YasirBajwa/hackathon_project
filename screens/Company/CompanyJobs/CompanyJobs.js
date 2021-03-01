

import React,{useState,useEffect} from 'react';
import { ScrollView, View,TouchableOpacity} from 'react-native';
import { Card, CardItem, Text, Body } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons'
import { Ionicons } from '@expo/vector-icons';
import {connect} from 'react-redux';
import styles from './styleCompanyJob';
import firebase from '../../../config/firebase';


const CompanyJobs = (props) => {
  let [firebaseData,setFirebaseData] = useState([]);

  useEffect( () =>{
    // async function myFunc(){
      const arr = []
           firebase.database().ref('/').child(`company_jobs`).on('child_added', (data)=>{
        arr.push(data.val())
        setFirebaseData(arr);
      })
    // }
    // myFunc();
  },[])
  return (
    <ScrollView > 
            <View style={{flex:1}} >
            <View style={{flex:1}}>
              <View style={styles.header__title}>
                <Text style={styles.header__title__text}> SAYALNI SCHOOL SYSTEM</Text>
              </View>
            </View>
             <View >
               <Text style={styles.blood__card__title}>Fresh Jobs</Text>
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
                         <Text style={styles.blood__card__box__user__name}> {data.jobTitle}</Text>
                     </View>
                     </View>
                     <View style={styles.blood__card__box__header__c2}>
                          <Text style={styles.blood__card__box__header__c2__txt}></Text>
                     </View>
                   </CardItem>
                   <CardItem style={styles.blood__card__box__body}> 
                     <Body>
                       <View style={styles.blood__card__box__body__wrapper}>
                       <View style={styles.blood__card__box__body__c1}>
                           <View>
                             <Text style={{color:'green'}}>Job Description : </Text> 
                             <Text>{data.jobDesc}</Text>
                          </View>
                          <View style={{marginTop:10}}>
                             <Text style={{color:'green'}}>Skills Required :  </Text> 
                             <Text>{data.skillRequired}</Text>
                          </View>
                          <View style={{marginTop:10}}>
                             <Text style={{color:'green'}}>Number of candidate Required :</Text>
                             <Text> {data.candidate} </Text> 
                          </View>
                          <View style={{marginTop:10}}>
                             <Text style={{color:'green'}}>Last date to apply the Job : </Text> 
                              <Text> {data.lastDate} </Text> 
                          </View>
                          <View style={{marginTop:10}}>
                             <Text style={{color:'green'}}>Apply at : </Text> 
                              <Text> {data.applyEmail} </Text> 
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

export default connect(mapStateToProps,mapDispatchToProps)( CompanyJobs);
