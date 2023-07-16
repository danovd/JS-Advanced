function sumEdges(arr){
    //За да подсигурим случая ако масива е само с един елемент
    //ползваме функциите shift и pop, които ще вземат елементи отзад и отпред, 
    // но на копие масив.
    const first = Number([...arr].shift());
    const last = Number([...arr].pop());
    return first + last;
}