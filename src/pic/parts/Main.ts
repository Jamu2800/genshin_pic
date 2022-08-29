import {PartsConfigTypes} from "../../types/PartsConfigType";
import sharp from "sharp";
import {overlayBackground} from "./OverlayBackground";
import {character} from "./Charactor";
import {colorBackground} from "./ColorBackground";
import {nameLv} from "./NameLv";
import {artifactBracer, artifactDress, artifactNecklace, artifactRing, artifactShoes} from "./Artifact";
import {uid} from "./Uid";
import {totalScore} from "./TotalScore";
import {setBonus} from "./SetBonus";
import {talent} from "./Talent";
import {skill} from "./Skill";
import {weapon} from "./Weapon";
import {footer} from "./Footer";

export const main: PartsConfigTypes = {
    partsName: "main",
    imageName: "main_background",
    position: {
        top: 0,
        left: 0
    },
    partsCreate: async (avatarInfo, uid, name) => {
        return sharp({
            create: {
                width: 1920,
                height: 1200,
                channels: 4,
                background: {r: 255, g: 255, b: 255, alpha: 1}
            }
        }).png().toBuffer();
    },
    parts: [
        overlayBackground,
        colorBackground,
        //character,
        footer,
        weapon,
        //skill,
        //talent,
        //setBonus,
        //totalScore,
        //uid,
        //nameLv,
        artifactBracer,
        artifactNecklace,
        artifactShoes,
        artifactRing,
        artifactDress,
    ]
}