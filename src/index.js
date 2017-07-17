do {
    const game = prompt("Comands: 'trainingSoldat', 'addCompany', 'end'")
    if (game == "end") break
    switch(game){

        case "trainingSoldat" : {
                const firstname = prompt(ADD_FIRSTNAME)
                const lastname = prompt(ADD_LASTNAME)
                const age = +prompt(ADD_AGE)
                const rank = prompt("Enter rank")
                const skill = prompt("Enter skill")
                const soldat = prompt(ARMS_AVAILABLE)
                
                switch(soldat){
                    case "engineer" : {
                        const instruments = prompt(ADD_INSTRUMENT)
                        const engineer = new Engineer(firstname, lastname, age, rank, skill, instruments)
                        console.log(engineer.lastname)
                        console.log(engineer.lastname)
                        console.log(engineer.age)
                        console.log(engineer.rank)
                        console.log(engineer.skill)
                        console.log(engineer.instruments)
                        const center = new TrainingCenter().trainingPeople(soldat, engineer)
                        break
                    }
                    case "medic" : {
                        const medic = new Medic(firstname, lastname, age, rank, skill, medicine_chest, other_tools)
                        break
                    }
                    case "sniper" : {
                        const sniper = new Sniper(firstname, lastname, age, rank, skill, gun)
                        break
                    }
                    case "infantryman" : {
                        const infantryman = new Infantryman(firstname, lastname, age, rank, skill, automate)
                        break
                    }
                    }
                break
        }
        case "addCompany" : {
            break
        }
        default:{
            alert("Commands not found")
        break
        }
    }

} while(true)