import { ISupplier } from "./ISupplier";

export class supplier implements ISupplier {
    constructor(public firstName: string, public lastName: string, public gender: string, public age: number) { }
}