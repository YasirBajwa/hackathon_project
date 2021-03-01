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
  submit__btn:{
    flex:1,
    width:240,
    height:40,
    alignSelf:'center',
    backgroundColor:'green',
    justifyContent:'center',
    alignItems:'center',
    color:'white',
    fontSize:18,
    marginTop:30,
},
submit__btn__txt:{
    color:'#fff',
    fontSize:18
},
  blood__card__title:{
    fontSize:18,
    marginTop:25,
    textAlign:'center',
    color:'green',
    fontWeight:'bold'
  },
  blood__card__section:{
      flex:5,
      height:420,
      marginTop:10
  },
  blood__card__box:{
    flex:1,
    alignContent:'center',
    alignSelf:'center',
    width:'90%'
  },
  blood__card__box__header:{
    flex:1,
    backgroundColor:'green',
    justifyContent:'space-between'
},
  blood__card__box__header__c1:{
      flex:1,
      flexDirection:'row'
  },
 
  blood__card__box__header__c2__txt:{
      color:'white'
  }

  ,blood__card__box__body:{
      flex:5
  },
  blood__card__box__icon:{
      color:'white'
  },
  blood__card__box__user__name:{
      color:'white',
      marginTop:10,
      fontSize:12
  }
  ,blood__card__box__body__c1__1:{
      flex:1,
      flexDirection:'row',
      maxWidth:'80%',
      // maxHeight:200
      // overflow:'hidden'
  }
  ,blood__card__box__body__c1__2:{
    flex:1,
    flexDirection:'row',
    marginTop:25
}
,blood__card__box__body__c2:{
    flex:1,
    justifyContent:'flex-end',
    flexDirection:'row'
    
}
,blood__card__box__body__wrapper:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between'
},
blood__card__box__body__c1__1__txt:{
  marginTop:5,
  marginLeft:5
},
blood__card__box__body__c1__2__txt:{
  marginTop:5
},
blood__card__box__body__c2__icon:{
  
},
centeredView: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  // width:'300px',
  marginTop: 22
},
modalView: {
  margin: 20,
  backgroundColor: "white",
  borderRadius: 20,
  padding: 35,
  width:300,
  height:300,
  alignItems: "center",
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5
},
openButton: {
  backgroundColor: "#F194FF",
  borderRadius: 20,
  padding: 10,
  elevation: 2
},
textStyle: {
  color: "white",
  fontWeight: "bold",
  textAlign: "center"
},
modalText: {
  marginBottom: 15,
  textAlign: "center"
},
modal__section:{
    flex:1,
    alignItems:'center'
},
modal__section__content3:{
    marginTop:25
},
modal__section__content3__btn:{
    
    alignItems:'center',
    justifyContent:'center',
    
},
modal__section__content3__btn__txt:{
    color:'white',
},
modal__section__content4:{
    marginTop:20
},
modal__section__content4__btn:{
  width:120,
  height:35,
  backgroundColor:'#2196F3',
  alignItems:'center',
  justifyContent:'center',
  shadowOffset: {
    width: 0,
    height: 2
  },
  shadowOpacity: 0.25,
  shadowRadius: 1.84,
  elevation: 3
},
modal__section__content4__btn__txt:{
  color:'white',
},
loader__container: {  
  flex: 1,  
  justifyContent: 'center'  ,
  alignItems:'center',
  marginTop:50
},

})