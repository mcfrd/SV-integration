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

    /**
     * Pair MiBand with GadgetBridge when running the app for first time.
     */
    @sv.applicationScenario
    pair() {
        sv.forkScenario(() => this.miBand2ServiceModel.backgroundCalls() );
        sv.forkScenario(() => this.miBand2ServiceModel.pair() );
    }

    /**
     * Connect GadgetBridge app to already paired MiBand whenever the app is restarted.
     */
    @sv.applicationScenario
    connect() {
        sv.forkScenario(() => this.miBand2ServiceModel.backgroundCalls() );
        sv.forkScenario(() => this.miBand2ServiceModel.connect() );
    }

    /**
     * Simulate physical activity in real time (the rightmost card in the app).
     */
    @sv.applicationScenario
    activity() {
        sv.forkScenario(() => this.miBand2ServiceModel.backgroundCalls() );
        sv.forkScenario(() => this.miBand2ServiceModel.activity() );
    }

    /**
     * Synchronize 24 hours of activity data.
     */
    @sv.applicationScenario
    syncData() {
        sv.forkScenario(() => this.miBand2ServiceModel.backgroundCalls() );
        sv.forkScenario(() => this.miBand2ServiceModel.syncData() );
    }

}