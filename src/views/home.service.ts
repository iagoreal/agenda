import { ContactsRest } from "../service/rest/schedule.rest";
import type { AxiosResponse } from "axios";
import { BehaviorSubject, Observable, take } from "rxjs";


export class HomeService{
    constructor (private _scheduleHome = new ContactsRest()) {}
    
    private scheduleHome$: BehaviorSubject<any> = new BehaviorSubject<any>([]);
    scheduleHome: Observable<any> = this.scheduleHome$.asObservable();

    getSchedule():void{
        this._scheduleHome.getSchedule().pipe(take(1)).subscribe({
            next: (response:any) => {
                this.scheduleHome$.next(response);
            },
        })
    
    }   

}