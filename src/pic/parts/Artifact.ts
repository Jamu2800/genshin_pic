import {PartsConfigTypes, Position} from "../../types/PartsConfigType";
import sharp from "sharp";
import {svgCreate} from "../SVGGenerator";
import {getCharacterByAvatarId} from "../../util/CharactersJsonUtil";
import {artifactBackgroundConfig} from "../../util/ColorBackgroundConfig";
import {AvatarInfo} from "../../types/enka/dataTypes";

abstract class ArtifactParts implements ArtifactParts {
    abstract readonly position: Position;
    abstract readonly partsName: string;

    public imageName(avatarInfo: AvatarInfo, uid: string): string {
        const baseImageName: string = "artifact_background_Element";
        const element: string = getCharacterByAvatarId(String(avatarInfo.avatarId)).Element;

        return baseImageName.replace("Element", element);
    }

    async partsCreate(avatarInfo: AvatarInfo, uid: string): Promise<Buffer> {
        const element: string = getCharacterByAvatarId(String(avatarInfo.avatarId)).Element;

        return Buffer.from(await svgCreate({
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
        }));
    }
}

export class ArtifactBracer extends ArtifactParts{
    readonly partsName = "artifactBracer"
    readonly position = {
        top: 720,
        left: 50
    }
}

export class ArtifactNecklace extends ArtifactParts {
    readonly partsName = "artifactNecklace";
    readonly position = {
        top: 720,
        left: 417
    };
}

export class ArtifactShoes extends ArtifactParts {
    readonly partsName = "artifactShoes"
    readonly position = {
        top: 720,
        left: 785
    }
}

export class ArtifactRing extends ArtifactParts {
    readonly partsName = "artifactRing"
    readonly position = {
        top: 720,
        left: 1152
    }
}

export class ArtifactDress extends ArtifactParts {
    readonly partsName = "artifactDress"
    readonly position = {
        top: 720,
        left: 1520
    }
}
