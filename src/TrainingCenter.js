//метод для создания отделения
//В отделении 10 человек из которых: 2-а - медика, 1-н - снайпер, 2-а - инженера, 5-о - пехотинцев. 
//Чтобы стать военным нужно пройти обучение в специальном ВУЗе или центре
class TrainingCenter {
    constructor(...props) {
        this.trainingPeople = function() {
            const firstname = prompt(ADD_FIRSTNAME)
            const lastname = prompt(ADD_LASTNAME)
            const age = prompt(ADD_AGE + " \"" + firstname + " " + lastname + "\"")
            const arms = prompt(ARMS_AVAILABLE + " \"" + firstname + " " + lastname + "\"")

            switch(arms){
                case "engineer":{
                    const instruments = prompt(ADD_INSTRUMENT + " \"" + firstname + " " + lastname + "\"")
                    engineer.push({
                            firstname: firstname,
                            lastname: lastname,
                            age: +age,
                            instruments: instruments
                    })
                    break
                }
                case "medic": {
                    const medicine_chest = prompt(ADD_MEDICINE_CHECT + " \"" + firstname + " " + lastname + "\"")
                    const other_tools = prompt(ADD_OTHER_TOOLS + " \"" + firstname + " " + lastname + "\"")
                    medic.push({
                            firstname: firstname,
                            lastname: lastname,
                            age: +age,
                            medicineChest: medicine_chest,
                            otherTools: other_tools
                    })
                    break
                }
                 case "sniper": {
                    const gun = prompt(ADD_GUN + " \"" + firstname + " " + lastname + "\"")
                    sniper.push({
                            firstname: firstname,
                            lastname: lastname,
                            age: +age,
                            gun: gun
                    })
                    break
                }
                 case "infantryman": {
                    const automate = prompt(ADD_AUTOMATE + " \"" + firstname + " " + lastname + "\"")
                    infantryman.push({
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
                            engineer.length >= 2
                            && medic.length >= 2
                            && sniper.length >= 1
                            && infantryman.length >= 5
            }
            if(checkAddComp) {
                for(let i =0; i <= 1; i++) {
                    eng = engineer.pop()
                    company[j].push(eng)
                }
                for(let i =0; i <= 1; i++) {
                    med = medic.pop()
                    company[j].push(med)
                }
                for(let i =0; i <= 4; i++) {
                    inf = infantryman.pop()
                    company[j].push(inf)
                }
                snip = sniper.pop()
                company[j].push(sniper)
                return j++
                console.log(company[j])
            }  else {
            alert("There is not enough military to create a branch.\n" +
                  "There should be 10 people in the department: 2-medica, 1-sniper, 2-engineers, 5-infantryman.\n" +
                  "In fact you have:" + medic.length + "-medica, "  + sniper.length + "-sniper, "  + engineer.length + "-engineers, "  + infantryman.length + "-infantryman"
        )
            }         
        }
    }
}