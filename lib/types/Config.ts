export interface SharedIOConfig {
    /**
     * The host of the SharedIO server
     *
     * @default "localhost"
     */
    host?:string,

    /**
     * The port of the SharedIO server
     *
     * @default 3000
     */
    port?:number,

    /**
     * Whether or not the SharedIO server uses secure connection (WSS protocol)
     *
     * @default false
     */
    secure?:boolean,

    /**
     * The path in the host for connecting with the SharedIO server
     *
     * @default "/"
     */
    path?:string,

    /**
     * The name that will be used for this client when writing user tokens into local storage.
     *
     * @default ""
     */
    name?:string
}