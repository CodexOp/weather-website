

// console.log("client side js is runnning");
// fetch('http://puzzle.mead.io/puzzle').then((response)=>{
// response.json().then((data)=>{
// console.log(data)
// })
// }) 



const weather_form = document.querySelector('form')
const search = document.querySelector('input')
const messageone = document.querySelector('.messg1')
const messagtwo = document.querySelector('.messg2')

messageone.textContent = "Loading...";

messagtwo.textContent = '';


weather_form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const location = search.value;
console.log(location);


fetch(`http://localhost:3000/weather?address=${location}`).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            console.log(data.error)
            messageone.textContent = data.error;
        }
        else{
            console.log(data.location);
            console.log(data.forecast);
            messageone.textContent = data.location;
            messagtwo.textContent = data.forecast;

        }
    
    })
})


})

