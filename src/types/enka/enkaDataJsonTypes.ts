export type AvatarInfo = {
    avatarId: number;
    propMap: {
        [key: string]: PropMap
    };
    talentIdList: number[];
    fightPropMap: {
        [key: string]: number
    };
    skillDepotId: number;
    inherentProudSkillList: number[];
    skillLevelMao: {
        [key: string]: number
    };
    equipList: Equip[]
};

export type PropMap = {
    type: number;
    ival?: string;
    val?: string
}

export type Equip = {
    itemId: number;
    weapon?: Weapon;
    reliquary?: Reliquary;
    flat: Flat
}

export type Weapon = {
    level: number;
    promoteLevel: number;
    affixMap: {
        [key: string]: number
    }
};

export type Reliquary = {
    level: number,
    mainPropId: number,
    appendPropIdList: number[]
}

export type Flat = {
    nameTextMapHash: string;
    setNameTextMapHash?: string;
    rankLevel: number;
    reliquaryMainstat?: EquipStat;
    reliquarySubstats?: EquipStat[];
    weaponStats?: EquipStat;
    itemType: string;
    icon: string;
    equipType: EquipType;
}

export type EquipStat = {
    mainPropId: string,
    propValue: number
}

export type EquipType = "EQUIP_BRACER"	| "EQUIP_NECKLACE" | "EQUIP_SHOES" | "EQUIP_RING" | "EQUIP_DRESS";
