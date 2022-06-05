const ObjectId = require('mongoose').Types.ObjectId;

const isValidReqBody = function(value){
  if(Object.keys(value).length == 0) {return false}  
  else return true;
}

const isValid = function(value) {
    if(typeof (value) == "undefined" || typeof (value) == null) {return false}
    if(typeof (value) == "string" && (value).trim().length == 0) {return false}
    if(typeof (value) == 'number' && (value).toString().trim().length == 0){return false}
    return true
}

const isValidString = function(value){
    if(!/^[A-Za-z ]+$/.test(value)) {return false}
    else return true
}

const isValidEmail = function(value){
    if(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(value)){return true}
    else return false

}
const isValidPhone = function(value){
    if( /^\d{10}$/.test(value)) {return true}
    else return false
}


const isValidPassword = function(value){
    if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/.test(value)==true) {return true}
    else return false
}
function isValidObjectId(id){
     
    if(ObjectId.isValid(id)){
        if((String)(new ObjectId(id)) === id)
            return true;       
        return false;
    }
    return false;
}
function isValidStatus(value){

   if( ["pending", "completed", "cancled"].indexOf(value) == -1) {return false}
   else return true
}


module.exports = {isValid , isValidPhone,isValidEmail , isValidPassword,isValidObjectId,isValidStatus,
     isValidReqBody,isValidString}
