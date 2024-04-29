// массив с экранами персонажей
// в ключевых экранах есть свойство haveChoice со значением true. Это значит, что в этот момент появится выбор с 2 вариантами ответов
// выбор хранится в ключевых экранах в свойстве choice в виде массива
let heroes = [
    {
        name:"Сalter",
        img: 'url(https://limvet.ru/wp-content/uploads/2018/09/utas_siberian_cat_00.jpg)',
        text: ['Хрррр', 'пи-пи-пи-пи']
    },
    {
        name:"Guz",
        img: 'url(https://avatars.dzeninfra.ru/get-zen_doc/1707183/pub_5da934efa06eaf00b1dc30f8_5da9369f8f011100ae3a7fb6/scale_1200)',
        text: ['Calter, убери свой хвост, Calter', 'Я не буду заниматься с тобой хрр пи-пи-пи-пи, Calter', 'Проснись, Calter. Пора варить вискас']
    },
    {
        name:"Сalter",
        img: 'url(https://limvet.ru/wp-content/uploads/2018/09/utas_siberian_cat_00.jpg)',
        text: [''], // необходимо оставлять хотя бы пустую строку для работы вариантов
        haveChoice: true, // показывает, что персонаж имеет выбор
        choice: ['У меня рак','У меня окунь'] // варианты ответов
    },
    {
        name:"Guz",
        img: 'url(https://avatars.dzeninfra.ru/get-zen_doc/1707183/pub_5da934efa06eaf00b1dc30f8_5da9369f8f011100ae3a7fb6/scale_1200)',
        text: ['В каком смысле, Calter'],
        answer: ['Иди в лабу', 'Дай потрогать'] // ответы на выбор
    },
    {
        name:"Сalter",
        img: 'url(https://kartinki.pics/uploads/posts/2022-12/1670615864_1-kartinkin-net-p-kartinki-lisikh-kotov-vkontakte-1.jpg)',
        text: ['В прямом, Гус'],
 
    },
    {
        name:"Guz",
        img: 'url(https://kartinki.pics/pics/uploads/posts/2022-07/thumbs/1658314144_3-kartinkin-net-p-chernii-sfinks-zhivotnie-krasivo-foto-3.jpg)',
        text: ['Calter, я думал ты бреешься по приколу, как и я']
    },
    {
        name:"Сalter",
        img: 'url(https://kartinki.pics/uploads/posts/2022-12/1670615864_1-kartinkin-net-p-kartinki-lisikh-kotov-vkontakte-1.jpg)',
        text: ['Нет, Гус. Я болен']
    },
    {
        name:"Guz",
        img: 'url(https://kartinki.pics/pics/uploads/posts/2022-07/thumbs/1658314144_3-kartinkin-net-p-chernii-sfinks-zhivotnie-krasivo-foto-3.jpg)',
        text: ['Calter, если бы ты знал, насколько мне все равно.', 'Самое главное, чтобы ты вернулся в лабу и начал варить долбаный вискас, Calter', 'И где этот придурок, Джесси?']
    },
    {
        name:"Сalter",
        img: 'url(https://masterpiecer-images.s3.yandex.net/5fbce33bdcf224f:upscaled)',
        text: [''], // необходимо оставлять хотя бы пустую строку для работы вариантов
        haveChoice: true, // показывает, что персонаж имеет выбор
        choice: ['Позвонить Джесси','Позвонить Джесси'] // варианты ответов
    },
    {
        name:"Сalter",
        img: 'url(https://masterpiecer-images.s3.yandex.net/5fbce33bdcf224f:upscaled)',
        text: ['','3',],
        answer: ['Трр-трр-трр', 'Джесси, где ты?']
    },
    {
        name:"Jussy",
        img: 'url(Jussy.jpg)',
        text: ['Йоу, вы позвонили Джесси. Меня нет дома, так что оставь сообщение, $d@*a%'],
        
        
    },
    {
        name:"Сalter",
        img: 'url(https://masterpiecer-images.s3.yandex.net/5fbce33bdcf224f:upscaled)',
        text: ['Ты опять съел весь вискас, Джесси?', 'Я расстворю тебя в лотке, Джесси'],
        

    },
    

]

// счетчик для переключения между персонажами
let active_counter = 0
let active_hero = heroes[active_counter] // текущий персонаж

// сохранение элементов: главное изображение, нижнее поле, имя и текст
let page_image = document.querySelector('.image')
let hero_area = document.querySelector('.text_container')
let hero_name = document.querySelector('.name')
let hero_text = document.querySelector('.text')

// вывод на экран первого персонажа
page_image.style.backgroundImage = active_hero.img
hero_name.innerHTML = active_hero.name
hero_text.innerHTML = active_hero.text[0]

let text_counter = 0 // счетчик для отлеживания реплик в списке

// обработка клика по нижней части окна
hero_area.addEventListener('click', function(){
    
    // если у персонажа кончились реплики переключаемся на другого
    if (text_counter == active_hero.text.length - 1){

        
        text_counter = 0 // обнуление счетчика реплик
        active_counter ++ // переход к следующему персонажу
        active_hero = heroes[active_counter] //
        page_image.style.backgroundImage = active_hero.img
        hero_name.innerHTML = active_hero.name


        if (active_hero.haveChoice == true){
            hero_text.innerHTML = `
            <ul>
            <li class="choice_one">${active_hero.choice[0]}</li>
            <li class="choice_two">${active_hero.choice[1]}</li>
            </ul>
            `
            // клик на 1 вариант и установка ответа
            let choiceOneBtn = document.querySelector('.choice_one')
            choiceOneBtn.addEventListener('click', function(){
                heroes[active_counter + 1].text[0]= heroes[active_counter + 1].answer[0]
            })

            // клик на 2 вариант и установка ответа
            let choiceTwoBtn = document.querySelector('.choice_two')
            choiceTwoBtn.addEventListener('click', function(){
                heroes[active_counter + 1].text[0]= heroes[active_counter + 1].answer[1]
            })
        }
        else{
            hero_text.innerHTML = active_hero.text[0]
        }
     
    }

    // если реплики не кончились переходим к следующей
    else{
        text_counter ++ 
        
        if (active_hero.haveChoice == true){ // если персонаж является ключевым

            // вместо текста вставляем варианты ответов 
            hero_text.innerHTML = ` 
            <ul>
            <li class="choice_one">${active_hero.choice[0]}</li>
            <li class="choice_two">${active_hero.choice[1]}</li>
            </ul>
            `
            
            // обрабатываем клик на вариант ответа

            // клик на 1 вариант и установка ответа
            let choiceOneBtn = document.querySelector('.choice_one')
            choiceOneBtn.addEventListener('click', function(){
                heroes[active_counter + 1].text[0]= heroes[active_counter + 1].answer[0]
            })

            // клик на 2 вариант и установка ответа
            let choiceTwoBtn = document.querySelector('.choice_two')
            choiceTwoBtn.addEventListener('click', function(){
                heroes[active_counter + 1].text[0]= heroes[active_counter + 1].answer[1]
            })
        }
        else{
            hero_text.innerHTML = active_hero.text[text_counter]
        }
    }
    
})






