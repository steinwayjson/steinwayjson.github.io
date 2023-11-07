//Разработать функцию, изменяющую окончание слов в зависимости от падежа. Функцию надо упаковать в модуль
//Для реализации функции, охватывающей и за пределами задания, полагаю, будут использоваться масштабные библиотеки слов.
//В данном случае, релизуем небольшую библиотеку, используя только слова из примеров. 

//На вход подается 2 аргумента. Число и слово.
const wordCase = (num, word) => {

  // Определение падежа в зависимости от последней цифры числа
  const messageWordForms = [сообщение, сообщений, сообщения] 
  const userWordForms = [пользователь, пользователей, пользователя]
  
  const lastDigit = num % 10;
  const lastTwoDigits = num % 100;
  
  // Правила для выбора падежа


//В этом примере formatWordByCount принимает число и массив слов в трех формах (для одного, двух и множества), а затем определяет правильный падеж в зависимости от числа.
//Вы можете адаптировать эту функцию и массив слов для других языков и разных контекстов.



//Например. Слова из задания для проверки: 
wordCase ('112 сообщение')
wordCase ('12 сообщение')
wordCase ('1 сообщений')
wordCase ('1024 пользователь')
wordCase ('1026 пользователь')
wordCase ('121 пользователи')