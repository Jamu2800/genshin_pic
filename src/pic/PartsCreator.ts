import {PartsConfigTypes} from "../types/PartsConfigType";
import * as fs from "fs";
import {AvatarInfo} from "../types/enka/enkaDataJsonTypes";
import sharp, {OverlayOptions} from "sharp";

export class PartsCreator {
    private readonly imageBasePath = "./out/pic/img/";
    private readonly imageFileType = ".png";
    private readonly avatarInfo;
    private readonly uid: string;

    constructor(avatarInfo: AvatarInfo, uid: string) {
        this.uid = uid;
        this.avatarInfo = avatarInfo;
    }

    async create(parts: PartsConfigTypes): Promise<Buffer> {
        //パスの取得
        const imagePath: string = this.imagePathCreator(parts.imageName);

        //合成するべき画像があれば取得して合成
        if (parts.parts != null) {
            const partsComposites = await Promise.all(parts.parts.map(p => this.getComposite(p)));
            //画像の出力
            if(fs.existsSync(imagePath)) {
                return sharp(imagePath)
                    .composite(partsComposites)
                    .toBuffer();
            }
            else if (parts.partsCreate != null) {
                const b = await parts.partsCreate(this.avatarInfo, this.uid);
/*
                await sharp(Buffer.from(b))
                    .png()
                    .toFile(imagePath)
*/
                return sharp(Buffer.from(b))
                    .composite(partsComposites)
                    .toBuffer();
            }
            else throw imagePath + "に画像がありません";
        }
        else {
            //画像の出力
            if(fs.existsSync(imagePath)) {
                return sharp(imagePath)
                    .toBuffer();
            }
            else if (parts.partsCreate != null) {
                const b = await parts.partsCreate(this.avatarInfo, this.uid);
/*
                await sharp(Buffer.from(b))
                    .png()
                    .toFile(imagePath)
*/
                return b;
            }
            else throw imagePath + "に画像がありません";
        }
    }

    async getComposite(parts: PartsConfigTypes): Promise<OverlayOptions> {
        return {
            input: await this.create(parts),
            blend: parts.blend != null ? parts.blend : "over",
            top: parts.position.top,
            left: parts.position.left
        }
    }

    private imagePathCreator(imageName: string | ((avatarInfo: AvatarInfo, uid: string) => string)): string {
        if (imageName == null) throw "imageNameがnullだよ！";
        else if(typeof imageName === "string") return this.imageBasePath + imageName + this.imageFileType;
        else return this.imageBasePath + imageName(this.avatarInfo, this.uid) + this.imageFileType;
    }
}


