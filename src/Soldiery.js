/**
 * Class Solidery. Has 2 parameters and
 * is also inherited from the class People and uses its capabilities
 * @param {string} rank
 * @param {string} skill
 */
class Soldiery extends People {
    constructor(firstname, lastname, age, rank, skill) {
        super(firstname, lastname, age)
        this.rank = rank
        this.skill = skill

        this.getRank = this.getRank.bind(this)
        this.getSkill = this.getSkill.bind(this)
    }
    
    getRank() {
        return this.rank
    }
    getSkill() {
        return this.skill
    }
}