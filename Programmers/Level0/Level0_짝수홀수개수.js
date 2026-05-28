function solution(num_list) {
    let odd = [];  
    let even = [];
    
    for (let n of num_list) {
        n % 2 === 1 ? odd.push(n) : even.push(n);
    }
    return [even.length, odd.length];
}
const solution = (num_list) => [ num_list.filter(n => n % 2 === 0).length, num_list.filter(n => n % 2 === 1).length]