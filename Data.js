// JavaScript Document

var Data = function(inData) { 
  this.data = inData;
};

Data.prototype.validateEmail = function() {
  if(this.data == "" || this.data == null){
    return false; //"Email is required";
  } 

  var emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9])+$/;
  if(emailRegex.test(this.data)){
    return true;
  } else {
      return false;  //"Invalid Email Format";
  }

  return true;
};

Data.prototype.validateZip = function() {
  if(this.data == "" || this.data == null){
    return false;  //"Zip Code is required";
  } 
               
  var numericRegex =  /^\d{5}(-\d{4})?$/; 
  if(numericRegex.test(this.data)){
    return true;
  } else {
      return false;
  }
   
  return true;
};

module.exports = Data;