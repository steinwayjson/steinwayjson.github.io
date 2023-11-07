//вычисление N-го числа в ряду Фибоначчи 
const fibLeng = (n) => {
    if (typeof n !== 'number') {
        return new Error('Не-а. Это не число');
      };

    if (n < 0) {
        return new Error('Давай использовать положительные числа');
      };
  
    if (n === 0) {
        return [0];
      };
    //вычисление циклом
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
  },


//вычисление всех чисел в ряду Фибоначчи до числа N
const allOfFib = (n) => {
  if (typeof n !== 'number') {
    return new Error('Не-а. Это не число');
  }
  if (n < 0) {
    return new Error('Давай использовать положительные числа');
  }
  if (n === 0) {
    return [0];
  }
  //первые 3 числа в ряду
  const fibonacciArr = [0, 1, 1];
  //добавляем в массив сумму двух предыдущих чисел пока не доходим до n
  while (fibonacciArr[fibonacciArr.length - 1] + fibonacciArr[fibonacciArr.length - 2] <= n) 
    {const nextNumber = fibonacciArr[fibonacciArr.length - 1] + fibonacciArr[fibonacciArr.length - 2];
      fibonacciArr.push(nextNumber);
    }
  return fibonacciArr;
}

//вычисление N-го просто числа
const isPrime = (num) => {

  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
}

const findNthPrime = (N) => {
  if (N === 1) return 2;

  let count = 1;
  let num = 3;

  while (count < N) {
    if (isPrime(num)) {
      count++;
      if (count === N) return num;
    }
    num += 2; // Проверяем только нечетные числа
  }

  return num;
}

const N = 10;
const nthPrime = findNthPrime(N);

console.log(`N-е простое число (где N = ${N}) равно ${nthPrime}`);

//вычисление всех простых чисел до числа N

