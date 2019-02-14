import { Component } from "@angular/core";

@Component({
    selector : 'dashboard-three',
    templateUrl : './dashboardthree.component.html'
})
export class DashboardThreeComponent {

    lastTenMonthRevenue: any[];
    lastTenMonthUsers : any[];
    globalVists : any[];
    globalVistsData : any[];

    constructor(){
        this.lastTenMonthRevenue = [
            [{ "datatype": "number", "label": 'Month' }, { "datatype": "number", "label": 'Revenue' },
            ],
            ['JAN', 10],
            ['FEB', 30],
            ['MAR', 20],
            ['APR', 10],
            ['MAY', 30],
            ['JUN', 20],
            ['JUL', 20],
            ['AUG', 30],
            ['SEP', 40],
            ['OCT', 30],
            ['NOV', 30],
            ['DEC', 40],
            
          ];

        this.lastTenMonthUsers = [
            ['Months','County'],
            ['JAN', 10],
            ['FEB', 30],
            ['MAR', 20],
            ['APR', 10],
            ['MAY', 30],
            ['JUN', 20],
            ['JUL', 20],
            ['AUG', 30],
            ['SEP', 40],
            ['OCT', 30],
            ['NOV', 30],
            ['DEC', 40],
            
          ];

          this.globalVists=[
            ['Country', 'Popularity'],
            ['Germany', 200],
            ['United States', 400],
            ['France', 550],
            ['RU', 350],
            ['India',300]
          ];

          this.globalVistsData=[
            {'country':'Germany','count':200, 'flag':'DE-32.png'},
            {'country':'United States','count':400, 'flag':'US-32.png'},
            {'country':'France','count':500, 'flag':'FR-32.png'},
            {'country':'Russia','count':350, 'flag':'RU-32.png'},
            {'country':'India','count':300, 'flag':'IN-32.png'}
          ];
    }
}