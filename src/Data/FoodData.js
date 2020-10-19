export function formatPrice(price){
    return price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });
};

export const foodItems = [
{
    id: 1,
    name: 'Bruschetta', 
    img: '/img/osteriabruschetta.jpg',
    section: 'Antipasti/Insalata',
    price: 14
},
{
    id: 2,
    name: 'Caprese', 
    img: '/img/osteriacaprese.jpg',
    section: 'Antipasti/Insalata',
    price: 12
},
{
    id: 3,
    name: 'Osteria Caesar',
    img: '/img/ostiacaesar.jpeg',
    section: 'Antipasti/Insalata',
    price: 14
},
{
    id: 4,
    name: 'Insalata di Osteria',
    img: '/img/ostiasalad.jpeg',
    section: 'Antipasti/Insalata',
    price: 12
},
{
    id: 5,
    name: 'Carbonara',
    img: '/img/ostiacarbonara.jpeg',
    section: 'Pasta',
    price: 21
},
{
    id: 6,
    name: 'Tortellini Alla Amatriciana',
    img: '/img/ostiatortellini.jpeg',
    section: 'Pasta',
    price: 22
},
{
    id: 7,
    name: 'Cappellini Bolognese',
    img: '/img/cappelinibolognese.jpg',
    section: 'Pasta',
    price: 22
},
{
    id: 8,
    name: 'Linguine di Mare',
    img: '/img/linguinedimare.jpg',
    section: 'Pasta',
    price: 24
},
{
    id: 9,
    name: 'Tiramisu',
    img: '/img/ostiatiramisu.jpeg',
    section: 'Dolce',
    price: 8
},
{
    id: 10,
    name: 'Macarons',
    img: '/img/ostiamacarons.jpg',
    section: 'Dolce',
    price: 8
}

];

export const foods = foodItems.reduce((res, food) => {
    if(!res[food.section]){
        res[food.section] = [];
    }
    res[food.section].push(food);
    return res;
}, {});