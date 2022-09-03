import {PartsConfigTypes, Position} from "../../types/PartsConfigType";
import fetch from "node-fetch";
import sharp from "sharp";
import {AvatarInfo} from "../../types/enka/dataTypes";

export class overlayBackground implements PartsConfigTypes {
    readonly partsName: string = "overlay";
    readonly position: Position = {
        top: 0,
        left: 0
    };

    imageName(): string {
        return "overlay_background"
    }

    async partsCreate(avatarInfo: AvatarInfo, uid: string) {
        const picUrl = "https://enka.network/img/overlay.jpg";
        const res = await fetch(picUrl);
        return sharp(Buffer.from(await res.arrayBuffer()))
            .resize(1920, 1200)
            .toBuffer();
    }
}