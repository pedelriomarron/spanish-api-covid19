
import { NowResponse, NowRequest } from "@now/node";
import { getAllTotalValue } from "../../../utils/api";
import { endpoints } from "../../../utils/endpoints";



export default async (req: NowRequest, response: NowResponse) => {
    const code = req.query.region as string

    const [uci] = await Promise.all([
        getAllTotalValue(endpoints.uci, code)
    ]);

    response.json({
        uci,
    });
};
