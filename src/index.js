module.exports = function check(str, bracketsConfig) {
    let testArray = [];
    let finalLength = 0;
    // console.log(str.length);
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            // console.log(str[i]);
            // console.log(testArray);
            if (
                (bracketsConfig[j][0] === bracketsConfig[j][1]) &&
                (str[i] === bracketsConfig[j][1]) //&&
                // testArray[testArray.length - 1] === bracketsConfig[j][0]
            ) {
                if (testArray[testArray.length - 1] === str[i]) {
                    testArray.pop();
                    finalLength= finalLength + 1;
                } else {
                    testArray.push(str[i]);
                    finalLength= finalLength + 1;
                }
            } else {
                if (str[i] === bracketsConfig[j][0]) {
                    testArray.push(str[i]);
                    finalLength= finalLength + 1;
                }
                if (
                    (str[i] === bracketsConfig[j][1]) &&
                    (testArray[testArray.length - 1] === bracketsConfig[j][0])
                ) {
                    testArray.pop();
                    finalLength= finalLength + 1;
                }
            }
        }
    }
    // console.log(testArray);
    console.log(finalLength);
    console.log(str.length);
    if ((testArray.length === 0) && (finalLength == str.length)) {
        return true;
    } else {
        return false;
    }
};
//    console.log(check('([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]]))()', [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']]));
// ([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]]))()
