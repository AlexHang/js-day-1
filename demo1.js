function constDemo() {
    var x = 5;
    x = 3;


    // const x = 2;
    // x = 3;

    const myArr = ['1'];
    myArr.push('2');
}



function ternaryDemo() {
    var result;
    const x = 5;
    if (x === 5) {
        result = "abc";
    } else {
        result = "hello";
    }

    result = x === 5 ? "abc" : "hello";

    result = x ?? 'this is not null';

}


function loopsDemo() {
    var letters = {
        a: 1,
        b: 2,
        c: 3
    };

    console.log(letters);

    for (keyName in letters) {
        console.log(keyName, letters[keyName]);
    }
}


function namedFunction(a,b,c){

}

const helloFunction = (name) => `Hello, ${name}`



loopsDemo();

