//военные также и звание, и умение воспользоваться оружием
/**
 * Class Solidery. Has 2 parameters and
 * is also inherited from the class People and uses its capabilities
 * @param {string} rank
 * @param {string} skill
 */
class Soldiery extends People {
    constructor(...props) {
        super(...props)
        this.rank = props[1]
        this.skill = props[2]

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