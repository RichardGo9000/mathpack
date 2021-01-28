import localforage from 'localforage';
const save = async(key, value) => localforage.setItem(key, value);
const load = async(key) => localforage.getItem(key);
(async()=> {
  await save('greeting', 'Hello Rajah');
  const value = await load('greeting');
  document.getElementById('target').textContent = value;
  console.log('done')
})()