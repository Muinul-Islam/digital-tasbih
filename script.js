subhanallahCount = document.getElementById('subhanallah-count');
subhanallahIncrement = document.getElementById('subhanallah-increment');
subhanallahDecrement = document.getElementById('subhanallah-decrement');

alhamdulillahCount = document.getElementById('alhamdulillah-count');
alhamdulillahIncrement = document.getElementById('alhamdulillah-increment');
alhamdulillahDecrement = document.getElementById('alhamdulillah-decrement');

lailahaillallahCount = document.getElementById('lailahaillallah-count');
lailahaillallahIncrement = document.getElementById('lailahaillallah-increment');
lailahaillallahDecrement = document.getElementById('lailahaillallah-decrement');

allahhuakbarCount = document.getElementById('allahhuakbar-count');
allahhuakbarIncrement = document.getElementById('allahhuakbar-increment');
allahhuakbarDecrement = document.getElementById('allahhuakbar-decrement');

resetBtn = document.getElementById('reset-btn');


let subhanallahInitialCount = 0;
let alhamdulillahInitialCount = 0;
let allahhuakbarInitialCount = 0;
let lailahaillallahInitialCount = 0;

// Subhan Allah 
subhanallahIncrement.addEventListener('click', function () {

  if(subhanallahInitialCount === 33){
  return alert('You Have Reached Your Limit!');
  }

  subhanallahInitialCount += 1;
  subhanallahCount.innerText = subhanallahInitialCount;
})
subhanallahDecrement.addEventListener('click', function () {

if(subhanallahInitialCount === 0){
  return alert('Pray More')
}

  subhanallahInitialCount -= 1;
  subhanallahCount.innerText = subhanallahInitialCount;
})


// Alhamdulillah
alhamdulillahIncrement.addEventListener('click' , function(){
  if(alhamdulillahInitialCount === 33){
    return alert('You Have Reached Your Limit!');
  }

  alhamdulillahInitialCount += 1;
  alhamdulillahCount.innerText = alhamdulillahInitialCount;
}) 
alhamdulillahDecrement.addEventListener('click' , function(){
  if(alhamdulillahInitialCount === 0){
    return alert('Pray More')
  }

  alhamdulillahInitialCount -= 1;
  alhamdulillahCount.innerText = alhamdulillahInitialCount;
})

// La Ilaha Illallah
lailahaillallahIncrement.addEventListener('click' , function(){
  if(lailahaillallahInitialCount === 33){
    return alert('You Have Reached Your Limit!');
  }

  lailahaillallahInitialCount += 1;
  lailahaillallahCount.innerText = lailahaillallahInitialCount;
}) 
lailahaillallahDecrement.addEventListener('click' , function(){
  if(lailahaillallahInitialCount === 0){
    return alert('Pray More')
  }

  lailahaillallahInitialCount -= 1;
  lailahaillallahCount.innerText = lailahaillallahInitialCount;
})


// Allah Hu Akbar
allahhuakbarIncrement.addEventListener('click' , function(){
  if(allahhuakbarInitialCount === 33){
    return alert('You Have Reached Your Limit!');
  }

  allahhuakbarInitialCount += 1;
  allahhuakbarCount.innerText = allahhuakbarInitialCount;
})

allahhuakbarDecrement.addEventListener('click' , function(){
  if(allahhuakbarInitialCount === 0){
    return alert('Pray More')
  }

  allahhuakbarInitialCount -= 1;
  allahhuakbarCount.innerText = allahhuakbarInitialCount;
})


// Reset part
resetBtn.addEventListener('click' , function(){
  subhanallahCount.innerText = 0;
  subhanallahInitialCount = 0;

  alhamdulillahCount.innerText = 0;
  alhamdulillahInitialCount = 0;

  lailahaillallahCount.innerText = 0;
  lailahaillallahInitialCount = 0;

  allahhuakbarCount.innerText = 0;
  allahhuakbarInitialCount = 0;
})