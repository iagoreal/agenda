import api from "../config"

export class ScheduleRestHome{
    getSchedule(){
        return api.get("/")
    }
        
}