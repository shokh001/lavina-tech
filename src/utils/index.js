import md5 from "md5"
import { getItem } from "../helpers/persistance-storage";

const calculateHeaders = (method, path, body) => {
    const user = JSON.parse(getItem('user'))

    if (!!user) {
        const { secret, key } = user;
        const signStr = `${method}${path}${body}${secret}`;
        return {
            Key: (key).toString(),
            Sign: md5(signStr).toString()
        };
    }
};

export {
    calculateHeaders,
}