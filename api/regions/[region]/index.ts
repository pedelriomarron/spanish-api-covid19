
import { NowResponse, NowRequest } from "@now/node";
import { getLastTotalValue } from "../../../utils/api";
import { endpoints } from "../../../utils/endpoints";



export default async (req: NowRequest, response: NowResponse) => {
    const code = req.query.region as string


    const [confirmed, recovered, deaths, hospitalized, uci] = await Promise.all([
        getLastTotalValue(code, endpoints.confirmed, `/regions/${code}/confirmed`),
        getLastTotalValue(code, endpoints.recovered, `/regions/${code}/recovered`),
        getLastTotalValue(code, endpoints.deaths, `/regions/${code}/deaths`),
        getLastTotalValue(code, endpoints.hospitalized, `/regions/${code}/hospitalized`),
        getLastTotalValue(code, endpoints.uci, `/regions/${code}/uci`),
    ]);

    response.json({
        confirmed,
        recovered,
        deaths,
        hospitalized,
        uci,
    });
};
