import { NumericType } from "./GolangTypes";

export type OrderDescription = {
    readonly id: number;
    readonly name: string;
    readonly fields: Record<string, OrderFieldDescription>;
};

export type OrderFieldDescription = {
    readonly name: string;
    readonly valueType: Value;
};

type Value = EnumValue | NumericValue | BooleanValue;

type EnumValue = {
    readonly kind: "enum";
    readonly value: string[];
};

export type NumericValue = {
    readonly kind: "numeric";
    readonly value: NumericType;
};

type BooleanValue = {
    readonly kind: "boolean";
};
