//Задача на асинхронность: напишите асинхронную функцию, которая использует ключевое слово await 
//для ожидания выполнения других асинхронных операций, и возвращает результат выполнения. 

//Давайте напишем функцию, которая по клику на экран совершает API-запрос и выводит умную мысль.  

const newFunction = async (city) => {
  await return('function1')
  console.log('Function1')
}

// Пример использования:
getWeather('Moscow')
  .then((weatherData) => {
    console.log('Данные о погоде:', weatherData);
  })
  .catch((error) => {
    console.error('Ошибка:', error);
  });

getUserData();