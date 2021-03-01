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
    list__section:{
        flex:5,
        backgroundColor:'lightgrey'
    },
    list__section__item1:{
       flex:1,
       flexDirection:'row',
       justifyContent:'space-around',
       marginTop:30
    },
    list__section__item1__content1__txt:{
        color:'green',
        fontSize:18
    },
    list__section__item1__content2__txt:{
      color:'green',
      fontSize:18
  },
  list__section__item1__content2__icon:{
      marginLeft:20
  },
  list__section__item2:{
      flex:1,
      flexDirection:'row',
      justifyContent:'space-around',
   },
   list__section__item3:{
      flex:1,
      flexDirection:'row',
      justifyContent:'space-around',
   },
  });