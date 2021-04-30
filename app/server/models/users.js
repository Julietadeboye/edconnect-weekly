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
        let authen = this.data.find((key) => key.email == email && key.password == password) 
             return authen? true : false
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
        let emptyTest,emailTest,matricTest,passwordTest = false;

        //empty property validation
        for (const key in Object.keys(obj)){
            if (obj[key] = ''){
                emptyTest = true;
                errormsg = `${key} should not be empty.`;
                this.errors.push(errormsg)
                
            }
        }

        //same email address validation
        for (let i =0; i<this.data.length; i++){
            let valEmail= this.data[i];
            if (valEmail.email === obj.email){
                emailTest = true;
                errormsg = `A user with ${obj.email} already exists.`;
                this.errors.push(errormsg);
            }
        }

         //same matric number validation
         for (let i =0; i<this.data.length; i++){
            let valMatric= this.data[i];
            if (valMatric.matricNumber === obj.matricNumber){
                matricTest = true;
                errormsg = `A user with ${obj.matricNumber} already exists.`;
                this.errors.push(errormsg);
            }
        } 
        
         // test for password
        if (obj.password.length < 7) {
            passwordTest = true;
            errormsg = `Password should be atleast 7 characters`;
            this.errors.push(errormsg)
        }

        if (emptyTest && emailTest && matricTest && passwordTest == true){
            return false;
        }
        return true;
    }
}

// Do not worry about the below for now; It is included so that we can test your code
// We will cover module exports in later parts of this course
module.exports = {
    User,
    Users
};