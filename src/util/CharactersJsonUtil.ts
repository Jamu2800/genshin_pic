import charactersJson from "../json/charactors.json"
import {CharactersJson} from "../types/enka/CharactersJsonTypes";

const cJson: CharactersJson = charactersJson;

export const getCharacterByAvatarId = (avatarId: string) => {
    return cJson[avatarId];
}
