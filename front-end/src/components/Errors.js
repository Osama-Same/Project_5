export default function validateInfo(values){
    let error =[]

    if(!values.email){
       return error.email ="Email required"
       
    }else if(!/\S+@\S+\.\S+/.test(values.email)){
       return error.email ="Email Address is invalid"
        
    }
    if(!values.password){
      return  error.password="Password required"
        
    }else if(values.password.length < 6){
      return  error.password="Password needs to 6 characters or more"

    }
    return error;
}
