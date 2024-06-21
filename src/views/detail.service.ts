
import { ContactsRest } from "../service/rest/schedule.rest";
import { BehaviorSubject, Observable, take } from "rxjs";

export default class ContactService{
    constructor (private _contact = new ContactsRest() ) {}
    
    private contact$: BehaviorSubject<any> = new BehaviorSubject<any>([]);
    contact: Observable<any> = this.contact$.asObservable();

    getContactById(id: string):void{
        this._contact.getContactById(id).pipe(take(1)).subscribe({
            next: (response:any) => {
                this.contact$.next(response);
                console.log(response)
            },
        })
    
    }   

}