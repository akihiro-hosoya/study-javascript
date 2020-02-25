
let num = 5;

switch (num) {
    case 0:
        alert('numは0');
        break;
    case 1:
        alert('numは1');
        break;
    case 2:
        alert('numは1');
        break;
    case 3:
        alert('numは1');
        break;
    case 4:
        alert('numは1');
        break;
    default:
        alert('numは5');
}

let add = (a, b) => {
    return a+b;
}

let input = () => {
    let str = prompt('何か入力してください！');
    alert(str);
}

let check = () => {
    let str = prompt('何か入力してください！');

    if (str === 'Javascript')
        alert('Hello Javascript!');
}