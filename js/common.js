var x, y, total;
x = 10;
y = 5;
console.log('계산 전 x의 값 : '+x);

/*계산합계*/
x = x + y; //x에 xy의 합계를 재할당
console.log('계산 후 x의 값 : '+x);

/*복합대입연산*/

// x += y; //x = x + y;
// x -= y; //x = x - y;
x -= y + y; //x = x - (y + y);



// console.log('복합 대입연산 후 x의 값 : '+x);
//
//
// /*평균 점수 구하기*/
// var score1, score2, score3, score4, score5, leng, total, avg;
// score1 = 85;
// score2 = 90;
// score3 = 95;
// score4 = 100;
// score5 = 75;
// leng = 5;
// total = score1 + score2 + score3 + score4 + score5;
// avg = total/leng;
// console.log('점수의 총 합은'+total+'점이고, 평균값은'+avg+'점 입니다.');


/*연습*/

var score1, score2, score3, score4, score5, score6, score7, score8, score9, score10;
score1 = 175;
score2 = 180;
score3 = 182;
score4 = 190;
score5 = 185;
score6 = 179;
score7 = 182;
score8 = 183;
score9 = 192;
score10 = 187;
count = 10;
total = score1 + score2 + score3 + score4 + score5 + score6 + score7 + score8 + score9 + score10;
avg = total/count;
alert('평균키는 '+avg+' cm 입니다.')



var score1, score2, score3, score4, score5, score6, score7, score8, score9, score10;
score1 = 32;
score2 = 44;
score3 = 21;
score4 = 18;
score5 = 52;
score6 = 22;
score7 = 45;
score8 = 25;
score9 = 38;
score10 = 28;
count = 10;
total = score1 + score2 + score3 + score4 + score5 + score6 + score7 + score8 + score9 + score10;
avg = total/count;
alert('평균 나이는 '+avg+'살 입니다.')









/*정답*/
/*키,나이평균*/
var heightTotal, ageTotal, heightAvg, ageAvg;
var coutLeng = 10;

/*키 변수 선언*/
var height_1, height_2, height_3, height_4, height_5, height_6, height_7, height_8, height_9, height_10;
height_1 = 175; height_2 = 180; height_3 = 182; height_4 = 190; height_5 = 185; height_6 = 179; height_7 = 182; height_8 = 183; height_9 = 192; height_10 = 187;

/*나이 변수 선언*/
var age_1, age_2, age_3, age_4, age_5, age_6, age_7, age_8, age_9, age_10
age_1 = 32; age_2 = 44; age_3 = 21; age_4 = 18; age_5 = 52; age_6 = 22; age_7 = 45; age_8 = 25; age_9 = 38; age_10 = 28;


/*키합산*/
heightTotal = height_1 + height_2 + height_3 + height_4 + height_5 + height_6 + height_7 + height_8 + height_9 + height_10;
/*나이합산*/
ageTotal = age_1 + age_2 + age_3 + age_4 + age_5 + age_6 + age_7 + age_8 + age_9 + age_10;


// 키평균
heightAvg = heightTotal/coutLeng;
// 나이 평균
ageAvg = ageTotal/coutLeng;

alert('평균키는 '+heightAvg+'cm 입니다.');
alert('평균나이는 '+ageAvg+'살 입니다.');
