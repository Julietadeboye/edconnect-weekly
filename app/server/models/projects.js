const DataModel = require('./data_model');

class Project {
    constructor(id, name, abstract, authors, tags, createdBy) {
        this.id=id;
        this.name=name;
        this.abstract=abstract;
        this.authors=authors;
        this.tags=tags;
        this.createdBy=createdBy;

    }
}

class Projects extends DataModel {
    validate(obj) {
        this.errors = [];
        let errormsg;

        //authors property validation
        for (const key in obj){
            if (obj.authors !==Array.isArray(obj[key])){
                errormsg = `${key} should be an array.`;
                this.errors.push(errormsg);
            }
        }

         //tag property validation
         for (const key in obj){
            if (obj.tags !==Array.isArray(obj[key])){
                errormsg = `${key} should be an array.`;
                this.errors.push(errormsg);
            }
        }

        for (const key in Object.keys(obj)){
            if (obj[key] = ''){
                emptyTest = true;
                errormsg = `${key} should not be empty.`;
                this.errors.push(errormsg)
                
            }
        }
    
        if(this.errors.length == 0) {
            return true;
        } else{
        return false
        }
    }

}


// Do not worry about the below for now; It is included so that we can test your code
// We will cover module exports in later parts of this course
module.exports = {
    Project,
    Projects
};