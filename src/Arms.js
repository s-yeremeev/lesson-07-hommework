class Engineer extends Soldiery {
    constructor(...props) {
        super(...props)
        this.instruments = props[1]

        this.getInstruments = this.getInstruments.bind(this)

    }

    getInstruments() {
        return this.instruments
    }
}


class Medic extends Soldiery {
    constructor(...props) {
        super(...props)
        this.medicine_chest = props[1]
        this.other_tools = props[1]

        this.getMedicineChest = this.getMedicineChest.bind(this)
        this.getOtherTools = this.getOtherTools.bind(this)
    }

    getMedicineChest() {
        return this.medicine_chest
    }

    getOtherTools() {
        return this.other_tools
    }
}


class Sniper extends Soldiery {
    constructor(...props) {
        super(...props)
        this.gun = props[1]

        this.getGun = this.getGun.bind(this)

    }
    
    getWeapon() {
        return this.gun
    }
}


class Infantryman extends Soldiery {
    constructor(...props) {
        super(...props)
        this.automate = props[1]

        this.getAutomate = this.getAutomate.bind(this)

    }
    
    getAutomate() {
        return this.automate
    }
}