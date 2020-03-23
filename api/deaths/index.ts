
import { NowResponse } from "@now/node";
import { getAllTotalValue } from "../../utils/api";
import { endpoints } from "../../utils/endpoints";




export default async (_, response: NowResponse) => {

    const [deaths] = await Promise.all([
        getAllTotalValue(endpoints.deaths)
    ]);

    response.json({
        deaths,
    });
};
