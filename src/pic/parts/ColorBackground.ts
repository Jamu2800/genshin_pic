import {PartsConfigTypes, Position} from "../../types/PartsConfigType";
import {getCharacterByAvatarId} from "../../util/CharactersJsonUtil";
import sharp, {Blend} from "sharp";
import {colorBackgroundConfig} from "../../util/ColorBackgroundConfig";
import {AvatarInfo} from "../../types/enka/dataTypes";

export class colorBackground implements PartsConfigTypes {
    readonly partsName: string = "colorBackground";
    readonly position: Position = {
        top: 0,
        left: 0
    };
    readonly blend: Blend = "add";

    imageName(avatarInfo: AvatarInfo, uid: string) {
        const baseImageName: string = "color_background_Element";
        const element: string = getCharacterByAvatarId(String(avatarInfo.avatarId)).Element;

        return baseImageName.replace("Element", element);
    }

    partsCreate(avatarInfo: AvatarInfo, uid: string) {
        const element: string = getCharacterByAvatarId(String(avatarInfo.avatarId)).Element;

        return sharp({
            create: {
                width: 1920,
                height: 1200,
                channels: 3,
                background: colorBackgroundConfig[element]
            }
        }).png().toBuffer();
    }
}