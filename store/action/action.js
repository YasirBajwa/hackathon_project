import React from 'react';
// import auth from '@react-native-firebase/auth';
import Firebase from '../../config/firebase';

const  register_student = (email,password,myNavigation) => {
    return async (dispatch) => {
        try {
            const response = await Firebase.auth().createUserWithEmailAndPassword(email, password)
             dispatch({type:'REGISTER_STUDENT',payload:response.user}) ;
             alert('user has been Registered ');   
             myNavigation.navigate('StudentLogin')

        } catch (e) {
            alert(e)
        }
    }                    
}  

const  student_login = (email,password,myNavigation) => {
    return async (dispatch) => {
        try {
            const response = await Firebase.auth().signInWithEmailAndPassword(email, password)
                 dispatch({type:'LOGIN',payload:response.user.email}) ;
                 alert('You have been login successfully');
                 myNavigation.navigate('CompanyJobs')
        } catch (e) {
            alert('Invalid User Credential');
        }
    }                    
} 
const  admin_login = (email,password,myNavigation) => {
    return async (dispatch) => {
        try {
            const response = await Firebase.auth().signInWithEmailAndPassword(email, password)
                 dispatch({type:'ADMIN_LOGIN',payload:response.user.email}) ;
                 alert('Admin has been login successfully');
                 myNavigation.navigate('AdminDashboard')
        } catch (e) {
            alert('Invalid admin Credentials');
        }
    }                    
}
const  company_login = (email,password,myNavigation) => {
    return async (dispatch) => {
        try {
            const response = await Firebase.auth().signInWithEmailAndPassword(email, password)
                 dispatch({type:'COMPANY_LOGIN',payload:response.user.email}) ;
                 alert('You have been login successfully');
                 myNavigation.navigate('CompanyDashboard')
        } catch (e) {
            alert('Invalid User Credential');
        }
    }                    
} 
const  register_company = (email,password,myNavigation) => {
    return async (dispatch) => {
        try {
            const response = await Firebase.auth().createUserWithEmailAndPassword(email, password)
             dispatch({type:'REGISTER_COMPANY',payload:response.user}) ;
             alert('COMPANY has been Registered ');   
             myNavigation.navigate('CompanyLogin')

        } catch (e) {
            alert(e)
        }
    }                    
} 
export {
    register_student,
    student_login,
    admin_login,
    company_login,
    register_company
}

