import React from 'react';
import { View,Text} from 'react-native';
import styles from './navbarStyle';

const Navbar = () => {
    return (
      
      <View>  
       <View style={styles.header__title}>
             <Text style={styles.header__title__text}> SAYALNI SCHOOL SYSTEM</Text>
      </View>
      </View>
  
    );
  };
  
  
  export default Navbar;