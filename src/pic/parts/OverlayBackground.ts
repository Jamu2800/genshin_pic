import {PartsConfigTypes} from "../../types/PartsConfigType";
import fetch from "node-fetch";
import sharp from "sharp";

export const overlayBackground: PartsConfigTypes = {
    imageName: "overlay_background",
    position: {
        top: 0,
        left: 0
    },
    partsCreate: async (avatarInfo, uid) => {
        const picUrl = "https://enka.network/img/overlay.jpg";
        const res = await fetch(picUrl);
        return sharp(Buffer.from(await res.arrayBuffer()))
            .resize(1920, 1200)
            .toBuffer();
    }
};