import {tryValue} from '@/util/assertions';

export const SERVER_ORIGIN = tryValue(process.env.NEXT_PUBLIC_SERVER_ORIGIN);
export const CLIENT_ORIGIN = tryValue(process.env.NEXT_PUBLIC_CLIENT_ORIGIN);
