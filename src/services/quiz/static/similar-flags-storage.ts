type FlagSimilarity = Record<string, Array<string>>;

export const similarFlagsStorage: FlagSimilarity = {
    // Славянские страны (красно-сине-белые)
    'ru': ['rs', 'sk', 'si', 'hr', 'cz'],
    'rs': ['ru', 'sk', 'si', 'hr', 'cz'],
    'sk': ['ru', 'rs', 'si', 'cz', 'hr'],
    'si': ['ru', 'rs', 'sk', 'hr', 'cz'],
    'hr': ['ru', 'rs', 'sk', 'si', 'cz'],
    'cz': ['ru', 'rs', 'sk', 'si', 'hr'],

    // Арабские страны (красно-бело-черные)
    'eg': ['sy', 'ye', 'iq', 'sd'],
    'sy': ['eg', 'ye', 'iq', 'sd'],
    'ye': ['eg', 'sy', 'iq', 'sd'],
    'iq': ['eg', 'sy', 'ye', 'sd'],
    'sd': ['eg', 'sy', 'ye', 'iq'],

    // Западноафриканские страны (красно-желто-зеленые)
    'sn': ['ci', 'gn', 'ml', 'bf'],
    'ci': ['sn', 'gn', 'ml', 'bf'],
    'gn': ['sn', 'ci', 'ml', 'bf'],
    'ml': ['sn', 'ci', 'gn', 'bf'],
    'bf': ['sn', 'ci', 'gn', 'ml'],

    // Скандинавские кресты
    'dk': ['no', 'se', 'fi', 'is'],
    'no': ['dk', 'se', 'fi', 'is'],
    'se': ['dk', 'no', 'fi', 'is'],
    'fi': ['dk', 'no', 'se', 'is'],
    'is': ['dk', 'no', 'se', 'fi'],

    // Вертикальные триколоры
    'fr': ['it', 'ir', 'ie', 'bg'],
    'it': ['fr', 'ir', 'ie', 'bg'],
    'ir': ['fr', 'it', 'ie', 'bg'],
    'ie': ['fr', 'it', 'ir', 'bg'],
    'bg': ['fr', 'it', 'ir', 'ie'],

    // Горизонтальные триколоры
    'de': ['be', 'ru', 'nl', 'hu'],
    'be': ['de', 'ru', 'nl', 'hu'],
    'nl': ['de', 'be', 'ru', 'hu'],
    'hu': ['de', 'be', 'ru', 'nl'],

    // Панарабские цвета
    'ps': ['jo', 'kw', 'sa', 'ae'],
    'jo': ['ps', 'kw', 'sa', 'ae'],
    'kw': ['ps', 'jo', 'sa', 'ae'],
    'sa': ['ps', 'jo', 'kw', 'ae'],
    'ae': ['ps', 'jo', 'kw', 'sa'],

    // Бывшие советские республики
    'by': ['ru', 'ua', 'kz', 'uz'],
    'ua': ['ru', 'by', 'kz', 'uz'],
    'kz': ['ru', 'by', 'ua', 'uz'],
    'uz': ['ru', 'by', 'ua', 'kz'],

    // Одноцветные с символами
    'jp': ['bd', 'la', 'tw', 'mn'],
    'bd': ['jp', 'la', 'tw', 'mn'],
    'la': ['jp', 'bd', 'tw', 'mn'],
    'tw': ['jp', 'bd', 'la', 'mn'],
    'mn': ['jp', 'bd', 'la', 'tw'],
};
