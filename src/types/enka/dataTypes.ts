export interface Costume {
    sideIconName: string
    icon: string
    art: string
    avatarId: number
}

export interface CharData {
    Element: string
    Consts: string[]
    SkillOrder: number[]
    Skills: { [key in string]: string }
    ProudMap: { [key in string]: number }
    NameTextMapHash: number
    SideIconName: string
    QualityType: string
    Costumes?: { [key in string]: Costume }
}

export interface CharDataJson {
    [key: string]: CharData
}

export interface ShowAvatarInfo {
    avatarId: number
    level: number
    costumeId?: number
}

export interface PlayerInfo {
    nickname: string
    level: number
    signature?: string
    worldLevel?: number
    nameCardId: number
    finishAchievementNum?: number
    towerFloorIndex?: number
    towerLevelIndex?: number
    showAvatarInfoList?: ShowAvatarInfo[]
    showNameCardIdList?: number[]
    profilePicture: {
        avatarId: number
        costumeId?: number
    }
}

export interface Prop {
    type: number
    ival: string
    val?: string
}

export interface Reliquary {
    level: number
    mainPropId: number
    appendPropIdList: number[]
}

export interface Falt {
    nameTextMapHash: string
    setNameTextMapHash?: string
    rankLevel: number
    reliquaryMainstat?: {
        mainPropId: string
        statValue: number
    }
    reliquarySubstats?: [
        {
            appendPropId: string
            statValue: number
        }
    ]
    weaponStats?: [
        {
            appendPropId: string
            statValue: number
        }
    ]
    itemType: string
    icon: string
    equipType?: string
}

export interface Equip {
    itemId: number
    reliquary?: Reliquary
    weapon?: {
        level: number
        affixMap: { [key in string]?: number }
    }
    flat: Falt[]
}

export interface AvatarInfo {
    avatarId: number
    costumeId?: number
    propMap: { [key in string]: Prop }
    talentIdList?: number[]
    fightPropMap: { [key in string]: number }
    skillDepotId: number
    inherentProudSkillList: number[]
    skillLevelMap: { [key in string]: number }
    proudSkillExtraLevelMap?: { [key in string]: number }
    equipList: Equip[]
    fetterInfo: {
        expLevel: number
    }
}
