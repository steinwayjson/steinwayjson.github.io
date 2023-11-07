const getFormatDate = () => {
  import moment from 'moment';
  //объявлеям ф-цию форматирования текущей даты
  console.log(moment().format(('YYYY-MM-DD HH:mm:ss')));
  return;
}

//вызываем ф-цию и выводим отформатированную дату
export default {getFormatDate}