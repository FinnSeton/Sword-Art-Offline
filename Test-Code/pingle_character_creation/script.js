
Archer.onclick = class_picker
Mage.onclick = class_picker
Swordsman.onclick = class_picker

let class_picked = ''

function class_picker(event){

    class_picked = this.id
    console.log(class_picked)

}