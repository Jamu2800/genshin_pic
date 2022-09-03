import {PartsConfigTypes, Position} from "../../types/PartsConfigType";
import {AvatarInfo} from "../../types/enka/dataTypes";

export class nameLv implements PartsConfigTypes {
    readonly partsName: string = "nameLv";
    readonly position: Position = {
        top: 50,
        left: 50
    };

    imageName(avatarInfo: AvatarInfo, uid: string): string {
        return "nameLv_background";
    }
    
}