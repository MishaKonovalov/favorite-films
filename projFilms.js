'use strict';

const personalMuvieDB = {
    count : 0,
    muvies : {},
    actors : {},
    genres : [],
    privat : false,
    start : function(){
        this.count = +prompt("сколько фильмов вы посмотрели: ", "");
    
        while(this.count == "" || this.count == null || isNaN(this.count)){
            this.count = +prompt("сколько фильмов вы посмотрели: ", "");
        }
    },

    rememberMyFilm : function (){
        for(let i = 0; i < 2; i++){
            let a = prompt("Какой последний фильм вы смотрели"),
                b = prompt("на сколько вы его оцените");
                if(a != null && a != "" && b != null && b != "" && a.length < 50){
                    this.muvies[a] = b;
                    console.log("done");
                }else{
                    console.log("error!");
                    i--;
                }
        } 
    },

    detectPersonalLevel : function(){
        if(this.count < 10){
            console.log("Просмотренно мало фильмов");
        }else if(this.count >= 10 && this.count < 30){
            console.log("Вы класический зритель");
        }else if(this.count >= 30){
            console.log("Вы киноман");
        }else{
            console.log("Произошла ошибка");
        }
    },

    showMyDB : function(hidden){
        if(!hidden){
            console.log(this);
        }
    },

    toggleVisibleMyDB : function(){
       this.privat = (this.privat) ? false : true;
       console.log(this.privat)
    },

    writeYouGenres : function(){
        for(let i = 1; i < 2; i++){
            const genre = (prompt(`Введите ваши любимые жанры через запятую`));
            if(genre == null || genre == "") {
                console.log("вы ввели некоректные данные");
                i-- ; 
            } else {
                personalMuvieDB.genres = genre.split(", ");
            }
            
        }
        personalMuvieDB.genres.forEach((element, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${element}`)
        });
    }
};







