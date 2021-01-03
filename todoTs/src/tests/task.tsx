// export type studentType = {
//     name: string
//     age: number
//     scores: number
//     money: number
//     friends: Array<string>
// }
// export type studentGroupType = Array<studentType>
//
//
// export function Sum(a: number, b: number): number {
//     return (a + b);
// }
//
//
// export function Div(a: number, b: number): number {
//     return (b / a);
// }
//
// export function Mul(a: number, b: number): number {
//     return (b * a);
//
// }
//
// export function copyStud(studObj: studentType): studentType {
//     return ({...studObj});
// }
//
// export function deepCopyStud(studObj: studentType): studentType {
//     return ({...studObj, friends: [...studObj.friends]});
// }
//
// export function getCopyGroup (studGroup: studentGroupType ):studentGroupType {
//     let copyGroup=studGroup.map(st => ({...st,friends:[...st.friends]}))
//     return copyGroup
// }

//------------------------- secon part-----------

// 1. export function sum (...numbers:Array<number>):number { // rest parametr
//  return numbers.reduce ((acc, item:number)=>acc+item) }

// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "00", если такого треугольника не существует,
//  - "01", если треугольник равнобедренный,
//  - "10", если треугольник равносторонний,
//  - "11", если треугольник обычный

export function getTriaangleType(a:number, b:number, c:number) {
    if (a+b<c || a+c<b ||c+b<a) {return "00"}
    if (a==b && a==c && b==c) {return "10"}
    if (a==b || a==c || b==c) {return "01"}
    return "11"
}



// 3. Функция принимает isEvenSumGreater параметром массив чисел.
// Если сумма элементов массива с чётным индексом больше суммы элементов массива
// с нечётными индексами,то функция возвращает true. В противном случае - false.

// export const isEvenSumGreater = (arr: number[]): boolean => {
//     let sumOdd = 0, sumEven = 0
//     arr.forEach((item, index) => {
//             if (index % 2 === 0)
//                 return sumEven += item
//             else
//                 return sumOdd += item
//         }
//     )
//     return sumOdd < sumEven
// }

// 4. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

// export function getSum(a:number):number{
// return a.toString().split('').reduce((acc,val)=>{return acc+(+val)},0)
// }









