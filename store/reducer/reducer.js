
let INITIAL_STATE ={
    users:[],
    check_user : false,
    register_student : [],
    login_user:[],
    admin:[],
    company:[],
    register__company:[]
      
  }
  
  
  export default ( state = INITIAL_STATE ,action) => {
    switch (action.type){
        case 'REGISTER_STUDENT' :
            return {
                ...state,
                register_student : action.payload
            }
         case 'LOGIN':
           return {
             ...state,
            //  login_user: action.payload,
             users: action.payload
           } 
           case 'ADMIN_LOGIN':
            return {
              ...state,
             //  login_user: action.payload,
              admin: action.payload
            }   
            case 'COMPANY_LOGIN':
            return {
              ...state,
             //  login_user: action.payload,
              company: action.payload
            } 
            case 'REGISTER_COMPANY':
              return {
                ...state,
               //  login_user: action.payload,
               register__company: action.payload
              } 
           case 'LOGOUT':
           return {
             ...state,
             users: []
           } 
    }
    return state;
      
}