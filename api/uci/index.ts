
import { NowResponse } from "@now/node";
import { getAllTotalValue } from "../../utils/api";
import { endpoints } from "../../utils/endpoints";




export default async (_, response: NowResponse) => {

    const [uci] = await Promise.all([
        getAllTotalValue(endpoints.uci)
    ]);

    response.json({
        uci,
    });
};
