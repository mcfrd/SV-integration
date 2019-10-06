/*
 * (C) Copyright 2009-2019 Micro Focus or one of its affiliates.
 */

import * as sv from "sv-vsl";
import {MobileApiServiceInterface} from "./MobileApiServiceInterface.js";

export class MobileApiServiceModel extends sv.ServiceModel {

    constructor(service: MobileApiServiceInterface) {
        super(service);
        this.service = service;
    }
}