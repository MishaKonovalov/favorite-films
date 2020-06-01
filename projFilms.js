'use strict';
let numberOfFilms;
function start(){
    numberOfFilms = +prompt("сколько фильмов вы посмотрели: ", "");

    while(numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("сколько фильмов вы посмотрели: ", "");
    }
}
//start();

const personalMuvieDB = {
    count : numberOfFilms,
    muvies : {},
    actors : {},
    genres : [],
    privat : false
};

function rememberMyFilm(){
    for(let i = 0; i < 2; i++){
        let a = prompt("Какой последний фильм вы смотрели"),
            b = prompt("на сколько вы его оцените");
            if(a != null && a != "" && b != null && b != "" && a.length < 50){
                personalMuvieDB.muvies[a] = b;
                console.log("done");
            }else{
                console.log("error!");
                i--;
            }
    } 
}
//rememberMyFilm();

function detectPersonalLevel(){
    if(personalMuvieDB.count < 10){
        console.log("Просмотренно мало фильмов");
    }else if(personalMuvieDB.count >= 10 && personalMuvieDB.count < 30){
        console.log("Вы класический зритель");
    }else if(personalMuvieDB.count >= 30){
        console.log("Вы киноман");
    }else{
        console.log("Произошла ошибка");
    }
}
//detectPersonalLevel();

function showMyDB(hidden){
    if(!hidden){
        console.log(personalMuvieDB);
    }
}
//showMyDB(personalMuvieDB.privat);

function writeYouGenres(){
    for(let i = 1; i <= 3; i++){
        personalMuvieDB.genres.push(prompt(`Какой ваш любимый жанр по номером ${i}`));
    }
}

writeYouGenres();
console.log(personalMuvieDB);
