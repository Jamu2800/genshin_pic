import {VariableInfo} from "../types/PartsConfigType";

export class JsonValueGetter{
    private readonly jsonInfo: VariableInfo;

    constructor(jsonInfo: VariableInfo) {
        this.jsonInfo = jsonInfo;
    }

    async getValue(): Promise<any>{
    }
}