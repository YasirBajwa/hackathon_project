import React, { useState, useEffect } from 'react';
import { View, Text ,Image} from 'react-native';
import {connect} from 'react-redux';
import {logout_user} from './../../store/action/action';
import styles from './homeStyle';
import LogoImage from '../../assets/sayalani-logo2.png'

const Home = (props) => {
    console.log('users from redux state===>',props.users);
    // const myNavigation = props.navigation;
 
    return(
      <View style={{flex:1}}>
      <View style={styles.header__title}>
        <Text style={styles.header__title__text}> SAYALNI SCHOOL SYSTEM</Text>
      </View>
       <View style={styles.header__title__section}>
             <View>
                    <Image source={LogoImage} style={styles.logo__img}/>
               </View>  

               <View>
                 <Text style={styles.donate__blood} 
                         title="Go to ListPage"
                         onPress={() => props.navigation.navigate('Login')}
                         >
                           Click Here to continue</Text>
               </View>
            
      </View> 
      
    </View>
    )
}

const mapStateToProps = (state) => {
    return {
      users: state.users,
      product_data: state.product_data
  
    };
  };
  
  const mapDispatchToProps= (dispatch) =>({
    // logout_user:(myNavigation) => dispatch(logout_user(myNavigation))
  })

export default connect(mapStateToProps,mapDispatchToProps)(Home);


{/* <View>
<Text>Welcome Home</Text>
<TouchableOpacity   onPress={ () => props.logout_user(props.navigation)}>
     <Text  >LOGOUT</Text>
  </TouchableOpacity>
</View> */}