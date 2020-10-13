export const foodItems = [
{
    name: 'Bruschetta',
    img: '/img/osteriabruschetta.jpg',
    section: 'Antipasti/Insalata'
},
{
    name: 'Caprese',
    img: '/img/osteriacaprese.jpg',
    section: 'Antipasti/Insalata'
},
{
    name: 'Osteria Caesar',
    img: '/img/ostiacaesar.jpeg',
    section: 'Antipasti/Insalata'
},
{
    name: 'Insalata di Osteria',
    img: '/img/ostiasalad.jpeg',
    section: 'Antipasti/Insalata'
},
{
    name: 'Carbonara',
    img: '/img/ostiacarbonara.jpeg',
    section: 'Pasta'
},
{
    name: 'Tortellini Alla Amatriciana',
    img: '/img/ostiatortellini.jpeg',
    section: 'Pasta'
},
{
    name: 'Cappellini Bolognese',
    img: '/img/cappelinibolognese.jpg',
    section: 'Pasta'
},
{
    name: 'Linguine di Mare',
    img: '/img/linguinedimare.jpg',
    section: 'Pasta'
},
{
    name: 'Tiramisu',
    img: '/img/ostiatiramisu.jpeg',
    section: 'Dolce'
},
{
    name: 'Macarons',
    img: '/img/ostiamacarons.jpg',
    section: 'Dolce'
}

];

export const foods = foodItems.reduce((res, food) => {
    if(!res[food.section]){
        res[food.section] = [];
    }
    res[food.section].push(food);
    return res;
}, {});