import {PartsConfigTypes, Position} from "../../types/PartsConfigType";
import {svgCreate} from "../SVGGenerator";
import {AvatarInfo} from "../../types/enka/dataTypes";

export class weapon implements PartsConfigTypes {
    readonly partsName: string = "weaponBackground";
    readonly position: Position = {
        top: 185,
        left: 830
    }

    imageName(avatarInfo: AvatarInfo, uid: string): string {
        return "weapon_background"
    }

    async partsCreate(avatarInfo: AvatarInfo, uid: string): Promise<Buffer> {
        return Buffer.from(await svgCreate({
            width: 463,
            height: 223,
            viewBox: [0, 0, 463, 223],
            subOptions: {
                name: "rect",
                option: {
                    x: 0,
                    y: 0,
                    width: 463,
                    height: 223,
                    rx: 20,
                    ry: 20,
                    fill: "red",
                    fillOpacity: 1
                }
            }
        }));
    }
}