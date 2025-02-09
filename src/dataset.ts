export const dataset = [
    {
        researchInitiator: 59,
        user: 57,
        typeOfResearch: 86,
        thematic: 21,
        month: 'Jan',
    },
    {
        researchInitiator: 50,
        user: 52,
        typeOfResearch: 78,
        thematic: 28,
        month: 'Feb',
    },
    {
        researchInitiator: 47,
        user: 53,
        typeOfResearch: 106,
        thematic: 41,
        month: 'Mar',
    },
    {
        researchInitiator: 54,
        user: 56,
        typeOfResearch: 92,
        thematic: 73,
        month: 'Apr',
    },
    {
        researchInitiator: 57,
        user: 69,
        typeOfResearch: 92,
        thematic: 99,
        month: 'May',
    },
    {
        researchInitiator: 60,
        user: 63,
        typeOfResearch: 103,
        thematic: 144,
        month: 'June',
    },
    {
        researchInitiator: 59,
        user: 60,
        typeOfResearch: 105,
        thematic: 319,
        month: 'July',
    },
    {
        researchInitiator: 65,
        user: 60,
        typeOfResearch: 106,
        thematic: 249,
        month: 'Aug',
    },
    {
        researchInitiator: 51,
        user: 51,
        typeOfResearch: 95,
        thematic: 131,
        month: 'Sept',
    },
    {
        researchInitiator: 60,
        user: 65,
        typeOfResearch: 97,
        thematic: 55,
        month: 'Oct',
    },
    {
        researchInitiator: 67,
        user: 64,
        typeOfResearch: 76,
        thematic: 48,
        month: 'Nov',
    },
    {
        researchInitiator: 61,
        user: 70,
        typeOfResearch: 103,
        thematic: 25,
        month: 'Dec',
    },
];

export function valueFormatter(value: number | null) {
    return `${value}mm`;
}


// // Для круговой диаграммы
// const paramsForPieChart = {
//     period: {
//         startAt: new Date('01.01.2025'),
//         endAt: new Date('31.12.2025')
//     },
//     filter: '', // выбор из ['researchInitiator', 'user', 'typeOfResearch', 'thematic']
// };

// const responseForPieChart = {
//     percent: 0, // процентное соотношение (формула в ТЗ)
//     label: '', // name из справочника, указанного в filter (пример из ТЗ: 'Организация А', 'Организация B', 'Психологическое', 'Лингвистическое')
// };

// // Для столбчатой диаграммы
// const paramsForBarChart = {
//     period: {
//         startAt: new Date('01.01.2025'),
//         endAt: new Date('31.12.2025')
//     },
//     filter: '', // выбор из ['researchInitiator', 'user', 'typeOfResearch', 'thematic']
// };

// const responseForBarChart = {
//     expertise: 0, // число выполненных экспертиз
//     label: '', // name из справочника, указанного в filter (пример из ТЗ: 'Организация А', 'Организация B', 'Психологическое', 'Лингвистическое')
// };

// // Для линейного графика с разбивкой по месяцам, кварталам, полугодиям, годам
// const paramsForLineChart = {
//     period: {
//         startAt: new Date('01.01.2025'),
//         endAt: new Date('31.12.2025')
//     },
//     keyFilter: '', // выбор из ['months', 'quarters', 'halfYears', 'years']
//     filter: '', // выбор из ['researchInitiator', 'user', 'typeOfResearch', 'thematic']
// };

// const responseForLineChart = {
//     label: '', // январь, февраль и т.д. | 1 квартал, 2 квартал и т.д. | 1 полугодие, 2 полугодие | 2023, 2024
//     expertise: 0 // число выполненных экспертиз 
// }

