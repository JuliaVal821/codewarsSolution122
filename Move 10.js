https://www.codewars.com/kata/57cf50a7eca2603de0000090/train/javascript

    function moveTen(s){
        let index;
        let alphabet = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz';
        let result = '';
        for(let el of s){
            index = alphabet.indexOf(el);
            result += alphabet[index + 10];
        }
        return result;
    }