//Задача о палиндроме:. Палиндром — это строка, которая читается одинаково в обоих направлениях (например, «аргентина манит негра»).

//1 способ. C использованием методов. 
const getPalindrome = (str) => {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '')
    return str === str.split('').reverse().join('')
}

getPalindrome ('A Santa lived as bT  a devil at NASA') // => false
getPalindrome ('Are we not pure? “No sir!” Panama’s moody Noriega brags. “It is garbage!” Irony dooms a man – a prisoner up to new era') // => true
getPalindrome ('Doc, note I dissent. A fast never prevents a fatness. I diet on cod') // => true


//2 способ. С использованием цикла. 
const getPalindrome2 = (str) => {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, ''); 
    const len = Math.floor(str.length / 2);
    for (let i = 0; i < len; i++) {
        if (str[i] !== str[str.length - i - 1]) {
            return false;
        }
    }
    return true;
}

getPalindrome2 ('A Santa live bT as a devil at NASA') // => false
getPalindrome2 ('Doc, note I dissent. A fast never prevents a fatness. I diet on cod') // => true
getPalindrome2 ('Are we not pure? “No sir!” Panama’s moody Noriega brags. “It is garbage!” Irony dooms a man – a prisoner up to new era') // => true