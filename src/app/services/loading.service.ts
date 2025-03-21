import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
    providedIn: 'root',
})
export class LoadingService {
    isLoading = new BehaviorSubject<boolean>(false)

    showLoading(status: boolean) {
        this.isLoading.next(status)
    }

    getIsLoading() {
        return this.isLoading.asObservable()
    }
}
