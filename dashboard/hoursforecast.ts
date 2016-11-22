/**
 * Created by Shahnawaz on 15-11-2016.
 */

import {Component, ViewChild, ElementRef,  AfterViewInit} from '@angular/core';

@Component({
    selector: 'app-hoursforecast',
    templateUrl: "dashboard/hoursforecast.html",
})

export class HoursForecastComponent  implements AfterViewInit{

    HoursForecasts:any = [];

    constructor(public div: ElementRef) {}

    createHoursForecast(name :string
        , label : string, min? :number, max? : number)
    {
        let config : any =
            {
                size: 120,
                label: label,
                forecastDaysBeyondEnd: 10,
                forecastPeriod: 39,
                xTarget: 29,
                xToday: -1
            }

        config.data = [
            {
                "x": 1,
                "added": 0,
                "removed": 0,
                "started": 43,
                "coded": 0,
                "tested": 0,
                "approved": 0,
                "total": 86.5
            },
            {
                "x": 2,
                "added": 7,
                "removed": 0,
                "started": 47,
                "coded": 6,
                "tested": 0,
                "approved": 0,
                "total": 90.5
            },
            {
                "x": 3,
                "added": 11,
                "removed": 0,
                "started": 51,
                "coded": 6,
                "tested": 0,
                "approved": 0,
                "total": 101.5
            },
            {
                "x": 4,
                "added": 10,
                "removed": 0,
                "started": 56,
                "coded": 6,
                "tested": 0,
                "approved": 0,
                "total": 111.5
            },
            {
                "x": 5,
                "added": 0,
                "removed": 0,
                "started": 61,
                "coded": 11,
                "tested": 0,
                "approved": 0,
                "total": 111.5
            },
            {
                "x": 6,
                "added": 40,
                "removed": 0,
                "started": 66,
                "coded": 11,
                "tested": 0,
                "approved": 0,
                "total": 138.5
            },
            {
                "x": 7,
                "added": 19,
                "removed": 0,
                "started": 79,
                "coded": 24,
                "tested": 0,
                "approved": 0,
                "total": 154.5
            },
            {
                "x": 8,
                "added": 17,
                "removed": 0,
                "started": 97,
                "coded": 32,
                "tested": 0,
                "approved": 0,
                "total": 171.5
            },
            {
                "x": 9,
                "added": 168,
                "removed": 0,
                "started": 97,
                "coded": 32,
                "tested": 0,
                "approved": 0,
                "total": 339.5
            },
            {
                "x": 10,
                "added": 42,
                "removed": 0,
                "started": 97,
                "coded": 32,
                "tested": 0,
                "approved": 0,
                "total": 367.5
            },
            {
                "x": 11,
                "added": 12,
                "removed": 0,
                "started": 113,
                "coded": 32,
                "tested": 0,
                "approved": 0,
                "total": 371.5
            },
            {
                "x": 12,
                "added": 0,
                "removed": 0,
                "started": 150,
                "coded": 32,
                "tested": 0,
                "approved": 0,
                "total": 371.5
            },
            {
                "x": 13,
                "added": 7,
                "removed": 0,
                "started": 150,
                "coded": 32,
                "tested": 0,
                "approved": 0,
                "total": 378.5
            },
            {
                "x": 14,
                "added": 0,
                "removed": 0,
                "started": 150,
                "coded": 69,
                "tested": 37,
                "approved": 0,
                "total": 378.5
            },
            {
                "x": 15,
                "added": 0,
                "removed": 0,
                "started": 150,
                "coded": 69,
                "tested": 37,
                "approved": 0,
                "total": 378.5
            },
            {
                "x": 16,
                "added": 0,
                "removed": 0,
                "started": 150,
                "coded": 85,
                "tested": 37,
                "approved": 0,
                "total": 378.5
            },
            {
                "x": 17,
                "added": 7,
                "removed": 0,
                "started": 157,
                "coded": 85,
                "tested": 37,
                "approved": 0,
                "total": 385.5
            },
            {
                "x": 18,
                "added": 35,
                "removed": 0,
                "started": 163,
                "coded": 92,
                "tested": 37,
                "approved": 0,
                "total": 427.5
            },
            {
                "x": 19,
                "added": 21.5,
                "removed": 0,
                "started": 167,
                "coded": 92,
                "tested": 37,
                "approved": 0,
                "total": 449
            },
            {
                "x": 20,
                "added": 0,
                "removed": 0,
                "started": 181,
                "coded": 106,
                "tested": 37,
                "approved": 0,
                "total": 449
            },
            {
                "x": 21,
                "added": 0,
                "removed": 0,
                "started": 209,
                "coded": 106,
                "tested": 37,
                "approved": 0,
                "total": 449
            },
            {
                "x": 22,
                "added": 0,
                "removed": 0,
                "started": 209,
                "coded": 112,
                "tested": 37,
                "approved": 0,
                "total": 449
            },
            {
                "x": 23,
                "added": 20,
                "removed": 0,
                "started": 213,
                "coded": 116,
                "tested": 37,
                "approved": 0,
                "total": 477
            },
            {
                "x": 24,
                "added": 3,
                "removed": 0,
                "started": 216,
                "coded": 116,
                "tested": 37,
                "approved": 0,
                "total": 480
            },
            {
                "x": 25,
                "added": 40,
                "removed": 0,
                "started": 221,
                "coded": 116,
                "tested": 37,
                "approved": 0,
                "total": 495
            },
            {
                "x": 26,
                "added": 0, red
                "removed": 0, green
                "started": 221,
                "coded": 116, m
                "tested": 37, light
                "approved": 0, dark
                "total": 495
            },
            {
                "x": 27,
                "added": 34,
                "removed": 0,
                "started": 221,
                "coded": 116,
                "tested": 37,
                "approved": 0,
                "total": 513
            },
            {
                "x": 27,
                "total": 513
            },
            {
                "x": 28,
                "total": 513
            },
            {
                "x": 29,
                "total": 513
            },
            {
                "x": 30,
                "total": 513
            },
            {
                "x": 31,
                "total": 513
            },
            {
                "x": 32,
                "total": 513
            },
            {
                "x": 33,
                "total": 513
            },
            {
                "x": 34,
                "total": 513
            },
            {
                "x": 35,
                "total": 513
            },
            {
                "x": 36,
                "total": 513
            },
            {
                "x": 37,
                "total": 513
            },
            {
                "x": 38,
                "total": 513
            },
            {
                "x": 39,
                "total": 513
            },
            {
                "x": 40,
                "total": 513
            },
            {
                "x": 41,
                "total": 513
            },
            {
                "x": 42,
                "total": 513
            },
            {
                "x": 43,
                "total": 513
            },
            {
                "x": 44,
                "total": 513
            },
            {
                "x": 45,
                "total": 513
            },
            {
                "x": 46,
                "total": 513
            },
            {
                "x": 47,
                "total": 513
            },
            {
                "x": 48,
                "total": 513
            },
            {
                "x": 49,
                "total": 513
            },
            {
                "x": 50,
                "total": 513
            },
            {
                "x": 51,
                "total": 513
            },
            {
                "x": 52,
                "total": 513
            }
        ]

        this.HoursForecasts = new HoursForecast(name + "Container", config);
        this.HoursForecasts.render();
    }

    createHoursForecasts()
    {
        this.createHoursForecast("hoursforecast", "HoursForecast" );
    }

    updateHoursForecasts()
    {
    }

    initialize()
    {
        this.createHoursForecasts();
        setInterval(this.updateHoursForecasts, 5000);
    }

    ngAfterViewInit() {

        this.initialize();

    }
}

