export function formatDateToRu(date) {
  const options = {
    year: '2-digit',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }
  const newDate = new Date(date);
  return newDate.toLocaleString('ru-RU', options).replace(',', '');
}



function formatDateToUS(date) { 
  const options = { 
    year: 'numeric', 
    month: '2-digit', 
    day: '2-digit', 
    hour: '2-digit', 
    minute: '2-digit', 
  } 
  const newDate = new Date(date); 
  return newDate.toLocaleString('us-US', options).replace(/\.\s/g, '-'); 
}