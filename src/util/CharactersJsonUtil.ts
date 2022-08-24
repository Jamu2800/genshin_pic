import charactersJson from "../json/charactors.json";
import {CharDataJson} from "../types/enka/dataTypes";

const cJson: CharDataJson = charactersJson;

export const getCharacterByAvatarId = (avatarId: string) => {
    return cJson[avatarId];
}
