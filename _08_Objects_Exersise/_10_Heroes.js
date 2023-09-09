function heroes(){
    let canCast = (state) => ({
        cast : (spell) => {
            console.log(`${state.name} case ${spell}`);
            state.mana--;
        }

    })
    let mage = ()=> {name : 9};
}

const hero = create.heroes();
