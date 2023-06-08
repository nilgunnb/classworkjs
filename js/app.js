function NNumber(x){
    if (isNaN(x)){
        alert("Not a Number");
    }
    else if (x>0) {
        console.log("Positive number");
    }
    else if (x<0) {
        console.log('Negative number');
    }
    else if (x===0){
        console.log("Zero");
    }
}

function NNumber2(x){
    if (isNaN(x)){
        alert("Not a Number");
    } 
    else if (x%5===0 && x%3===0){
        console.log("bolunur");
    }
    else if(x%5!=0 || x%3!=0){
        console.log("bolunmur");
    }
}

NNumber(-1);
NNumber2(18);

function NNumber3(x){
    if (isNaN(x)){
        console.log("Not a Number");
    }
    else if(x<100 || x>999){
        console.log("ucreqemli deyil");
    }
    else {
        let lastnumber= x%10;
        let y = Math.trunc(x/10);
        let middlenumber = y%10;
        let firstnumber = Math.trunc(x/100);
        if(firstnumber===lastnumber || lastnumber===middlenumber || middlenumber===firstnumber){
            console.log("beraber reqemler var")
        }
        else{
            console.log("muxtelifreqemli")
        }
    }
}

NNumber3(553);

function NNumber4(x){
    let digitsproduct = 1;
    if (isNaN(x)){
        console.log("Not a Number");
    }
    else{
        while(x>0){
            digitsproduct *= x%10;
            x=Math.trunc(x/10);
        }
        console.log(digitsproduct)
    }
}

NNumber4(123)