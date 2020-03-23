import { endpoints } from './../utils/endpoints';
import { config } from './../utils/config';
import { NowResponse } from "@now/node";
import { getLastTotalValue } from '../utils/api'


export default async (_, response: NowResponse) => {
    const code = "00"

    const [confirmed, recovered, deaths, hospitalized, uci] = await Promise.all([
        getLastTotalValue(code, endpoints.confirmed, '/confirmed'),
        getLastTotalValue(code, endpoints.recovered, '/recovered'),
        getLastTotalValue(code, endpoints.deaths, '/deaths'),
        getLastTotalValue(code, endpoints.hospitalized, '/hospitalized'),
        getLastTotalValue(code, endpoints.uci, '/uci'),
    ]);

    response.json({
        confirmed,
        recovered,
        deaths,
        hospitalized,
        uci,
        regions: `${config.domain}/api/regions`,
        regionDetail: {
            "pattern": `${config.domain}/api/regions/[region]`,
            "example": `${config.domain}/api/regions/01`
        },
        source: "****",
    });
};
