import { regions } from './../../utils/regions';
import { NowResponse } from "@now/node";

export default (_, res: NowResponse) => {
    res.json({ regions });
};
