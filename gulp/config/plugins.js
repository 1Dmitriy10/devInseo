import replace from "gulp-replace"  //Поиск и замена
import plumber from "gulp-plumber"  //Обработка ошибок
import notify from "gulp-notify"  //Сообщения(подсказки)
import browserSync from "browser-sync"  //Локальный сервер
import newer from "gulp-newer"  //Обновляет только новые картинки
import ifPlugin from "gulp-if"  //Условное ветвление
import sharpResponsive from 'gulp-sharp-responsive'; //Адаптивные варианты изображений

//Экспортируем объект
export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    browserSync: browserSync,
    newer: newer,
    if: ifPlugin,
    sharpResponsive: sharpResponsive
}