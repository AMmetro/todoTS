
// // import {studentType} from "./task"
// import {Sum, Mul, Div, copyStud, deepCopyStud, getCopyGroup} from "./task"
// import {studentType, studentGroupType} from "./task"
//
// let a:number=5
// let b:number=10
// let stud:studentType
// let studGroup: studentGroupType
//
//
// beforeEach(()=>{
//     a=5
//     b=10
//     stud={
//         name:"Bob",
//         age:23,
//         scores:100,
//         money:200,
//         friends:["Alex","Mikle","Viktor" ]
//     }
//     // studGroup=[stud,stud,stud]
//     studGroup=[{
//         name:"Bob",
//         age:23,
//         scores:100,
//         money:200,
//         friends:["Alex","Mikle","Viktor" ]
//     },
//         {
//             name:"Bob",
//             age:23,
//             scores:100,
//             money:200,
//             friends:["Alex","Mikle","Viktor" ]
//         },
//         {
//             name:"Bob",
//             age:23,
//             scores:100,
//             money:200,
//             friends:["Alex","Mikle","Viktor" ]
//         }]
// })
//
// test("sum of numbers", ()=>{
//     let result=Sum (a,b)
//     expect(result).toBe(15)
// })
//
// test ("division of numbers", ()=>{
//
//     expect(Div(a,b)).toBe(2)
//
// })
//
// test ("mult of numbers", ()=>{
//     let result = Mul(a,b)
//     expect(result).toBe(50)
//
// })
//
// test ("copy students", ()=>{
//     const copySt = copyStud(stud)
//     let result = copySt===stud
//     expect(result).toBe(false)
//     expect(copySt.name).toBe(stud.name)
// })
//
// test ("deep cope student", ()=>{
//     const deepCopySt = deepCopyStud(stud)
//
//     expect(deepCopySt).not.toBe(stud)
//     expect(deepCopySt.name).toBe(stud.name)
//     expect(deepCopySt.friends).not.toBe(stud.friends)
// })
//
// test("getCopyGroup", ()=>{
//     const copyGroup = getCopyGroup(studGroup)
//     expect(copyGroup[0]).not.toBe(studGroup[0])
//     expect(copyGroup.length).toBe(studGroup.length)
//     expect(copyGroup[0].name).toBe(studGroup[0].name)
//     expect(copyGroup[0].friends).not.toBe(studGroup[0].friends)
//     expect(copyGroup[0].friends[0]).toBe(copyGroup[0].friends[0])
// })

// ---------------- secon part-----------------------------------------------------------

import {sum, getTriaangleType} from "./task";

test("get sum of numbers", ()=>{
    const a=2, b=5, c=4, d=6
    expect(sum(a,b)).toBe(7)
    expect(sum(a,b,c)).toBe(11)
    expect(sum(a,b,c,d)).toBe(17)
})


test ("getTriaangleType", ()=>{
    const a=3, b=4, c=5
    expect (getTriaangleType(a,b,c)).toBe("11")
})
