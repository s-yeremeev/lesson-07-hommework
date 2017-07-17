//метод для создания отделения
//В отделении 10 человек из которых: 2-а - медика, 1-н - снайпер, 2-а - инженера, 5-о - пехотинцев. 
//Чтобы стать военным нужно пройти обучение в специальном ВУЗе или центре
class TrainingCenter {
    constructor(...props) {
        this.trainingPeople = function(arms, people) {
            switch(arms){
                case "engineer":{
                    engineerArr.push({
                            firstname: people.firstname,
                            lastname: people.lastname,
                            age: people.age,
                            instruments: people.instruments
                    })
                        console.log(engineerArr)
                    break
                }
                case "medic": {
                    //const medicine_chest = prompt(ADD_MEDICINE_CHECT + " \"" + firstname + " " + lastname + "\"")
                   // const other_tools = prompt(ADD_OTHER_TOOLS + " \"" + firstname + " " + lastname + "\"")
                    medicArr.push({
                            firstname: firstname,
                            lastname: lastname,
                            age: +age,
                            medicineChest: medicine_chest,
                            otherTools: other_tools
                    })
                    break
                }
                 case "sniper": {
                   // const gun = prompt(ADD_GUN + " \"" + firstname + " " + lastname + "\"")
                    sniperArr.push({
                            firstname: firstname,
                            lastname: lastname,
                            age: +age,
                            gun: gun
                    })
                    break
                }
                 case "infantryman": {
                    //const automate = prompt(ADD_AUTOMATE + " \"" + firstname + " " + lastname + "\"")
                    infantrymanArr.push({
                            firstname: firstname,
                            lastname: lastname,
                            age: +age,
                            automate: automate
                    })
                    break
                }
                default:{
                     alert(INCORRECT_AVAILABLE)
                     break
                }
            }
        
        }
        this.addCompany = function() {
             checkAddComp = function() {
                            engineerArr.length >= 2
                            && medicArr.length >= 2
                            && sniperArr.length >= 1
                            && infantrymanArr.length >= 5
            }
            if(checkAddComp) {
                for(let i =0; i <= 1; i++) {
                    eng = engineerArr.pop()
                    companyArr[j].push(eng)
                }
                for(let i =0; i <= 1; i++) {
                    med = medicArr.pop()
                    companyArr[j].push(med)
                }
                for(let i =0; i <= 4; i++) {
                    inf = infantrymanArr.pop()
                    companyArr[j].push(inf)
                }
                snip = sniperArr.pop()
                companyArr[j].push(snip)
                return j++
                console.log(companyArr[j])
            }  else {
            alert("There is not enough military to create a branch.\n" +
                  "There should be 10 people in the department: 2-medica, 1-sniper, 2-engineers, 5-infantryman.\n" +
                  "In fact you have:" + medic.length + "-medica, "  + sniper.length + "-sniper, "  + engineer.length + "-engineers, "  + infantryman.length + "-infantryman"
        )
            }         
        }
    }
}