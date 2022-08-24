import {avatarImgName} from "./json/avatarImgName.json";
import fetch from "node-fetch";
import sharp from "sharp";

sharp("D:\\program\\genshin_pic\\out\\png\\character\\UI_Gacha_AvatarImg_PlayerBoy.png")
    .resize(1920, 1200, {fit: "contain"})
    .toFile("D:\\program\\genshin_pic\\out\\png\\character\\UI_Gacha_AvatarImg_PlayerBoy1.png")

/*
import {PartsCreator} from "./pic/PartsCreator";
import {main} from "./pic/parts/Main";
import sharp from "sharp";
import test from "./json/test.json";



// @ts-ignore
new PartsCreator(test.avatarInfoList[0], "")
    .create(main)
    .then(buf => sharp(buf).png().toFile("./out/png/test.png"))
 */
