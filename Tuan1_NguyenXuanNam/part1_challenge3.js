// Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
var average_dolphins_1 = (96 + 108 + 89) / 3;
var average_koalas_1 = (88 + 91 + 110) / 3;
if(average_dolphins_1 > average_koalas_1){
    console.log("Dolphins giành chiến thắng");
}
else if(average_dolphins_1 < average_koalas_1){
    console.log("Koalas giành chiến thắng");
}
else{
    console.log("Hòa");
}

// Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
dolphins_scores_bonus_1 = [97, 112, 101];
koalas_scores_bonus_1 = [109, 95, 123];

average_dolphins_bonus_1 = dolphins_scores_bonus_1.reduce((a, b) => a + b, 0) / dolphins_scores_bonus_1.length;
average_koalas_bonus_1 = koalas_scores_bonus_1.reduce((a, b) => a + b, 0) / koalas_scores_bonus_1.length;

if(average_dolphins_bonus_1 > average_koalas_bonus_1 && average_dolphins_bonus_1 >= 100){
    console.log("Dolphins giành chiến thắng trong Bonus 1");
}
else if(average_koalas_bonus_1 > average_dolphins_bonus_1 && average_koalas_bonus_1 >= 100){
    console.log("Koalas giành chiến thắng trong Bonus 1");
}
else{
    console.log("Không có đội nào giành chiến thắng trong Bonus 1");
}

// Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
dolphins_scores_bonus_2 = [97, 112, 101]
koalas_scores_bonus_2 = [109, 95, 106]

average_dolphins_bonus_2 = dolphins_scores_bonus_2.reduce((a, b) => a + b, 0) / dolphins_scores_bonus_2.length;
average_koalas_bonus_2 = koalas_scores_bonus_2.reduce((a, b) => a + b, 0) / koalas_scores_bonus_2.length;

if(average_dolphins_bonus_2 > average_koalas_bonus_2 && average_dolphins_bonus_2 >= 100){
    console.log("Dolphins giành chiến thắng trong Bonus 2");
}
else if(average_koalas_bonus_2 > average_dolphins_bonus_2 && average_koalas_bonus_2 >= 100){
    console.log("Koalas giành chiến thắng trong Bonus 2");
}
else if(average_dolphins_bonus_2 == average_koalas_bonus_2 && average_dolphins_bonus_2 >= 100)
    console.log("Hai đội hòa nhau");
else{
    console.log("Không có đội nào giành chiến thắng trong Bonus 2");
}