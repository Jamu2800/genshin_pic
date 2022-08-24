export type CharactersJson = {
    [key: string]: CharactersJsonsAvatarInfo
}

export type CharactersJsonsAvatarInfo = {
    Element: string;
    Consts: string[];
    SkillOrder: number[];
    Skills: {
        [key: string]: string;
    };
    ProudMap: {
        [key: string]: number;
    };
    NameTextMapHash: number;
    SideIconName?: string;
    QualityType: string;
    Costumes?: any
}
