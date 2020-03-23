
import { NowResponse } from "@now/node";
import { getAllTotalValue } from "../../utils/api";
import { endpoints } from "../../utils/endpoints";




export default async (_, response: NowResponse) => {

    const [confirmed] = await Promise.all([
        getAllTotalValue(endpoints.confirmed)
    ]);

    response.json({
        confirmed,
    });
};
