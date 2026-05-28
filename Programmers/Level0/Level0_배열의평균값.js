/*
    ***로직***
    - 가독성과 효율성을 위해 기존의 for...of 루프 방식을 내장 배열 메서드인 `reduce` 하나로 리팩토링하여 평균값 도출
 */
const solution = (numbers) => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
/*function solution(numbers) {
    let sum = 0
    for ( let n of numbers){
        sum += n
    }
    return sum / numbers.length
} */