const DataModel = require('./data_model');

class User {
    constructor(id, firstname, lastname, email, password, matricNumber, program, graduationYear) {
        this.id=id;
        this.firstname=firstname;
        this.lastname=lastname;
        this.email=email;
        this.password=password;
        this.matricNumber=matricNumber;
        this.program=program;
        this.graduationYear=graduationYear;
    }

    getFullName() {
        return this.firstname + " " + this.lastname;
    }
}

class Users extends DataModel {
    authenticate(email, password) {
        let user  = this.getByEmail(email)
        if (user.password == password){
            return true;
        }
        return false;
    }


    getByEmail(email) {
        for (let i=0; i< this.data.length; i++){
            if (this.data[i].email == email){
                return this.data[i];
            }
        }
        return null;
    }

    getByMatricNumber(matricNumber) {
        for(let i=0; i<this.data.length; i++){
            let  element = this.data[i];
            if (element.matricNumber == matricNumber){
                return element;
            }
        }
        return null;
    }

    validate(obj) {
        this.errors = [];
        let errormsg;

        //empty property validation
      for (const key in obj){
            if (obj[key] === '' || obj[key] === undefined || obj[key] === null){
                errormsg = `${key} should not be empty.`;
                this.errors.push(errormsg)
            }
        }

        //same email address validation
        let valEmail = this.data.find(item => item.email === obj.email)
            if (valEmail){
            this.errors.push("A user with this email already exists.")
            }

         //same matric number validation
         for (let i =0; i<this.data.length; i++){
            let valMatric= this.data[i];
            if (valMatric.matricNumber === obj.matricNumber){
                errormsg = `A user with ${obj.matricNumber} already exists.`;
                this.errors.push(errormsg);
            }
        } 
        
         // test for password
        if (obj.password.length < 7) {
            errormsg = `Password should be atleast 7 characters`;
            this.errors.push(errormsg)
        }

        
        if(this.errors.length == 0) {
            return true;
        } 
        return false
        
    }
}

// Do not worry about the below for now; It is included so that we can test your code
// We will cover module exports in later parts of this course
module.exports = {
    User,
    Users
};