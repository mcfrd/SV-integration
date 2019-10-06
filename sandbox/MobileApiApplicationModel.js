/*
 * (C) Copyright 2009-2019 Micro Focus or one of its affiliates.
 */

import * as sv from "sv-vsl";

import {MobileApiServiceModel} from "./MobileApiServiceModel.js";

export class MobileApiApplicationModel extends sv.ApplicationModel {

    constructor(smMobileApiServiceModel: MobileApiServiceModel) {
        super();
        this.smMobileApiServiceModel = smMobileApiServiceModel;
    }
}