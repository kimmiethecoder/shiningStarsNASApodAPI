// The user will input a date. Will fetch NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
    const choice = document.querySelector('input').value
    console.log(choice)

    const url = `https://api.nasa.gov/planetary/apod?api_key=WVyccJ8d8Ew1cS9JapFReeZh53qtg27y7KSUy2IQ&date=${choice}`

fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.getElementById('description').innerText = data.explanation
        document.getElementById('title').innerText = data.title
        if(data.media_type ==='image') {
          document.querySelector('img').src = data.hdurl
          document.querySelector('img').classList.add("img");
          document.querySelector('img').classList.remove("hidden");
          document.getElementById('videowrap').classList.add("hidden");
          document.querySelector('iframe').classList.add("hidden");
        } else if(data.media_type === "video") {
          document.querySelector('iframe').src = data.url;    
          document.querySelector('iframe').classList.add("video");
          document.getElementById('videowrap').classList.remove("hidden");
          document.querySelector('iframe').classList.remove("hidden")
          document.querySelector('img').classList.add("hidden");
        }   
    })
    .catch (error => {
        console.log(`error ${error}`)
    })
}