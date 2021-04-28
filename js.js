//- Дана textarea.
//В неё вводится текст.
//Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
/* 
let test = document.getElementById('text');
test.value = localStorage.getItem('text');
test.onkeyup  = () => {
  localStorage.setItem('text' , test.value);
} 
 */

//- Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
//Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
//Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
//Сделайте ваш скрипт как можно более универсальным.
/* 
const mainForma = document.getElementById('mainForm');
for (let i of mainForma) {
  if (i.type === 'checkbox' && localStorage.getItem(i.id) === 'true') {
    i.checked = true;
  } else if (i.name === 'gender' && localStorage.getItem(i.name) === i.id) {
    i.checked = true;
  } else {
    i.value = localStorage.getItem(i.name);
  }
}
mainForma.onchange = ({
  target: {
    type,
    name,
    value,
    checked,
    id
  }
}) => {
  if (type === 'radio' && checked) {
    localStorage.setItem(name, id);
  } else if (type === 'checkbox') {
    localStorage.setItem(id, checked);
  } else {
    localStorage.setItem(name, value);
  }
} 
*/

//-Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
//Требование : хранить историю своих изменений (даже после перезагрузки страницы).
//Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).
/* 
const noteBook = document.getElementById('noteBook');
const note = document.getElementById('note');
const up = document.getElementById('up');
const down = document.getElementById('down');
const STOR = 'opa';

let test = (JSON.parse(localStorage.getItem(STOR)));
noteBook.value = test[test.length - 1];
note.onclick = () => {
  localStorage.getItem(STOR) ? null : localStorage.setItem(STOR, JSON.stringify([]));
  let temp = localStorage.getItem(STOR);
  let acc = JSON.parse(temp);
  acc.push(noteBook.value);
  localStorage.setItem(STOR, JSON.stringify(acc));
};
let i = 0;
up.onclick = () => {

  const s = JSON.parse(localStorage.getItem(STOR));
  i ? i-- : i = s.length - 1;
  noteBook.value = s[i];
};
down.onclick = () => {
  const s = JSON.parse(localStorage.getItem(STOR));
  i === s.length - 1 ? i = 0 : i++;
  noteBook.value = s[i];
}; */

//- Реализуйте записную книгу, хранящую данные в локальном хранилище.
//Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
//Данные вводить через соответсвующую форму.
//--Каждому контакту добавить кнопку для удаления контакта.
//--Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта
/* 
let secondForm = document.getElementById('secondForm');
let fio = document.getElementById('fio');
let contactList = document.getElementById('contactList');
let deleteContact = document.getElementById('deleteContact');
let saveChangeContact = document.getElementById('saveChangeContact');
let index = 0;

let addOption = () => {
  const optionOfSelect = document.createElement('option');
  optionOfSelect.id = fio.value;
  optionOfSelect.text = fio.value;
  optionOfSelect.selected = "selected";
  contactList.appendChild(optionOfSelect);
}

contactList.onchange = ({target: {value}}) => {
  let test = JSON.parse(localStorage.getItem(value));
  for (let i of secondForm){
  i.value = test[index];
  index <test.length-1 ? index++ : index = 0;
  }
}


saveChangeContact.onclick = () => {
  let arrOfInfo = [];
  for (let i of secondForm) {
    arrOfInfo.push(i.value);
  }
if(fio.value === ''){return null}
for (let x = 0; x <= localStorage.length; x++){
if (localStorage.key(x) === fio.value) 
{
  return  localStorage.setItem(fio.value, JSON.stringify(arrOfInfo));
}
 }
localStorage.setItem(fio.value, JSON.stringify(arrOfInfo));
addOption()
}

deleteContact.onclick = () => {
localStorage.removeItem(fio.value);
let element = document.getElementById(fio.value);
element === null ? null : contactList.removeChild(element);
let test = JSON.parse(localStorage.getItem(contactList.value));
for (let i of secondForm){
  if(test === null){
   for(let i of secondForm){ return  i.value = null }
  }
   i.value = test[index];
  index < test.length-1 ? index++ : index = 0;} 
}

let addUsersToList = () => {
for (let user = 0; user < localStorage.length; user++){
  const optionOfSelect = document.createElement('option');
  optionOfSelect.id = localStorage.key(user);
  optionOfSelect.text = localStorage.key(user);
  contactList.appendChild(optionOfSelect);
}}
addUsersToList(); 
*/