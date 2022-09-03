import {PartsConfigTypes, Position} from "../../types/PartsConfigType";
import {AvatarInfo} from "../../types/enka/dataTypes";

export class footer implements PartsConfigTypes {
    readonly partsName: string = "footer";
    readonly position: Position ={
        top: 0,
        left: 0
    }

    imageName(avatarInfo: AvatarInfo, uid: string): string {
        return "footer"
    }
}