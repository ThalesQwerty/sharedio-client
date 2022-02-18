export type KeyValue<
    ValueType = any,
    KeyType extends string | number | symbol =
        string,
> = {
    [property in KeyType]?: ValueType;
};
