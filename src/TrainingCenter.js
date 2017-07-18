/**
 * Class 'TrainingCenter' - methods for training people in the military and creating a company
 */
class TrainingCenter {
    constructor(...props) {
        this.trainingPeople = function(arms, obj) {
                    switch(arms){
                        case "engineer":{
                            engineerArr.push({
                                    firstname: obj.firstname,
                                    lastname: obj.lastname,
                                    age: obj.age,
                                    instruments: obj.instruments
                            })
                            break
                        }
                        case "medic": {
                            medicArr.push({
                                    firstname: obj.firstname,
                                    lastname: obj.lastname,
                                    age: obj.age,
                                    medicineChest: obj.medicine_chest,
                                    otherTools: obj.other_tools
                            })
                            break
                        }
                        case "sniper": {
                            sniperArr.push({
                                    firstname: obj.firstname,
                                    lastname: obj.lastname,
                                    age: obj.age,
                                    gun: obj.gun
                            })
                            break
                        }
                        case "infantryman": {
                            infantrymanArr.push({
                                    firstname: obj.firstname,
                                    lastname: obj.lastname,
                                    age: obj.age,
                                    automate: obj.automate
                            })
                            break
                        }
                        default:{
                            alert(INCORRECT_AVAILABLE)
                            break
                        }
                    }
        
        }

        function formationListCompany(arr, j) {
            for(let i =0; i <= j; i++) {
                const newArms = arr.pop()
                companyArr.push(newArms)
            }
        }

        this.addCompany = function() {
            if(engineerArr.length >= 2
                 && medicArr.length >= 2
                 && sniperArr.length >= 1
                 && infantrymanArr.length >= 5
            ) {
                formationListCompany(engineerArr, 1)
                formationListCompany(medicArr, 1)
                formationListCompany(infantrymanArr, 4)
                formationListCompany(sniperArr, 0)                   
                const new_vzvod = companyArr.splice(-10)
                alert(COMPANY_TABLE)
                console.table(new_vzvod)
                return new_vzvod
                }  else {
            alert("There is not enough military to create a branch.\n" +
                  "There should be 10 people in the department: 2-medica, 1-sniper, 2-engineers, 5-infantryman.\n" +
                  "In fact you have:" + medicArr.length + "-medica, "  + sniperArr.length + "-sniper, "  + engineerArr.length + "-engineers, "  + infantrymanArr.length + "-infantryman"
            )
            }         
        }
    }
}