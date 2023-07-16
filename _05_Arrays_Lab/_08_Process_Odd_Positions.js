function anyway(numbers){
    const oddNums = numbers.filter((v, i) => i % 2 == 1 );
    const doubled = oddNums.map(x => x * 2);
    doubled.reverse();
    console.log(doubled.join(' '));
}
// anyway([2, 5, 6, 7, 9, 55, 77, 45]);



