/*
 * (C) Copyright 2009-2019 Micro Focus or one of its affiliates.
 */

import * as sv from "../../../../../../lib/sv-vsl";
import {MiBand2ServiceInterface} from "./MiBand2ServiceInterface.js";

export class MiBand2ServiceModel extends sv.ServiceModel {

    constructor(service: MiBand2ServiceInterface) {
        super(service);
        this.service = service;
    }


    // TODO: copy the learned backgroundCalls() scenario here:
    // @sv.scenario
    // backgroundCalls() {
    //     this.service.ble_subscribeDeviceIntents()
    //       .withRequest...
    // }


    // TODO: create the pair() scenario here copying contents of the learned capture() scenario
    // @sv.scenario
    // pair() {
    // ...
    // }


    // TODO: create additional scenarios from learned data

}