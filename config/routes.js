
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/AdminLogin/Login';
import Register from '../screens/Register/Register';
import Home from '../screens/Home/Home';

import StudentLogin from '../screens/Student/StudentLogin';
import AdminDashboard from '../screens/AdminDashboard/Dashboard';
import AdminCopmany from '../screens/AdminCompany/AdminCompany';
import AdminUser from '../screens/AdminUser/AdminUser';
import AdminStudentHandle from '../screens/AdminDashboard/AdminStudentHandle';
import AdminJobHandle from '../screens/AdminDashboard/AdminJobHandle';
import StudentRegistration  from '../screens/Student/StudentRegistration';
import StudentDashboard from '../screens/Student/StudentDashboard';
import StudentRegister from '../screens/Student/StudentRegistration';
import StudentPersonal from '../screens/Student/StudentPersonal';
import CompanyLogin from '../screens/Company/CompanyLogin/CompanyLogin';
import CompanyRegistration from '../screens/Company/CompanyRegistration/CompanyRegistration'
import CompanyDashboard from '../screens/Company/CompanyDashboard/CompanyDashboard';
import CompanyJobs from '../screens/Company/CompanyJobs/CompanyJobs';
import CompanyStudentDetail from '../screens/Company/CompanyStudentDetail/CompanyStudentDetail';
import JobPost from '../screens/Company/JobPost/JobPost';

const Stack = createStackNavigator();

function NavigationPage() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />

        <Stack.Screen name="Login" component={Login} />

      <Stack.Screen name="StudentLogin" component={StudentLogin} />
      <Stack.Screen name="StudentRegister" component={StudentRegister} />

      <Stack.Screen name="CompanyRegistration" component={CompanyRegistration} />
      <Stack.Screen name="CompanyLogin" component={CompanyLogin} />
      <Stack.Screen name="CompanyJobs" component={CompanyJobs} />
      <Stack.Screen name="CompanyDashboard" component={CompanyDashboard} />
     
      <Stack.Screen name="JobPost" component={JobPost} />


      <Stack.Screen name="StudentDashboard" component={StudentDashboard} />

        <Stack.Screen name="StudentPersonal" component={StudentPersonal} />


        <Stack.Screen name="AdminDashboard" component={AdminDashboard} />
        <Stack.Screen name="AdminStudentHandle" component={AdminStudentHandle} />
        <Stack.Screen name="AdminJobHandle"  component={AdminJobHandle} />


        

        {/* <Stack.Screen name="Register" component={Register} /> */}
        {/* <Stack.Screen name="BloodList" component={BloodList} /> */}
        {/* <Stack.Screen name="MenueList" component={MenueList} />  */}
        {/* <Stack.Screen name="DonorForm" component={DonorForm} /> */}

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default (NavigationPage);