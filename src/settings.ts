import {tryValue} from '@/util/assertions';


export const SERVER_ORIGIN = tryValue(process.env.SERVER_ORIGIN);
export const CLIENT_ORIGIN = tryValue(process.env.CLIENT_ORIGIN);
