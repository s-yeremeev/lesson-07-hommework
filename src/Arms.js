class Engineer extends Soldiery {
    constructor(firstname, lastname, age, rank, skill, instruments) {
        super(firstname, lastname, age, rank, skill)
        this.instruments = instruments

        this.getInstruments = this.getInstruments.bind(this)

    }

    getInstruments() {
        return this.instruments
    }
}


class Medic extends Soldiery {
    constructor(firstname, lastname, age, rank, skill, medicine_chest, other_tools) {
        super(firstname, lastname, age, rank, skill)
        this.medicine_chest = medicine_chest
        this.other_tools = other_tools

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
    constructor(firstname, lastname, age, rank, skill, gun) {
        super(firstname, lastname, age, rank, skill)
        this.gun = gun

        this.getGun = this.getGun.bind(this)

    }
    
    getGun() {
        return this.gun
    }
}


class Infantryman extends Soldiery {
    constructor(firstname, lastname, age, rank, skill, automate) {
        super(firstname, lastname, age, rank, skill)
        this.automate = automate

        this.getAutomate = this.getAutomate.bind(this)

    }
    
    getAutomate() {
        return this.automate
    }
}