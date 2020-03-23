
import { NowResponse, NowRequest } from "@now/node";
import { getAllTotalValue } from "../../../utils/api";
import { endpoints } from "../../../utils/endpoints";



export default async (req: NowRequest, response: NowResponse) => {
    const code = req.query.region as string

    const [hospitalized] = await Promise.all([
        getAllTotalValue(endpoints.hospitalized, code)
    ]);

    response.json({
        hospitalized,
    });
};
