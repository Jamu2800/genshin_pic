import {AvatarInfo} from "./enka/dataTypes";
import {Blend} from "sharp";

export interface PartsConfigTypes {
    /**
     * そのパーツを表す名称
     */
    partsName: string;

    /**
     * 画像のファイル名、もしくはそれを生成する関数
     */
    imageName: string | ((avatarInfo: AvatarInfo, uid: string, name: string) => string);

    /**
     * その画像の位置を示す
     */
    position: Position;

    /**
     * 合成オプション
     */
    blend?: Blend;

    /**
     * 画像を生成することができる場合はその関数
     *
     * @param avatarInfo enkaNetworkのavatarInfo
     *
     * @param uid プレイヤーのUID
     */
    partsCreate?: (avatarInfo: AvatarInfo, uid: string, name: string) => Promise<Buffer>;

    /**
     * この画像の中に他のパーツが含まれるならそれの情報
     */
    parts?: PartsConfigTypes[];
}

export interface Position {
    top: number;
    left: number;
}
