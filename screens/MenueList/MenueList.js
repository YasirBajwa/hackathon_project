

import React,{useState,useEffect} from 'react';
import {  View,Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styleMenue';
import {connect} from 'react-redux';
import { logout_user } from '../../store/action/action';

const MenueList = (props) => {
   const [loggedUser,setLoggedUser] = useState();
   const myNavigation = props.navigation; 
  const [newUser] = props.users;
  console.log('current user from redux to local==>',newUser);


  useEffect( () => {
    setLoggedUser(newUser);
    console.log('current user from redux to local after useffect ==>',newUser);
  },[])

  return (
    <View style={{flex:1}}>
      <View style={styles.header__title}>
        <Text style={styles.header__title__text}> SAYALNI BLOOD BANK</Text>
      </View>
      <View style={styles.list__section}>
           <View style={styles.list__section__item1}>

           <View style={styles.list__section__item1__content1}>
              
                 { loggedUser !=null || loggedUser != undefined  ?  
                  <View>
                 <Icon 
                  onPress={() => props.navigation.navigate('BloodList')}
                  name="man" size={80}/>
                  </View>
                 :
                 <View>
                 <Icon 
                 onPress={() => props.navigation.navigate('Login')}
                 name="man" size={80}/>
               </View>

                 }
                  
               <View>
                  <Text  style={styles.list__section__item1__content1__txt}
                    title="Go to Card"
                    // onPress={() => navigation.navigate('BloodList')}
                  > Find Blood </Text>
                   </View>

           </View>
           <View style={styles.list__section__item1__content2}>
               <View style={styles.list__section__item1__content2__icon}>
                   <Icon
                   onPress={() => props.logout_user(myNavigation)}
                   name="add-circle" size={80}/>
               </View>
               <View>
                  <Text style={styles.list__section__item1__content2__txt}
                   title="Go to Card"
                  //  onPress={() => navigation.navigate('Form')}
                  > Become Donor </Text>
                   </View>

           </View>
             
            </View>
          
          <View style={styles.list__section__item2}>
              
          <View style={styles.list__section__item1__content1}>
               <View>
                   <Icon name="home" size={80}/>
               </View>
               <View>
                  <Text style={styles.list__section__item1__content1__txt}> Blood Banks </Text>
                   </View>

           </View>
           <View style={styles.list__section__item1__content1}>
               <View>
                   <Icon name="battery-full" size={80}/>
               </View>
               <View>
                  <Text style={styles.list__section__item1__content1__txt}> Blood Match </Text>
                   </View>

           </View>
          </View>
         
          <View style={styles.list__section__item3}>
              
              <View style={styles.list__section__item1__content1}>
                   <View>
                       <Icon name="share-social" size={80}/>
                   </View>
                   <View>
                      <Text style={styles.list__section__item1__content1__txt}> Share App </Text>
                       </View>
    
               </View>
               <View style={styles.list__section__item1__content1}>
                   <View>
                       <Icon name="call" size={80}/>
                   </View>
                   <View>
                      <Text style={styles.list__section__item1__content1__txt}> Contact Us </Text>
                       </View>
    
               </View>
              </View>

      </View>
      
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users

  };
};

const mapDispatchToProps= (dispatch) =>({
     logout_user: (myNavigation) => dispatch(logout_user(myNavigation))
  // login_user: (email,password,myNavigation) => dispatch(login_user(email,password,myNavigation)) 
})

export default connect(mapStateToProps,mapDispatchToProps)( MenueList);
