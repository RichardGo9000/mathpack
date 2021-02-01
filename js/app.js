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
  // console.log("async iife");
  console.log('Async iife complete');
})()

;(() => {
  console.log("I am cute like Hell...o Kitty.");
  // Swal.fire("Sweetest shit you've ever known");
  Swal.fire({
    title: 'Are you sure?',
    text: 'You will not be able to recover this imaginary file',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'yes',
    cancelButtonText: 'No, keep it',
  }).then((result) => {
    if (result.value) {
      Swal.fire(
        'Deleted',
        'Your imaginary file has been deleted.',
        'success'
      )
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire(
        'Cancelled',
        'Your imaginary file is safe',
        'error'
      )
    }
  })
})()