import loc from "../json/loc.json";
import {LocJsonType, LocJsonValueType} from "../types/enka/LocJsonType";

const locJson: LocJsonType = loc;
const locJaJson: LocJsonValueType = locJson["ja"];

export {locJaJson, locJson}
