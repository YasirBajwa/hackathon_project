import { StyleSheet } from "react-native"

export default StyleSheet.create({
    header__title:{
        flex:1,
        height:80,
        backgroundColor:'green',
        alignItems:'center',
        justifyContent:'center',
      },
      header__title__text:{
        color:'white',
        fontSize:25,
        marginTop:10
      },
      form__section:{
          flex:5,
      },
      form__section__item1__txt:{
          textAlign:'center',
          marginTop:30,
          color:'green',
          fontSize:16
      },
      form__section__item1:{
        //   flex:1
      },
      form__section__item2:{
            // flex:
      },
      form__section__input:{
        flex:1,
        alignContent:'center',
        alignSelf:'center',
        width:'90%'
                         
      },
      submit__btn__section:{
        // marginTop:40,
      },
      submit__btn:{
          flex:1,
          width:'60%',
          height:40,
          alignSelf:'center',
          // marginTop: 10,
          backgroundColor:'green',
          justifyContent:'center',
          alignItems:'center',
          color:'white',
          fontSize:18,
      },
      submit__btn__txt:{
          color:'#fff',
          fontSize:18
      }
})