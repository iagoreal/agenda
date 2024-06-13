import { ScheduleRestHome } from "@/service/rest/schedule.rest";
import type { AxiosResponse } from "axios";
export class HomeService{
    constructor (
        private _scheduleHome = new ScheduleRestHome()
    ){}
    getContacts(){
       return this._scheduleHome.getSchedule().then((response:AxiosResponse)=>response.data)
    }
}
