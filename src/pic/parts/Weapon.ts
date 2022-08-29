import {PartsConfigTypes} from "../../types/PartsConfigType";
import {svgCreate} from "../SVGGenerator";
import sharp from "sharp";

export const weapon: PartsConfigTypes = {
    partsName: "weaponBackground",
    imageName: "weapon_background",
    position: {
        top: 185,
        left: 830
    },
    partsCreate:async (avatarInfo, uid) => {
        return sharp(await svgCreate({
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
        })).png().toBuffer()
    }
};