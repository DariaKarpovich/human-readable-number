module.exports = function toReadable (number) {

    let wordNumber = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let dozens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let dozensBig = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let firstNum = +String(number).slice('')[0];
    let secondNum = +String(number).slice('')[1];
    let thirdNum = +String(number).slice('')[2];
    
    if (number === 0) return 'zero';

    function getUnits(num) {
        for (let i = 1; i < 10; i++) {
            if (num === i) {
                return wordNumber[i - 1]
            }
        }
    }

    function getDozens(num) {
        for (let i = 0; i <= 10; i++) {
            if (num === i) {
                return dozens[i];
            }   
        }
    }

    if (number > 0 && number < 10 ) return getUnits(number);
    if (number > 9 && number < 20) return getDozens(secondNum);

    if (number > 19 && number < 100) {
        let result = '';
        for (let i = 2; i < 10; i++) {
            if (firstNum === i) {
                result = dozensBig[i - 2]
            }   
        }

        for (let i = 1; i < 10; i++) {
            if (secondNum === i) {
                result = `${result} ${wordNumber[i - 1]}`;
            }   
        }
        return result;
    }

    if (number > 99 && number < 1000) {
        let result = '';

        for (let i = 1; i < 10; i++) {
            if (firstNum === i) {
                result = `${wordNumber[i - 1]} hundred`
            }   
        }

        if (secondNum === 0) {
            for (let i = 1; i < 10; i++) {
                if (thirdNum === i) {
                    result = `${result} ${wordNumber[i - 1]}`;
                }   
            }
        } else if (secondNum === 1) {
            for (let i = 0; i < 10; i++) {
                if (thirdNum === i) {
                    result = `${result} ${dozens[i]}`;
                }   
            }
            } else {
                for (let i = 2; i < 10; i++) {
                    if (+String(number).slice('')[1] === i) {
                        result = `${result} ${dozensBig[i - 2]}`;
                    }   
                }
                if (thirdNum !== 0) {
                    for (let i = 1; i < 10; i++) {
                        if (thirdNum === i) {
                            result = `${result} ${wordNumber[i - 1]}`;
                        }   
                    }
                }
        }
        return result;
    }

}
