import * as sv from "sv-vsl";

import {WeatherServiceModel} from "./WeatherServiceModel.js";

export class WeatherApplicationModel extends sv.ApplicationModel {

    constructor(weatherServiceModel: WeatherServiceModel) {
        super();
        this.weatherServiceModel = weatherServiceModel;
    }

    @sv.applicationScenario
    capture() {
        sv.forkScenario(() => this.weatherServiceModel.capture_WeatherServiceInterface());
    }

}
