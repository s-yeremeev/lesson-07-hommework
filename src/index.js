do {
    const game = prompt("Comands: 'trainingSoldat', 'addCompany', 'end'")
    if (game == "end") break
    switch(game){
        case "trainingSoldat" : {
                const firstname = prompt(ADD_FIRSTNAME)
                const lastname = prompt(ADD_LASTNAME)
                const age = +prompt(ADD_AGE)
                const rank = prompt(ADD_RANK)
                const skill = prompt(ADD_SKILL)
                const soldat = prompt(ARMS_AVAILABLE)
                
                switch(soldat){
                    case "engineer" : {
                        const instruments = prompt(ADD_INSTRUMENT)
                        const engineer = new Engineer(firstname, lastname, age, rank, skill, instruments)
                        const center = new TrainingCenter().trainingPeople(soldat, engineer)
                        break
                    }
                   case "medic" : {
                        const medicine_chest = prompt(ADD_MEDICINE_CHECT)
                        const other_tools = prompt(ADD_OTHER_TOOLS)
                        const medic = new Medic(firstname, lastname, age, rank, skill, medicine_chest, other_tools)
                        const center = new TrainingCenter().trainingPeople(soldat, medic)
                        break
                    }
                    case "sniper" : {
                        const gun = prompt(ADD_GUN)
                        const sniper = new Sniper(firstname, lastname, age, rank, skill, gun)
                        const center = new TrainingCenter().trainingPeople(soldat, sniper)
                        break
                    }
                    case "infantryman" : {
                        const automate = prompt(ADD_AUTOMATE)
                        const infantryman = new Infantryman(firstname, lastname, age, rank, skill, automate)
                        const center = new TrainingCenter().trainingPeople(soldat, infantryman)
                        break
                    }
                }
                break
        }
        case "addCompany" : {
            const addCompany = new TrainingCenter().addCompany()
            break
        }
        default:{
            alert("Commands not found")
        break
        }
    }

} while(true)