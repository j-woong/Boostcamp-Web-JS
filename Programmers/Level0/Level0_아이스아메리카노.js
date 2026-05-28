function solution(money) {
    /*let cnt = 0
    while(money >= 5500){
        cnt += 1
        money -= 5500
    } 
    
    return [cnt,money];
    */
    
    return [Math.trunc(money/5500),money%5500]
    
}
// const solution = money => [Math.trunc(money/5500),money%5500]