let humburger = 10;
let fries = 10;
if (humburger >=4 && fries >= 1) {
    console.log('Ми поїли')
} else {
    console.log('Ми йдемо в інше кафе')
}

let price = 1200;
if (price>=1000 && price<= 1900){
    console.log(true)
}

price = 200;
if (!(price>=1000 && price<= 1900)){
    console.log(true)
}

price = 200;
if (price<1000 || price> 1900){
    console.log(true)
}

let seasonNumber = 2;

if(seasonNumber === 1){
    console.log('Winter');
} else if(seasonNumber === 2){
    console.log('Spring');
} else if(seasonNumber === 3){
    console.log('Summer');
} else if(seasonNumber === 4){
    console.log('Fall');
}

let a=1, b=3, c=2;

if(a>b){
    if(b>c){
        console.log('"b" is medium number');
    }else if(c>a){
        console.log('"a" is medium number');
    }else{
        console.log('"c" is medium number');
    }
} else if (b>c){
    if(c>a){
        console.log('"c" is medium number');
    }else{
        console.log('"a" is medium number');
    }
}else if(c>a){
    if(a<b){
        console.log('"b" is medium number');
    }
}

let dayNumber = 1;

switch(dayNumber){
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
}


let num1 = 1, num2 = 2, operation='-';

switch(operation){
    case '+':
        console.log(num1+num2);
        break;
    case '-':
        console.log(num1-num2);
        break;
    case '*':
        console.log(num1*num2);
        break;
    case '/':
        console.log(num1/num2);
        break;
}

let string = "hello world!";

console.log(string.replace(/[aeyuio]/ig, ''));

let meters = 600;

let km = (meters/1000).toString();
let lastNumber = km[km.length-1];

if(lastNumber === '1'){
    console.log(km + '  кілометр')
}else if(lastNumber === '2' || lastNumber === '3' || lastNumber === '4'){
    console.log(km + '  кілометра')
}else{
    console.log(km + '  кілометрів')
}