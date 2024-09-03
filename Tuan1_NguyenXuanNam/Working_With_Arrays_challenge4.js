const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
];

console.log('1. Tính toán phần ăn được khuyến nghị và thêm vào từng đối tượng');
dogs.forEach(dog => {
    dog.recommendedFood = dog.weight ** 0.75 * 28;
});
console.log(dogs);

 
console.log('Chó của Sarah')
const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
const sarahRecommendedFood = sarahDog.recommendedFood;
console.log(sarahDog);

console.log('Chó của Sarah ăn nhiều hay ít')
if (sarahDog.curFood > sarahRecommendedFood * 1.1) {
    console.log("Chó của Sarah ăn nhiều");
} else if (sarahDog.curFood < sarahRecommendedFood * 0.9) {
    console.log("Chó của Sarah ăn ít");
} else {
    console.log("Chó của Sarah ăn đúng tiêu chuẩn");
}

console.log('Tạo mảng chứa các chủ sở hữu của chó ăn nhiều')
const ownersEatTooMuch = dogs
    .filter(dog => dog.curFood > dog.recommendedFood * 1.1)
    .flatMap(dog => dog.owners);

console.log(ownersEatTooMuch);

console.log('Tạo mảng chứa các chủ sở hữu của chó ăn ít')
const ownersEatTooLittle = dogs
    .filter(dog => dog.curFood < dog.recommendedFood * 0.9)
    .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);

// 4. Log chuỗi kết quả
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// 5. Kiểm tra xem có chó ăn đúng phần khuyến nghị không
console.log('Kiểm tra xem có chó nào ăn đúng phần khuyến nghị không?')
const isEatingExactlyRecommended = dogs.some(dog => dog.curFood === dog.recommendedFood);
console.log(isEatingExactlyRecommended);

// 6. Kiểm tra xem có chó nào ăn một lượng được xem là chấp nhận hay không
console.log('Kiểm tra xem có chó nào ăn một lượng được xem là chấp nhận hay không')
const isEatingOkayAmount = dogs.some(dog =>
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1
);
console.log(isEatingOkayAmount); 

// 7. Tạo mảng chứa các chó ăn đủ lượng chấp nhận
console.log('Tạo mảng chứa các chó ăn đủ lượng chấp nhận')
const dogsEatingOkayAmount = dogs.filter(dog =>
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1
);
console.log(dogsEatingOkayAmount);

// 8. Tạo bản sao nông của mảng và sắp xếp theo phần ăn khuyến nghị
console.log('Tạo bản sao của mảng và sắp xếp theo phần ăn khuyến nghị')
const dogsSorted = [...dogs].sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsSorted);



