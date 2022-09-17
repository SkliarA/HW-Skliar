function McDonalds(humburgers, fries){
    if (humburgers >=4 && fries >= 1) {
        console.log('Ми поїли')
    } else {
        console.log('Ми йдемо в інше кафе')
    }
}

McDonalds(10,2)

function isPriceBetween(price){
    if (price>=1000 && price<= 1900){
        console.log(true)
    }
}

isPriceBetween(1002)

function isPriceNotBetween1(price){
    if (!(price>=1000 && price<= 1900)){
        console.log(true)
    }else{
        console.log(false);
    }
}

isPriceNotBetween1(100);


function isPriceNotBetween2(price){
    if (price<1000 || price> 1900){
        console.log(true)
    }else{
        console.log(false)
    }
}

isPriceNotBetween2(1500);

function seasonName(number){
    if(number === 1){
        console.log('Winter');
    } else if(number === 2){
        console.log('Spring');
    } else if(number === 3){
        console.log('Summer');
    } else if(number === 4){
        console.log('Fall');
    }else{
        console.log('Invalid season number');
    }
}

seasonName(1)


function findMediumNumber(a, b, c){
    if(a>b){
        if(b>c){
            console.log('"b='+b+'" is medium number');
        }else if(c>a){
            console.log('"a='+a+'" is medium number');
        }else{
            console.log('"c='+c+'" is medium number');
        }
    } else if (b>c){
        if(c>a){
            console.log('"c='+c+'" is medium number');
        }else{
            console.log('"a='+a+'" is medium number');
        }
    }else if(c>a){
        if(a<b){
            console.log('"b='+b+'" is medium number');
        }
    }
}

findMediumNumber(1,2,3)

function dayName(dayNumber){
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
        default:
            console.log('Invalid day number')
    }
}

dayName(4)

function calc(num1, num2, operation){
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
}

calc(2, 3, '*');


function removeVowels(string){
    console.log(string.replace(/[aeyuio]/ig, ''));
}

removeVowels('Hello World!');


function kilometers(meters){
    let km = (meters/1000).toString();
    let lastNumber = km[km.length-1];

    if(lastNumber === '1'){
        console.log(km + '  кілометр')
    }else if(lastNumber === '2' || lastNumber === '3' || lastNumber === '4'){
        console.log(km + '  кілометра')
    }else{
        console.log(km + '  кілометрів')
    }
}

kilometers(600)