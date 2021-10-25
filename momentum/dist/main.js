(()=>{"use strict";(()=>{const t=[{title:"Aqua Caelestis",src:"./assets/sounds/Aqua Caelestis.mp3",duration:"00:58"},{title:"River Flows In You",src:"./assets/sounds/River Flows In You.mp3",duration:"03:50"},{title:"Summer Wind",src:"./assets/sounds/Summer Wind.mp3",duration:"03:50"},{title:"Ennio Morricone",src:"./assets/sounds/Ennio Morricone.mp3",duration:"03:50"}],e={en:["Good night,","Good morning,","Good afternoon,","Good evening,"],ru:["Спокойной ночи,","Доброе утро,","Добрый день,","Добрый вечер,"]},o=JSON.parse('{"quotes":[{"quote":"Пишите код так, как будто сопровождать его будет склонный к насилию психопат, который знает, где вы живете","author":"Стив Макконнелл"},{"quote":"Сложность программы растет до тех пор, пока не превысит способности программиста","author":"Артур Блох. Законы Мэрфи"},{"quote":"Ходить по воде и разрабатывать программы, следуя ТЗ, очень просто… если они заморожены","author":"Наполеон Хилл"},{"quote":"Стремитесь не к успеху, а к ценностям, которые он дает","author":"Альберт Эйнштейн"},{"quote":" Своим успехом я обязана тому, что никогда не оправдывалась и не принимала оправданий от других","author":"Флоренс Найтингейл"},{"quote":"Сложнее всего начать действовать, все остальное зависит только от упорства","author":"Амелия Эрхарт"},{"quote":"Надо любить жизнь больше, чем смысл жизни","author":"Федор Достоевский"},{"quote":"Жизнь - это то, что с тобой происходит, пока ты строишь планы","author":"Джон Леннон"},{"quote":"Начинать всегда стоит с того, что сеет сомнения","author":"Борис Стругацкий"},{"quote":"Настоящая ответственность бывает только личной","author":"Фазиль Искандер"},{"quote":"Неосмысленная жизнь не стоит того, чтобы жить","author":"Сократ"},{"quote":"80% успеха - это появиться в нужном месте в нужное время","author":"Вуди Аллен"},{"quote":"Ваше время ограничено, не тратьте его, живя чужой жизнью","author":"Стив Джобс"},{"quote":"Победа - это еще не все, все - это постоянное желание побеждать","author":"Винс Ломбарди"},{"quote":"Наука — это организованные знания, мудрость — это организованная жизнь","author":"Иммануил Кант"},{"quote":"В моем словаре нет слова «невозможно»","author":"Наполеон Бонапарт"},{"quote":"Вы никогда не пересечете океан, если не наберетесь мужества потерять берег из виду","author":"Христофор Колумб"},{"quote":"Свобода ничего не стоит, если она не включает в себя свободу ошибаться","author":"Махатма Ганди"},{"quote":"Либо вы управляете вашим днем, либо день управляет вами","author":"Джим Рон"},{"quote":"Лучшая месть – огромный успех","author":"Фрэнк Синатра"},{"quote":"Упади семь раз и восемь раз поднимись","author":"Японская поговорка"},{"quote":"У всего есть своя красота, но не каждый может ее увидеть","author":"Конфуций"},{"quote":"Как прекрасно, что не нужно ждать ни минуты, чтобы начать делать мир лучше","author":"Анна Франк"},{"quote":"Когда я освобождаюсь от того, кто я есть, я становлюсь тем, кем я могу быть","author":"Лао Цзы"},{"quote":"Счастье – это не нечто готовое. Счастье зависит только от ваших действий","author":"Далай Лама"},{"quote":"Если нет ветра, беритесь за вёсла","author":"Латинская поговорка"},{"quote":"Успех — это способность идти от поражения к поражению, не теряя оптимизма","author":"Уинстон Черчилль"},{"quote":"Каждый хочет изменить человечество, но никто не задумывается о том, как изменить себя","author":"Лев Толстой"},{"quote":"Важно верить, что талант нам даётся не просто так – и что любой ценой его нужно для чего-то использовать","author":"Мари Кюри"},{"quote":"Определенность цели - отправная точка всех достижений","author":"Уильям Клемент Стоун"},{"quote":"Мы становимся тем, о чем мы думаем","author":"Эрл Найтингейл"},{"quote":"Я не жертва обстоятельств, я - результат моих решений","author":"Стивен Кови"},{"quote":"Все дети - художники. Проблема в том, чтобы остаться художником, когда ты вырос","author":"Пабло Пикассо"},{"quote":"Я не провалил тест. Я просто нашел сто способов написать его неправильно","author":"Бенджамин Франклин"},{"quote":"Поражение – не поражение, если только вы не признаете его таковым в своем сознании","author":"Брюс Ли"},{"quote":"Неудача – это просто возможность начать снова, но уже более мудро","author":"Генри Форд"},{"quote":"Я уверен: нельзя позволять, чтобы тебя остановило убогое словцо «нельзя»","author":"Ричард Брэнсон"},{"quote":"Никогда не делает ошибок только тот, кто не пробует ничего нового","author":"Альберт Эйнштейн"},{"quote":"Ты становишься тем, во что веришь","author":"Опра Уинфри"},{"quote":"Счастье не в том, чтобы делать всегда, что хочешь, а в том, чтобы всегда хотеть того, что делаешь","author":"Лев Толстой"},{"quote":"Я лучше умру от страсти, чем от скуки","author":"Винсент ван Гог"},{"quote":"Наше сознание - это все. Вы становитесь тем, о чем думаете","author":"Будда"},{"quote":"Не столь важно, как медленно ты идешь, как то, как долго ты идешь, не останавливаясь","author":"Конфуций"},{"quote":"Чтобы вести людей за собой, иди за ними","author":"Лао Цзы"},{"quote":"Запомните, что не достичь успеха – иногда тоже большая удача","author":"Далай Лама"},{"quote":"Всегда выбирайте самый трудный путь - на нем вы не встретите конкурентов","author":"Шарль де Голль"},{"quote":"Одна законченная результативная задача стоит полусотни полузаконченных задач","author":"Малкольм Форбс"},{"quote":"Наша жизнь начинает подходить к концу, когда мы перестаём говорить о действительно важных вещах","author":"Мартин Лютер Кинг"},{"quote":"Беда не приходит одна, но и удача тоже","author":"Ромен Роллан"},{"quote":"Всякая мысль подобна тесту, стоит помять ее хорошенько — все из нее сделаешь","author":"Иван Тургенев"},{"quote":"Делай все, что можешь, там, где ты находишься, используя все, что имеешьо","author":"Теодор Рузвельт"},{"quote":"Единственное счастье в жизни — это постоянное стремление вперед","author":"Эмиль Золя"},{"quote":"Выживает не самый сильный, а самый восприимчивый к переменам","author":"Чарльз Дарвин"},{"quote":"Ни разу не упасть — не самая большая заслуга в жизни. Главное каждый раз подниматься","author":"Нельсон Мандела"},{"quote":"Вопрос не в том, кто мне разрешит, а в том, кто сможет мне запретить","author":"Айн Рэнд"},{"quote":"Жизнь меряется не тем, сколько в ней лет, а тем, сколько в этих годах настоящей жизни","author":"Авраам Линкольн"},{"quote":"Приносить пользу миру — это единственный способ стать счастливым","author":"Ханс Кристиан Андерсен"},{"quote":"Либо напиши что-нибудь стоящее, либо делай что-нибудь, о чем стоит написать","author":"Бенджамин Франклин"},{"quote":"Единственный способ сделать что-то очень хорошо – любить то, что ты делаешь","author":"Стив Джобс"},{"quote":"Велики те, кто видит, что миром правят мысли","author":"Ральф Эмерсон"},{"quote":"У истоков каждого успешного предприятия стоит однажды принятое смелое решение","author":"Питер Друкер"}]}');let n;const u={en:"[Enter your name]",ru:"[Введите ваше имя]"},r=document.querySelector(".name");let a;function c(){const t=document.querySelector(".time"),e=(new Date).toLocaleTimeString();t.textContent=e,function(t="en-EN"){console.log(t);const e=document.querySelector(".date"),o=(new Date).toLocaleDateString(`${t}`,{weekday:"long",month:"long",day:"numeric"});e.textContent=o}(n),setTimeout(c,1e3),s(a)}function s(t="en"){const o=document.querySelector(".greeting"),n=function(){const t=(new Date).getHours();return 24===t||t<6?0:t<12?1:t<18?2:t<24?3:void 0}();o.textContent=e[t][n],r.placeholder=u[t]}c();const i=document.querySelector(".name");let d;function l(t,e){return Math.floor(Math.random()*(e-t+1))+t}function m(){const t=function(){const t=(new Date).getHours();return 24===t||t<6?"night":t<12?"morning":t<18?"afternoon":t<24?"evening":void 0}(),e=d<10?`0${d}`:d,o=new Image,n=`https://raw.githubusercontent.com/Anasstassia/stage1-tasks/assets/images/${t}/${e}.jpg`;o.src=n,o.onload=()=>{document.body.style.backgroundImage=`url(${n})`}}window.addEventListener("beforeunload",(function(){localStorage.setItem("name",i.value)})),window.addEventListener("load",(function(){localStorage.getItem("name")&&(i.value=localStorage.getItem("name"))})),d=l(1,20),m();const q=document.querySelector(".slide-next"),h=document.querySelector(".slide-prev");q.addEventListener("click",(function(){20==+d&&(d=0),d++,m()})),h.addEventListener("click",(function(){1==+d&&(d=21),d--,m()}));const y=document.querySelector(".weather-icon"),g=document.querySelector(".temperature"),S=document.querySelector(".wind"),p=document.querySelector(".humidity"),v=document.querySelector(".weather-description"),w=document.querySelector(".city"),f=document.querySelector(".weather-error");async function L(t,e="en"){w.value=t;const o=`https://api.openweathermap.org/data/2.5/weather?q=${t}&lang=${e}&appid=ba499dceea3b725ead8e60cb81d7ecb1&units=metric`,n=await fetch(o),u=await n.json();200!==u.cod?(f.textContent="Введите верный город",g.textContent="",v.textContent="",S.textContent="",p.textContent="",y.className=""):(f.textContent="",localStorage.setItem("city",t),y.className="weather-icon owf",y.classList.add(`owf-${u.weather[0].id}`),g.textContent=`${Math.round(u.main.temp)}°C`,v.textContent=u.weather[0].description,S.textContent=`Wind speed: ${Math.round(u.wind.speed)} m/s`,p.textContent=`Humidity: ${Math.round(u.main.humidity)} %`,"ru"===e&&(S.textContent=`Скорость ветра: ${Math.round(u.wind.speed)} м/с`,p.textContent=`Влажность: ${Math.round(u.main.humidity)} %`))}L(localStorage.getItem("city")||"Minsk"),w.addEventListener("change",(function(t){L(t.target.value)}));const E=document.querySelector(".quote"),C=document.querySelector(".author"),x=document.querySelector(".change-quote");async function I(t="en"){let e;const n=l(1,100);if("en"===t){const t="https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json",o=await fetch(t);e=await o.json()}else e=o;E.textContent=e.quotes[n]?.quote||e.quotes[0].quote,C.textContent=e.quotes[n]?.author||e.quotes[0].author}I(a),x.addEventListener("click",(()=>I(a)));const $=document.querySelector(".name-music"),k=document.querySelector(".play"),b=document.querySelector(".play-prev"),M=document.querySelector(".play-next"),D=new Audio;let A=!1,N=0;function R(){D.src=t[N].src,D.currentTime=0,D.onended=function(){this.src=t[N+1].src,j()},A?(D.pause(),A=!1):(T(),D.play(),A=!0),document.querySelectorAll(".play-item").forEach((t=>t.classList.remove("item-active"))),document.querySelectorAll(".play-item")[N].classList.add("item-active"),$.textContent=t[N].title}function T(){A?k.classList.remove("pause"):k.classList.add("pause")}function j(){A=!1,3===N?N=0:N++,R()}k.addEventListener("click",T),k.addEventListener("click",R),M.addEventListener("click",(()=>{j()})),b.addEventListener("click",(()=>{A=!1,0===N?N=3:N--,R()}));const G=document.querySelector(".play-list");t.forEach(((e,o)=>{const n=document.createElement("li");n.classList.add("play-item"),n.textContent=`${t[o].title}`,G.append(n)}));const H=document.querySelector(".audio-player");D.addEventListener("loadeddata",(()=>{H.querySelector(".time-music .length").textContent=F(D.duration),D.volume=.75}),!1);const W=H.querySelector(".timeline");function F(t){let e=parseInt(t),o=parseInt(e/60);e-=60*o;const n=parseInt(o/60);return o-=60*n,0===n?`${o}:${String(e%60).padStart(2,0)}`:`${String(n).padStart(2,0)}:${o}:${String(e%60).padStart(2,0)}`}W.addEventListener("click",(t=>{const e=window.getComputedStyle(W).width,o=t.offsetX/parseInt(e)*D.duration;D.currentTime=o}),!1),setInterval((()=>{H.querySelector(".progress").style.width=D.currentTime/D.duration*100+"%",H.querySelector(".time-music .current").textContent=F(D.currentTime)}),500);const U=H.querySelector(".volume-slider");U.addEventListener("click",(t=>{const e=window.getComputedStyle(U).width,o=t.offsetX/parseInt(e);D.volume=o,H.querySelector(".volume-percentage").style.width=100*o+"%"}),!1),H.querySelector(".volume-button").addEventListener("click",(()=>{const t=H.querySelector(".volume-button");D.muted=!D.muted,D.muted?t.classList.add("background-mute"):t.classList.remove("background-mute")}));const X=document.querySelector(".settings"),Y=document.querySelector(".settings-menu");X.addEventListener("click",(()=>{Y.classList.toggle("none")}));const z=document.getElementById("select");z.addEventListener("change",(function(t){localStorage.setItem("status",z.value),"Russian"===z.value?(a="ru",s(a),L(w.value,a),new Date,n="ru-RU",c()):(a="en",s(a),L(w.value,a),n="en-EN"),I(a)})),window.addEventListener("load",(t=>{z.value=localStorage.getItem("status"),"Russian"===localStorage.getItem("status")?(a="ru",s(a),L(w.value,a),new Date,n="ru-RU",c()):(a="en",s(a),n="en-EN",L(w.value,a)),I(a)}))})()})();