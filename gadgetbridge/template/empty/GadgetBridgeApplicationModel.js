/*
 * (C) Copyright 2009-2019 Micro Focus or one of its affiliates.
 */

import * as sv from "../../../../../../lib/sv-vsl";

import {MiBand2ServiceModel} from "./MiBand2ServiceModel.js";

export class GadgetBridgeApplicationModel extends sv.ApplicationModel {

    constructor(sM: MiBand2ServiceModel) {
        super();
        this.miBand2ServiceModel = sM;
    }

    @sv.applicationScenario
    pair() {
        sv.forkScenario(() => this.miBand2ServiceModel.backgroundCalls() );
        sv.forkScenario(() => this.miBand2ServiceModel.pair() );
    }

    // TODO: create additional scenarios similar to pair() here:

}