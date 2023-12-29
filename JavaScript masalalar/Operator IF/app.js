// // 4
// array=[29,-10,30,50]
// s = 0;
// array.forEach((i) => {
//   if (i > 0) {
//     s += 1;
//   }
// });
// console.log(s);

// 5

// array = [29, -10, 30, 50];
// s = 0;
// m = 0;
// array.forEach((i) => {
//   if (i > 0) s++;
//   else m++;
// });
// console.log(`Musbat ${s} Manfiy ${m}`);

// 6

// array = [29, -10, -90, -120, 30, 50];
// s = 0;
// list = []
// array.forEach((i) => {
//   array.forEach((l) => {
//     if (i > l) {
//       s += 1;
//     }
//   });
//   list.push(s)
//   s=0
// });
// list.forEach(item=>{
//     if(+item==array.length-1){
//         console.log(array[list.indexOf(item)]);
//     }
// })

// 7
// array = [29, -10, -90, -120, 30, 50];
// s = 0;
// list = [];
// array.forEach((i) => {
//   array.forEach((l) => {
//     if (i < l) {
//       s += 1;
//     }
//   });
//   list.push(s);
//   s = 0;
// });
// list.forEach((item) => {
//   if (+item == array.length - 1) {
//     console.log(array[list.indexOf(item)]);
//   }
// });

// 8
// array = [29, -10, -90, -120, 30, 50];
// s = 0;
// list = [];
// array.forEach((i) => {
//   array.forEach((l) => {
//     if (i > l) {
//       s += 1;
//     }
//   });
//   list.push(s);
//   s = 0;
// });
// list.forEach((item) => {
//   if (+item == array.length - 1) {
//     console.log(array[list.indexOf(item)]);
//   }else if(+item == 0){
//     console.log(array[list.indexOf(item)]);
//   }
// });

// // 9
// array = [19,37]
// if(array[0]<array[1]){
//     console.log(`A = ${array[0]}; B = ${array[1]}`);
// }

// // 10
// array = [19, 37];
// if(array[0]!=array[1]){
//     console.log(array[0]+array[1]);
// }else{
//     console.log(0);
// }

// // 11

// array = [29, -12];
// if(array[0]>array(1)){
//     console.log(array[0]);
// }else if(array[0]<array[1]){
//     console.log(array[1]);
// }else{
//     console.log(0);
// }

// 12

// 7-topshiriqda qancha kiritilsa ham ishlayveradi

// 13

// array = [29, -10, -90, -120, 30, 50];
// s = 0;
// list = [];
// array.forEach((i) => {
//   array.forEach((l) => {
//     if (i > l) {
//       s += 1;
//     }
//   });
//   list.push(s);
//   s = 0;
// });
// yig=0
// list.forEach((item) => {
//   if (+item == array.length - 1) {
//     yig+=array[list.indexOf(item)];
//   } else if (+item == 0) {
//     yig+=array[list.indexOf(item)];
//   }
// });

// console.log(yig/2);

// 14

//  8 -topshiriqda umumiy

// // 15

// list3 = [29, -10, -90, -120, 30, 50];
// list2 = [];
// array = [];
// list3.forEach((i) => {
//   list3.forEach((l) => {
//     if (list3.indexOf(i) != list3.indexOf(l)) {
//       array.push(i + l);
//     }
//   });
// });

// // console.log(array);

// s = 0;
// list = [];
// array.forEach((i) => {
//   array.forEach((l) => {
//     if (i > l) {
//       s += 1;
//     }
//   });
//   list.push(s);
//   s = 0;
// });
// list.forEach((item) => {
//   if (+item == array.length - 1) {
//     console.log(array[list.indexOf(item)]);
//   }
// });

// // 16

// array = [3, 16, 29];
// s = -1;
// if (array[0] < array[1] && array[1] < array[2]) {
//   array.forEach((element) => {
//     s++;
//     array[s] = element * 2;
//   });
// } else {
//   array.forEach((element) => {
//     s++;
//     array[s] = element * -1;
//   });
// }
// console.log(array);

// 17

// array = [32, 6, 9];
// s = -1;
// if (
//   (array[0] < array[1] && array[1] < array[2]) ||
//   (array[0] > array[1] && array[1] > array[2])
// ) {
//   array.forEach((element) => {
//     s++;
//     array[s] = element * 2;
//   });
// } else {
//   array.forEach((element) => {
//     s++;
//     array[s] = element * -1;
//   });
// }
// console.log(array);

// // 18, 19
// s = 0;
// array = [12, 3, 12, 12];
// list = [];
// array.forEach((i) => {
//   array.forEach((l) => {
//     if (i !== l) {
//       s += 1;
//     }
//   });
//   list.push(s);
//   s = 0;
// });
// list.forEach((item) => {
//   if (item === array.length - 1) {
//     console.log(list.indexOf(item));
//   }
// });
