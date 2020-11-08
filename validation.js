/* export const TextValidation = (e) => {
  var text = e;
  var length = text.length;
  var pattern = new RegExp(/[0-9]/);
  var result = pattern.test(text);
  if (text == "") {
    console.log("It should not be empty");
    return false;
  } else if (result) {
    console.log("It should not contain any number");
    return false;
  } else if (length == 0) {
    return false;
  } else {
    return true;
  }
};
export const Validation = (value, type, name) => {
    if(value.length === 0){
        return "It should not be empty"
    }
    else{
        // var object = {
        //     value : value,
        //     type : type,
        //     name : name,
        //     errorMsg :'Invalid',
        // }
  switch (type) {
    case "text":
      var pattern = new RegExp(/[0-9]/)
      if (pattern.test(value)) { 
        return "Invalid text"
      } 
      break;
      case "number":
      if (value.length !== 10) {
        return "It should be 10 numbers";
      }
      break;
    case "email":
      var validEmailRegex = new RegExp(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
      if (!validEmailRegex.test(value)) {
        return "dskadksnlks"
      }
      break;
      default :
      return "Success"
      
  }
}
}

// export const NumberValidation = (e) =>{
//     var number = e
//     var pattern = new RegExp(/[0-9]/)
//     var result = pattern.test(number);
//     if(text == ""){
//         console.log("It should not be empty")
//         return false
//     }else if(result){
//         console.log("It should not contain any number")
//         return false
//     }else{
//         return true
//     }
// }
export const PhoneNumber = (e) => {
  var number = e;

  if (number != 10) {
    return false;
  } else {
    return true;
  }
};
export const Temp = (type, value) =>{
          if(type = "text"){
            console.log(type)
            var pattern = new RegExp(/[0-9]/g)
             if(pattern.test(value)){
            return "Invalid text"
          }
          }
        else if(type = "number"){
            console.log(type)
            if(value.length > 10){
              return "Invalid number"
            }
          }
}

export const Valid = (type,value)=>{
      if(value.length == 0){
        console.log(value)
          return false
      }else{
        switch(type){
          case "text" :
          var pattern = new RegExp(/[0-9]/)
          if(pattern.test(value)){
            return "It should not contains any numbers"
          }
          break;
          case "number" :
          if(value.length > 10){
            return "Invalid mobile number"
          }
          case "password" :
            if(value.length < 8){
              return "Invalid password"
            }
            break;
            default :
            return true
            break;
            
        }
      }
}
*/

export const Demo = (value, type) =>{
  if(value.length === 0){
      return "It should not be empty"
  }else{
    switch(type){
      case "text" :
        var pattern = new RegExp(/[^0-9]/)
        if(pattern.test(value)){
          console.log(value)
          return "it should not contains any number"
        }
      
        case "number" :
          if(value.length > 10){
            console.log(value)
            return "It should not br exceeded more than 10"
          }
          case "email" :
            var validEmailRegex = 
            RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)          
            if(validEmailRegex.test(value)){
              console.log(value)
              return "Invalid email"
            }
            default :
          return true
          
    }
  }

}