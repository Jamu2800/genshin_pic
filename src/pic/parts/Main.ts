import {PartsConfigTypes, Position} from "../../types/PartsConfigType";
import sharp from "sharp";
import {overlayBackground} from "./OverlayBackground";
import {character} from "./Charactor";
import {colorBackground} from "./ColorBackground";
import {nameLv} from "./NameLv";
import {ArtifactBracer, ArtifactDress, ArtifactNecklace, ArtifactRing, ArtifactShoes} from "./Artifact";
import {uid} from "./Uid";
import {totalScore} from "./TotalScore";
import {setBonus} from "./SetBonus";
import {talent} from "./Talent";
import {skill} from "./Skill";
import {weapon} from "./Weapon";
import {footer} from "./Footer";
import {AvatarInfo} from "../../types/enka/dataTypes";

export class main implements PartsConfigTypes {
    readonly partsName: string = "main";
    readonly position: Position = {
        top: 0,
        left: 0
    };

    imageName(avatarInfo: AvatarInfo, uid: string): string{
        return "main_background";
    }

    async partsCreate(avatarInfo: AvatarInfo, uid: string) {
        return sharp({
            create: {
                width: 1920,
                height: 1200,
                channels: 4,
                background: {r: 255, g: 255, b: 255, alpha: 1}
            }
        }).png().toBuffer();
    }

    readonly parts = [
        new overlayBackground(),
        new colorBackground(),
        //character,
        new footer(),
        new weapon(),
        //skill,
        //talent,
        //setBonus,
        //totalScore,
        //uid,
        //new nameLv(),
        new ArtifactNecklace(),
        new ArtifactBracer(),
        new ArtifactDress(),
        new ArtifactShoes(),
        new ArtifactRing()
    ]
}