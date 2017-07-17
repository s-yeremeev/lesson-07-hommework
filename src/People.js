//люди имеют имена, фамилии, возраст
/**
 * Class People. Contains 3 parameters that are inherited by children
 * @param {string} firstname
 * @param {string} lastname
 * @param {number} age
 */
class People {
    constructor(firstname, lastname, age) {
        this.firstname = firstname
        this.lastname = lastname
        this.age = age

        this.getFirstname = this.getFirstname.bind(this)
        this.getLastname = this.getLastname.bind(this)
        this.getAge = this.getAge.bind(this)
    }
    getFirstname() {
        return this.firstname
    }
    getLastname() {
        return this.lastname
    }
    getAge() {
        return this.age
    }    
}