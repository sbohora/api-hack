'use strict'

function createImgTag(imgSrc) {
    return `<img class = "results-img" src="${imgSrc}" style="height:250px;width:250px;margin:5px" alt='random pic'/>`;
}

function getDogImage() {
    let inputVal = $('#count').val();
    fetch(`https://dog.ceo/api/breeds/image/random/${inputVal}`)
    .then(response => response.json())
    .then(responseJSON => displayResults(responseJSON))
    .catch(error => alert(error))
}

function getDogBreedImage() {
    let inputBreed = $('#breed').val();
    fetch(`https://dog.ceo/api/breed/${inputBreed}/images/random`)
    .then(response => response.json())
    .then(responseJSON => 
        $('#image-container').html(createImgTag(responseJSON.message)))
    .catch(error => alert(error))
    $('.results').removeClass('hidden');
}

function displayResults(responseJSON) {
    console.log(responseJSON);
    $('#image-container').html(responseJSON.message.map(createImgTag))
    $('.results').removeClass('hidden');
}

function watchForm() {
    $('#js-random-dog-form').submit(event => {
        event.preventDefault();
        getDogImage();
    })

    $('#js-breed-dog-form').submit(event => {
        event.preventDefault();
        getDogBreedImage();
    })
}

$(function(){
    console.log("App loaded! Waiting to submit!!!");
    watchForm();
})