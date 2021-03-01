import { StyleSheet } from "react-native"

export default StyleSheet.create({
    header__title:{
        flex:1,
        height:60,
        backgroundColor:'green',
        alignItems:'center',
        justifyContent:'center',
      },
      header__title__text:{
        color:'white',
        fontSize:25
      },
      header__title__section:{
        flex:5,
        backgroundColor:'white',
        alignItems:'center',
      },
      logo__img:{
          width:300,
          height:300,
          resizeMode:'contain'
      }
     ,donate__blood:{
       color:'green',
       fontSize:30,
       marginTop:40
     },
     find__blood:{
      color:'green',
      fontSize:30,
     },
     blood__opt:{
      fontSize:22,
    
     }

})