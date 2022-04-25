let fam = {
  "famName": "atlasSquad",
  "immediateFam":[
    {
      "first_name": "Anthony",
      "fav_food": "pizza",
      "web_la": false,
      "age": 10
    },
    {
      "first_name": "Oceane",
      "fav_food": "sushi",
      "web_la": true,
      "age": 15
    },
    {
      "first_name": "Peter",
      "fav_food": "granola",
      "web_la": false,
      "age": 5
    }
  ],
  "lovesColor": true
}
console.log(fam.famName);
console.log(fam['famName']);

console.log(fam.immediateFam[0].fav_food);
console.log(fam['immediateFam'][0]['fav_food']);
