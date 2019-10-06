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

    // This scenario runs in a background of one of the main flows.
    // The idea is to mode calls appearing now and then during interaction
    // with the application aside so they will not disturb simulation of the flow.
    // The calls here do not form any particular ordered flow. They are rather
    // simulated with the stateless fallback strategy - the simulator picks the first
    // call matching request when it can not follow the scenario.
    @sv.scenario
    backgroundCalls() {
        // When the app is killed/restarted it cancels service
        // discovery and creates subscriptions - moved here so the main
        // flow works both with and without application restart.
        this.service.ble_subscribeDeviceIntents()
            .withRequest({});
        this.service.ble_unsubscribeDeviceIntents()
            .withRequest({});

        this.service.ble_cancelDiscovery()
            .withRequest({});
        this.service.ble_stopLeScan()
            .withRequest({});
        this.service.ble_stopScan()
            .withRequest({});

        // The older version of GadgetBridge app asks for bonded devices in a loop,
        // we simulate the same response again and again with the stateless fallback strategy.
        this.service.ble_getBondedDevices()
            .withRequest({})
            .withResponse({
                "devices": [{
                    "address": "D5:65:F4:86:D2:82",
                    "bluetoothClass": "1f00",
                    "name": "MI Band 2",
                    "type": 2
                }]
            })
            .withDelay(87);
    }

    @sv.scenario
    pair() {
        const properties = sv.svVar(18);
        const uuid = sv.svVar("00002a25-0000-1000-8000-00805f9b34fb");
        const uuid0 = sv.svVar("00002a28-0000-1000-8000-00805f9b34fb");
        const uuid1 = sv.svVar("00002a39-0000-1000-8000-00805f9b34fb");
        const value = sv.svVar("E30706030E1F2801000004");
        const value0 = sv.svVar("060A0000");
        const uuid2 = sv.svVar("00000010-0000-3512-2118-0009af100700");
        const uuid3 = sv.svVar("00000006-0000-3512-2118-0009af100700");
        const uuid4 = sv.svVar("00000008-0000-3512-2118-0009af100700");
        const uuid5 = sv.svVar("00002a2b-0000-1000-8000-00805f9b34fb");
        const uuid6 = sv.svVar("00002a27-0000-1000-8000-00805f9b34fb");
        const value1 = sv.svVar("060C000000000000");
        const value2 = sv.svVar("1400");
        const uuid7 = sv.svVar("00000009-0000-3512-2118-0009af100700");
        const value3 = sv.svVar("20000002");
        const value4 = sv.svVar("0A0100000102030405");
        const value5 = sv.svVar("0208");
        const value6 = sv.svVar("0108756D356D744E6743513939565672314D");
        const value7 = sv.svVar("150000");
        const uuid8 = sv.svVar("00002902-0000-1000-8000-00805f9b34fb");
        const value8 = sv.svVar("0308E4B6A0980FAFFBF8B687617C3452C43D");
        const uuid9 = sv.svVar("00000003-0000-3512-2118-0009af100700");
        const uuid10 = sv.svVar("00002a50-0000-1000-8000-00805f9b34fb");
        const value9 = sv.svVar("10000010270000");
        const uuid11 = sv.svVar("00002a23-0000-1000-8000-00805f9b34fb");
        this.service.ble_startDiscovery()
            .withRequest({ }, sv.JSON)
            .withDelay(5);
        this.service.ble_onReceive()
            .withResponse(
                {
                    "action" : "android.bluetooth.adapter.action.DISCOVERY_STARTED"
                }
                , sv.JSON)
            .withDelay(87);
        this.service.ble_onReceive()
            .withResponse(
                {
                    "action" : "android.bluetooth.device.action.NAME_CHANGED",
                    "extraDevice" : {
                        "address" : "D5:65:F4:86:D2:82",
                        "bluetoothClass" : "1f00",
                        "name" : "MI Band 2",
                        "type" : 2
                    },
                    "extraName" : "MI Band 2"
                }
                , sv.JSON)
            .withDelay(1590);
        this.service.ble_onReceive()
            .withResponse(
                {
                    "action" : "android.bluetooth.device.action.FOUND",
                    "extraDevice" : {
                        "address" : "D5:65:F4:86:D2:82",
                        "bluetoothClass" : "1f00",
                        "name" : "MI Band 2",
                        "type" : 2
                    },
                    "extraName" : "MI Band 2",
                    "extraClass" : 7936,
                    "extraRssi" : 127
                }
                , sv.JSON)
            .withDelay(370);
        this.service.ble_fetchUuidsWithSdp()
            .withRequest({ }, sv.JSON)
            .withDelay(3);
        this.service.ble_onReceive()
            .withResponse(
                {
                    "action" : "android.bluetooth.device.action.UUID",
                    "extraDevice" : {
                        "address" : "D5:65:F4:86:D2:82",
                        "bluetoothClass" : "1f00",
                        "name" : "MI Band 2",
                        "type" : 2
                    }
                }
                , sv.JSON)
            .withDelay(1142);
        this.service.ble_getBondState()
            .withRequest({ }, sv.JSON)
            .withDelay(223)
            .withResponse(
                {
                    "bondState" : 10
                }
                , sv.JSON)
            .withDelay(22);
        this.service.ble_getBondState()
            .withRequest({ }, sv.JSON)
            .withDelay(3)
            .withResponse(
                {
                    "bondState" : 10
                }
                , sv.JSON)
            .withDelay(4);
        this.service.ble_createBond()
            .withRequest({ }, sv.JSON)
            .withDelay(205);
        this.service.ble_onReceive()
            .withResponse(
                {
                    "action" : "android.bluetooth.device.action.BOND_STATE_CHANGED",
                    "extraDevice" : {
                        "address" : "D5:65:F4:86:D2:82",
                        "bluetoothClass" : "1f00",
                        "name" : "MI Band 2",
                        "type" : 2
                    },
                    "extraBondState" : 11,
                    "extraPreviousBondState" : 10
                }
                , sv.JSON)
            .withDelay(2);
        this.service.ble_onReceive()
            .withResponse(
                {
                    "action" : "android.bluetooth.device.action.BOND_STATE_CHANGED",
                    "extraDevice" : {
                        "address" : "D5:65:F4:86:D2:82",
                        "bluetoothClass" : "1f00",
                        "name" : "MI Band 2",
                        "type" : 2
                    },
                    "extraBondState" : 11,
                    "extraPreviousBondState" : 10
                }
                , sv.JSON)
            .withDelay(4);
        this.service.ble_onReceive()
            .withResponse(
                {
                    "action" : "android.bluetooth.device.action.BOND_STATE_CHANGED",
                    "extraDevice" : {
                        "address" : "D5:65:F4:86:D2:82",
                        "bluetoothClass" : "1f00",
                        "name" : "MI Band 2",
                        "type" : 2
                    },
                    "extraBondState" : 11,
                    "extraPreviousBondState" : 10
                }
                , sv.JSON)
            .withDelay(9);
        this.service.ble_getBondState()
            .withRequest({ }, sv.JSON)
            .withDelay(3)
            .withResponse(
                {
                    "bondState" : 11
                }
                , sv.JSON)
            .withDelay(8);
        this.service.ble_onReceive()
            .withResponse(
                {
                    "action" : "android.bluetooth.device.action.ACL_CONNECTED",
                    "extraDevice" : {
                        "address" : "D5:65:F4:86:D2:82",
                        "bluetoothClass" : "1f00",
                        "name" : "MI Band 2",
                        "type" : 2
                    }
                }
                , sv.JSON)
            .withDelay(4);
        this.service.ble_onReceive()
            .withResponse(
                {
                    "action" : "android.bluetooth.device.action.BOND_STATE_CHANGED",
                    "extraDevice" : {
                        "address" : "D5:65:F4:86:D2:82",
                        "bluetoothClass" : "1f00",
                        "name" : "MI Band 2",
                        "type" : 2
                    },
                    "extraBondState" : 10,
                    "extraPreviousBondState" : 11
                }
                , sv.JSON)
            .withDelay(7);
        this.service.ble_getBondState()
            .withRequest({ }, sv.JSON)
            .withDelay(10)
            .withResponse(
                {
                    "bondState" : 10
                }
                , sv.JSON)
            .withDelay(8);
        this.service.ble_connectGatt()
            .withRequest(
                {
                    "autoconnect" : false,
                    "transport" : 2
                }
                , sv.JSON)
            .withDelay(10);
        this.service.ble_onConnectionStateChange()
            .withResponse(
                {
                    "newState" : 2,
                    "status" : 0
                }
                , sv.JSON)
            .withDelay(3);
        this.service.ble_onReceive()
            .withResponse(
                {
                    "action" : "android.bluetooth.device.action.ACL_CONNECTED",
                    "extraDevice" : {
                        "address" : "D5:65:F4:86:D2:82",
                        "bluetoothClass" : "1f00",
                        "name" : "MI Band 2",
                        "type" : 2
                    }
                }
                , sv.JSON)
            .withDelay(5);
        this.service.ble_onReceive()
            .withResponse(
                {
                    "action" : "android.bluetooth.device.action.ACL_CONNECTED",
                    "extraDevice" : {
                        "address" : "D5:65:F4:86:D2:82",
                        "bluetoothClass" : "1f00",
                        "name" : "MI Band 2",
                        "type" : 2
                    }
                }
                , sv.JSON)
            .withDelay(3);
        this.service.ble_onReceive()
            .withResponse(
                {
                    "action" : "android.bluetooth.device.action.ACL_CONNECTED",
                    "extraDevice" : {
                        "address" : "D5:65:F4:86:D2:82",
                        "bluetoothClass" : "1f00",
                        "name" : "MI Band 2",
                        "type" : 2
                    }
                }
                , sv.JSON)
            .withDelay(38);
        this.service.ble_onReceive()
            .withResponse(
                {
                    "action" : "android.bluetooth.device.action.ACL_CONNECTED",
                    "extraDevice" : {
                        "address" : "D5:65:F4:86:D2:82",
                        "bluetoothClass" : "1f00",
                        "name" : "MI Band 2",
                        "type" : 2
                    }
                }
                , sv.JSON)
            .withDelay(3);
        this.service.ble_discoverServices()
            .withRequest({ }, sv.JSON)
            .withDelay(4)
            .withResponse(
                {
                    "services" : [ {
                        "characteristics" : [ {
                            "descriptors" : [ ],
                            "permissions" : 0,
                            "properties" : 2,
                            "uuid" : "00002a00-0000-1000-8000-00805f9b34fb",
                            "value" : ""
                        }, {
                            "descriptors" : [ ],
                            "permissions" : 0,
                            "properties" : 2,
                            "uuid" : "00002a01-0000-1000-8000-00805f9b34fb",
                            "value" : ""
                        }, {
                            "descriptors" : [ ],
                            "permissions" : 0,
                            "properties" : 2,
                            "uuid" : "00002a04-0000-1000-8000-00805f9b34fb",
                            "value" : ""
                        } ],
                        "type" : 0,
                        "uuid" : "00001800-0000-1000-8000-00805f9b34fb"
                    }, {
                        "characteristics" : [ {
                            "descriptors" : [ {
                                "permissions" : 0,
                                "status" : 0,
                                "uuid" : uuid8,
                                "value" : ""
                            } ],
                            "permissions" : 0,
                            "properties" : 34,
                            "uuid" : "00002a05-0000-1000-8000-00805f9b34fb",
                            "value" : ""
                        } ],
                        "type" : 0,
                        "uuid" : "00001801-0000-1000-8000-00805f9b34fb"
                    }, {
                        "characteristics" : [ {
                            "descriptors" : [ ],
                            "permissions" : 0,
                            "properties" : 2,
                            "uuid" : uuid,
                            "value" : ""
                        }, {
                            "descriptors" : [ ],
                            "permissions" : 0,
                            "properties" : 2,
                            "uuid" : uuid6,
                            "value" : ""
                        }, {
                            "descriptors" : [ ],
                            "permissions" : 0,
                            "properties" : 2,
                            "uuid" : uuid0,
                            "value" : ""
                        }, {
                            "descriptors" : [ ],
                            "permissions" : 0,
                            "properties" : 2,
                            "uuid" : uuid11,
                            "value" : ""
                        }, {
                            "descriptors" : [ ],
                            "permissions" : 0,
                            "properties" : 2,
                            "uuid" : uuid10,
                            "value" : ""
                        } ],
                        "type" : 0,
                        "uuid" : "0000180a-0000-1000-8000-00805f9b34fb"
                    }, {
                        "characteristics" : [ {
                            "descriptors" : [ {
                                "permissions" : 0,
                                "status" : 0,
                                "uuid" : uuid8,
                                "value" : ""
                            } ],
                            "permissions" : 0,
                            "properties" : 24,
                            "uuid" : "00001531-0000-3512-2118-0009af100700",
                            "value" : ""
                        }, {
                            "descriptors" : [ ],
                            "permissions" : 0,
                            "properties" : 4,
                            "uuid" : "00001532-0000-3512-2118-0009af100700",
                            "value" : ""
                        } ],
                        "type" : 0,
                        "uuid" : "00001530-0000-3512-2118-0009af100700"
                    }, {
                        "characteristics" : [ {
                            "descriptors" : [ ],
                            "permissions" : 0,
                            "properties" : 8,
                            "uuid" : "00002a46-0000-1000-8000-00805f9b34fb",
                            "value" : ""
                        }, {
                            "descriptors" : [ {
                                "permissions" : 0,
                                "status" : 0,
                                "uuid" : uuid8,
                                "value" : ""
                            } ],
                            "permissions" : 0,
                            "properties" : 26,
                            "uuid" : "00002a44-0000-1000-8000-00805f9b34fb",
                            "value" : ""
                        } ],
                        "type" : 0,
                        "uuid" : "00001811-0000-1000-8000-00805f9b34fb"
                    }, {
                        "characteristics" : [ {
                            "descriptors" : [ ],
                            "permissions" : 0,
                            "properties" : 4,
                            "uuid" : "00002a06-0000-1000-8000-00805f9b34fb",
                            "value" : ""
                        } ],
                        "type" : 0,
                        "uuid" : "00001802-0000-1000-8000-00805f9b34fb"
                    }, {
                        "characteristics" : [ {
                            "descriptors" : [ {
                                "permissions" : 0,
                                "status" : 0,
                                "uuid" : uuid8,
                                "value" : ""
                            } ],
                            "permissions" : 0,
                            "properties" : 16,
                            "uuid" : "00002a37-0000-1000-8000-00805f9b34fb",
                            "value" : ""
                        }, {
                            "descriptors" : [ ],
                            "permissions" : 0,
                            "properties" : 10,
                            "uuid" : uuid1,
                            "value" : ""
                        } ],
                        "type" : 0,
                        "uuid" : "0000180d-0000-1000-8000-00805f9b34fb"
                    }, {
                        "characteristics" : [ {
                            "descriptors" : [ {
                                "permissions" : 0,
                                "status" : 0,
                                "uuid" : uuid8,
                                "value" : ""
                            } ],
                            "permissions" : 0,
                            "properties" : 26,
                            "uuid" : uuid5,
                            "value" : ""
                        }, {
                            "descriptors" : [ {
                                "permissions" : 0,
                                "status" : 0,
                                "uuid" : uuid8,
                                "value" : ""
                            } ],
                            "permissions" : 0,
                            "properties" : 20,
                            "uuid" : "00000001-0000-3512-2118-0009af100700",
                            "value" : ""
                        }, {
                            "descriptors" : [ {
                                "permissions" : 0,
                                "status" : 0,
                                "uuid" : uuid8,
                                "value" : ""
                            } ],
                            "permissions" : 0,
                            "properties" : 16,
                            "uuid" : "00000002-0000-3512-2118-0009af100700",
                            "value" : ""
                        }, {
                            "descriptors" : [ {
                                "permissions" : 0,
                                "status" : 0,
                                "uuid" : uuid8,
                                "value" : ""
                            } ],
                            "permissions" : 0,
                            "properties" : 20,
                            "uuid" : uuid9,
                            "value" : ""
                        }, {
                            "descriptors" : [ {
                                "permissions" : 0,
                                "status" : 0,
                                "uuid" : uuid8,
                                "value" : ""
                            } ],
                            "permissions" : 0,
                            "properties" : 22,
                            "uuid" : "00002a04-0000-1000-8000-00805f9b34fb",
                            "value" : ""
                        }, {
                            "descriptors" : [ {
                                "permissions" : 0,
                                "status" : 0,
                                "uuid" : uuid8,
                                "value" : ""
                            } ],
                            "permissions" : 0,
                            "properties" : 20,
                            "uuid" : "00000004-0000-3512-2118-0009af100700",
                            "value" : ""
                        }, {
                            "descriptors" : [ {
                                "permissions" : 0,
                                "status" : 0,
                                "uuid" : uuid8,
                                "value" : ""
                            } ],
                            "permissions" : 0,
                            "properties" : 16,
                            "uuid" : "00000005-0000-3512-2118-0009af100700",
                            "value" : ""
                        }, {
                            "descriptors" : [ {
                                "permissions" : 0,
                                "status" : 0,
                                "uuid" : uuid8,
                                "value" : ""
                            } ],
                            "permissions" : 0,
                            "properties" : properties,
                            "uuid" : uuid3,
                            "value" : ""
                        }, {
                            "descriptors" : [ {
                                "permissions" : 0,
                                "status" : 0,
                                "uuid" : uuid8,
                                "value" : ""
                            } ],
                            "permissions" : 0,
                            "properties" : properties,
                            "uuid" : "00000007-0000-3512-2118-0009af100700",
                            "value" : ""
                        }, {
                            "descriptors" : [ {
                                "permissions" : 0,
                                "status" : 0,
                                "uuid" : uuid8,
                                "value" : ""
                            } ],
                            "permissions" : 0,
                            "properties" : 24,
                            "uuid" : uuid4,
                            "value" : ""
                        }, {
                            "descriptors" : [ {
                                "permissions" : 0,
                                "status" : 0,
                                "uuid" : uuid8,
                                "value" : ""
                            } ],
                            "permissions" : 0,
                            "properties" : 16,
                            "uuid" : uuid2,
                            "value" : ""
                        } ],
                        "type" : 0,
                        "uuid" : "0000fee0-0000-1000-8000-00805f9b34fb"
                    }, {
                        "characteristics" : [ {
                            "descriptors" : [ {
                                "permissions" : 0,
                                "status" : 0,
                                "uuid" : uuid8,
                                "value" : ""
                            } ],
                            "permissions" : 0,
                            "properties" : 22,
                            "uuid" : uuid7,
                            "value" : ""
                        }, {
                            "descriptors" : [ ],
                            "permissions" : 0,
                            "properties" : 8,
                            "uuid" : "0000fedd-0000-1000-8000-00805f9b34fb",
                            "value" : ""
                        }, {
                            "descriptors" : [ ],
                            "permissions" : 0,
                            "properties" : 2,
                            "uuid" : "0000fede-0000-1000-8000-00805f9b34fb",
                            "value" : ""
                        }, {
                            "descriptors" : [ ],
                            "permissions" : 0,
                            "properties" : 2,
                            "uuid" : "0000fedf-0000-1000-8000-00805f9b34fb",
                            "value" : ""
                        }, {
                            "descriptors" : [ ],
                            "permissions" : 0,
                            "properties" : 10,
                            "uuid" : "0000fed0-0000-1000-8000-00805f9b34fb",
                            "value" : ""
                        }, {
                            "descriptors" : [ ],
                            "permissions" : 0,
                            "properties" : 10,
                            "uuid" : "0000fed1-0000-1000-8000-00805f9b34fb",
                            "value" : ""
                        }, {
                            "descriptors" : [ ],
                            "permissions" : 0,
                            "properties" : 2,
                            "uuid" : "0000fed2-0000-1000-8000-00805f9b34fb",
                            "value" : ""
                        }, {
                            "descriptors" : [ ],
                            "permissions" : 0,
                            "properties" : 10,
                            "uuid" : "0000fed3-0000-1000-8000-00805f9b34fb",
                            "value" : ""
                        }, {
                            "descriptors" : [ {
                                "permissions" : 0,
                                "status" : 0,
                                "uuid" : uuid8,
                                "value" : ""
                            } ],
                            "permissions" : 0,
                            "properties" : 26,
                            "uuid" : "0000fec1-0000-3512-2118-0009af100700",
                            "value" : ""
                        } ],
                        "type" : 0,
                        "uuid" : "0000fee1-0000-1000-8000-00805f9b34fb"
                    } ],
                    "status" : 0
                }
                , sv.JSON)
            .withDelay(1589);
        this.service.ble_setCharacteristicNotification()
            .withRequest(
                {
                    "enable" : true,
                    "uuid" : uuid7
                }
                , sv.JSON)
            .withDelay(148);
        this.service.ble_writeDescriptor()
            .withRequest(
                {
                    "uuid" : uuid8,
                    "value" : "0100"
                }
                , sv.JSON)
            .withDelay(4)
            .withResponse(
                {
                    "status" : 0,
                    "uuid" : uuid8
                }
                , sv.JSON)
            .withDelay(12);
        this.service.ble_writeCharacteristic()
            .withRequest(
                {
                    "uuid" : uuid7,
                    "value" : value6
                }
                , sv.JSON)
            .withDelay(215)
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 22,
                    "status" : 0,
                    "uuid" : uuid7,
                    "value" : value6
                }
                , sv.JSON)
            .withDelay(32);
        this.service.ble_onCharacteristicChanged()
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 22,
                    "uuid" : uuid7,
                    "value" : "100101"
                }
                , sv.JSON)
            .withDelay(1281);
        this.service.ble_writeCharacteristic()
            .withRequest(
                {
                    "uuid" : uuid7,
                    "value" : value5
                }
                , sv.JSON)
            .withDelay(198)
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 22,
                    "status" : 0,
                    "uuid" : uuid7,
                    "value" : value5
                }
                , sv.JSON)
            .withDelay(8);
        this.service.ble_onCharacteristicChanged()
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 22,
                    "uuid" : uuid7,
                    "value" : "10020153AB80FC256502A6D77F64B069F9A61A"
                }
                , sv.JSON)
            .withDelay(209);
        this.service.ble_writeCharacteristic()
            .withRequest(
                {
                    "uuid" : uuid7,
                    "value" : value8
                }
                , sv.JSON)
            .withDelay(3)
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 22,
                    "status" : 0,
                    "uuid" : uuid7,
                    "value" : value8
                }
                , sv.JSON)
            .withDelay(8);
        let corr0 = this.service.ble_writeCharacteristic()
            .withRequest(
                {
                    "uuid" : uuid5,
                    "value" : value
                }
                , sv.JSON)
            .withDelay(206);
        this.service.ble_onCharacteristicChanged()
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 22,
                    "uuid" : uuid7,
                    "value" : "100301"
                }
                , sv.JSON)
            .withDelay(9);
        corr0
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 26,
                    "status" : 0,
                    "uuid" : uuid5,
                    "value" : value
                }
                , sv.JSON)
            .withDelay(119);
        this.service.ble_readCharacteristic()
            .withRequest(
                {
                    "permissions" : 0,
                    "properties" : 2,
                    "uuid" : uuid
                }
                , sv.JSON)
            .withDelay(293)
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 2,
                    "status" : 0,
                    "uuid" : uuid,
                    "value" : "656361306663633037663163"
                }
                , sv.JSON)
            .withDelay(146);
        this.service.ble_readCharacteristic()
            .withRequest(
                {
                    "permissions" : 0,
                    "properties" : 2,
                    "uuid" : uuid6
                }
                , sv.JSON)
            .withDelay(193)
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 2,
                    "status" : 0,
                    "uuid" : uuid6,
                    "value" : "56302E312E332E32"
                }
                , sv.JSON)
            .withDelay(109);
        this.service.ble_readCharacteristic()
            .withRequest(
                {
                    "permissions" : 0,
                    "properties" : 2,
                    "uuid" : uuid0
                }
                , sv.JSON)
            .withDelay(208)
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 2,
                    "status" : 0,
                    "uuid" : uuid0,
                    "value" : "56312E302E312E3533"
                }
                , sv.JSON)
            .withDelay(84);
        this.service.ble_readCharacteristic()
            .withRequest(
                {
                    "permissions" : 0,
                    "properties" : 2,
                    "uuid" : uuid11
                }
                , sv.JSON)
            .withDelay(203)
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 2,
                    "status" : 0,
                    "uuid" : uuid11,
                    "value" : "D565F4FFFE86D282"
                }
                , sv.JSON)
            .withDelay(89);
        this.service.ble_readCharacteristic()
            .withRequest(
                {
                    "permissions" : 0,
                    "properties" : 2,
                    "uuid" : uuid10
                }
                , sv.JSON)
            .withDelay(208)
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 2,
                    "status" : 0,
                    "uuid" : uuid10,
                    "value" : "01570104000001"
                }
                , sv.JSON)
            .withDelay(84);
        this.service.ble_setCharacteristicNotification()
            .withRequest(
                {
                    "enable" : true,
                    "uuid" : uuid9
                }
                , sv.JSON)
            .withDelay(208);
        this.service.ble_writeDescriptor()
            .withRequest(
                {
                    "uuid" : uuid8,
                    "value" : "0100"
                }
                , sv.JSON)
            .withDelay(9)
            .withResponse(
                {
                    "status" : 0,
                    "uuid" : uuid8
                }
                , sv.JSON)
            .withDelay(9);
        this.service.ble_setCharacteristicNotification()
            .withRequest(
                {
                    "enable" : true,
                    "uuid" : uuid3
                }
                , sv.JSON)
            .withDelay(209);
        this.service.ble_writeDescriptor()
            .withRequest(
                {
                    "uuid" : uuid8,
                    "value" : "0100"
                }
                , sv.JSON)
            .withDelay(7)
            .withResponse(
                {
                    "status" : 0,
                    "uuid" : uuid8
                }
                , sv.JSON)
            .withDelay(90);
        this.service.ble_setCharacteristicNotification()
            .withRequest(
                {
                    "enable" : true,
                    "uuid" : uuid2
                }
                , sv.JSON)
            .withDelay(210);
        this.service.ble_writeDescriptor()
            .withRequest(
                {
                    "uuid" : uuid8,
                    "value" : "0100"
                }
                , sv.JSON)
            .withDelay(11)
            .withResponse(
                {
                    "status" : 0,
                    "uuid" : uuid8
                }
                , sv.JSON)
            .withDelay(72);
        this.service.ble_readCharacteristic()
            .withRequest(
                {
                    "permissions" : 0,
                    "properties" : properties,
                    "uuid" : uuid3
                }
                , sv.JSON)
            .withDelay(207)
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : properties,
                    "status" : 0,
                    "uuid" : uuid3,
                    "value" : "0F2400E207050E09251404E30705070D1224044B"
                }
                , sv.JSON)
            .withDelay(90);
        this.service.ble_writeCharacteristic()
            .withRequest(
                {
                    "uuid" : uuid9,
                    "value" : value0
                }
                , sv.JSON)
            .withDelay(206)
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 20,
                    "status" : 0,
                    "uuid" : uuid9,
                    "value" : value0
                }
                , sv.JSON)
            .withDelay(9);
        let corr1 = this.service.ble_writeCharacteristic()
            .withRequest(
                {
                    "uuid" : uuid9,
                    "value" : "06020001"
                }
                , sv.JSON)
            .withDelay(209);
        this.service.ble_onCharacteristicChanged()
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 20,
                    "uuid" : uuid9,
                    "value" : "10060A0001"
                }
                , sv.JSON)
            .withDelay(4);
        corr1
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 20,
                    "status" : 0,
                    "uuid" : uuid9,
                    "value" : "10060A0001"
                }
                , sv.JSON)
            .withDelay(5);
        let corr2 = this.service.ble_writeCharacteristic()
            .withRequest(
                {
                    "uuid" : uuid9,
                    "value" : "06030000"
                }
                , sv.JSON)
            .withDelay(303);
        this.service.ble_onCharacteristicChanged()
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 20,
                    "uuid" : uuid9,
                    "value" : "101005"
                }
                , sv.JSON)
            .withDelay(1);
        corr2
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 20,
                    "status" : 0,
                    "uuid" : uuid9,
                    "value" : "101005"
                }
                , sv.JSON)
            .withDelay(8);
        this.service.ble_setCharacteristicNotification()
            .withRequest(
                {
                    "enable" : true,
                    "uuid" : uuid4
                }
                , sv.JSON)
            .withDelay(204);
        this.service.ble_onCharacteristicChanged()
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 20,
                    "uuid" : uuid9,
                    "value" : "101005"
                }
                , sv.JSON)
            .withDelay(3);
        this.service.ble_writeDescriptor()
            .withRequest(
                {
                    "uuid" : uuid8,
                    "value" : "0100"
                }
                , sv.JSON)
            .withDelay(4)
            .withResponse(
                {
                    "status" : 0,
                    "uuid" : uuid8
                }
                , sv.JSON)
            .withDelay(117);
        this.service.ble_writeCharacteristic()
            .withRequest(
                {
                    "uuid" : uuid4,
                    "value" : value3
                }
                , sv.JSON)
            .withDelay(209)
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 24,
                    "status" : 0,
                    "uuid" : uuid4,
                    "value" : value3
                }
                , sv.JSON)
            .withDelay(83);
        this.service.ble_setCharacteristicNotification()
            .withRequest(
                {
                    "enable" : false,
                    "uuid" : uuid4
                }
                , sv.JSON)
            .withDelay(200);
        this.service.ble_writeDescriptor()
            .withRequest(
                {
                    "uuid" : uuid8,
                    "value" : "0000"
                }
                , sv.JSON)
            .withDelay(9)
            .withResponse(
                {
                    "status" : 0,
                    "uuid" : uuid8
                }
                , sv.JSON)
            .withDelay(80);
        this.service.ble_writeCharacteristic()
            .withRequest(
                {
                    "uuid" : uuid4,
                    "value" : value9
                }
                , sv.JSON)
            .withDelay(204)
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 24,
                    "status" : 0,
                    "uuid" : uuid4,
                    "value" : value9
                }
                , sv.JSON)
            .withDelay(91);
        this.service.ble_writeCharacteristic()
            .withRequest(
                {
                    "uuid" : uuid9,
                    "value" : value4
                }
                , sv.JSON)
            .withDelay(234)
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 20,
                    "status" : 0,
                    "uuid" : uuid9,
                    "value" : value4
                }
                , sv.JSON)
            .withDelay(49);
        let corr3 = this.service.ble_writeCharacteristic()
            .withRequest(
                {
                    "uuid" : uuid9,
                    "value" : "0982"
                }
                , sv.JSON)
            .withDelay(390);
        this.service.ble_onCharacteristicChanged()
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 20,
                    "uuid" : uuid9,
                    "value" : "100A01"
                }
                , sv.JSON)
            .withDelay(2);
        corr3
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 20,
                    "status" : 0,
                    "uuid" : uuid9,
                    "value" : "100A01"
                }
                , sv.JSON)
            .withDelay(46);
        let corr4 = this.service.ble_writeCharacteristic()
            .withRequest(
                {
                    "uuid" : uuid9,
                    "value" : "060D0000"
                }
                , sv.JSON)
            .withDelay(209);
        this.service.ble_onCharacteristicChanged()
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 20,
                    "uuid" : uuid9,
                    "value" : "101005"
                }
                , sv.JSON)
            .withDelay(3);
        corr4
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 20,
                    "status" : 0,
                    "uuid" : uuid9,
                    "value" : "101005"
                }
                , sv.JSON)
            .withDelay(5);
        let corr5 = this.service.ble_writeCharacteristic()
            .withRequest(
                {
                    "uuid" : uuid9,
                    "value" : "06050000"
                }
                , sv.JSON)
            .withDelay(207);
        this.service.ble_onCharacteristicChanged()
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 20,
                    "uuid" : uuid9,
                    "value" : "101005"
                }
                , sv.JSON)
            .withDelay(2);
        corr5
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 20,
                    "status" : 0,
                    "uuid" : uuid9,
                    "value" : "101005"
                }
                , sv.JSON)
            .withDelay(7);
        let corr6 = this.service.ble_writeCharacteristic()
            .withRequest(
                {
                    "uuid" : uuid9,
                    "value" : "0610000001"
                }
                , sv.JSON)
            .withDelay(208);
        this.service.ble_onCharacteristicChanged()
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 20,
                    "uuid" : uuid9,
                    "value" : "101005"
                }
                , sv.JSON)
            .withDelay(2);
        corr6
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 20,
                    "status" : 0,
                    "uuid" : uuid9,
                    "value" : "101005"
                }
                , sv.JSON)
            .withDelay(9);
        let corr7 = this.service.ble_writeCharacteristic()
            .withRequest(
                {
                    "uuid" : uuid9,
                    "value" : "06060000"
                }
                , sv.JSON)
            .withDelay(206);
        this.service.ble_onCharacteristicChanged()
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 20,
                    "uuid" : uuid9,
                    "value" : "101005"
                }
                , sv.JSON)
            .withDelay(2);
        corr7
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 20,
                    "status" : 0,
                    "uuid" : uuid9,
                    "value" : "101005"
                }
                , sv.JSON)
            .withDelay(6);
        let corr8 = this.service.ble_writeCharacteristic()
            .withRequest(
                {
                    "uuid" : uuid9,
                    "value" : "08003C000400150000000000"
                }
                , sv.JSON)
            .withDelay(206);
        this.service.ble_onCharacteristicChanged()
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 20,
                    "uuid" : uuid9,
                    "value" : "101005"
                }
                , sv.JSON)
            .withDelay(3);
        corr8
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 20,
                    "status" : 0,
                    "uuid" : uuid9,
                    "value" : "101005"
                }
                , sv.JSON)
            .withDelay(6);
        this.service.ble_setCharacteristicNotification()
            .withRequest(
                {
                    "enable" : true,
                    "uuid" : uuid1
                }
                , sv.JSON)
            .withDelay(208);
        this.service.ble_onCharacteristicChanged()
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 20,
                    "uuid" : uuid9,
                    "value" : "101005"
                }
                , sv.JSON)
            .withDelay(2);
        this.service.ble_writeCharacteristic()
            .withRequest(
                {
                    "uuid" : uuid1,
                    "value" : value7
                }
                , sv.JSON)
            .withDelay(8)
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 10,
                    "status" : 0,
                    "uuid" : uuid1,
                    "value" : value7
                }
                , sv.JSON)
            .withDelay(73);
        this.service.ble_setCharacteristicNotification()
            .withRequest(
                {
                    "enable" : false,
                    "uuid" : uuid1
                }
                , sv.JSON)
            .withDelay(379);
        this.service.ble_writeCharacteristic()
            .withRequest(
                {
                    "uuid" : uuid9,
                    "value" : value1
                }
                , sv.JSON)
            .withDelay(7)
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 20,
                    "status" : 0,
                    "uuid" : uuid9,
                    "value" : value1
                }
                , sv.JSON)
            .withDelay(11);
        this.service.ble_setCharacteristicNotification()
            .withRequest(
                {
                    "enable" : true,
                    "uuid" : uuid1
                }
                , sv.JSON)
            .withDelay(210);
        this.service.ble_onCharacteristicChanged()
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 20,
                    "uuid" : uuid9,
                    "value" : "100606"
                }
                , sv.JSON)
            .withDelay(2);
        this.service.ble_writeCharacteristic()
            .withRequest(
                {
                    "uuid" : uuid1,
                    "value" : value2
                }
                , sv.JSON)
            .withDelay(9)
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 10,
                    "status" : 0,
                    "uuid" : uuid1,
                    "value" : value2
                }
                , sv.JSON)
            .withDelay(66);
        this.service.ble_setCharacteristicNotification()
            .withRequest(
                {
                    "enable" : false,
                    "uuid" : uuid1
                }
                , sv.JSON)
            .withDelay(210);
    }


    @sv.scenario
    connect() {
        const uuid = sv.svVar("00002a23-0000-1000-8000-00805f9b34fb");
        const uuid0 = sv.svVar("00002a27-0000-1000-8000-00805f9b34fb");
        const value = sv.svVar("1400");
        const uuid1 = sv.svVar("00000006-0000-3512-2118-0009af100700");
        const uuid2 = sv.svVar("00002a2b-0000-1000-8000-00805f9b34fb");
        const value0 = sv.svVar("150000");
        const uuid3 = sv.svVar("00002a25-0000-1000-8000-00805f9b34fb");
        const uuid4 = sv.svVar("00002a50-0000-1000-8000-00805f9b34fb");
        const uuid5 = sv.svVar("00000003-0000-3512-2118-0009af100700");
        const uuid6 = sv.svVar("00000008-0000-3512-2118-0009af100700");
        const uuid7 = sv.svVar("00002a39-0000-1000-8000-00805f9b34fb");
        const uuid8 = sv.svVar("00000009-0000-3512-2118-0009af100700");
        const value1 = sv.svVar("E307060410382102000004");
        const uuid9 = sv.svVar("00000010-0000-3512-2118-0009af100700");
        const value2 = sv.svVar("060C000000000000");
        const value3 = sv.svVar("060A0000");
        const properties = sv.svVar(18);
        const value4 = sv.svVar("03087658A3BC353DB63A0AE9DE4A0492FB71");
        const uuid10 = sv.svVar("00002902-0000-1000-8000-00805f9b34fb");
        const value5 = sv.svVar("0A0100000102030405");
        const value6 = sv.svVar("20000002");
        const value7 = sv.svVar("0208");
        const uuid11 = sv.svVar("00002a28-0000-1000-8000-00805f9b34fb");
        const value8 = sv.svVar("10000010270000");
        this.service.ble_subscribeDeviceIntents()
            .withRequest({ }, sv.JSON);
        this.service.ble_cancelDiscovery()
            .withRequest({ }, sv.JSON)
            .withDelay(2743);
        this.service.ble_connectGatt()
            .withRequest(
                {
                    "autoconnect" : false,
                    "transport" : 2
                }
                , sv.JSON)
            .withDelay(11);
        this.service.ble_onReceive()
            .withResponse(
                {
                    "action" : "android.bluetooth.device.action.NAME_CHANGED",
                    "extraDevice" : {
                        "address" : "D5:65:F4:86:D2:82",
                        "bluetoothClass" : "1f00",
                        "name" : "MI Band 2",
                        "type" : 2
                    },
                    "extraName" : "MI Band 2"
                }
                , sv.JSON)
            .withDelay(576);
        this.service.ble_onReceive()
            .withResponse(
                {
                    "action" : "android.bluetooth.device.action.NAME_CHANGED",
                    "extraDevice" : {
                        "address" : "D5:65:F4:86:D2:82",
                        "bluetoothClass" : "1f00",
                        "name" : "MI Band 2",
                        "type" : 2
                    },
                    "extraName" : "MI Band 2"
                }
                , sv.JSON)
            .withDelay(258);
        this.service.ble_onConnectionStateChange()
            .withResponse(
                {
                    "newState" : 2,
                    "status" : 0
                }
                , sv.JSON)
            .withDelay(12);
        this.service.ble_onReceive()
            .withResponse(
                {
                    "action" : "android.bluetooth.device.action.ACL_CONNECTED",
                    "extraDevice" : {
                        "address" : "D5:65:F4:86:D2:82",
                        "bluetoothClass" : "1f00",
                        "name" : "MI Band 2",
                        "type" : 2
                    }
                }
                , sv.JSON)
            .withDelay(15);
        this.service.ble_discoverServices()
            .withRequest({ }, sv.JSON)
            .withDelay(14)
            .withResponse(
                {
                    "services" : [ {
                        "characteristics" : [ {
                            "descriptors" : [ ],
                            "permissions" : 0,
                            "properties" : 2,
                            "uuid" : "00002a00-0000-1000-8000-00805f9b34fb",
                            "value" : ""
                        }, {
                            "descriptors" : [ ],
                            "permissions" : 0,
                            "properties" : 2,
                            "uuid" : "00002a01-0000-1000-8000-00805f9b34fb",
                            "value" : ""
                        }, {
                            "descriptors" : [ ],
                            "permissions" : 0,
                            "properties" : 2,
                            "uuid" : "00002a04-0000-1000-8000-00805f9b34fb",
                            "value" : ""
                        } ],
                        "type" : 0,
                        "uuid" : "00001800-0000-1000-8000-00805f9b34fb"
                    }, {
                        "characteristics" : [ {
                            "descriptors" : [ {
                                "permissions" : 0,
                                "status" : 0,
                                "uuid" : uuid10,
                                "value" : ""
                            } ],
                            "permissions" : 0,
                            "properties" : 34,
                            "uuid" : "00002a05-0000-1000-8000-00805f9b34fb",
                            "value" : ""
                        } ],
                        "type" : 0,
                        "uuid" : "00001801-0000-1000-8000-00805f9b34fb"
                    }, {
                        "characteristics" : [ {
                            "descriptors" : [ ],
                            "permissions" : 0,
                            "properties" : 2,
                            "uuid" : uuid3,
                            "value" : ""
                        }, {
                            "descriptors" : [ ],
                            "permissions" : 0,
                            "properties" : 2,
                            "uuid" : uuid0,
                            "value" : ""
                        }, {
                            "descriptors" : [ ],
                            "permissions" : 0,
                            "properties" : 2,
                            "uuid" : uuid11,
                            "value" : ""
                        }, {
                            "descriptors" : [ ],
                            "permissions" : 0,
                            "properties" : 2,
                            "uuid" : uuid,
                            "value" : ""
                        }, {
                            "descriptors" : [ ],
                            "permissions" : 0,
                            "properties" : 2,
                            "uuid" : uuid4,
                            "value" : ""
                        } ],
                        "type" : 0,
                        "uuid" : "0000180a-0000-1000-8000-00805f9b34fb"
                    }, {
                        "characteristics" : [ {
                            "descriptors" : [ {
                                "permissions" : 0,
                                "status" : 0,
                                "uuid" : uuid10,
                                "value" : ""
                            } ],
                            "permissions" : 0,
                            "properties" : 24,
                            "uuid" : "00001531-0000-3512-2118-0009af100700",
                            "value" : ""
                        }, {
                            "descriptors" : [ ],
                            "permissions" : 0,
                            "properties" : 4,
                            "uuid" : "00001532-0000-3512-2118-0009af100700",
                            "value" : ""
                        } ],
                        "type" : 0,
                        "uuid" : "00001530-0000-3512-2118-0009af100700"
                    }, {
                        "characteristics" : [ {
                            "descriptors" : [ ],
                            "permissions" : 0,
                            "properties" : 8,
                            "uuid" : "00002a46-0000-1000-8000-00805f9b34fb",
                            "value" : ""
                        }, {
                            "descriptors" : [ {
                                "permissions" : 0,
                                "status" : 0,
                                "uuid" : uuid10,
                                "value" : ""
                            } ],
                            "permissions" : 0,
                            "properties" : 26,
                            "uuid" : "00002a44-0000-1000-8000-00805f9b34fb",
                            "value" : ""
                        } ],
                        "type" : 0,
                        "uuid" : "00001811-0000-1000-8000-00805f9b34fb"
                    }, {
                        "characteristics" : [ {
                            "descriptors" : [ ],
                            "permissions" : 0,
                            "properties" : 4,
                            "uuid" : "00002a06-0000-1000-8000-00805f9b34fb",
                            "value" : ""
                        } ],
                        "type" : 0,
                        "uuid" : "00001802-0000-1000-8000-00805f9b34fb"
                    }, {
                        "characteristics" : [ {
                            "descriptors" : [ {
                                "permissions" : 0,
                                "status" : 0,
                                "uuid" : uuid10,
                                "value" : ""
                            } ],
                            "permissions" : 0,
                            "properties" : 16,
                            "uuid" : "00002a37-0000-1000-8000-00805f9b34fb",
                            "value" : ""
                        }, {
                            "descriptors" : [ ],
                            "permissions" : 0,
                            "properties" : 10,
                            "uuid" : uuid7,
                            "value" : ""
                        } ],
                        "type" : 0,
                        "uuid" : "0000180d-0000-1000-8000-00805f9b34fb"
                    }, {
                        "characteristics" : [ {
                            "descriptors" : [ {
                                "permissions" : 0,
                                "status" : 0,
                                "uuid" : uuid10,
                                "value" : ""
                            } ],
                            "permissions" : 0,
                            "properties" : 26,
                            "uuid" : uuid2,
                            "value" : ""
                        }, {
                            "descriptors" : [ {
                                "permissions" : 0,
                                "status" : 0,
                                "uuid" : uuid10,
                                "value" : ""
                            } ],
                            "permissions" : 0,
                            "properties" : 20,
                            "uuid" : "00000001-0000-3512-2118-0009af100700",
                            "value" : ""
                        }, {
                            "descriptors" : [ {
                                "permissions" : 0,
                                "status" : 0,
                                "uuid" : uuid10,
                                "value" : ""
                            } ],
                            "permissions" : 0,
                            "properties" : 16,
                            "uuid" : "00000002-0000-3512-2118-0009af100700",
                            "value" : ""
                        }, {
                            "descriptors" : [ {
                                "permissions" : 0,
                                "status" : 0,
                                "uuid" : uuid10,
                                "value" : ""
                            } ],
                            "permissions" : 0,
                            "properties" : 20,
                            "uuid" : uuid5,
                            "value" : ""
                        }, {
                            "descriptors" : [ {
                                "permissions" : 0,
                                "status" : 0,
                                "uuid" : uuid10,
                                "value" : ""
                            } ],
                            "permissions" : 0,
                            "properties" : 22,
                            "uuid" : "00002a04-0000-1000-8000-00805f9b34fb",
                            "value" : ""
                        }, {
                            "descriptors" : [ {
                                "permissions" : 0,
                                "status" : 0,
                                "uuid" : uuid10,
                                "value" : ""
                            } ],
                            "permissions" : 0,
                            "properties" : 20,
                            "uuid" : "00000004-0000-3512-2118-0009af100700",
                            "value" : ""
                        }, {
                            "descriptors" : [ {
                                "permissions" : 0,
                                "status" : 0,
                                "uuid" : uuid10,
                                "value" : ""
                            } ],
                            "permissions" : 0,
                            "properties" : 16,
                            "uuid" : "00000005-0000-3512-2118-0009af100700",
                            "value" : ""
                        }, {
                            "descriptors" : [ {
                                "permissions" : 0,
                                "status" : 0,
                                "uuid" : uuid10,
                                "value" : ""
                            } ],
                            "permissions" : 0,
                            "properties" : properties,
                            "uuid" : uuid1,
                            "value" : ""
                        }, {
                            "descriptors" : [ {
                                "permissions" : 0,
                                "status" : 0,
                                "uuid" : uuid10,
                                "value" : ""
                            } ],
                            "permissions" : 0,
                            "properties" : properties,
                            "uuid" : "00000007-0000-3512-2118-0009af100700",
                            "value" : ""
                        }, {
                            "descriptors" : [ {
                                "permissions" : 0,
                                "status" : 0,
                                "uuid" : uuid10,
                                "value" : ""
                            } ],
                            "permissions" : 0,
                            "properties" : 24,
                            "uuid" : uuid6,
                            "value" : ""
                        }, {
                            "descriptors" : [ {
                                "permissions" : 0,
                                "status" : 0,
                                "uuid" : uuid10,
                                "value" : ""
                            } ],
                            "permissions" : 0,
                            "properties" : 16,
                            "uuid" : uuid9,
                            "value" : ""
                        } ],
                        "type" : 0,
                        "uuid" : "0000fee0-0000-1000-8000-00805f9b34fb"
                    }, {
                        "characteristics" : [ {
                            "descriptors" : [ {
                                "permissions" : 0,
                                "status" : 0,
                                "uuid" : uuid10,
                                "value" : ""
                            } ],
                            "permissions" : 0,
                            "properties" : 22,
                            "uuid" : uuid8,
                            "value" : ""
                        }, {
                            "descriptors" : [ ],
                            "permissions" : 0,
                            "properties" : 8,
                            "uuid" : "0000fedd-0000-1000-8000-00805f9b34fb",
                            "value" : ""
                        }, {
                            "descriptors" : [ ],
                            "permissions" : 0,
                            "properties" : 2,
                            "uuid" : "0000fede-0000-1000-8000-00805f9b34fb",
                            "value" : ""
                        }, {
                            "descriptors" : [ ],
                            "permissions" : 0,
                            "properties" : 2,
                            "uuid" : "0000fedf-0000-1000-8000-00805f9b34fb",
                            "value" : ""
                        }, {
                            "descriptors" : [ ],
                            "permissions" : 0,
                            "properties" : 10,
                            "uuid" : "0000fed0-0000-1000-8000-00805f9b34fb",
                            "value" : ""
                        }, {
                            "descriptors" : [ ],
                            "permissions" : 0,
                            "properties" : 10,
                            "uuid" : "0000fed1-0000-1000-8000-00805f9b34fb",
                            "value" : ""
                        }, {
                            "descriptors" : [ ],
                            "permissions" : 0,
                            "properties" : 2,
                            "uuid" : "0000fed2-0000-1000-8000-00805f9b34fb",
                            "value" : ""
                        }, {
                            "descriptors" : [ ],
                            "permissions" : 0,
                            "properties" : 10,
                            "uuid" : "0000fed3-0000-1000-8000-00805f9b34fb",
                            "value" : ""
                        }, {
                            "descriptors" : [ {
                                "permissions" : 0,
                                "status" : 0,
                                "uuid" : uuid10,
                                "value" : ""
                            } ],
                            "permissions" : 0,
                            "properties" : 26,
                            "uuid" : "0000fec1-0000-3512-2118-0009af100700",
                            "value" : ""
                        } ],
                        "type" : 0,
                        "uuid" : "0000fee1-0000-1000-8000-00805f9b34fb"
                    } ],
                    "status" : 0
                }
                , sv.JSON)
            .withDelay(1332);
        this.service.ble_setCharacteristicNotification()
            .withRequest(
                {
                    "enable" : true,
                    "uuid" : uuid8
                }
                , sv.JSON)
            .withDelay(124);
        this.service.ble_writeDescriptor()
            .withRequest(
                {
                    "uuid" : uuid10,
                    "value" : "0100"
                }
                , sv.JSON)
            .withDelay(13)
            .withResponse(
                {
                    "status" : 0,
                    "uuid" : uuid10
                }
                , sv.JSON)
            .withDelay(16);
        this.service.ble_writeCharacteristic()
            .withRequest(
                {
                    "uuid" : uuid8,
                    "value" : value7
                }
                , sv.JSON)
            .withDelay(36)
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 22,
                    "status" : 0,
                    "uuid" : uuid8,
                    "value" : value7
                }
                , sv.JSON)
            .withDelay(12);
        this.service.ble_onCharacteristicChanged()
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 22,
                    "uuid" : uuid8,
                    "value" : "10020106E2EB8B080C1D25EA962F1FAC802179"
                }
                , sv.JSON)
            .withDelay(211);
        this.service.ble_writeCharacteristic()
            .withRequest(
                {
                    "uuid" : uuid8,
                    "value" : value4
                }
                , sv.JSON)
            .withDelay(9)
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 22,
                    "status" : 0,
                    "uuid" : uuid8,
                    "value" : value4
                }
                , sv.JSON)
            .withDelay(18);
        let corr0 = this.service.ble_writeCharacteristic()
            .withRequest(
                {
                    "uuid" : uuid2,
                    "value" : value1
                }
                , sv.JSON)
            .withDelay(211);
        this.service.ble_onCharacteristicChanged()
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 22,
                    "uuid" : uuid8,
                    "value" : "100301"
                }
                , sv.JSON)
            .withDelay(84);
        corr0
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 26,
                    "status" : 0,
                    "uuid" : uuid2,
                    "value" : value1
                }
                , sv.JSON)
            .withDelay(182);
        this.service.ble_readCharacteristic()
            .withRequest(
                {
                    "permissions" : 0,
                    "properties" : 2,
                    "uuid" : uuid3
                }
                , sv.JSON)
            .withDelay(14)
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 2,
                    "status" : 0,
                    "uuid" : uuid3,
                    "value" : "656361306663633037663163"
                }
                , sv.JSON)
            .withDelay(79);
        this.service.ble_readCharacteristic()
            .withRequest(
                {
                    "permissions" : 0,
                    "properties" : 2,
                    "uuid" : uuid0
                }
                , sv.JSON)
            .withDelay(204)
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 2,
                    "status" : 0,
                    "uuid" : uuid0,
                    "value" : "56302E312E332E32"
                }
                , sv.JSON)
            .withDelay(89);
        this.service.ble_readCharacteristic()
            .withRequest(
                {
                    "permissions" : 0,
                    "properties" : 2,
                    "uuid" : uuid11
                }
                , sv.JSON)
            .withDelay(212)
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 2,
                    "status" : 0,
                    "uuid" : uuid11,
                    "value" : "56312E302E312E3533"
                }
                , sv.JSON)
            .withDelay(81);
        this.service.ble_readCharacteristic()
            .withRequest(
                {
                    "permissions" : 0,
                    "properties" : 2,
                    "uuid" : uuid
                }
                , sv.JSON)
            .withDelay(230)
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 2,
                    "status" : 0,
                    "uuid" : uuid,
                    "value" : "D565F4FFFE86D282"
                }
                , sv.JSON)
            .withDelay(63);
        this.service.ble_readCharacteristic()
            .withRequest(
                {
                    "permissions" : 0,
                    "properties" : 2,
                    "uuid" : uuid4
                }
                , sv.JSON)
            .withDelay(200)
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 2,
                    "status" : 0,
                    "uuid" : uuid4,
                    "value" : "01570104000001"
                }
                , sv.JSON)
            .withDelay(91);
        this.service.ble_setCharacteristicNotification()
            .withRequest(
                {
                    "enable" : true,
                    "uuid" : uuid5
                }
                , sv.JSON)
            .withDelay(244);
        this.service.ble_writeDescriptor()
            .withRequest(
                {
                    "uuid" : uuid10,
                    "value" : "0100"
                }
                , sv.JSON)
            .withDelay(40)
            .withResponse(
                {
                    "status" : 0,
                    "uuid" : uuid10
                }
                , sv.JSON)
            .withDelay(30);
        this.service.ble_setCharacteristicNotification()
            .withRequest(
                {
                    "enable" : true,
                    "uuid" : uuid1
                }
                , sv.JSON)
            .withDelay(149);
        this.service.ble_writeDescriptor()
            .withRequest(
                {
                    "uuid" : uuid10,
                    "value" : "0100"
                }
                , sv.JSON)
            .withDelay(8)
            .withResponse(
                {
                    "status" : 0,
                    "uuid" : uuid10
                }
                , sv.JSON)
            .withDelay(153);
        this.service.ble_setCharacteristicNotification()
            .withRequest(
                {
                    "enable" : true,
                    "uuid" : uuid9
                }
                , sv.JSON)
            .withDelay(342);
        this.service.ble_writeDescriptor()
            .withRequest(
                {
                    "uuid" : uuid10,
                    "value" : "0100"
                }
                , sv.JSON)
            .withDelay(49)
            .withResponse(
                {
                    "status" : 0,
                    "uuid" : uuid10
                }
                , sv.JSON)
            .withDelay(102);
        this.service.ble_readCharacteristic()
            .withRequest(
                {
                    "permissions" : 0,
                    "properties" : properties,
                    "uuid" : uuid1
                }
                , sv.JSON)
            .withDelay(199)
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : properties,
                    "status" : 0,
                    "uuid" : uuid1,
                    "value" : "0F2100E207050E09251404E30705070D1224044B"
                }
                , sv.JSON)
            .withDelay(100);
        this.service.ble_writeCharacteristic()
            .withRequest(
                {
                    "uuid" : uuid5,
                    "value" : value3
                }
                , sv.JSON)
            .withDelay(210)
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 20,
                    "status" : 0,
                    "uuid" : uuid5,
                    "value" : value3
                }
                , sv.JSON)
            .withDelay(10);
        let corr1 = this.service.ble_writeCharacteristic()
            .withRequest(
                {
                    "uuid" : uuid5,
                    "value" : "06020001"
                }
                , sv.JSON)
            .withDelay(209);
        this.service.ble_onCharacteristicChanged()
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 20,
                    "uuid" : uuid5,
                    "value" : "10060A0001"
                }
                , sv.JSON)
            .withDelay(8);
        corr1
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 20,
                    "status" : 0,
                    "uuid" : uuid5,
                    "value" : "10060A0001"
                }
                , sv.JSON)
            .withDelay(16);
        let corr2 = this.service.ble_writeCharacteristic()
            .withRequest(
                {
                    "uuid" : uuid5,
                    "value" : "06030000"
                }
                , sv.JSON)
            .withDelay(194);
        this.service.ble_onCharacteristicChanged()
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 20,
                    "uuid" : uuid5,
                    "value" : "101005"
                }
                , sv.JSON)
            .withDelay(9);
        corr2
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 20,
                    "status" : 0,
                    "uuid" : uuid5,
                    "value" : "101005"
                }
                , sv.JSON)
            .withDelay(18);
        this.service.ble_setCharacteristicNotification()
            .withRequest(
                {
                    "enable" : true,
                    "uuid" : uuid6
                }
                , sv.JSON)
            .withDelay(192);
        this.service.ble_onCharacteristicChanged()
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 20,
                    "uuid" : uuid5,
                    "value" : "101005"
                }
                , sv.JSON)
            .withDelay(8);
        this.service.ble_writeDescriptor()
            .withRequest(
                {
                    "uuid" : uuid10,
                    "value" : "0100"
                }
                , sv.JSON)
            .withDelay(16)
            .withResponse(
                {
                    "status" : 0,
                    "uuid" : uuid10
                }
                , sv.JSON)
            .withDelay(77);
        this.service.ble_writeCharacteristic()
            .withRequest(
                {
                    "uuid" : uuid6,
                    "value" : value6
                }
                , sv.JSON)
            .withDelay(207)
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 24,
                    "status" : 0,
                    "uuid" : uuid6,
                    "value" : value6
                }
                , sv.JSON)
            .withDelay(90);
        this.service.ble_setCharacteristicNotification()
            .withRequest(
                {
                    "enable" : false,
                    "uuid" : uuid6
                }
                , sv.JSON)
            .withDelay(210);
        this.service.ble_writeDescriptor()
            .withRequest(
                {
                    "uuid" : uuid10,
                    "value" : "0000"
                }
                , sv.JSON)
            .withDelay(9)
            .withResponse(
                {
                    "status" : 0,
                    "uuid" : uuid10
                }
                , sv.JSON)
            .withDelay(87);
        this.service.ble_writeCharacteristic()
            .withRequest(
                {
                    "uuid" : uuid6,
                    "value" : value8
                }
                , sv.JSON)
            .withDelay(187)
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 24,
                    "status" : 0,
                    "uuid" : uuid6,
                    "value" : value8
                }
                , sv.JSON)
            .withDelay(94);
        this.service.ble_writeCharacteristic()
            .withRequest(
                {
                    "uuid" : uuid5,
                    "value" : value5
                }
                , sv.JSON)
            .withDelay(201)
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 20,
                    "status" : 0,
                    "uuid" : uuid5,
                    "value" : value5
                }
                , sv.JSON)
            .withDelay(26);
        let corr3 = this.service.ble_writeCharacteristic()
            .withRequest(
                {
                    "uuid" : uuid5,
                    "value" : "0982"
                }
                , sv.JSON)
            .withDelay(529);
        this.service.ble_onCharacteristicChanged()
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 20,
                    "uuid" : uuid5,
                    "value" : "100A01"
                }
                , sv.JSON)
            .withDelay(10);
        corr3
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 20,
                    "status" : 0,
                    "uuid" : uuid5,
                    "value" : "100A01"
                }
                , sv.JSON)
            .withDelay(15);
        let corr4 = this.service.ble_writeCharacteristic()
            .withRequest(
                {
                    "uuid" : uuid5,
                    "value" : "060D0000"
                }
                , sv.JSON)
            .withDelay(194);
        this.service.ble_onCharacteristicChanged()
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 20,
                    "uuid" : uuid5,
                    "value" : "101005"
                }
                , sv.JSON)
            .withDelay(8);
        corr4
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 20,
                    "status" : 0,
                    "uuid" : uuid5,
                    "value" : "101005"
                }
                , sv.JSON)
            .withDelay(18);
        let corr5 = this.service.ble_writeCharacteristic()
            .withRequest(
                {
                    "uuid" : uuid5,
                    "value" : "06050000"
                }
                , sv.JSON)
            .withDelay(291);
        this.service.ble_onCharacteristicChanged()
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 20,
                    "uuid" : uuid5,
                    "value" : "101005"
                }
                , sv.JSON)
            .withDelay(14);
        corr5
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 20,
                    "status" : 0,
                    "uuid" : uuid5,
                    "value" : "101005"
                }
                , sv.JSON)
            .withDelay(13);
        let corr6 = this.service.ble_writeCharacteristic()
            .withRequest(
                {
                    "uuid" : uuid5,
                    "value" : "0610000001"
                }
                , sv.JSON)
            .withDelay(394);
        this.service.ble_onCharacteristicChanged()
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 20,
                    "uuid" : uuid5,
                    "value" : "101005"
                }
                , sv.JSON)
            .withDelay(11);
        corr6
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 20,
                    "status" : 0,
                    "uuid" : uuid5,
                    "value" : "101005"
                }
                , sv.JSON)
            .withDelay(13);
        let corr7 = this.service.ble_writeCharacteristic()
            .withRequest(
                {
                    "uuid" : uuid5,
                    "value" : "06060000"
                }
                , sv.JSON)
            .withDelay(197);
        this.service.ble_onCharacteristicChanged()
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 20,
                    "uuid" : uuid5,
                    "value" : "101005"
                }
                , sv.JSON)
            .withDelay(13);
        corr7
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 20,
                    "status" : 0,
                    "uuid" : uuid5,
                    "value" : "101005"
                }
                , sv.JSON)
            .withDelay(17);
        let corr8 = this.service.ble_writeCharacteristic()
            .withRequest(
                {
                    "uuid" : uuid5,
                    "value" : "08003C000400150000000000"
                }
                , sv.JSON)
            .withDelay(183);
        this.service.ble_onCharacteristicChanged()
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 20,
                    "uuid" : uuid5,
                    "value" : "101005"
                }
                , sv.JSON)
            .withDelay(9);
        corr8
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 20,
                    "status" : 0,
                    "uuid" : uuid5,
                    "value" : "101005"
                }
                , sv.JSON)
            .withDelay(16);
        this.service.ble_setCharacteristicNotification()
            .withRequest(
                {
                    "enable" : true,
                    "uuid" : uuid7
                }
                , sv.JSON)
            .withDelay(206);
        this.service.ble_onCharacteristicChanged()
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 20,
                    "uuid" : uuid5,
                    "value" : "101005"
                }
                , sv.JSON)
            .withDelay(8);
        this.service.ble_writeCharacteristic()
            .withRequest(
                {
                    "uuid" : uuid7,
                    "value" : value0
                }
                , sv.JSON)
            .withDelay(41)
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 10,
                    "status" : 0,
                    "uuid" : uuid7,
                    "value" : value0
                }
                , sv.JSON)
            .withDelay(146);
        this.service.ble_setCharacteristicNotification()
            .withRequest(
                {
                    "enable" : false,
                    "uuid" : uuid7
                }
                , sv.JSON)
            .withDelay(551);
        this.service.ble_writeCharacteristic()
            .withRequest(
                {
                    "uuid" : uuid5,
                    "value" : value2
                }
                , sv.JSON)
            .withDelay(10)
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 20,
                    "status" : 0,
                    "uuid" : uuid5,
                    "value" : value2
                }
                , sv.JSON)
            .withDelay(14);
        this.service.ble_setCharacteristicNotification()
            .withRequest(
                {
                    "enable" : true,
                    "uuid" : uuid7
                }
                , sv.JSON)
            .withDelay(193);
        this.service.ble_onCharacteristicChanged()
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 20,
                    "uuid" : uuid5,
                    "value" : "100606"
                }
                , sv.JSON)
            .withDelay(9);
        this.service.ble_writeCharacteristic()
            .withRequest(
                {
                    "uuid" : uuid7,
                    "value" : value
                }
                , sv.JSON)
            .withDelay(15)
            .withResponse(
                {
                    "permissions" : 0,
                    "properties" : 10,
                    "status" : 0,
                    "uuid" : uuid7,
                    "value" : value
                }
                , sv.JSON)
            .withDelay(92);
        this.service.ble_setCharacteristicNotification()
            .withRequest(
                {
                    "enable" : false,
                    "uuid" : uuid7
                }
                , sv.JSON)
            .withDelay(295);
    }


    // Movement in real time
    @sv.scenario
    activity() {
        var properties = sv.svVar(18);
        var value = sv.svVar("150200");
        var permissions = sv.svVar(0);
        var value0 = sv.svVar("150101");
        var uuid = sv.svVar("00002a37-0000-1000-8000-00805f9b34fb");
        var uuid0 = sv.svVar("00002a39-0000-1000-8000-00805f9b34fb");
        var uuid1 = sv.svVar("00002902-0000-1000-8000-00805f9b34fb");
        var uuid2 = sv.svVar("00000007-0000-3512-2118-0009af100700");
        this.service.ble_readCharacteristic()
            .withRequest(                {
                    "permissions" : permissions,
                    "properties" : properties,
                    "uuid" : uuid2
                }
                , sv.JSON)
            .withResponse(                {
                    "permissions" : permissions,
                    "properties" : properties,
                    "status" : permissions,
                    "uuid" : uuid2,
                    "value" : "0C4C020000C101000013000000"
                }
                , sv.JSON)
            .withDelay(70);
        this.service.ble_setCharacteristicNotification()
            .withRequest(                {
                    "enable" : true,
                    "uuid" : uuid2
                }
                , sv.JSON)
            .withDelay(200);
        this.service.ble_writeDescriptor()
            .withRequest(                {
                    "uuid" : uuid1,
                    "value" : "0100"
                }
                , sv.JSON)
            .withDelay(20)
            .withResponse(                {
                    "status" : permissions,
                    "uuid" : uuid1
                }
                , sv.JSON)
            .withDelay(70);
        this.service.ble_setCharacteristicNotification()
            .withRequest(                {
                    "enable" : true,
                    "uuid" : uuid
                }
                , sv.JSON)
            .withDelay(208);
        this.service.ble_writeDescriptor()
            .withRequest(                {
                    "uuid" : uuid1,
                    "value" : "0100"
                }
                , sv.JSON)
            .withDelay(1)
            .withResponse(                {
                    "status" : permissions,
                    "uuid" : uuid1
                }
                , sv.JSON)
            .withDelay(80);
        this.service.ble_writeCharacteristic()
            .withRequest(                {
                    "uuid" : uuid0,
                    "value" : value
                }
                , sv.JSON)
            .withDelay(204)
            .withResponse(                {
                    "permissions" : permissions,
                    "properties" : 10,
                    "status" : permissions,
                    "uuid" : uuid0,
                    "value" : value
                }
                , sv.JSON)
            .withDelay(90);
        this.service.ble_writeCharacteristic()
            .withRequest(                {
                    "uuid" : uuid0,
                    "value" : value0
                }
                , sv.JSON)
            .withDelay(221)
            .withResponse(                {
                    "permissions" : permissions,
                    "properties" : 10,
                    "status" : permissions,
                    "uuid" : uuid0,
                    "value" : value0
                }
                , sv.JSON)
            .withDelay(71);
        this.service.ble_onCharacteristicChanged()
            .withResponse(                {
                    "permissions" : permissions,
                    "properties" : 16,
                    "uuid" : uuid,
                    "value" : "0041"
                }
                , sv.JSON)
            .withDelay(1242);
        this.service.ble_onCharacteristicChanged()
            .withResponse(                {
                    "permissions" : permissions,
                    "properties" : 16,
                    "uuid" : uuid,
                    "value" : "0052"
                }
                , sv.JSON)
            .withDelay(1205);
        this.service.ble_onCharacteristicChanged()
            .withResponse(                {
                    "permissions" : permissions,
                    "properties" : properties,
                    "uuid" : uuid2,
                    "value" : "0C58020000C101000013000000"
                }
                , sv.JSON)
            .withDelay(110);
        this.service.ble_onCharacteristicChanged()
            .withResponse(                {
                    "permissions" : permissions,
                    "properties" : 16,
                    "uuid" : uuid,
                    "value" : "0056"
                }
                , sv.JSON)
            .withDelay(1205);
        this.service.ble_onCharacteristicChanged()
            .withResponse(                {
                    "permissions" : permissions,
                    "properties" : properties,
                    "uuid" : uuid2,
                    "value" : "0C5C020000C101000013000000"
                }
                , sv.JSON);
        this.service.ble_onCharacteristicChanged()
            .withResponse(                {
                    "permissions" : permissions,
                    "properties" : 16,
                    "uuid" : uuid,
                    "value" : "0059"
                }
                , sv.JSON)
            .withDelay(1205);
        this.service.ble_onCharacteristicChanged()
            .withResponse(                {
                    "permissions" : permissions,
                    "properties" : properties,
                    "uuid" : uuid2,
                    "value" : "0C5F020000C101000013000000"
                }
                , sv.JSON)
            .withDelay(10);
        this.service.ble_onCharacteristicChanged()
            .withResponse(                {
                    "permissions" : permissions,
                    "properties" : 16,
                    "uuid" : uuid,
                    "value" : "005C"
                }
                , sv.JSON)
            .withDelay(1110);
        this.service.ble_onCharacteristicChanged()
            .withResponse(                {
                    "permissions" : permissions,
                    "properties" : properties,
                    "uuid" : uuid2,
                    "value" : "0C61020000C101000013000000"
                }
                , sv.JSON);
        this.service.ble_onCharacteristicChanged()
            .withResponse(                {
                    "permissions" : permissions,
                    "properties" : 16,
                    "uuid" : uuid,
                    "value" : "005B"
                }
                , sv.JSON)
            .withDelay(1203);
        this.service.ble_onCharacteristicChanged()
            .withResponse(                {
                    "permissions" : permissions,
                    "properties" : properties,
                    "uuid" : uuid2,
                    "value" : "0C64020000C101000013000000"
                }
                , sv.JSON);
        this.service.ble_onCharacteristicChanged()
            .withResponse(                {
                    "permissions" : permissions,
                    "properties" : 16,
                    "uuid" : uuid,
                    "value" : "005D"
                }
                , sv.JSON)
            .withDelay(1213);
        this.service.ble_onCharacteristicChanged()
            .withResponse(                {
                    "permissions" : permissions,
                    "properties" : properties,
                    "uuid" : uuid2,
                    "value" : "0C66020000C101000013000000"
                }
                , sv.JSON);
        this.service.ble_onCharacteristicChanged()
            .withResponse(                {
                    "permissions" : permissions,
                    "properties" : 16,
                    "uuid" : uuid,
                    "value" : "005F"
                }
                , sv.JSON)
            .withDelay(1205);
        this.service.ble_onCharacteristicChanged()
            .withResponse(                {
                    "permissions" : permissions,
                    "properties" : properties,
                    "uuid" : uuid2,
                    "value" : "0C69020000C101000013000000"
                }
                , sv.JSON);
        this.service.ble_onCharacteristicChanged()
            .withResponse(                {
                    "permissions" : permissions,
                    "properties" : 16,
                    "uuid" : uuid,
                    "value" : "005E"
                }
                , sv.JSON)
            .withDelay(1161);
        this.service.ble_onCharacteristicChanged()
            .withResponse(                {
                    "permissions" : permissions,
                    "properties" : properties,
                    "uuid" : uuid2,
                    "value" : "0C6B020000C101000013000000"
                }
                , sv.JSON)
            .withDelay(200);
        this.service.ble_onCharacteristicChanged()
            .withResponse(                {
                    "permissions" : permissions,
                    "properties" : properties,
                    "uuid" : uuid2,
                    "value" : "0C6E020000DA01000014000000"
                }
                , sv.JSON)
            .withDelay(1110);
        this.service.ble_onCharacteristicChanged()
            .withResponse(                {
                    "permissions" : permissions,
                    "properties" : properties,
                    "uuid" : uuid2,
                    "value" : "0C6E020000DA01000014000000"
                }
                , sv.JSON);
        this.service.ble_onCharacteristicChanged()
            .withResponse(                {
                    "permissions" : permissions,
                    "properties" : 16,
                    "uuid" : uuid,
                    "value" : "005D"
                }
                , sv.JSON)
            .withDelay(1130);
        this.service.ble_onCharacteristicChanged()
            .withResponse(                {
                    "permissions" : permissions,
                    "properties" : properties,
                    "uuid" : uuid2,
                    "value" : "0C70020000DA01000014000000"
                }
                , sv.JSON)
            .withDelay(224);
        this.service.ble_onCharacteristicChanged()
            .withResponse(                {
                    "permissions" : permissions,
                    "properties" : properties,
                    "uuid" : uuid2,
                    "value" : "0C73020000DA01000014000000"
                }
                , sv.JSON)
            .withDelay(1205);
        this.service.ble_onCharacteristicChanged()
            .withResponse(                {
                    "permissions" : permissions,
                    "properties" : properties,
                    "uuid" : uuid2,
                    "value" : "0C76020000DA01000014000000"
                }
                , sv.JSON)
            .withDelay(1130);
    }


    // Reimplemented with synthetic data generation by reverse-engineering a learned scenario
    // and replacing the data with samples from various times of day.
    @sv.scenario
    syncData() {
        let charActivityData = sv.svVar("00000005-0000-3512-2118-0009af100700");
        let charFetch = sv.svVar("00000004-0000-3512-2118-0009af100700");
        let charConfigurationDescriptor = sv.svVar("00002902-0000-1000-8000-00805f9b34fb");

        this.service.ble_setCharacteristicNotification()
            .withRequest(sv.svVar({
                "enable": false,
                "uuid": charActivityData
            }), sv.JSON)
            .withDelay(200);

        this.service.ble_writeDescriptor()
            .withRequest(sv.svVar({
                "uuid": charConfigurationDescriptor,
                "value": "0000"
            }), sv.JSON)
            .withDelay(200)
            .withResponse(sv.svVar({
                "status": 0,
                "uuid": charConfigurationDescriptor
            }), sv.JSON)
            .withDelay(205);

        this.service.ble_setCharacteristicNotification()
            .withRequest(sv.svVar({
                "enable": true,
                "uuid": charFetch
            }), sv.JSON)
            .withDelay(200);

        this.service.ble_writeDescriptor()
            .withRequest(sv.svVar({
                "uuid": charConfigurationDescriptor,
                "value": "0100"
            }), sv.JSON)
            .withDelay(200)
            .withResponse(sv.svVar({
                "status": 0,
                "uuid": charConfigurationDescriptor
            }), sv.JSON)
            .withDelay(11);

        // send me data since          YYYYMMDDhhmm  timezone*4
        let svVar10896 = sv.svVar("0101E1070A13143A0004");
        this.service.ble_writeCharacteristic()
            .withRequest(sv.svVar({
                "uuid": charFetch,
                "value": svVar10896
            }), sv.JSON)
            .withDelay(200)
            .withResponse(sv.svVar({
                "permissions": 0,
                "properties": 20,
                "status": 0,
                "uuid": charFetch,
                "value": svVar10896
            }), sv.JSON)
            .withDelay(100);

        let activityData = this.oneDaySyntheticActivityData();
        this.service.ble_onCharacteristicChanged()
            .withResponse(sv.svVar({
                "permissions": 0,
                "properties": 20,
                "uuid": charFetch,
                "value": "100101" + this.activityDataLength(activityData) + this.pastDate(activityData) + "0004"
            }), sv.JSON)
            .withDelay(500);
        // "value": "100101   28000000 E107 0A 13 14 3A 00 04"
        //           success  count    year m   d  h  m    timezone*4

        this.service.ble_setCharacteristicNotification()
            .withRequest(sv.svVar({
                "enable": true,
                "uuid": charActivityData
            }), sv.JSON)
            .withDelay(50);

        this.service.ble_writeDescriptor()
            .withRequest(sv.svVar({
                "uuid": charConfigurationDescriptor,
                "value": "0100"
            }), sv.JSON)
            .withDelay(50)
            .withResponse(sv.svVar({
                "status": 0,
                "uuid": charConfigurationDescriptor
            }), sv.JSON)
            .withDelay(117);

        this.service.ble_writeCharacteristic()
            .withRequest(sv.svVar({
                "uuid": charFetch,
                "value": "02"
            }), sv.JSON)
            .withDelay(50)
            .withResponse(sv.svVar({
                "permissions": 0,
                "properties": 20,
                "status": 0,
                "uuid": charFetch,
                "value": "02"
            }), sv.JSON)
            .withDelay(12);

        // send the synthetic activity data
        for (let i = 0; i < activityData.length; i++) {
            this.service.ble_onCharacteristicChanged()
                .withResponse(sv.svVar({
                    "permissions": 0,
                    "properties": 16,
                    "uuid": charActivityData,
                    "value": activityData[i]
                }), sv.JSON)
                .withDelay(i == 0 ? 110 : 1); // first delay is longer
        }

        // end of data
        this.service.ble_onCharacteristicChanged()
            .withResponse(sv.svVar({
                "permissions": 0,
                "properties": 20,
                "uuid": charFetch,
                "value": "100201"
            }), sv.JSON)
            .withDelay(10);

        this.service.ble_setCharacteristicNotification()
            .withRequest(sv.svVar({
                "enable": false,
                "uuid": charActivityData
            }), sv.JSON)
            .withDelay(50);

        this.service.ble_writeDescriptor()
            .withRequest(sv.svVar({
                "uuid": charConfigurationDescriptor,
                "value": "0000"
            }), sv.JSON)
            .withDelay(50)
            .withResponse(sv.svVar({
                "status": 0,
                "uuid": charConfigurationDescriptor
            }), sv.JSON)
            .withDelay(86);
    }

    // activity data samples extracted from (a huge) learned scenario
    // 1-byte index, then 1-minute chunks of (category, intensity, steps, heartrate)
    // the index will be rewritten with a continuous sequence
    static DATA_NOT_WEARING_SAMPLE = [
        "01730000FF700000FF730000FF730000FF",
        "03700000FF700000FF730000FF700000FF"];

    static DATA_LIGHT_SLEEP_SAMPLE = [
        "93790200417A1400FF7A140000700000FF",
        "977A1400457A1400FF70000045700000FF",
        "987000003F700000FF79100040700000FF",
        "997000003D700000FF7000003F700000FF",
        "9A7000003F700000FF7000003A700000FF",
        "9B7000003C700000FF7000003E700000FF",
        "9C7000003E700000FF7000003C700000FF"];

    static DATA_DEEP_SLEEP_SAMPLE = [
        "9E7B000040700000FF70000041700000FF",
        "9F70000044700000FF7000003C700000FF",
        "A070000047700000FF70000041700000FF",
        "A170000042700000FF700000527A1400FF",
        "A27B14003C700000FF7000003E700000FF",
        "A370000044701F00FF700D0044700500FF"];

    static DATA_SITTING_SAMPLE = [
        "27016041FF60310DFF604C00FF604200FF",
        "28015028FF604100FF606F00FF604B00FF",
        "2B500D00FF500B00FF500100FF501C00FF",
        "2C5A1400FF5A1400FF500400FF500600FF",
        "2D500400FF500300FF500400FF500200FF"
    ];

    static DATA_WALKING_SAMPLE = [
        "D1015726FF605B0AFF605D00FF015B23FF",
        "D2015C3FFF014B13FF115F43FF11652BFF",
        "D311631AFF11624AFF015D2AFF117036FF",
        "D4115F43FF016546FF015A34FF015B30FF"];

    static DATA_RUNNING_SAMPLE = [
        "6A014F23FF015E15FF11693BFF018761FF",
        "6B018968FF118071FF018772FF018E71FF",
        "6C019572FF019170FF018D6AFF01896FFF",
        "6D017B51FF015611FF117D4AFF11946BFF",
        "6E014622FF014B15FF018456FF018869FF"];

    // one day of synthetic data
    oneDaySyntheticActivityData() {
        let data = [
            this.generateActivityData(MiBand2ServiceModel.DATA_NOT_WEARING_SAMPLE, 1),
            this.generateActivityData(MiBand2ServiceModel.DATA_DEEP_SLEEP_SAMPLE, 4),
            this.generateActivityData(MiBand2ServiceModel.DATA_LIGHT_SLEEP_SAMPLE, 4),
            this.generateActivityData(MiBand2ServiceModel.DATA_WALKING_SAMPLE, 2),
            this.generateActivityData(MiBand2ServiceModel.DATA_SITTING_SAMPLE, 2),
            this.generateActivityData(MiBand2ServiceModel.DATA_WALKING_SAMPLE, 1),
            this.generateActivityData(MiBand2ServiceModel.DATA_RUNNING_SAMPLE, 1),
            this.generateActivityData(MiBand2ServiceModel.DATA_SITTING_SAMPLE, 4),
            this.generateActivityData(MiBand2ServiceModel.DATA_WALKING_SAMPLE, 5)
        ];

        return this.postProcess(data);
    }

    // timestamp in past based on activity data length so the app thinks it
    // has received all data until now and does not request more
    // note the date is evaluated during scenario compilation, not runtime
    pastDate(activityData) {
        let activityMinutes = activityData.length * 4;              // expecting data with 4 minutes per row
        let past = new Date();
        past.setTime(past.getTime() - (activityMinutes - 5) * 60 * 1000); // shift 5 minutes to future to overlap build/test start time
        let y = past.getFullYear();
        return this.hexByte(y & 0xFF) +
            this.hexByte((y / 0x100) & 0xFF) +
            this.hexByte(past.getMonth() + 1) +
            this.hexByte(past.getDate()) +
            this.hexByte(past.getHours()) +
            this.hexByte(past.getMinutes());
    }

    // format the length of activity data to be sent
    activityDataLength(activityData) {
        let len = activityData.length * 4;
        return this.hexByte(len & 0xFF) +
            this.hexByte((len / 0x100) & 0xFF) +
            "0000";
    }

    // generate requested number of hours of activity according to sample
    generateActivityData(sample, hours) {
        let dest = [];
        let sampleIndex = 0;
        for (let i = 0; i < hours * 60 / 4; i++) {
            dest[i] = sample[sampleIndex];
            sampleIndex = (sampleIndex + 1) % sample.length;
        }
        return dest;
    }

    // flatten the data to simple array of strings and replace
    // indexes in mock data with single growing sequence
    postProcess(data) {
        let newData = [].concat.apply([], data);
        newData.forEach((item, i) => {
            newData[i] = this.hexByte(i & 0xFF) + item.substring(2);
        }, this);
        return newData;
    }

    hexByte(b) {
        return ((b < 0x10) ? "0" + b.toString(16) : b.toString(16)).toUpperCase();
    }

}