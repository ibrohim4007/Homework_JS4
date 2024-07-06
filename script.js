
function GetUserInfo() {
    const name = prompt('Введите ваше имя');
    const year = +prompt('Введите нынешний год');
    const age = +prompt('Введите ваш год рождения');

    if (isNaN(year) || isNaN(age)) {
        alert('введите корректное число');
        return;
    }

    console.log(`${name}, ваш возраст ${year - age}`);
}

GetUserInfo()
