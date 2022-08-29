import {PartsConfigTypes} from "../../types/PartsConfigType";
import sharp from "sharp";
import {svgCreate} from "../SVGGenerator";
import {getCharacterByAvatarId} from "../../util/CharactersJsonUtil";
import {artifactBackgroundConfig} from "../../util/ColorBackgroundConfig";

const artifactParts: PartsConfigTypes = {
    partsName: "artifact",
    imageName:  (avatarInfo, uid) => {
        const baseImageName: string = "artifact_background_Element";
        const element: string = getCharacterByAvatarId(String(avatarInfo.avatarId)).Element;

        return baseImageName.replace("Element", element);
    },
    position: undefined,
    partsCreate: async (avatarInfo, uid) => {
        const element: string = getCharacterByAvatarId(String(avatarInfo.avatarId)).Element;

        return sharp(await svgCreate({
            width: 350,
            height: 430,
            viewBox: [0, 0, 350, 430],
            subOptions: {
                name: "rect",
                option: {
                    x: 0,
                    y: 0,
                    width: 350,
                    height: 430,
                    rx: 20,
                    ry: 20,
                    fill: artifactBackgroundConfig[element],
                    fillOpacity: 1
                }
            }
        })).png().toBuffer()
    },
    parts: []
};

export const artifactBracer: PartsConfigTypes = {
    partsName: "artifactBracer",
    imageName: artifactParts.imageName,
    position: {
        top: 720,
        left: 50
    },
    partsCreate: artifactParts.partsCreate,
    parts: artifactParts.parts
};

export const artifactNecklace: PartsConfigTypes = {
    partsName: "artifactNecklace",
    imageName: artifactParts.imageName,
    position: {
        top: 720,
        left: 417
    },
    partsCreate: artifactParts.partsCreate,
    parts: artifactParts.parts
};

export const artifactShoes: PartsConfigTypes = {
    partsName: "artifactShoes",
    imageName: artifactParts.imageName,
    position: {
        top: 720,
        left: 785
    },
    partsCreate: artifactParts.partsCreate,
    parts: artifactParts.parts
};

export const artifactRing: PartsConfigTypes = {
    partsName: "artifactRing",
    imageName: artifactParts.imageName,
    position: {
        top: 720,
        left: 1152
    },
    partsCreate: artifactParts.partsCreate,
    parts: artifactParts.parts
};

export const artifactDress: PartsConfigTypes = {
    partsName: "artifactDress",
    imageName: artifactParts.imageName,
    position: {
        top: 720,
        left: 1520
    },
    partsCreate: artifactParts.partsCreate,
    parts: artifactParts.parts
};
