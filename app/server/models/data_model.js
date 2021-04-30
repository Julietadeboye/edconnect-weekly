class DataModel {
    constructor() {
        this.data = [];
        this.errors = [];
    }

    getAll() {
        return this.data;
    }

    getById(id) {
        for(let i=0; i<this.data.id.length; i++){
            if (this.data.id[i] == id){
                return this.data.id[i];
            }
        }
        return null;
    }

    save(obj) {
        if (this.validate(obj)) {
            this.data.push(obj);
            return true;
        }
        return false;
    }

    update(obj, id) {
        for(let i = 0; i<this.data.length; i++){
            let updateUser = this.data[i];
            if(updateUser.id == id){
                updateUser = obj;
            }else {
                return false;
            }
        }
    }

    delete(id) {
        let person = this.data.find(key => key.id == id);
        let i = this.data.indexOf(person);
        if (person) {
            this.data.splice(i, 1)
            return true;
        }
        return false;
    }

    // this method will be overriden in the sub classes
    validate(obj) {
        return false;
    }
}

// Do not worry about the below for now; It is included so that we can test your code
// We will cover module exports in later parts of this course
module.exports = DataModel;