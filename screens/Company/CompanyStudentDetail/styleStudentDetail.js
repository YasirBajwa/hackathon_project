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
            width:'60%',
            height:40,
            alignSelf:'center',
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
         ,company__job__wrapper:{
             maxWidth:'80%',
             marginTop: 0,
             marginRight: 'auto',
             marginBottom: 0,
             marginLeft: 'auto',
             marginTop:10
         },
         company__job__wrapper__txt:{
            textAlign:'center'
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
              height:220,
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
              marginTop:10
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