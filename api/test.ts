import { endpoints } from './../utils/endpoints';
import { config } from './../utils/config';
import { NowResponse } from "@now/node";
import { getLastTotalValue } from '../utils/api'


export default async (_, response: NowResponse) => {
    const code = "00"

    const [confirmed] = await Promise.all([
        getLastTotalValue(code, endpoints.confirmed, '/confirmed'),

    ]);

    response.json({
        confirmed,
    });
};
