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
        text: ['У меня рецидив рака, Гус'],
        haveChoice: true,
        choice: ['У меня рак','У меня окунь']
    },
    {
        name:"Guz",
        img: 'url(https://avatars.dzeninfra.ru/get-zen_doc/1707183/pub_5da934efa06eaf00b1dc30f8_5da9369f8f011100ae3a7fb6/scale_1200)',
        text: ['В каком смысле, Calter'],
        isChosen: false
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
        text: ['Трр-трр-трр','Трр-трр','Джесси, где ты?']
    },
    {
        name:"Jussy",
        img: 'url(Jussy.jpg)',
        text: ['Йоу, вы позвонили Джесси. Меня нет дома, так что оставь сообщение, $d@*a%']
    },
    {
        name:"Сalter",
        img: 'url(https://masterpiecer-images.s3.yandex.net/5fbce33bdcf224f:upscaled)',
        text: ['Ты опять съел весь вискас, Джесси?', 'Я расстворю тебя в лотке, Джесси'],
        

    },
    

]
let active_counter = 0
let active_hero = heroes[active_counter]


let page_image = document.querySelector('.image')
let hero_area = document.querySelector('.text_container')
let hero_name = document.querySelector('.name')
let hero_text = document.querySelector('.text')

page_image.style.backgroundImage = active_hero.img
hero_name.innerHTML = active_hero.name
hero_text.innerHTML = active_hero.text[0]

let text_counter = 0

hero_area.addEventListener('click', function(){
    
    if (text_counter == active_hero.text.length - 1){
        text_counter = 0
        active_counter ++
        active_hero = heroes[active_counter]
        page_image.style.backgroundImage = active_hero.img
        hero_name.innerHTML = active_hero.name
        if (active_hero.haveChoice == true){
            hero_text.innerHTML = `
            <ul>
            <li class="choice_one">${active_hero.choice[0]}</li>
            <li class="choice_two">${active_hero.choice[1]}</li>
            </ul>
            `
            let choiceOneBtn = document.querySelector('.choice_one')
            choiceOneBtn.addEventListener('click', function(){
                heroes[3].text[0]="Иди в лабу"
            })
            let choiceTwoBtn = document.querySelector('.choice_two')
            choiceTwoBtn.addEventListener('click', function(){
                heroes[3].text[0]="Дай потрогать"
            })
        }
        else{
            hero_text.innerHTML = active_hero.text[0]
        }
        
    }else{
        text_counter ++
        
        if (active_hero.haveChoice == true){
            hero_text.innerHTML = `
            <ul>
            <li class="choice_one">${active_hero.choice[0]}</li>
            <li class="choice_two">${active_hero.choice[1]}</li>
            </ul>
            `
            let choiceOneBtn = document.querySelector('.choice_one')
            choiceOneBtn.addEventListener('click', function(){
                heroes[3].text[0]="Иди в лабу"
            })
            let choiceTwoBtn = document.querySelector('.choice_two')
            choiceTwoBtn.addEventListener('click', function(){
                heroes[3].text[0]="Дай потрогать"
            })
        }
        else{
            hero_text.innerHTML = active_hero.text[text_counter]
        }
    }
    
})




// let btns = document.querySelectorAll('.btn')

// btns.forEach(btn => {
//     btn.addEventListener('click', function(){
//         console.log('hello');
//     })
// })




