
Archer.onclick = class_picker
Mage.onclick = class_picker
Swordsman.onclick = class_picker

let class_picked = '';

const submitButton = document.querySelector('input[type="submit"]');

submitButton.addEventListener('click', function (event) {
    event.preventDefault(); // prevent form submission

    const nameInput = document.getElementById('fname');
    const lengthInput = document.getElementById('lname');

    const nameValue = nameInput.value;
    const lengthValue = lengthInput.value;

    const output = {
        name: nameValue,
        length: lengthValue
    };

    console.log(output);
});


function class_picker(event) {
    document.querySelectorAll('#cards img').forEach((img) => {
        img.classList.remove('card-selected');
    });

    this.classList.add('card-selected');

    class_picked = this.id;
    console.log(class_picked);
}

document.querySelectorAll('#cards img').forEach((img) => {
    img.addEventListener('click', class_picker);
});
