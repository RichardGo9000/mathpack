import localforage from 'localforage';
import Swal from 'sweetalert2';

console.log('begin script');

const save = async(key, value) => localforage.setItem(key, value);
const load = async(key) => localforage.getItem(key);
//iife 1 (Immediately Invoked Function Expression)
(async()=> {
  await save('greeting', 'Hello Rajah');
  const value = await load('greeting');
  document.getElementById('target').textContent = value;
  console.log("async iife");
  console.log('dONE')
})()

console.log("meow");
//iife 2
(function () {
  console.log("I am cute like Hell...o Kitty.");
})()