export const foodItems = [
{
    name: 'Osteria Caesar',
    img: '/img/ostiacaesar.jpeg',
    section: 'Insalata'
},
{
    name: 'Insalata di Osteria',
    img: '/img/ostiasalad.jpeg',
    section: 'Insalata'
},
{
    name: 'Osteria Carbonara',
    img: '/img/ostiacarbonara.jpeg',
    section: 'Pasta'
},
{
    name: 'Osteria Tortellini',
    img: '/img/ostiatortellini.jpeg',
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