function ex2(obj){
    if(obj.dizziness){
        obj.levelOfHydrated += obj.weight * obj.experience * 0.1;
        obj.dizziness = false;
    }
    return obj;
}



console.log(exp2({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
  ));