import {PartsConfigTypes} from "../../types/PartsConfigType";
import {getCharacterByAvatarId} from "../../util/CharactersJsonUtil";
import sharp from "sharp";
import {colorBackgroundConfig} from "../../util/ColorBackgroundConfig";

export const colorBackground: PartsConfigTypes = {
    imageName: (avatarInfo, uid) => {
        const baseImageName: string = "colorBackground_Element";
        const element: string = getCharacterByAvatarId(String(avatarInfo.avatarId)).Element;

        return baseImageName.replace("Element", element);
    },
    position: {
        top: 0,
        left: 0
    },
    blend: "add",
    partsCreate: (avatarInfo, uid) => {
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