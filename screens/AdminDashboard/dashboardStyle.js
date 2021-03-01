import { StyleSheet } from "react-native"



export default StyleSheet.create({

         container__wrapper:{
             flex:1,
         },
         login__section:{
            flex:1,
             marginTop:50
         },
         form__section__item1:{
            flex:1,
            alignSelf:'center',
         },

         form__section__input:{
            flex:1,
            alignContent:'center',
            alignSelf:'center',
            width:'90%'
                             
          },

         login__text:{
            fontSize:18,
            color:'green'
             
         },
         submit__btn__section:{
             marginTop:50
         },
         submit__btn:{
            flex:1,
            width:'80%',
            height:40,
            alignSelf:'center',
            backgroundColor:'green',
            justifyContent:'center',
            alignItems:'center',
            color:'white',
            fontSize:18,
        },
        submit__btn2:{
            flex:1,
            width:'80%',
            height:40,
            alignSelf:'center',
            backgroundColor:'green',
            justifyContent:'center',
            alignItems:'center',
            color:'white',
            fontSize:18,
            marginTop:30
        },
        submit__btn__txt:{
            color:'#fff',
            fontSize:18
        }
        ,register__login:{
            flex:1,
            alignItems:'center',
            marginTop:20
        },
        register__text:{
            color:'green',
            textDecorationLine:'underline'
        },
         errorSet:{
             color:'red',
             marginLeft:15
         }
         ,dashboard__section:{
             marginTop:30,

         }

})