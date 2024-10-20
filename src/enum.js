const HouseType = {
    Flat:  {
        id: 1,
        value: {
            ru: 'Квартира',
            en: 'flat'
        }
    },
    Bungalow:  {
        id: 2,
        value: {
            ru: 'Бунгало',
            en: 'bungalow'
        }
    },
    Hotel:  {
        id: 3,
        value: {
            ru: 'Отель',
            en: 'hotel'
        }
    },
    House:  {
        id: 4,
        value: {
            ru: 'Дом',
            en: 'house'
        }
    },
    Palace:  {
        id: 5,
        value: {
            ru: 'Дворец',
            en: 'palace'
        }
    },
};

const Currency = {
    Ruble: '&#8381;',
    Dollar: '&dollar;',
    Pound: '&pound;',
    Yen: '&yen;'
};

export {
    HouseType,
    Currency
}
