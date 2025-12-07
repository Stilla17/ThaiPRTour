import img1 from './../../assets/SettingsIcons.png';
import img2 from './../../assets/SettingsIcons (1).png';
import img3 from './../../assets/SettingsIcons (4).png';
import img4 from './../../assets/Car.png';
import img5 from './../../assets/SettingsIcons (2).png';
import img6 from './../../assets/SettingsIcons (3).png';

export const main = [
    {
        title: 'Животные',
        img: img6,
        allLiks: [
            {
                links: [
                    'Купить животное',
                    'Продать животное',
                    'Сдать животное в аренду',
                    'Услуги для животных',
                    'Пропавшие животные'
                ],
            },
            {
                link: [
                    'animal/buy',
                    'animal/sell',
                    'animal/rent',
                    'animal/services',
                    'animal/lost'
                ]
            }
        ]
    },
    {
        title: 'Домашние животные',
        img: img6,
        allLiks: [
            {
                links: [
                    'Купить питомца',
                    'Продать питомца',
                    'Аренда питомцев',
                    'Услуги груминга',
                    'Пропавшие питомцы'
                ],
            },
            {
                link: [
                    'estate',
                    'estate',
                    'estate',
                    'estate',
                    'estate'
                ]
            }
        ]
    },
    {
        title: 'Питомцы и уход',
        img: img6,
        allLiks: [
            {
                links: [
                    'Купить питомца',
                    'Продажа питомцев',
                    'Аренда животных',
                    'Ветеринарные услуги',
                    'Поиск пропавших животных'
                ],
            },
            {
                link: [
                    'animal/buy',
                    'animal/sell',
                    'animal/rent',
                    'animal/services',
                    'animal/lost'
                ]
            }
        ]
    },
    {
        title: 'Животные — маркет',
        img: img6,
        allLiks: [
            {
                links: [
                    'Покупка',
                    'Продажа',
                    'Аренда',
                    'Услуги',
                    'Пропавшие'
                ],
            },
            {
                link: [
                    'animal/buy',
                    'animal/sell',
                    'animal/rent',
                    'animal/services',
                    'animal/lost'
                ]
            }
        ]
    }
];
