import api from "../rxjs"

export class ScheduleRestHome{
    getSchedule(){
        return api.get("/contacts")
    }
        
}