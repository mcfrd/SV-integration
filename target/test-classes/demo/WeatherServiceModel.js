import * as sv from "sv-vsl";

import {WeatherServiceInterface} from "./WeatherServiceInterface.js";

export class WeatherServiceModel extends sv.ServiceModel {

    constructor(service: WeatherServiceInterface) {
        super(service);
        this.service = service;
    }

    @sv.scenario
    capture_WeatherServiceInterface() {
        const name = sv.svVar("Zdiby");
        const id = sv.svVar(3061659);
        const value = sv.svVar("openresty");
        const value0 = sv.svVar("true");
        const value1 = sv.svVar("*");
        const value2 = sv.svVar("zdiby");
        const value3 = sv.svVar("");
        const all = sv.svVar(0);
        const description = sv.svVar("clear sky");
        const value4 = sv.svVar("json");
        const id0 = sv.svVar(800);
        const value5 = sv.svVar("keep-alive");
        const value6 = sv.svVar("Thu, 09 Aug 2018 09:03:39 GMT");
        const main = sv.svVar("Clear");
        const value7 = sv.svVar("application/json; charset=utf-8");
        const value8 = sv.svVar("en");
        const httpHeaders6 = sv.svVar({"Accept-Encoding":"gzip","Connection":"keep-alive","User-Agent":"Dalvik/2.1.0 (Linux; U; Android 6.0; Lenovo S1a40 Build/MRA58K)"});
        const httpHeaders7 = sv.svVar({"Accept-Encoding":"gzip","Connection":"keep-alive","User-Agent":"Dalvik/2.1.0 (Linux; U; Android 6.0; Lenovo S1a40 Build/MRA58K)"});
        const value9 = sv.svVar("Thu, 09 Aug 2018 09:03:42 GMT");
        const value10 = sv.svVar("Thu, 09 Aug 2018 09:03:36 GMT");
        const icon = sv.svVar("01d");
        const country = sv.svVar("CZ");
        const value11 = sv.svVar("GET, POST");
        const finalHTTPHeaders6 = sv.svVar(httpHeaders6).setFinal();
        const finalHTTPHeaders7 = sv.svVar(httpHeaders7).setFinal();
        const finalValue9 = sv.svVar(value9).setFinal();
        const finalValue7 = sv.svVar(value7).setFinal();
        const finalValue8 = sv.svVar(value8).setFinal();
        const finalCountry = sv.svVar(country).setFinal();
        const finalValue11 = sv.svVar(value11).setFinal();
        const finalValue10 = sv.svVar(value10).setFinal();
        const finalIcon = sv.svVar(icon).setFinal();
        const finalName = sv.svVar(name).setFinal();
        const finalId = sv.svVar(id).setFinal();
        const finalValue1 = sv.svVar(value1).setFinal();
        const finalValue2 = sv.svVar(value2).setFinal();
        const finalValue = sv.svVar(value).setFinal();
        const finalValue0 = sv.svVar(value0).setFinal();
        const finalDescription = sv.svVar(description).setFinal();
        const finalValue4 = sv.svVar(value4).setFinal();
        const finalValue3 = sv.svVar(value3).setFinal();
        const finalAll = sv.svVar(all).setFinal();
        const finalValue6 = sv.svVar(value6).setFinal();
        const finalMain = sv.svVar(main).setFinal();
        const finalId0 = sv.svVar(id0).setFinal();
        const httpHeaders0 = sv.svVar({"Access-Control-Allow-Credentials":value0,"Access-Control-Allow-Methods":value11,"Access-Control-Allow-Origin":value1,"Connection":value5,"Content-Type":value7,"Date":value10,"Server":value,"X-Cache-Key":"/data/2.5/weather?lang=en&mode=json&q=zdiby"});
        const httpHeaders1 = sv.svVar({"Access-Control-Allow-Credentials":finalValue0,"Access-Control-Allow-Methods":finalValue11,"Access-Control-Allow-Origin":finalValue1,"Connection":value5,"Content-Type":finalValue7,"Date":finalValue10,"Server":finalValue,"X-Cache-Key":"/data/2.5/forecast?lang=en&mode=json&q=zdiby"});
        const httpHeaders2 = sv.svVar({"Access-Control-Allow-Credentials":finalValue0,"Access-Control-Allow-Methods":finalValue11,"Access-Control-Allow-Origin":finalValue1,"Connection":value5,"Content-Type":finalValue7,"Date":value6,"Server":finalValue,"X-Cache-Key":"/data/2.5/weather?lang=en&mode=json&q=zdiby"});
        const httpHeaders3 = sv.svVar({"Access-Control-Allow-Credentials":finalValue0,"Access-Control-Allow-Methods":finalValue11,"Access-Control-Allow-Origin":finalValue1,"Connection":value5,"Content-Type":finalValue7,"Date":finalValue6,"Server":finalValue,"X-Cache-Key":"/data/2.5/forecast?lang=en&mode=json&q=zdiby"});
        const httpHeaders4 = sv.svVar({"Access-Control-Allow-Credentials":finalValue0,"Access-Control-Allow-Methods":finalValue11,"Access-Control-Allow-Origin":finalValue1,"Connection":value5,"Content-Type":finalValue7,"Date":value9,"Server":finalValue,"X-Cache-Key":"/data/2.5/weather?lang=en&mode=json&q=zdiby"});
        const httpHeaders5 = sv.svVar({"Access-Control-Allow-Credentials":finalValue0,"Access-Control-Allow-Methods":finalValue11,"Access-Control-Allow-Origin":finalValue1,"Connection":value5,"Content-Type":finalValue7,"Date":finalValue9,"Server":finalValue,"X-Cache-Key":"/data/2.5/forecast?lang=en&mode=json&q=zdiby"});
        this.service.GET("/data/2.5/weather")
            .withRequest()
            .withHeaders(httpHeaders7)
            .withQueryParameters({"appid":value3,"mode":value4,"lang":value8,"q":value2})
            .withResponse(
                {
                    "coord" : {
                        "lon" : 14.45,
                        "lat" : 50.17
                    },
                    "weather" : [ {
                        "id" : id0,
                        "main" : main,
                        "description" : description,
                        "icon" : icon
                    } ],
                    "base" : "stations",
                    "main" : {
                        "temp" : 315.15,
                        "pressure" : 1016,
                        "humidity" : 54,
                        "temp_min" : 297.15,
                        "temp_max" : 299.15
                    },
                    "visibility" : 10000,
                    "wind" : {
                        "speed" : 2.6,
                        "deg" : 90
                    },
                    "clouds" : {
                        "all" : all
                    },
                    "dt" : 1533803400,
                    "sys" : {
                        "type" : 1,
                        "id" : 5898,
                        "message" : 0.0018,
                        "country" : country,
                        "sunrise" : 1533786166,
                        "sunset" : 1533839494
                    },
                    "id" : id,
                    "name" : name,
                    "cod" : 200
                }
                , sv.JSON)
            .withHeaders(httpHeaders0)
            .withStatusCode(200)
            .withDelay(176);
        this.service.GET("/data/2.5/forecast")
            .withRequest()
            .withHeaders(finalHTTPHeaders6)
            .withQueryParameters({"appid":finalValue3,"mode":finalValue4,"lang":finalValue8,"q":finalValue2})
            .withDelay(28)
            .withResponse(
                {
                    "cod" : "200",
                    "message" : 0.002,
                    "cnt" : 40,
                    "list" : [ {
                        "dt" : 1533816000,
                        "main" : {
                            "temp" : 305.84,
                            "temp_min" : 304.084,
                            "temp_max" : 305.84,
                            "pressure" : 997.64,
                            "sea_level" : 1025.65,
                            "grnd_level" : 997.64,
                            "humidity" : 46,
                            "temp_kf" : 1.76
                        },
                        "weather" : [ {
                            "id" : 801,
                            "main" : "Clouds",
                            "description" : "few clouds",
                            "icon" : "02d"
                        } ],
                        "clouds" : {
                            "all" : 20
                        },
                        "wind" : {
                            "speed" : 2.87,
                            "deg" : 114.003
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-09 12:00:00"
                    }, {
                        "dt" : 1533826800,
                        "main" : {
                            "temp" : 306.44,
                            "temp_min" : 305.268,
                            "temp_max" : 306.44,
                            "pressure" : 995.33,
                            "sea_level" : 1025.09,
                            "grnd_level" : 995.33,
                            "humidity" : 45,
                            "temp_kf" : 1.17
                        },
                        "weather" : [ {
                            "id" : 802,
                            "main" : "Clouds",
                            "description" : "scattered clouds",
                            "icon" : "03d"
                        } ],
                        "clouds" : {
                            "all" : 36
                        },
                        "wind" : {
                            "speed" : 4.71,
                            "deg" : 108
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-09 15:00:00"
                    }, {
                        "dt" : 1533837600,
                        "main" : {
                            "temp" : 304.06,
                            "temp_min" : 303.472,
                            "temp_max" : 304.06,
                            "pressure" : 993.8,
                            "sea_level" : 1023.64,
                            "grnd_level" : 993.8,
                            "humidity" : 52,
                            "temp_kf" : 0.59
                        },
                        "weather" : [ {
                            "id" : finalId0,
                            "main" : finalMain,
                            "description" : finalDescription,
                            "icon" : finalIcon
                        } ],
                        "clouds" : {
                            "all" : finalAll
                        },
                        "wind" : {
                            "speed" : 2.91,
                            "deg" : 132.503
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-09 18:00:00"
                    }, {
                        "dt" : 1533848400,
                        "main" : {
                            "temp" : 297.316,
                            "temp_min" : 297.316,
                            "temp_max" : 297.316,
                            "pressure" : 994.6,
                            "sea_level" : 1024.46,
                            "grnd_level" : 994.6,
                            "humidity" : 59,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : 501,
                            "main" : "Rain",
                            "description" : "moderate rain",
                            "icon" : "10n"
                        } ],
                        "clouds" : {
                            "all" : 36
                        },
                        "wind" : {
                            "speed" : 2.97,
                            "deg" : 158.002
                        },
                        "sys" : {
                            "pod" : "n"
                        },
                        "dt_txt" : "2018-08-09 21:00:00",
                        "rain" : {
                            "3h" : 5.18
                        }
                    }, {
                        "dt" : 1533859200,
                        "main" : {
                            "temp" : 294.95,
                            "temp_min" : 294.95,
                            "temp_max" : 294.95,
                            "pressure" : 997.14,
                            "sea_level" : 1026.84,
                            "grnd_level" : 997.14,
                            "humidity" : 72,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : 802,
                            "main" : "Clouds",
                            "description" : "scattered clouds",
                            "icon" : "03n"
                        } ],
                        "clouds" : {
                            "all" : 32
                        },
                        "wind" : {
                            "speed" : 3.41,
                            "deg" : 259.502
                        },
                        "sys" : {
                            "pod" : "n"
                        },
                        "dt_txt" : "2018-08-10 00:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1533870000,
                        "main" : {
                            "temp" : 294.208,
                            "temp_min" : 294.208,
                            "temp_max" : 294.208,
                            "pressure" : 1000.11,
                            "sea_level" : 1030.22,
                            "grnd_level" : 1000.11,
                            "humidity" : 73,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : 803,
                            "main" : "Clouds",
                            "description" : "broken clouds",
                            "icon" : "04n"
                        } ],
                        "clouds" : {
                            "all" : 76
                        },
                        "wind" : {
                            "speed" : 3.96,
                            "deg" : 267.504
                        },
                        "sys" : {
                            "pod" : "n"
                        },
                        "dt_txt" : "2018-08-10 03:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1533880800,
                        "main" : {
                            "temp" : 294.334,
                            "temp_min" : 294.334,
                            "temp_max" : 294.334,
                            "pressure" : 1003.09,
                            "sea_level" : 1033.35,
                            "grnd_level" : 1003.09,
                            "humidity" : 65,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : 501,
                            "main" : "Rain",
                            "description" : "moderate rain",
                            "icon" : "10d"
                        } ],
                        "clouds" : {
                            "all" : 92
                        },
                        "wind" : {
                            "speed" : 4.16,
                            "deg" : 264.005
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-10 06:00:00",
                        "rain" : {
                            "3h" : 3.275
                        }
                    }, {
                        "dt" : 1533891600,
                        "main" : {
                            "temp" : 293.404,
                            "temp_min" : 293.404,
                            "temp_max" : 293.404,
                            "pressure" : 1004.78,
                            "sea_level" : 1035.13,
                            "grnd_level" : 1004.78,
                            "humidity" : 72,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : 803,
                            "main" : "Clouds",
                            "description" : "broken clouds",
                            "icon" : "04d"
                        } ],
                        "clouds" : {
                            "all" : 56
                        },
                        "wind" : {
                            "speed" : 4.11,
                            "deg" : 237.008
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-10 09:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1533902400,
                        "main" : {
                            "temp" : 295.383,
                            "temp_min" : 295.383,
                            "temp_max" : 295.383,
                            "pressure" : 1005.2,
                            "sea_level" : 1035.46,
                            "grnd_level" : 1005.2,
                            "humidity" : 56,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : 803,
                            "main" : "Clouds",
                            "description" : "broken clouds",
                            "icon" : "04d"
                        } ],
                        "clouds" : {
                            "all" : 68
                        },
                        "wind" : {
                            "speed" : 4.06,
                            "deg" : 294.5
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-10 12:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1533913200,
                        "main" : {
                            "temp" : 297.073,
                            "temp_min" : 297.073,
                            "temp_max" : 297.073,
                            "pressure" : 1005.18,
                            "sea_level" : 1035.65,
                            "grnd_level" : 1005.18,
                            "humidity" : 48,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : 803,
                            "main" : "Clouds",
                            "description" : "broken clouds",
                            "icon" : "04d"
                        } ],
                        "clouds" : {
                            "all" : 56
                        },
                        "wind" : {
                            "speed" : 3.43,
                            "deg" : 285.002
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-10 15:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1533924000,
                        "main" : {
                            "temp" : 294.659,
                            "temp_min" : 294.659,
                            "temp_max" : 294.659,
                            "pressure" : 1005.68,
                            "sea_level" : 1036.17,
                            "grnd_level" : 1005.68,
                            "humidity" : 49,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : 802,
                            "main" : "Clouds",
                            "description" : "scattered clouds",
                            "icon" : "03d"
                        } ],
                        "clouds" : {
                            "all" : 32
                        },
                        "wind" : {
                            "speed" : 3.31,
                            "deg" : 247.01
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-10 18:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1533934800,
                        "main" : {
                            "temp" : 289.534,
                            "temp_min" : 289.534,
                            "temp_max" : 289.534,
                            "pressure" : 1006.63,
                            "sea_level" : 1037.14,
                            "grnd_level" : 1006.63,
                            "humidity" : 52,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : finalId0,
                            "main" : finalMain,
                            "description" : finalDescription,
                            "icon" : "02n"
                        } ],
                        "clouds" : {
                            "all" : 8
                        },
                        "wind" : {
                            "speed" : 3.51,
                            "deg" : 251.005
                        },
                        "sys" : {
                            "pod" : "n"
                        },
                        "dt_txt" : "2018-08-10 21:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1533945600,
                        "main" : {
                            "temp" : 286.752,
                            "temp_min" : 286.752,
                            "temp_max" : 286.752,
                            "pressure" : 1006.48,
                            "sea_level" : 1037.17,
                            "grnd_level" : 1006.48,
                            "humidity" : 64,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : 500,
                            "main" : "Rain",
                            "description" : "light rain",
                            "icon" : "10n"
                        } ],
                        "clouds" : {
                            "all" : 12
                        },
                        "wind" : {
                            "speed" : 1.27,
                            "deg" : 242.518
                        },
                        "sys" : {
                            "pod" : "n"
                        },
                        "dt_txt" : "2018-08-11 00:00:00",
                        "rain" : {
                            "3h" : 0.245
                        }
                    }, {
                        "dt" : 1533956400,
                        "main" : {
                            "temp" : 284.666,
                            "temp_min" : 284.666,
                            "temp_max" : 284.666,
                            "pressure" : 1006.3,
                            "sea_level" : 1039.1,
                            "grnd_level" : 1006.3,
                            "humidity" : 80,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : finalId0,
                            "main" : finalMain,
                            "description" : finalDescription,
                            "icon" : "02n"
                        } ],
                        "clouds" : {
                            "all" : 8
                        },
                        "wind" : {
                            "speed" : 1.67,
                            "deg" : 228.5
                        },
                        "sys" : {
                            "pod" : "n"
                        },
                        "dt_txt" : "2018-08-11 03:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1533967200,
                        "main" : {
                            "temp" : 288.983,
                            "temp_min" : 288.983,
                            "temp_max" : 288.983,
                            "pressure" : 1008.81,
                            "sea_level" : 1037.07,
                            "grnd_level" : 1008.81,
                            "humidity" : 65,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : finalId0,
                            "main" : finalMain,
                            "description" : finalDescription,
                            "icon" : finalIcon
                        } ],
                        "clouds" : {
                            "all" : finalAll
                        },
                        "wind" : {
                            "speed" : 2.06,
                            "deg" : 227.502
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-11 06:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1533978000,
                        "main" : {
                            "temp" : 295.597,
                            "temp_min" : 295.597,
                            "temp_max" : 295.597,
                            "pressure" : 1005.7,
                            "sea_level" : 1038.84,
                            "grnd_level" : 1005.7,
                            "humidity" : 52,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : finalId0,
                            "main" : finalMain,
                            "description" : finalDescription,
                            "icon" : finalIcon
                        } ],
                        "clouds" : {
                            "all" : finalAll
                        },
                        "wind" : {
                            "speed" : 2.4,
                            "deg" : 238.505
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-11 09:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1533988800,
                        "main" : {
                            "temp" : 297.76,
                            "temp_min" : 297.76,
                            "temp_max" : 297.76,
                            "pressure" : 1007.03,
                            "sea_level" : 1033.88,
                            "grnd_level" : 1007.03,
                            "humidity" : 44,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : 802,
                            "main" : "Clouds",
                            "description" : "scattered clouds",
                            "icon" : "03d"
                        } ],
                        "clouds" : {
                            "all" : 36
                        },
                        "wind" : {
                            "speed" : 5.01,
                            "deg" : 232.505
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-11 12:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1533999600,
                        "main" : {
                            "temp" : 297.178,
                            "temp_min" : 297.178,
                            "temp_max" : 297.178,
                            "pressure" : 1002.5,
                            "sea_level" : 1032.82,
                            "grnd_level" : 1002.5,
                            "humidity" : 42,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : 802,
                            "main" : "Clouds",
                            "description" : "scattered clouds",
                            "icon" : "03d"
                        } ],
                        "clouds" : {
                            "all" : 44
                        },
                        "wind" : {
                            "speed" : 5.28,
                            "deg" : 252.004
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-11 15:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1534010400,
                        "main" : {
                            "temp" : 294.26,
                            "temp_min" : 294.26,
                            "temp_max" : 294.26,
                            "pressure" : 1003.39,
                            "sea_level" : 1033.69,
                            "grnd_level" : 1003.39,
                            "humidity" : 43,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : 803,
                            "main" : "Clouds",
                            "description" : "broken clouds",
                            "icon" : "04d"
                        } ],
                        "clouds" : {
                            "all" : 68
                        },
                        "wind" : {
                            "speed" : 5.27,
                            "deg" : 288.508
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-11 18:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1534021200,
                        "main" : {
                            "temp" : 290.306,
                            "temp_min" : 290.306,
                            "temp_max" : 290.306,
                            "pressure" : 1004.87,
                            "sea_level" : 1034.81,
                            "grnd_level" : 1004.87,
                            "humidity" : 51,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : 801,
                            "main" : "Clouds",
                            "description" : "few clouds",
                            "icon" : "02n"
                        } ],
                        "clouds" : {
                            "all" : 20
                        },
                        "wind" : {
                            "speed" : 2.81,
                            "deg" : 307.004
                        },
                        "sys" : {
                            "pod" : "n"
                        },
                        "dt_txt" : "2018-08-11 21:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1534032000,
                        "main" : {
                            "temp" : 286.43,
                            "temp_min" : 286.43,
                            "temp_max" : 286.43,
                            "pressure" : 1004.53,
                            "sea_level" : 1035.32,
                            "grnd_level" : 1004.53,
                            "humidity" : 62,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : finalId0,
                            "main" : finalMain,
                            "description" : finalDescription,
                            "icon" : "02n"
                        } ],
                        "clouds" : {
                            "all" : 8
                        },
                        "wind" : {
                            "speed" : 0.92,
                            "deg" : 133.501
                        },
                        "sys" : {
                            "pod" : "n"
                        },
                        "dt_txt" : "2018-08-12 00:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1534042800,
                        "main" : {
                            "temp" : 283.212,
                            "temp_min" : 283.212,
                            "temp_max" : 283.212,
                            "pressure" : 1003.47,
                            "sea_level" : 1035.46,
                            "grnd_level" : 1003.47,
                            "humidity" : 84,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : finalId0,
                            "main" : finalMain,
                            "description" : finalDescription,
                            "icon" : "01n"
                        } ],
                        "clouds" : {
                            "all" : finalAll
                        },
                        "wind" : {
                            "speed" : 0.46,
                            "deg" : 8.00079
                        },
                        "sys" : {
                            "pod" : "n"
                        },
                        "dt_txt" : "2018-08-12 03:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1534053600,
                        "main" : {
                            "temp" : 288.657,
                            "temp_min" : 288.657,
                            "temp_max" : 288.657,
                            "pressure" : 1003.36,
                            "sea_level" : 1034.95,
                            "grnd_level" : 1003.36,
                            "humidity" : 64,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : finalId0,
                            "main" : finalMain,
                            "description" : finalDescription,
                            "icon" : "02d"
                        } ],
                        "clouds" : {
                            "all" : 8
                        },
                        "wind" : {
                            "speed" : 1.94,
                            "deg" : 196.001
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-12 06:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1534064400,
                        "main" : {
                            "temp" : 294.485,
                            "temp_min" : 294.485,
                            "temp_max" : 294.485,
                            "pressure" : 1003.37,
                            "sea_level" : 1033.69,
                            "grnd_level" : 1003.37,
                            "humidity" : 48,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : finalId0,
                            "main" : finalMain,
                            "description" : finalDescription,
                            "icon" : "02d"
                        } ],
                        "clouds" : {
                            "all" : 8
                        },
                        "wind" : {
                            "speed" : 2.45,
                            "deg" : 178.503
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-12 09:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1534075200,
                        "main" : {
                            "temp" : 297.82,
                            "temp_min" : 297.82,
                            "temp_max" : 297.82,
                            "pressure" : 1001.41,
                            "sea_level" : 1031.54,
                            "grnd_level" : 1001.41,
                            "humidity" : 39,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : finalId0,
                            "main" : finalMain,
                            "description" : finalDescription,
                            "icon" : finalIcon
                        } ],
                        "clouds" : {
                            "all" : finalAll
                        },
                        "wind" : {
                            "speed" : 2.61,
                            "deg" : 211.509
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-12 12:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1534086000,
                        "main" : {
                            "temp" : 299.584,
                            "temp_min" : 299.584,
                            "temp_max" : 299.584,
                            "pressure" : 999.4,
                            "sea_level" : 1029.38,
                            "grnd_level" : 999.4,
                            "humidity" : 34,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : finalId0,
                            "main" : finalMain,
                            "description" : finalDescription,
                            "icon" : finalIcon
                        } ],
                        "clouds" : {
                            "all" : finalAll
                        },
                        "wind" : {
                            "speed" : 2.18,
                            "deg" : 208.501
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-12 15:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1534096800,
                        "main" : {
                            "temp" : 296.797,
                            "temp_min" : 296.797,
                            "temp_max" : 296.797,
                            "pressure" : 997.9,
                            "sea_level" : 1027.99,
                            "grnd_level" : 997.9,
                            "humidity" : 42,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : finalId0,
                            "main" : finalMain,
                            "description" : finalDescription,
                            "icon" : finalIcon
                        } ],
                        "clouds" : {
                            "all" : finalAll
                        },
                        "wind" : {
                            "speed" : 1.46,
                            "deg" : 172.505
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-12 18:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1534107600,
                        "main" : {
                            "temp" : 289.825,
                            "temp_min" : 289.825,
                            "temp_max" : 289.825,
                            "pressure" : 997.38,
                            "sea_level" : 1027.59,
                            "grnd_level" : 997.38,
                            "humidity" : 66,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : finalId0,
                            "main" : finalMain,
                            "description" : finalDescription,
                            "icon" : "01n"
                        } ],
                        "clouds" : {
                            "all" : finalAll
                        },
                        "wind" : {
                            "speed" : 1.47,
                            "deg" : 125.501
                        },
                        "sys" : {
                            "pod" : "n"
                        },
                        "dt_txt" : "2018-08-12 21:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1534118400,
                        "main" : {
                            "temp" : 287.407,
                            "temp_min" : 287.407,
                            "temp_max" : 287.407,
                            "pressure" : 996.69,
                            "sea_level" : 1026.95,
                            "grnd_level" : 996.69,
                            "humidity" : 70,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : finalId0,
                            "main" : finalMain,
                            "description" : finalDescription,
                            "icon" : "02n"
                        } ],
                        "clouds" : {
                            "all" : 8
                        },
                        "wind" : {
                            "speed" : 1.51,
                            "deg" : 107.502
                        },
                        "sys" : {
                            "pod" : "n"
                        },
                        "dt_txt" : "2018-08-13 00:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1534129200,
                        "main" : {
                            "temp" : 285.223,
                            "temp_min" : 285.223,
                            "temp_max" : 285.223,
                            "pressure" : 996.11,
                            "sea_level" : 1026.49,
                            "grnd_level" : 996.11,
                            "humidity" : 83,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : finalId0,
                            "main" : finalMain,
                            "description" : finalDescription,
                            "icon" : "01n"
                        } ],
                        "clouds" : {
                            "all" : finalAll
                        },
                        "wind" : {
                            "speed" : 1.22,
                            "deg" : 92.0025
                        },
                        "sys" : {
                            "pod" : "n"
                        },
                        "dt_txt" : "2018-08-13 03:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1534140000,
                        "main" : {
                            "temp" : 292.448,
                            "temp_min" : 292.448,
                            "temp_max" : 292.448,
                            "pressure" : 996.1,
                            "sea_level" : 1026.17,
                            "grnd_level" : 996.1,
                            "humidity" : 70,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : finalId0,
                            "main" : finalMain,
                            "description" : finalDescription,
                            "icon" : finalIcon
                        } ],
                        "clouds" : {
                            "all" : finalAll
                        },
                        "wind" : {
                            "speed" : 2.34,
                            "deg" : 115.5
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-13 06:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1534150800,
                        "main" : {
                            "temp" : 299.253,
                            "temp_min" : 299.253,
                            "temp_max" : 299.253,
                            "pressure" : 997.93,
                            "sea_level" : 1025.37,
                            "grnd_level" : 997.93,
                            "humidity" : 48,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : 801,
                            "main" : "Clouds",
                            "description" : "few clouds",
                            "icon" : "02d"
                        } ],
                        "clouds" : {
                            "all" : 12
                        },
                        "wind" : {
                            "speed" : 2.11,
                            "deg" : 131.503
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-13 09:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1534161600,
                        "main" : {
                            "temp" : 303.501,
                            "temp_min" : 303.501,
                            "temp_max" : 303.501,
                            "pressure" : 993.65,
                            "sea_level" : 1023.41,
                            "grnd_level" : 993.65,
                            "humidity" : 36,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : 801,
                            "main" : "Clouds",
                            "description" : "few clouds",
                            "icon" : "02d"
                        } ],
                        "clouds" : {
                            "all" : 24
                        },
                        "wind" : {
                            "speed" : 2.97,
                            "deg" : 191.503
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-13 12:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1534172400,
                        "main" : {
                            "temp" : 304.625,
                            "temp_min" : 304.625,
                            "temp_max" : 304.625,
                            "pressure" : 994.66,
                            "sea_level" : 1024.36,
                            "grnd_level" : 994.66,
                            "humidity" : 29,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : finalId0,
                            "main" : finalMain,
                            "description" : finalDescription,
                            "icon" : "02d"
                        } ],
                        "clouds" : {
                            "all" : 8
                        },
                        "wind" : {
                            "speed" : 2.87,
                            "deg" : 218.505
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-13 15:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1534183200,
                        "main" : {
                            "temp" : 300.832,
                            "temp_min" : 300.832,
                            "temp_max" : 300.832,
                            "pressure" : 990.09,
                            "sea_level" : 1019.88,
                            "grnd_level" : 990.09,
                            "humidity" : 37,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : finalId0,
                            "main" : finalMain,
                            "description" : finalDescription,
                            "icon" : "02d"
                        } ],
                        "clouds" : {
                            "all" : 8
                        },
                        "wind" : {
                            "speed" : 1.8,
                            "deg" : 171.005
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-13 18:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1534194000,
                        "main" : {
                            "temp" : 293.102,
                            "temp_min" : 293.102,
                            "temp_max" : 293.102,
                            "pressure" : 989.93,
                            "sea_level" : 1020.22,
                            "grnd_level" : 989.93,
                            "humidity" : 65,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : 803,
                            "main" : "Clouds",
                            "description" : "broken clouds",
                            "icon" : "04n"
                        } ],
                        "clouds" : {
                            "all" : 76
                        },
                        "wind" : {
                            "speed" : 0.94,
                            "deg" : 256.001
                        },
                        "sys" : {
                            "pod" : "n"
                        },
                        "dt_txt" : "2018-08-13 21:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1534204800,
                        "main" : {
                            "temp" : 290.922,
                            "temp_min" : 290.922,
                            "temp_max" : 290.922,
                            "pressure" : 990.49,
                            "sea_level" : 1020.53,
                            "grnd_level" : 990.49,
                            "humidity" : 82,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : 803,
                            "main" : "Clouds",
                            "description" : "broken clouds",
                            "icon" : "04n"
                        } ],
                        "clouds" : {
                            "all" : 64
                        },
                        "wind" : {
                            "speed" : 2.63,
                            "deg" : 79.0016
                        },
                        "sys" : {
                            "pod" : "n"
                        },
                        "dt_txt" : "2018-08-14 00:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1534215600,
                        "main" : {
                            "temp" : 290.153,
                            "temp_min" : 290.153,
                            "temp_max" : 290.153,
                            "pressure" : 990.49,
                            "sea_level" : 1021.51,
                            "grnd_level" : 990.49,
                            "humidity" : 86,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : 803,
                            "main" : "Clouds",
                            "description" : "broken clouds",
                            "icon" : "04n"
                        } ],
                        "clouds" : {
                            "all" : 64
                        },
                        "wind" : {
                            "speed" : 2.63,
                            "deg" : 293.504
                        },
                        "sys" : {
                            "pod" : "n"
                        },
                        "dt_txt" : "2018-08-14 03:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1534226400,
                        "main" : {
                            "temp" : 289.992,
                            "temp_min" : 289.992,
                            "temp_max" : 289.992,
                            "pressure" : 993.13,
                            "sea_level" : 1023.04,
                            "grnd_level" : 993.13,
                            "humidity" : 93,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : 804,
                            "main" : "Clouds",
                            "description" : "overcast clouds",
                            "icon" : "04d"
                        } ],
                        "clouds" : {
                            "all" : 100
                        },
                        "wind" : {
                            "speed" : 3.66,
                            "deg" : 279.5
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-14 06:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1534237200,
                        "main" : {
                            "temp" : 293.232,
                            "temp_min" : 293.232,
                            "temp_max" : 293.232,
                            "pressure" : 993.67,
                            "sea_level" : 1023.79,
                            "grnd_level" : 993.67,
                            "humidity" : 83,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : 802,
                            "main" : "Clouds",
                            "description" : "scattered clouds",
                            "icon" : "03d"
                        } ],
                        "clouds" : {
                            "all" : 36
                        },
                        "wind" : {
                            "speed" : 3.31,
                            "deg" : 237.502
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-14 09:00:00",
                        "rain" : { }
                    } ],
                    "city" : {
                        "id" : finalId,
                        "name" : finalName,
                        "coord" : {
                            "lat" : 50.1679,
                            "lon" : 14.4515
                        },
                        "country" : finalCountry,
                        "population" : 1314
                    }
                }
                , sv.JSON)
            .withHeaders(httpHeaders1)
            .withStatusCode(200)
            .withDelay(105);
        this.service.GET("/data/2.5/weather")
            .withRequest()
            .withHeaders(finalHTTPHeaders7)
            .withQueryParameters({"appid":finalValue3,"mode":finalValue4,"lang":finalValue8,"q":finalValue2})
            .withDelay(3024)
            .withResponse(
                {
                    "coord" : {
                        "lon" : 14.45,
                        "lat" : 50.17
                    },
                    "weather" : [ {
                        "id" : finalId0,
                        "main" : finalMain,
                        "description" : finalDescription,
                        "icon" : finalIcon
                    } ],
                    "base" : "stations",
                    "main" : {
                        "temp" : 298.05,
                        "pressure" : 1016,
                        "humidity" : 54,
                        "temp_min" : 297.15,
                        "temp_max" : 299.15
                    },
                    "visibility" : 10000,
                    "wind" : {
                        "speed" : 2.6,
                        "deg" : 90
                    },
                    "clouds" : {
                        "all" : finalAll
                    },
                    "dt" : 1533803400,
                    "sys" : {
                        "type" : 1,
                        "id" : 5898,
                        "message" : 0.0018,
                        "country" : finalCountry,
                        "sunrise" : 1533786166,
                        "sunset" : 1533839494
                    },
                    "id" : finalId,
                    "name" : finalName,
                    "cod" : 200
                }
                , sv.JSON)
            .withHeaders(httpHeaders2)
            .withStatusCode(200)
            .withDelay(40);
        this.service.GET("/data/2.5/forecast")
            .withRequest()
            .withHeaders(finalHTTPHeaders6)
            .withQueryParameters({"appid":finalValue3,"mode":finalValue4,"lang":finalValue8,"q":finalValue2})
            .withDelay(53)
            .withResponse(
                {
                    "cod" : "200",
                    "message" : 0.002,
                    "cnt" : 40,
                    "list" : [ {
                        "dt" : 1533816000,
                        "main" : {
                            "temp" : 305.84,
                            "temp_min" : 304.084,
                            "temp_max" : 305.84,
                            "pressure" : 997.64,
                            "sea_level" : 1025.65,
                            "grnd_level" : 997.64,
                            "humidity" : 46,
                            "temp_kf" : 1.76
                        },
                        "weather" : [ {
                            "id" : 801,
                            "main" : "Clouds",
                            "description" : "few clouds",
                            "icon" : "02d"
                        } ],
                        "clouds" : {
                            "all" : 20
                        },
                        "wind" : {
                            "speed" : 2.87,
                            "deg" : 114.003
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-09 12:00:00"
                    }, {
                        "dt" : 1533826800,
                        "main" : {
                            "temp" : 306.44,
                            "temp_min" : 305.268,
                            "temp_max" : 306.44,
                            "pressure" : 995.33,
                            "sea_level" : 1025.09,
                            "grnd_level" : 995.33,
                            "humidity" : 45,
                            "temp_kf" : 1.17
                        },
                        "weather" : [ {
                            "id" : 802,
                            "main" : "Clouds",
                            "description" : "scattered clouds",
                            "icon" : "03d"
                        } ],
                        "clouds" : {
                            "all" : 36
                        },
                        "wind" : {
                            "speed" : 4.71,
                            "deg" : 108
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-09 15:00:00"
                    }, {
                        "dt" : 1533837600,
                        "main" : {
                            "temp" : 304.06,
                            "temp_min" : 303.472,
                            "temp_max" : 304.06,
                            "pressure" : 993.8,
                            "sea_level" : 1023.64,
                            "grnd_level" : 993.8,
                            "humidity" : 52,
                            "temp_kf" : 0.59
                        },
                        "weather" : [ {
                            "id" : finalId0,
                            "main" : finalMain,
                            "description" : finalDescription,
                            "icon" : finalIcon
                        } ],
                        "clouds" : {
                            "all" : finalAll
                        },
                        "wind" : {
                            "speed" : 2.91,
                            "deg" : 132.503
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-09 18:00:00"
                    }, {
                        "dt" : 1533848400,
                        "main" : {
                            "temp" : 297.316,
                            "temp_min" : 297.316,
                            "temp_max" : 297.316,
                            "pressure" : 994.6,
                            "sea_level" : 1024.46,
                            "grnd_level" : 994.6,
                            "humidity" : 59,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : 501,
                            "main" : "Rain",
                            "description" : "moderate rain",
                            "icon" : "10n"
                        } ],
                        "clouds" : {
                            "all" : 36
                        },
                        "wind" : {
                            "speed" : 2.97,
                            "deg" : 158.002
                        },
                        "sys" : {
                            "pod" : "n"
                        },
                        "dt_txt" : "2018-08-09 21:00:00",
                        "rain" : {
                            "3h" : 5.18
                        }
                    }, {
                        "dt" : 1533859200,
                        "main" : {
                            "temp" : 294.95,
                            "temp_min" : 294.95,
                            "temp_max" : 294.95,
                            "pressure" : 997.14,
                            "sea_level" : 1026.84,
                            "grnd_level" : 997.14,
                            "humidity" : 72,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : 802,
                            "main" : "Clouds",
                            "description" : "scattered clouds",
                            "icon" : "03n"
                        } ],
                        "clouds" : {
                            "all" : 32
                        },
                        "wind" : {
                            "speed" : 3.41,
                            "deg" : 259.502
                        },
                        "sys" : {
                            "pod" : "n"
                        },
                        "dt_txt" : "2018-08-10 00:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1533870000,
                        "main" : {
                            "temp" : 294.208,
                            "temp_min" : 294.208,
                            "temp_max" : 294.208,
                            "pressure" : 1000.11,
                            "sea_level" : 1030.22,
                            "grnd_level" : 1000.11,
                            "humidity" : 73,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : 803,
                            "main" : "Clouds",
                            "description" : "broken clouds",
                            "icon" : "04n"
                        } ],
                        "clouds" : {
                            "all" : 76
                        },
                        "wind" : {
                            "speed" : 3.96,
                            "deg" : 267.504
                        },
                        "sys" : {
                            "pod" : "n"
                        },
                        "dt_txt" : "2018-08-10 03:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1533880800,
                        "main" : {
                            "temp" : 294.334,
                            "temp_min" : 294.334,
                            "temp_max" : 294.334,
                            "pressure" : 1003.09,
                            "sea_level" : 1033.35,
                            "grnd_level" : 1003.09,
                            "humidity" : 65,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : 501,
                            "main" : "Rain",
                            "description" : "moderate rain",
                            "icon" : "10d"
                        } ],
                        "clouds" : {
                            "all" : 92
                        },
                        "wind" : {
                            "speed" : 4.16,
                            "deg" : 264.005
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-10 06:00:00",
                        "rain" : {
                            "3h" : 3.275
                        }
                    }, {
                        "dt" : 1533891600,
                        "main" : {
                            "temp" : 293.404,
                            "temp_min" : 293.404,
                            "temp_max" : 293.404,
                            "pressure" : 1004.78,
                            "sea_level" : 1035.13,
                            "grnd_level" : 1004.78,
                            "humidity" : 72,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : 803,
                            "main" : "Clouds",
                            "description" : "broken clouds",
                            "icon" : "04d"
                        } ],
                        "clouds" : {
                            "all" : 56
                        },
                        "wind" : {
                            "speed" : 4.11,
                            "deg" : 237.008
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-10 09:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1533902400,
                        "main" : {
                            "temp" : 295.383,
                            "temp_min" : 295.383,
                            "temp_max" : 295.383,
                            "pressure" : 1005.2,
                            "sea_level" : 1035.46,
                            "grnd_level" : 1005.2,
                            "humidity" : 56,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : 803,
                            "main" : "Clouds",
                            "description" : "broken clouds",
                            "icon" : "04d"
                        } ],
                        "clouds" : {
                            "all" : 68
                        },
                        "wind" : {
                            "speed" : 4.06,
                            "deg" : 294.5
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-10 12:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1533913200,
                        "main" : {
                            "temp" : 297.073,
                            "temp_min" : 297.073,
                            "temp_max" : 297.073,
                            "pressure" : 1005.18,
                            "sea_level" : 1035.65,
                            "grnd_level" : 1005.18,
                            "humidity" : 48,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : 803,
                            "main" : "Clouds",
                            "description" : "broken clouds",
                            "icon" : "04d"
                        } ],
                        "clouds" : {
                            "all" : 56
                        },
                        "wind" : {
                            "speed" : 3.43,
                            "deg" : 285.002
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-10 15:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1533924000,
                        "main" : {
                            "temp" : 294.659,
                            "temp_min" : 294.659,
                            "temp_max" : 294.659,
                            "pressure" : 1005.68,
                            "sea_level" : 1036.17,
                            "grnd_level" : 1005.68,
                            "humidity" : 49,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : 802,
                            "main" : "Clouds",
                            "description" : "scattered clouds",
                            "icon" : "03d"
                        } ],
                        "clouds" : {
                            "all" : 32
                        },
                        "wind" : {
                            "speed" : 3.31,
                            "deg" : 247.01
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-10 18:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1533934800,
                        "main" : {
                            "temp" : 289.534,
                            "temp_min" : 289.534,
                            "temp_max" : 289.534,
                            "pressure" : 1006.63,
                            "sea_level" : 1037.14,
                            "grnd_level" : 1006.63,
                            "humidity" : 52,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : finalId0,
                            "main" : finalMain,
                            "description" : finalDescription,
                            "icon" : "02n"
                        } ],
                        "clouds" : {
                            "all" : 8
                        },
                        "wind" : {
                            "speed" : 3.51,
                            "deg" : 251.005
                        },
                        "sys" : {
                            "pod" : "n"
                        },
                        "dt_txt" : "2018-08-10 21:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1533945600,
                        "main" : {
                            "temp" : 286.752,
                            "temp_min" : 286.752,
                            "temp_max" : 286.752,
                            "pressure" : 1006.48,
                            "sea_level" : 1037.17,
                            "grnd_level" : 1006.48,
                            "humidity" : 64,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : 500,
                            "main" : "Rain",
                            "description" : "light rain",
                            "icon" : "10n"
                        } ],
                        "clouds" : {
                            "all" : 12
                        },
                        "wind" : {
                            "speed" : 1.27,
                            "deg" : 242.518
                        },
                        "sys" : {
                            "pod" : "n"
                        },
                        "dt_txt" : "2018-08-11 00:00:00",
                        "rain" : {
                            "3h" : 0.245
                        }
                    }, {
                        "dt" : 1533956400,
                        "main" : {
                            "temp" : 284.666,
                            "temp_min" : 284.666,
                            "temp_max" : 284.666,
                            "pressure" : 1006.3,
                            "sea_level" : 1039.1,
                            "grnd_level" : 1006.3,
                            "humidity" : 80,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : finalId0,
                            "main" : finalMain,
                            "description" : finalDescription,
                            "icon" : "02n"
                        } ],
                        "clouds" : {
                            "all" : 8
                        },
                        "wind" : {
                            "speed" : 1.67,
                            "deg" : 228.5
                        },
                        "sys" : {
                            "pod" : "n"
                        },
                        "dt_txt" : "2018-08-11 03:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1533967200,
                        "main" : {
                            "temp" : 288.983,
                            "temp_min" : 288.983,
                            "temp_max" : 288.983,
                            "pressure" : 1008.81,
                            "sea_level" : 1037.07,
                            "grnd_level" : 1008.81,
                            "humidity" : 65,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : finalId0,
                            "main" : finalMain,
                            "description" : finalDescription,
                            "icon" : finalIcon
                        } ],
                        "clouds" : {
                            "all" : finalAll
                        },
                        "wind" : {
                            "speed" : 2.06,
                            "deg" : 227.502
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-11 06:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1533978000,
                        "main" : {
                            "temp" : 295.597,
                            "temp_min" : 295.597,
                            "temp_max" : 295.597,
                            "pressure" : 1005.7,
                            "sea_level" : 1038.84,
                            "grnd_level" : 1005.7,
                            "humidity" : 52,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : finalId0,
                            "main" : finalMain,
                            "description" : finalDescription,
                            "icon" : finalIcon
                        } ],
                        "clouds" : {
                            "all" : finalAll
                        },
                        "wind" : {
                            "speed" : 2.4,
                            "deg" : 238.505
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-11 09:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1533988800,
                        "main" : {
                            "temp" : 297.76,
                            "temp_min" : 297.76,
                            "temp_max" : 297.76,
                            "pressure" : 1007.03,
                            "sea_level" : 1033.88,
                            "grnd_level" : 1007.03,
                            "humidity" : 44,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : 802,
                            "main" : "Clouds",
                            "description" : "scattered clouds",
                            "icon" : "03d"
                        } ],
                        "clouds" : {
                            "all" : 36
                        },
                        "wind" : {
                            "speed" : 5.01,
                            "deg" : 232.505
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-11 12:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1533999600,
                        "main" : {
                            "temp" : 297.178,
                            "temp_min" : 297.178,
                            "temp_max" : 297.178,
                            "pressure" : 1002.5,
                            "sea_level" : 1032.82,
                            "grnd_level" : 1002.5,
                            "humidity" : 42,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : 802,
                            "main" : "Clouds",
                            "description" : "scattered clouds",
                            "icon" : "03d"
                        } ],
                        "clouds" : {
                            "all" : 44
                        },
                        "wind" : {
                            "speed" : 5.28,
                            "deg" : 252.004
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-11 15:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1534010400,
                        "main" : {
                            "temp" : 294.26,
                            "temp_min" : 294.26,
                            "temp_max" : 294.26,
                            "pressure" : 1003.39,
                            "sea_level" : 1033.69,
                            "grnd_level" : 1003.39,
                            "humidity" : 43,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : 803,
                            "main" : "Clouds",
                            "description" : "broken clouds",
                            "icon" : "04d"
                        } ],
                        "clouds" : {
                            "all" : 68
                        },
                        "wind" : {
                            "speed" : 5.27,
                            "deg" : 288.508
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-11 18:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1534021200,
                        "main" : {
                            "temp" : 290.306,
                            "temp_min" : 290.306,
                            "temp_max" : 290.306,
                            "pressure" : 1004.87,
                            "sea_level" : 1034.81,
                            "grnd_level" : 1004.87,
                            "humidity" : 51,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : 801,
                            "main" : "Clouds",
                            "description" : "few clouds",
                            "icon" : "02n"
                        } ],
                        "clouds" : {
                            "all" : 20
                        },
                        "wind" : {
                            "speed" : 2.81,
                            "deg" : 307.004
                        },
                        "sys" : {
                            "pod" : "n"
                        },
                        "dt_txt" : "2018-08-11 21:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1534032000,
                        "main" : {
                            "temp" : 286.43,
                            "temp_min" : 286.43,
                            "temp_max" : 286.43,
                            "pressure" : 1004.53,
                            "sea_level" : 1035.32,
                            "grnd_level" : 1004.53,
                            "humidity" : 62,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : finalId0,
                            "main" : finalMain,
                            "description" : finalDescription,
                            "icon" : "02n"
                        } ],
                        "clouds" : {
                            "all" : 8
                        },
                        "wind" : {
                            "speed" : 0.92,
                            "deg" : 133.501
                        },
                        "sys" : {
                            "pod" : "n"
                        },
                        "dt_txt" : "2018-08-12 00:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1534042800,
                        "main" : {
                            "temp" : 283.212,
                            "temp_min" : 283.212,
                            "temp_max" : 283.212,
                            "pressure" : 1003.47,
                            "sea_level" : 1035.46,
                            "grnd_level" : 1003.47,
                            "humidity" : 84,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : finalId0,
                            "main" : finalMain,
                            "description" : finalDescription,
                            "icon" : "01n"
                        } ],
                        "clouds" : {
                            "all" : finalAll
                        },
                        "wind" : {
                            "speed" : 0.46,
                            "deg" : 8.00079
                        },
                        "sys" : {
                            "pod" : "n"
                        },
                        "dt_txt" : "2018-08-12 03:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1534053600,
                        "main" : {
                            "temp" : 288.657,
                            "temp_min" : 288.657,
                            "temp_max" : 288.657,
                            "pressure" : 1003.36,
                            "sea_level" : 1034.95,
                            "grnd_level" : 1003.36,
                            "humidity" : 64,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : finalId0,
                            "main" : finalMain,
                            "description" : finalDescription,
                            "icon" : "02d"
                        } ],
                        "clouds" : {
                            "all" : 8
                        },
                        "wind" : {
                            "speed" : 1.94,
                            "deg" : 196.001
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-12 06:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1534064400,
                        "main" : {
                            "temp" : 294.485,
                            "temp_min" : 294.485,
                            "temp_max" : 294.485,
                            "pressure" : 1003.37,
                            "sea_level" : 1033.69,
                            "grnd_level" : 1003.37,
                            "humidity" : 48,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : finalId0,
                            "main" : finalMain,
                            "description" : finalDescription,
                            "icon" : "02d"
                        } ],
                        "clouds" : {
                            "all" : 8
                        },
                        "wind" : {
                            "speed" : 2.45,
                            "deg" : 178.503
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-12 09:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1534075200,
                        "main" : {
                            "temp" : 297.82,
                            "temp_min" : 297.82,
                            "temp_max" : 297.82,
                            "pressure" : 1001.41,
                            "sea_level" : 1031.54,
                            "grnd_level" : 1001.41,
                            "humidity" : 39,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : finalId0,
                            "main" : finalMain,
                            "description" : finalDescription,
                            "icon" : finalIcon
                        } ],
                        "clouds" : {
                            "all" : finalAll
                        },
                        "wind" : {
                            "speed" : 2.61,
                            "deg" : 211.509
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-12 12:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1534086000,
                        "main" : {
                            "temp" : 299.584,
                            "temp_min" : 299.584,
                            "temp_max" : 299.584,
                            "pressure" : 999.4,
                            "sea_level" : 1029.38,
                            "grnd_level" : 999.4,
                            "humidity" : 34,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : finalId0,
                            "main" : finalMain,
                            "description" : finalDescription,
                            "icon" : finalIcon
                        } ],
                        "clouds" : {
                            "all" : finalAll
                        },
                        "wind" : {
                            "speed" : 2.18,
                            "deg" : 208.501
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-12 15:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1534096800,
                        "main" : {
                            "temp" : 296.797,
                            "temp_min" : 296.797,
                            "temp_max" : 296.797,
                            "pressure" : 997.9,
                            "sea_level" : 1027.99,
                            "grnd_level" : 997.9,
                            "humidity" : 42,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : finalId0,
                            "main" : finalMain,
                            "description" : finalDescription,
                            "icon" : finalIcon
                        } ],
                        "clouds" : {
                            "all" : finalAll
                        },
                        "wind" : {
                            "speed" : 1.46,
                            "deg" : 172.505
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-12 18:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1534107600,
                        "main" : {
                            "temp" : 289.825,
                            "temp_min" : 289.825,
                            "temp_max" : 289.825,
                            "pressure" : 997.38,
                            "sea_level" : 1027.59,
                            "grnd_level" : 997.38,
                            "humidity" : 66,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : finalId0,
                            "main" : finalMain,
                            "description" : finalDescription,
                            "icon" : "01n"
                        } ],
                        "clouds" : {
                            "all" : finalAll
                        },
                        "wind" : {
                            "speed" : 1.47,
                            "deg" : 125.501
                        },
                        "sys" : {
                            "pod" : "n"
                        },
                        "dt_txt" : "2018-08-12 21:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1534118400,
                        "main" : {
                            "temp" : 287.407,
                            "temp_min" : 287.407,
                            "temp_max" : 287.407,
                            "pressure" : 996.69,
                            "sea_level" : 1026.95,
                            "grnd_level" : 996.69,
                            "humidity" : 70,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : finalId0,
                            "main" : finalMain,
                            "description" : finalDescription,
                            "icon" : "02n"
                        } ],
                        "clouds" : {
                            "all" : 8
                        },
                        "wind" : {
                            "speed" : 1.51,
                            "deg" : 107.502
                        },
                        "sys" : {
                            "pod" : "n"
                        },
                        "dt_txt" : "2018-08-13 00:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1534129200,
                        "main" : {
                            "temp" : 285.223,
                            "temp_min" : 285.223,
                            "temp_max" : 285.223,
                            "pressure" : 996.11,
                            "sea_level" : 1026.49,
                            "grnd_level" : 996.11,
                            "humidity" : 83,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : finalId0,
                            "main" : finalMain,
                            "description" : finalDescription,
                            "icon" : "01n"
                        } ],
                        "clouds" : {
                            "all" : finalAll
                        },
                        "wind" : {
                            "speed" : 1.22,
                            "deg" : 92.0025
                        },
                        "sys" : {
                            "pod" : "n"
                        },
                        "dt_txt" : "2018-08-13 03:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1534140000,
                        "main" : {
                            "temp" : 292.448,
                            "temp_min" : 292.448,
                            "temp_max" : 292.448,
                            "pressure" : 996.1,
                            "sea_level" : 1026.17,
                            "grnd_level" : 996.1,
                            "humidity" : 70,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : finalId0,
                            "main" : finalMain,
                            "description" : finalDescription,
                            "icon" : finalIcon
                        } ],
                        "clouds" : {
                            "all" : finalAll
                        },
                        "wind" : {
                            "speed" : 2.34,
                            "deg" : 115.5
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-13 06:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1534150800,
                        "main" : {
                            "temp" : 299.253,
                            "temp_min" : 299.253,
                            "temp_max" : 299.253,
                            "pressure" : 997.93,
                            "sea_level" : 1025.37,
                            "grnd_level" : 997.93,
                            "humidity" : 48,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : 801,
                            "main" : "Clouds",
                            "description" : "few clouds",
                            "icon" : "02d"
                        } ],
                        "clouds" : {
                            "all" : 12
                        },
                        "wind" : {
                            "speed" : 2.11,
                            "deg" : 131.503
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-13 09:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1534161600,
                        "main" : {
                            "temp" : 303.501,
                            "temp_min" : 303.501,
                            "temp_max" : 303.501,
                            "pressure" : 993.65,
                            "sea_level" : 1023.41,
                            "grnd_level" : 993.65,
                            "humidity" : 36,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : 801,
                            "main" : "Clouds",
                            "description" : "few clouds",
                            "icon" : "02d"
                        } ],
                        "clouds" : {
                            "all" : 24
                        },
                        "wind" : {
                            "speed" : 2.97,
                            "deg" : 191.503
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-13 12:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1534172400,
                        "main" : {
                            "temp" : 304.625,
                            "temp_min" : 304.625,
                            "temp_max" : 304.625,
                            "pressure" : 994.66,
                            "sea_level" : 1024.36,
                            "grnd_level" : 994.66,
                            "humidity" : 29,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : finalId0,
                            "main" : finalMain,
                            "description" : finalDescription,
                            "icon" : "02d"
                        } ],
                        "clouds" : {
                            "all" : 8
                        },
                        "wind" : {
                            "speed" : 2.87,
                            "deg" : 218.505
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-13 15:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1534183200,
                        "main" : {
                            "temp" : 300.832,
                            "temp_min" : 300.832,
                            "temp_max" : 300.832,
                            "pressure" : 990.09,
                            "sea_level" : 1019.88,
                            "grnd_level" : 990.09,
                            "humidity" : 37,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : finalId0,
                            "main" : finalMain,
                            "description" : finalDescription,
                            "icon" : "02d"
                        } ],
                        "clouds" : {
                            "all" : 8
                        },
                        "wind" : {
                            "speed" : 1.8,
                            "deg" : 171.005
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-13 18:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1534194000,
                        "main" : {
                            "temp" : 293.102,
                            "temp_min" : 293.102,
                            "temp_max" : 293.102,
                            "pressure" : 989.93,
                            "sea_level" : 1020.22,
                            "grnd_level" : 989.93,
                            "humidity" : 65,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : 803,
                            "main" : "Clouds",
                            "description" : "broken clouds",
                            "icon" : "04n"
                        } ],
                        "clouds" : {
                            "all" : 76
                        },
                        "wind" : {
                            "speed" : 0.94,
                            "deg" : 256.001
                        },
                        "sys" : {
                            "pod" : "n"
                        },
                        "dt_txt" : "2018-08-13 21:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1534204800,
                        "main" : {
                            "temp" : 290.922,
                            "temp_min" : 290.922,
                            "temp_max" : 290.922,
                            "pressure" : 990.49,
                            "sea_level" : 1020.53,
                            "grnd_level" : 990.49,
                            "humidity" : 82,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : 803,
                            "main" : "Clouds",
                            "description" : "broken clouds",
                            "icon" : "04n"
                        } ],
                        "clouds" : {
                            "all" : 64
                        },
                        "wind" : {
                            "speed" : 2.63,
                            "deg" : 79.0016
                        },
                        "sys" : {
                            "pod" : "n"
                        },
                        "dt_txt" : "2018-08-14 00:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1534215600,
                        "main" : {
                            "temp" : 290.153,
                            "temp_min" : 290.153,
                            "temp_max" : 290.153,
                            "pressure" : 990.49,
                            "sea_level" : 1021.51,
                            "grnd_level" : 990.49,
                            "humidity" : 86,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : 803,
                            "main" : "Clouds",
                            "description" : "broken clouds",
                            "icon" : "04n"
                        } ],
                        "clouds" : {
                            "all" : 64
                        },
                        "wind" : {
                            "speed" : 2.63,
                            "deg" : 293.504
                        },
                        "sys" : {
                            "pod" : "n"
                        },
                        "dt_txt" : "2018-08-14 03:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1534226400,
                        "main" : {
                            "temp" : 289.992,
                            "temp_min" : 289.992,
                            "temp_max" : 289.992,
                            "pressure" : 993.13,
                            "sea_level" : 1023.04,
                            "grnd_level" : 993.13,
                            "humidity" : 93,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : 804,
                            "main" : "Clouds",
                            "description" : "overcast clouds",
                            "icon" : "04d"
                        } ],
                        "clouds" : {
                            "all" : 100
                        },
                        "wind" : {
                            "speed" : 3.66,
                            "deg" : 279.5
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-14 06:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1534237200,
                        "main" : {
                            "temp" : 293.232,
                            "temp_min" : 293.232,
                            "temp_max" : 293.232,
                            "pressure" : 993.67,
                            "sea_level" : 1023.79,
                            "grnd_level" : 993.67,
                            "humidity" : 83,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : 802,
                            "main" : "Clouds",
                            "description" : "scattered clouds",
                            "icon" : "03d"
                        } ],
                        "clouds" : {
                            "all" : 36
                        },
                        "wind" : {
                            "speed" : 3.31,
                            "deg" : 237.502
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-14 09:00:00",
                        "rain" : { }
                    } ],
                    "city" : {
                        "id" : finalId,
                        "name" : finalName,
                        "coord" : {
                            "lat" : 50.1679,
                            "lon" : 14.4515
                        },
                        "country" : finalCountry,
                        "population" : 1314
                    }
                }
                , sv.JSON)
            .withHeaders(httpHeaders3)
            .withStatusCode(200)
            .withDelay(67);
        this.service.GET("/data/2.5/weather")
            .withRequest()
            .withHeaders(finalHTTPHeaders7)
            .withQueryParameters({"appid":finalValue3,"mode":finalValue4,"lang":finalValue8,"q":finalValue2})
            .withDelay(2763)
            .withResponse(
                {
                    "coord" : {
                        "lon" : 14.45,
                        "lat" : 50.17
                    },
                    "weather" : [ {
                        "id" : finalId0,
                        "main" : finalMain,
                        "description" : finalDescription,
                        "icon" : finalIcon
                    } ],
                    "base" : "stations",
                    "main" : {
                        "temp" : 298.05,
                        "pressure" : 1016,
                        "humidity" : 54,
                        "temp_min" : 297.15,
                        "temp_max" : 299.15
                    },
                    "visibility" : 10000,
                    "wind" : {
                        "speed" : 2.6,
                        "deg" : 90
                    },
                    "clouds" : {
                        "all" : finalAll
                    },
                    "dt" : 1533803400,
                    "sys" : {
                        "type" : 1,
                        "id" : 5898,
                        "message" : 0.0018,
                        "country" : finalCountry,
                        "sunrise" : 1533786166,
                        "sunset" : 1533839494
                    },
                    "id" : finalId,
                    "name" : finalName,
                    "cod" : 200
                }
                , sv.JSON)
            .withHeaders(httpHeaders4)
            .withStatusCode(200)
            .withDelay(38);
        this.service.GET("/data/2.5/forecast")
            .withRequest()
            .withHeaders(finalHTTPHeaders6)
            .withQueryParameters({"appid":finalValue3,"mode":finalValue4,"lang":finalValue8,"q":finalValue2})
            .withDelay(50)
            .withResponse(
                {
                    "cod" : "200",
                    "message" : 0.002,
                    "cnt" : 40,
                    "list" : [ {
                        "dt" : 1533816000,
                        "main" : {
                            "temp" : 305.84,
                            "temp_min" : 304.084,
                            "temp_max" : 305.84,
                            "pressure" : 997.64,
                            "sea_level" : 1025.65,
                            "grnd_level" : 997.64,
                            "humidity" : 46,
                            "temp_kf" : 1.76
                        },
                        "weather" : [ {
                            "id" : 801,
                            "main" : "Clouds",
                            "description" : "few clouds",
                            "icon" : "02d"
                        } ],
                        "clouds" : {
                            "all" : 20
                        },
                        "wind" : {
                            "speed" : 2.87,
                            "deg" : 114.003
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-09 12:00:00"
                    }, {
                        "dt" : 1533826800,
                        "main" : {
                            "temp" : 306.44,
                            "temp_min" : 305.268,
                            "temp_max" : 306.44,
                            "pressure" : 995.33,
                            "sea_level" : 1025.09,
                            "grnd_level" : 995.33,
                            "humidity" : 45,
                            "temp_kf" : 1.17
                        },
                        "weather" : [ {
                            "id" : 802,
                            "main" : "Clouds",
                            "description" : "scattered clouds",
                            "icon" : "03d"
                        } ],
                        "clouds" : {
                            "all" : 36
                        },
                        "wind" : {
                            "speed" : 4.71,
                            "deg" : 108
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-09 15:00:00"
                    }, {
                        "dt" : 1533837600,
                        "main" : {
                            "temp" : 304.06,
                            "temp_min" : 303.472,
                            "temp_max" : 304.06,
                            "pressure" : 993.8,
                            "sea_level" : 1023.64,
                            "grnd_level" : 993.8,
                            "humidity" : 52,
                            "temp_kf" : 0.59
                        },
                        "weather" : [ {
                            "id" : finalId0,
                            "main" : finalMain,
                            "description" : finalDescription,
                            "icon" : finalIcon
                        } ],
                        "clouds" : {
                            "all" : finalAll
                        },
                        "wind" : {
                            "speed" : 2.91,
                            "deg" : 132.503
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-09 18:00:00"
                    }, {
                        "dt" : 1533848400,
                        "main" : {
                            "temp" : 297.316,
                            "temp_min" : 297.316,
                            "temp_max" : 297.316,
                            "pressure" : 994.6,
                            "sea_level" : 1024.46,
                            "grnd_level" : 994.6,
                            "humidity" : 59,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : 501,
                            "main" : "Rain",
                            "description" : "moderate rain",
                            "icon" : "10n"
                        } ],
                        "clouds" : {
                            "all" : 36
                        },
                        "wind" : {
                            "speed" : 2.97,
                            "deg" : 158.002
                        },
                        "sys" : {
                            "pod" : "n"
                        },
                        "dt_txt" : "2018-08-09 21:00:00",
                        "rain" : {
                            "3h" : 5.18
                        }
                    }, {
                        "dt" : 1533859200,
                        "main" : {
                            "temp" : 294.95,
                            "temp_min" : 294.95,
                            "temp_max" : 294.95,
                            "pressure" : 997.14,
                            "sea_level" : 1026.84,
                            "grnd_level" : 997.14,
                            "humidity" : 72,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : 802,
                            "main" : "Clouds",
                            "description" : "scattered clouds",
                            "icon" : "03n"
                        } ],
                        "clouds" : {
                            "all" : 32
                        },
                        "wind" : {
                            "speed" : 3.41,
                            "deg" : 259.502
                        },
                        "sys" : {
                            "pod" : "n"
                        },
                        "dt_txt" : "2018-08-10 00:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1533870000,
                        "main" : {
                            "temp" : 294.208,
                            "temp_min" : 294.208,
                            "temp_max" : 294.208,
                            "pressure" : 1000.11,
                            "sea_level" : 1030.22,
                            "grnd_level" : 1000.11,
                            "humidity" : 73,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : 803,
                            "main" : "Clouds",
                            "description" : "broken clouds",
                            "icon" : "04n"
                        } ],
                        "clouds" : {
                            "all" : 76
                        },
                        "wind" : {
                            "speed" : 3.96,
                            "deg" : 267.504
                        },
                        "sys" : {
                            "pod" : "n"
                        },
                        "dt_txt" : "2018-08-10 03:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1533880800,
                        "main" : {
                            "temp" : 294.334,
                            "temp_min" : 294.334,
                            "temp_max" : 294.334,
                            "pressure" : 1003.09,
                            "sea_level" : 1033.35,
                            "grnd_level" : 1003.09,
                            "humidity" : 65,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : 501,
                            "main" : "Rain",
                            "description" : "moderate rain",
                            "icon" : "10d"
                        } ],
                        "clouds" : {
                            "all" : 92
                        },
                        "wind" : {
                            "speed" : 4.16,
                            "deg" : 264.005
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-10 06:00:00",
                        "rain" : {
                            "3h" : 3.275
                        }
                    }, {
                        "dt" : 1533891600,
                        "main" : {
                            "temp" : 293.404,
                            "temp_min" : 293.404,
                            "temp_max" : 293.404,
                            "pressure" : 1004.78,
                            "sea_level" : 1035.13,
                            "grnd_level" : 1004.78,
                            "humidity" : 72,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : 803,
                            "main" : "Clouds",
                            "description" : "broken clouds",
                            "icon" : "04d"
                        } ],
                        "clouds" : {
                            "all" : 56
                        },
                        "wind" : {
                            "speed" : 4.11,
                            "deg" : 237.008
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-10 09:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1533902400,
                        "main" : {
                            "temp" : 295.383,
                            "temp_min" : 295.383,
                            "temp_max" : 295.383,
                            "pressure" : 1005.2,
                            "sea_level" : 1035.46,
                            "grnd_level" : 1005.2,
                            "humidity" : 56,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : 803,
                            "main" : "Clouds",
                            "description" : "broken clouds",
                            "icon" : "04d"
                        } ],
                        "clouds" : {
                            "all" : 68
                        },
                        "wind" : {
                            "speed" : 4.06,
                            "deg" : 294.5
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-10 12:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1533913200,
                        "main" : {
                            "temp" : 297.073,
                            "temp_min" : 297.073,
                            "temp_max" : 297.073,
                            "pressure" : 1005.18,
                            "sea_level" : 1035.65,
                            "grnd_level" : 1005.18,
                            "humidity" : 48,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : 803,
                            "main" : "Clouds",
                            "description" : "broken clouds",
                            "icon" : "04d"
                        } ],
                        "clouds" : {
                            "all" : 56
                        },
                        "wind" : {
                            "speed" : 3.43,
                            "deg" : 285.002
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-10 15:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1533924000,
                        "main" : {
                            "temp" : 294.659,
                            "temp_min" : 294.659,
                            "temp_max" : 294.659,
                            "pressure" : 1005.68,
                            "sea_level" : 1036.17,
                            "grnd_level" : 1005.68,
                            "humidity" : 49,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : 802,
                            "main" : "Clouds",
                            "description" : "scattered clouds",
                            "icon" : "03d"
                        } ],
                        "clouds" : {
                            "all" : 32
                        },
                        "wind" : {
                            "speed" : 3.31,
                            "deg" : 247.01
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-10 18:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1533934800,
                        "main" : {
                            "temp" : 289.534,
                            "temp_min" : 289.534,
                            "temp_max" : 289.534,
                            "pressure" : 1006.63,
                            "sea_level" : 1037.14,
                            "grnd_level" : 1006.63,
                            "humidity" : 52,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : finalId0,
                            "main" : finalMain,
                            "description" : finalDescription,
                            "icon" : "02n"
                        } ],
                        "clouds" : {
                            "all" : 8
                        },
                        "wind" : {
                            "speed" : 3.51,
                            "deg" : 251.005
                        },
                        "sys" : {
                            "pod" : "n"
                        },
                        "dt_txt" : "2018-08-10 21:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1533945600,
                        "main" : {
                            "temp" : 286.752,
                            "temp_min" : 286.752,
                            "temp_max" : 286.752,
                            "pressure" : 1006.48,
                            "sea_level" : 1037.17,
                            "grnd_level" : 1006.48,
                            "humidity" : 64,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : 500,
                            "main" : "Rain",
                            "description" : "light rain",
                            "icon" : "10n"
                        } ],
                        "clouds" : {
                            "all" : 12
                        },
                        "wind" : {
                            "speed" : 1.27,
                            "deg" : 242.518
                        },
                        "sys" : {
                            "pod" : "n"
                        },
                        "dt_txt" : "2018-08-11 00:00:00",
                        "rain" : {
                            "3h" : 0.245
                        }
                    }, {
                        "dt" : 1533956400,
                        "main" : {
                            "temp" : 284.666,
                            "temp_min" : 284.666,
                            "temp_max" : 284.666,
                            "pressure" : 1006.3,
                            "sea_level" : 1039.1,
                            "grnd_level" : 1006.3,
                            "humidity" : 80,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : finalId0,
                            "main" : finalMain,
                            "description" : finalDescription,
                            "icon" : "02n"
                        } ],
                        "clouds" : {
                            "all" : 8
                        },
                        "wind" : {
                            "speed" : 1.67,
                            "deg" : 228.5
                        },
                        "sys" : {
                            "pod" : "n"
                        },
                        "dt_txt" : "2018-08-11 03:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1533967200,
                        "main" : {
                            "temp" : 288.983,
                            "temp_min" : 288.983,
                            "temp_max" : 288.983,
                            "pressure" : 1008.81,
                            "sea_level" : 1037.07,
                            "grnd_level" : 1008.81,
                            "humidity" : 65,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : finalId0,
                            "main" : finalMain,
                            "description" : finalDescription,
                            "icon" : finalIcon
                        } ],
                        "clouds" : {
                            "all" : finalAll
                        },
                        "wind" : {
                            "speed" : 2.06,
                            "deg" : 227.502
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-11 06:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1533978000,
                        "main" : {
                            "temp" : 295.597,
                            "temp_min" : 295.597,
                            "temp_max" : 295.597,
                            "pressure" : 1005.7,
                            "sea_level" : 1038.84,
                            "grnd_level" : 1005.7,
                            "humidity" : 52,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : finalId0,
                            "main" : finalMain,
                            "description" : finalDescription,
                            "icon" : finalIcon
                        } ],
                        "clouds" : {
                            "all" : finalAll
                        },
                        "wind" : {
                            "speed" : 2.4,
                            "deg" : 238.505
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-11 09:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1533988800,
                        "main" : {
                            "temp" : 297.76,
                            "temp_min" : 297.76,
                            "temp_max" : 297.76,
                            "pressure" : 1007.03,
                            "sea_level" : 1033.88,
                            "grnd_level" : 1007.03,
                            "humidity" : 44,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : 802,
                            "main" : "Clouds",
                            "description" : "scattered clouds",
                            "icon" : "03d"
                        } ],
                        "clouds" : {
                            "all" : 36
                        },
                        "wind" : {
                            "speed" : 5.01,
                            "deg" : 232.505
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-11 12:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1533999600,
                        "main" : {
                            "temp" : 297.178,
                            "temp_min" : 297.178,
                            "temp_max" : 297.178,
                            "pressure" : 1002.5,
                            "sea_level" : 1032.82,
                            "grnd_level" : 1002.5,
                            "humidity" : 42,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : 802,
                            "main" : "Clouds",
                            "description" : "scattered clouds",
                            "icon" : "03d"
                        } ],
                        "clouds" : {
                            "all" : 44
                        },
                        "wind" : {
                            "speed" : 5.28,
                            "deg" : 252.004
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-11 15:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1534010400,
                        "main" : {
                            "temp" : 294.26,
                            "temp_min" : 294.26,
                            "temp_max" : 294.26,
                            "pressure" : 1003.39,
                            "sea_level" : 1033.69,
                            "grnd_level" : 1003.39,
                            "humidity" : 43,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : 803,
                            "main" : "Clouds",
                            "description" : "broken clouds",
                            "icon" : "04d"
                        } ],
                        "clouds" : {
                            "all" : 68
                        },
                        "wind" : {
                            "speed" : 5.27,
                            "deg" : 288.508
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-11 18:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1534021200,
                        "main" : {
                            "temp" : 290.306,
                            "temp_min" : 290.306,
                            "temp_max" : 290.306,
                            "pressure" : 1004.87,
                            "sea_level" : 1034.81,
                            "grnd_level" : 1004.87,
                            "humidity" : 51,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : 801,
                            "main" : "Clouds",
                            "description" : "few clouds",
                            "icon" : "02n"
                        } ],
                        "clouds" : {
                            "all" : 20
                        },
                        "wind" : {
                            "speed" : 2.81,
                            "deg" : 307.004
                        },
                        "sys" : {
                            "pod" : "n"
                        },
                        "dt_txt" : "2018-08-11 21:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1534032000,
                        "main" : {
                            "temp" : 286.43,
                            "temp_min" : 286.43,
                            "temp_max" : 286.43,
                            "pressure" : 1004.53,
                            "sea_level" : 1035.32,
                            "grnd_level" : 1004.53,
                            "humidity" : 62,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : finalId0,
                            "main" : finalMain,
                            "description" : finalDescription,
                            "icon" : "02n"
                        } ],
                        "clouds" : {
                            "all" : 8
                        },
                        "wind" : {
                            "speed" : 0.92,
                            "deg" : 133.501
                        },
                        "sys" : {
                            "pod" : "n"
                        },
                        "dt_txt" : "2018-08-12 00:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1534042800,
                        "main" : {
                            "temp" : 283.212,
                            "temp_min" : 283.212,
                            "temp_max" : 283.212,
                            "pressure" : 1003.47,
                            "sea_level" : 1035.46,
                            "grnd_level" : 1003.47,
                            "humidity" : 84,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : finalId0,
                            "main" : finalMain,
                            "description" : finalDescription,
                            "icon" : "01n"
                        } ],
                        "clouds" : {
                            "all" : finalAll
                        },
                        "wind" : {
                            "speed" : 0.46,
                            "deg" : 8.00079
                        },
                        "sys" : {
                            "pod" : "n"
                        },
                        "dt_txt" : "2018-08-12 03:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1534053600,
                        "main" : {
                            "temp" : 288.657,
                            "temp_min" : 288.657,
                            "temp_max" : 288.657,
                            "pressure" : 1003.36,
                            "sea_level" : 1034.95,
                            "grnd_level" : 1003.36,
                            "humidity" : 64,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : finalId0,
                            "main" : finalMain,
                            "description" : finalDescription,
                            "icon" : "02d"
                        } ],
                        "clouds" : {
                            "all" : 8
                        },
                        "wind" : {
                            "speed" : 1.94,
                            "deg" : 196.001
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-12 06:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1534064400,
                        "main" : {
                            "temp" : 294.485,
                            "temp_min" : 294.485,
                            "temp_max" : 294.485,
                            "pressure" : 1003.37,
                            "sea_level" : 1033.69,
                            "grnd_level" : 1003.37,
                            "humidity" : 48,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : finalId0,
                            "main" : finalMain,
                            "description" : finalDescription,
                            "icon" : "02d"
                        } ],
                        "clouds" : {
                            "all" : 8
                        },
                        "wind" : {
                            "speed" : 2.45,
                            "deg" : 178.503
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-12 09:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1534075200,
                        "main" : {
                            "temp" : 297.82,
                            "temp_min" : 297.82,
                            "temp_max" : 297.82,
                            "pressure" : 1001.41,
                            "sea_level" : 1031.54,
                            "grnd_level" : 1001.41,
                            "humidity" : 39,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : finalId0,
                            "main" : finalMain,
                            "description" : finalDescription,
                            "icon" : finalIcon
                        } ],
                        "clouds" : {
                            "all" : finalAll
                        },
                        "wind" : {
                            "speed" : 2.61,
                            "deg" : 211.509
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-12 12:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1534086000,
                        "main" : {
                            "temp" : 299.584,
                            "temp_min" : 299.584,
                            "temp_max" : 299.584,
                            "pressure" : 999.4,
                            "sea_level" : 1029.38,
                            "grnd_level" : 999.4,
                            "humidity" : 34,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : finalId0,
                            "main" : finalMain,
                            "description" : finalDescription,
                            "icon" : finalIcon
                        } ],
                        "clouds" : {
                            "all" : finalAll
                        },
                        "wind" : {
                            "speed" : 2.18,
                            "deg" : 208.501
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-12 15:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1534096800,
                        "main" : {
                            "temp" : 296.797,
                            "temp_min" : 296.797,
                            "temp_max" : 296.797,
                            "pressure" : 997.9,
                            "sea_level" : 1027.99,
                            "grnd_level" : 997.9,
                            "humidity" : 42,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : finalId0,
                            "main" : finalMain,
                            "description" : finalDescription,
                            "icon" : finalIcon
                        } ],
                        "clouds" : {
                            "all" : finalAll
                        },
                        "wind" : {
                            "speed" : 1.46,
                            "deg" : 172.505
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-12 18:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1534107600,
                        "main" : {
                            "temp" : 289.825,
                            "temp_min" : 289.825,
                            "temp_max" : 289.825,
                            "pressure" : 997.38,
                            "sea_level" : 1027.59,
                            "grnd_level" : 997.38,
                            "humidity" : 66,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : finalId0,
                            "main" : finalMain,
                            "description" : finalDescription,
                            "icon" : "01n"
                        } ],
                        "clouds" : {
                            "all" : finalAll
                        },
                        "wind" : {
                            "speed" : 1.47,
                            "deg" : 125.501
                        },
                        "sys" : {
                            "pod" : "n"
                        },
                        "dt_txt" : "2018-08-12 21:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1534118400,
                        "main" : {
                            "temp" : 287.407,
                            "temp_min" : 287.407,
                            "temp_max" : 287.407,
                            "pressure" : 996.69,
                            "sea_level" : 1026.95,
                            "grnd_level" : 996.69,
                            "humidity" : 70,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : finalId0,
                            "main" : finalMain,
                            "description" : finalDescription,
                            "icon" : "02n"
                        } ],
                        "clouds" : {
                            "all" : 8
                        },
                        "wind" : {
                            "speed" : 1.51,
                            "deg" : 107.502
                        },
                        "sys" : {
                            "pod" : "n"
                        },
                        "dt_txt" : "2018-08-13 00:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1534129200,
                        "main" : {
                            "temp" : 285.223,
                            "temp_min" : 285.223,
                            "temp_max" : 285.223,
                            "pressure" : 996.11,
                            "sea_level" : 1026.49,
                            "grnd_level" : 996.11,
                            "humidity" : 83,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : finalId0,
                            "main" : finalMain,
                            "description" : finalDescription,
                            "icon" : "01n"
                        } ],
                        "clouds" : {
                            "all" : finalAll
                        },
                        "wind" : {
                            "speed" : 1.22,
                            "deg" : 92.0025
                        },
                        "sys" : {
                            "pod" : "n"
                        },
                        "dt_txt" : "2018-08-13 03:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1534140000,
                        "main" : {
                            "temp" : 292.448,
                            "temp_min" : 292.448,
                            "temp_max" : 292.448,
                            "pressure" : 996.1,
                            "sea_level" : 1026.17,
                            "grnd_level" : 996.1,
                            "humidity" : 70,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : finalId0,
                            "main" : finalMain,
                            "description" : finalDescription,
                            "icon" : finalIcon
                        } ],
                        "clouds" : {
                            "all" : finalAll
                        },
                        "wind" : {
                            "speed" : 2.34,
                            "deg" : 115.5
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-13 06:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1534150800,
                        "main" : {
                            "temp" : 299.253,
                            "temp_min" : 299.253,
                            "temp_max" : 299.253,
                            "pressure" : 997.93,
                            "sea_level" : 1025.37,
                            "grnd_level" : 997.93,
                            "humidity" : 48,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : 801,
                            "main" : "Clouds",
                            "description" : "few clouds",
                            "icon" : "02d"
                        } ],
                        "clouds" : {
                            "all" : 12
                        },
                        "wind" : {
                            "speed" : 2.11,
                            "deg" : 131.503
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-13 09:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1534161600,
                        "main" : {
                            "temp" : 303.501,
                            "temp_min" : 303.501,
                            "temp_max" : 303.501,
                            "pressure" : 993.65,
                            "sea_level" : 1023.41,
                            "grnd_level" : 993.65,
                            "humidity" : 36,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : 801,
                            "main" : "Clouds",
                            "description" : "few clouds",
                            "icon" : "02d"
                        } ],
                        "clouds" : {
                            "all" : 24
                        },
                        "wind" : {
                            "speed" : 2.97,
                            "deg" : 191.503
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-13 12:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1534172400,
                        "main" : {
                            "temp" : 304.625,
                            "temp_min" : 304.625,
                            "temp_max" : 304.625,
                            "pressure" : 994.66,
                            "sea_level" : 1024.36,
                            "grnd_level" : 994.66,
                            "humidity" : 29,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : finalId0,
                            "main" : finalMain,
                            "description" : finalDescription,
                            "icon" : "02d"
                        } ],
                        "clouds" : {
                            "all" : 8
                        },
                        "wind" : {
                            "speed" : 2.87,
                            "deg" : 218.505
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-13 15:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1534183200,
                        "main" : {
                            "temp" : 300.832,
                            "temp_min" : 300.832,
                            "temp_max" : 300.832,
                            "pressure" : 990.09,
                            "sea_level" : 1019.88,
                            "grnd_level" : 990.09,
                            "humidity" : 37,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : finalId0,
                            "main" : finalMain,
                            "description" : finalDescription,
                            "icon" : "02d"
                        } ],
                        "clouds" : {
                            "all" : 8
                        },
                        "wind" : {
                            "speed" : 1.8,
                            "deg" : 171.005
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-13 18:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1534194000,
                        "main" : {
                            "temp" : 293.102,
                            "temp_min" : 293.102,
                            "temp_max" : 293.102,
                            "pressure" : 989.93,
                            "sea_level" : 1020.22,
                            "grnd_level" : 989.93,
                            "humidity" : 65,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : 803,
                            "main" : "Clouds",
                            "description" : "broken clouds",
                            "icon" : "04n"
                        } ],
                        "clouds" : {
                            "all" : 76
                        },
                        "wind" : {
                            "speed" : 0.94,
                            "deg" : 256.001
                        },
                        "sys" : {
                            "pod" : "n"
                        },
                        "dt_txt" : "2018-08-13 21:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1534204800,
                        "main" : {
                            "temp" : 290.922,
                            "temp_min" : 290.922,
                            "temp_max" : 290.922,
                            "pressure" : 990.49,
                            "sea_level" : 1020.53,
                            "grnd_level" : 990.49,
                            "humidity" : 82,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : 803,
                            "main" : "Clouds",
                            "description" : "broken clouds",
                            "icon" : "04n"
                        } ],
                        "clouds" : {
                            "all" : 64
                        },
                        "wind" : {
                            "speed" : 2.63,
                            "deg" : 79.0016
                        },
                        "sys" : {
                            "pod" : "n"
                        },
                        "dt_txt" : "2018-08-14 00:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1534215600,
                        "main" : {
                            "temp" : 290.153,
                            "temp_min" : 290.153,
                            "temp_max" : 290.153,
                            "pressure" : 990.49,
                            "sea_level" : 1021.51,
                            "grnd_level" : 990.49,
                            "humidity" : 86,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : 803,
                            "main" : "Clouds",
                            "description" : "broken clouds",
                            "icon" : "04n"
                        } ],
                        "clouds" : {
                            "all" : 64
                        },
                        "wind" : {
                            "speed" : 2.63,
                            "deg" : 293.504
                        },
                        "sys" : {
                            "pod" : "n"
                        },
                        "dt_txt" : "2018-08-14 03:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1534226400,
                        "main" : {
                            "temp" : 289.992,
                            "temp_min" : 289.992,
                            "temp_max" : 289.992,
                            "pressure" : 993.13,
                            "sea_level" : 1023.04,
                            "grnd_level" : 993.13,
                            "humidity" : 93,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : 804,
                            "main" : "Clouds",
                            "description" : "overcast clouds",
                            "icon" : "04d"
                        } ],
                        "clouds" : {
                            "all" : 100
                        },
                        "wind" : {
                            "speed" : 3.66,
                            "deg" : 279.5
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-14 06:00:00",
                        "rain" : { }
                    }, {
                        "dt" : 1534237200,
                        "main" : {
                            "temp" : 293.232,
                            "temp_min" : 293.232,
                            "temp_max" : 293.232,
                            "pressure" : 993.67,
                            "sea_level" : 1023.79,
                            "grnd_level" : 993.67,
                            "humidity" : 83,
                            "temp_kf" : finalAll
                        },
                        "weather" : [ {
                            "id" : 802,
                            "main" : "Clouds",
                            "description" : "scattered clouds",
                            "icon" : "03d"
                        } ],
                        "clouds" : {
                            "all" : 36
                        },
                        "wind" : {
                            "speed" : 3.31,
                            "deg" : 237.502
                        },
                        "sys" : {
                            "pod" : "d"
                        },
                        "dt_txt" : "2018-08-14 09:00:00",
                        "rain" : { }
                    } ],
                    "city" : {
                        "id" : finalId,
                        "name" : finalName,
                        "coord" : {
                            "lat" : 50.1679,
                            "lon" : 14.4515
                        },
                        "country" : finalCountry,
                        "population" : 1314
                    }
                }
                , sv.JSON)
            .withHeaders(httpHeaders5)
            .withStatusCode(200)
            .withDelay(73);
    }

}
