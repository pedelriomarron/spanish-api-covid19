
import { NowResponse, NowRequest } from "@now/node";
import { getAllTotalValue } from "../../../utils/api";
import { endpoints } from "../../../utils/endpoints";



export default async (req: NowRequest, response: NowResponse) => {
    const code = req.query.region as string

    const [confirmed] = await Promise.all([
        getAllTotalValue(endpoints.confirmed, code)
    ]);

    response.json({
        confirmed,
    });
};
