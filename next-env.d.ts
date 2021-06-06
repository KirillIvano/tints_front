/// <reference types="next" />
/// <reference types="next/types/global" />
/// <reference types="@types/jest" />

declare module '*.png' {
    const value: string;
    export default value;
}
