import {Component} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    constructor() {
        // @ts-ignore
        // tslint:disable-next-line:no-unused-expression
        new Rubik();
    }

}
