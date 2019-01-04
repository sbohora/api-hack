'use strict'

function getDogImage() {
    let inputVal = $('#count').val();
    fetch('https://dog.ceo/api/breeds/image/random/' + inputVal)
    .then(response => response.json())
    .then(responseJSON => displayResults(responseJSON))
    .catch(error => alert("Something went wrong!"))

}

function displayResults(responseJSON) {
    console.log(responseJSON);
    responseJSON.message.forEach(function(image){
        let img = document.createElement('img');
        img.src = image;
        img.height = "200";
        img.width = "200";
        img.style.margin = "5px"
        document.body.appendChild(img);
    });
    // $('.results-img').html(
    //     `<img src="${responseJSON.message}" class="results-img">`
    // )

    $('.results').removeClass('hidden');
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        getDogImage();
    })
}

$(function(){
    console.log("App loaded! Waiting to submit!!!");
    watchForm();
})