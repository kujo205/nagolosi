if(window.localStorage.Errs===undefined){
    window.localStorage.setItem('Errs',',')
}
const ls={
    add:function(word){
    let errs = localStorage.getItem('Errs').split(',').filter(e=>e!=='');
    if(!errs.some(e=>e===word)){errs.push(word)}
    localStorage.removeItem('Errs');
    localStorage.setItem('Errs',errs);},

    get:function(){
        return localStorage.getItem('Errs').split(',').filter(e=>e!=='');
    },

    remove:function(word){
        let errs=ls.get().filter(el=>el!==word);
        localStorage.removeItem('Errs');
        localStorage.setItem('Errs',errs);
    }
    
}
let shuffle = document.querySelector('#shuffle');
let words = 'агронОмія алфАвІт Аркушик асиметрІя багаторазОвий безпринцИпний бЕшкет блАговіст близькИй болотИстий борОдавка босОніж боЯзнь бурштинОвий бюлетЕнь вАги(множина) вантажІвка вИгода(користь) веснЯнИй вигОда(зручність) видАння визвОльний вимОга вИпадок вирАзний вИсіти вИтрата вишИваний відвезтИ відвестИ вІдгомін вІдомість(список) віднестИ відОмість(популярність) вІрші віршовИй вітчИм гальмО гАльма глядАч горошИна граблІ гуртОжиток данИна дАно децимЕтр дЕщиця де-Юре джерелО дИвлячись дичАвіти діалОг добовИй добУток довезтИ довестИ довІдник дОгмат донестИ дОнька дочкА дрОва експЕрт єретИк жалюзІ завдАння завезтИ завестИ зАвждИ завчасУ зАгадка заіржАвілий заіржАвіти закінчИти зАкладка(книжна) зАкрутка залишИти замІжня занестИ зАпонка заробІток зАставка зАстібка застОпорити звИсока здАлека зібрАння зобразИти зОзла зрАння зрУчний зубОжіння індУстрія кАмбала каталОг квартАл кИшка кіломЕтр кінчИти кОлесо кОлія кОпчений(дієприкметник) корИсний копчЕний(прикметник) кОсий котрИй крицЕвий крОїти кропивА кулінАрія кУрятина лАте листопАд літОпис лЮстро мАбУть магістЕрський мАркетинг мерЕжа металУргія мілімЕтр навчАння нанестИ напІй нАскрізний нАчинка ненАвидіти ненАвисний ненАвисть нестИ нІздря новИй обіцЯнка обрАння обрУч(іменник) одинАдцять одноразОвий ознАка Олень оптОвий осетЕр отАман Оцет павИч партЕр пЕкарський перевезтИ перевестИ перЕкис перелЯк перенестИ перЕпад перЕпис піалА пІдданий(дієприкметник) піддАний(іменник) пІдлітковий пізнАння пітнИй піцЕрія пОдруга пОзначка пОмИлка помІщик помОвчати понЯття порядкОвий посерЕдині привезтИ привестИ прИморозок принестИ прИчіп прОділ промІжок псевдонІм рАзом рЕмінь(пояс) рЕшето рИнковий рівнИна роздрібнИй рОзпірка рукОпис руслО сантимЕтр свЕрдло серЕдина сЕча симетрІя сільськогосподАрський сімдесЯт слИна соломИнка стАтуя стовідсОтковий стрибАти текстовИй течіЯ тИгровий тисОвий тім’янИй травестІя тризУб тУлуб украЇнський уподОбання урочИстий усерЕдині фартУх фаховИй фенОмен фОльга фОрзац хАос(стихія) хаОс(безлад) цАрина цемЕнт цЕнтнер ціннИк чарівнИй черговИй читАння чорнОзем чорнОслив чотирнАдцять шляхопровІд шовкОвий шофЕр щЕлепа щИпці щодобовИй ярмаркОвий'.split(' ');
let words1=[...words];
let nav = document.querySelector('nav')
let start = document.querySelector('#start');
let errors = document.querySelector('#errors');
let info = document.querySelector('#info');
let next = document.querySelector('#next');
let Stop = document.querySelector('#stop');
let content = document.getElementById('content');
let expl = document.getElementById('explanation');
let h2=document.querySelector('h2');
let isStart=true;
content.innerHTML = '';
expl.innerHTML = '';
let number = 0;
let mistakes = 0;
let counter=0;
let word;
let section=document.querySelector('section');
let posVar = [];
function idResult(){
    let output, rate=((counter-mistakes)/counter);

        if(rate < 0.33||counter===0) output='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlW54pt0dYQvK2VQA0uZnFiN0iHY7xDDpYvQ&usqp=CAU';
        else if(rate > 0.33 && rate < 0.66) output='https://yt3.ggpht.com/a/AATXAJwTyUtHkB2L2JjhLUSXb4ymzggw7K67_gkWvn_4ng=s900-c-k-c0xffffffff-no-rj-mo';
        else if(rate > 0.66) output='https://media1.giphy.com/media/UtcBRO8cxulRzkrVLc/200.gif';
    

    return `<br><img class="succes-img" src="${output}" alt="Тут мала бути картинка з мемом">`

}
var StHandl = function(){
    content.innerHTML = ' ';
    isStart=true;
    hideEl(errors,start,shuffle);
    showEl(next,Stop);
    fillContent(words[number])
    next.addEventListener('click',fill)
}
function hideEl(...args) {
    args.forEach(e => e.classList.add('hide'))
}
function showEl(...args) {
    args.forEach(e => e.classList.remove('hide'))
}
function infohandl(){
    let main=document.querySelector('main').classList.add('hide');
    section.classList.add('sectione')
    showEl(section,h2);
    
    for(let i=0;i<3;i++){
        for(let j=0;j<78;j++){
            Array.from(section.children)[i].innerHTML+=words1[78*i+j]+'<br>';
        }
    }
}

shuffle.addEventListener('click',(e)=>{
    words = words.sort((a, b) => 0.5 - Math.random());
    StHandl()
})
start.addEventListener('click',StHandl)


h2.addEventListener('click',()=>{
    hideEl(h2,section);
    section.classList.remove('sectione')
    showEl(document.querySelector('main'));
});
info.addEventListener('click',infohandl);

errors.addEventListener('click',(e)=>{
    if(ls.get().length===0){
        content.innerHTML ='<p>У вас поки немає помилок!</p>'
        e.preventDefault();
    }
    else{
    content.innerHTML = ' ';
    isStart=false;
    hideEl(errors,start,shuffle);
    showEl(next,Stop);
    fillContent(ls.get()[number])
    next.addEventListener('click',fill)}
})
Stop.addEventListener('click',(e)=>{
    next.removeEventListener('click',fill);
    content.innerHTML = ' ';
    content.innerHTML = `<p>Ваш результат: ${counter-mistakes} з ${counter}</p>${idResult()}`;
    
    words=[...words1]
    posVar = [];
    number = 0;
    counter=0;
    mistakes = 0;
    expl.innerHTML = '';
    hideEl(next,Stop);
    showEl(errors,start,shuffle);
    
})
const fill=function(){
    content.innerHTML='';
    posVar=[];
    if(isStart&&number<words.length){
        fillContent(words[number])
    }
    else if(!isStart&&number<ls.get().length){
        fillContent(ls.get()[number])
    }
    else{
        content.innerHTML=`<p>Дякую за участь,ви повторили ${counter} слів</p>`;
    }
}


content.addEventListener('click',(e)=>{
    if(e.target.classList.contains('variant')&&!e.target.classList.contains('inactive')){
        if(isStart){
            check(words[number],e)
        }
        else{
            check(ls.get()[number],e)
        }
        
    }
})
    const check=function(word,e){

        let m = word.indexOf('(');  //шукаємо індекс скобки якшо такий є
        if (m !== -1) {         // якшо є тто вирізаємо саме слово без скоби
            word = word.substring(0, m)  
        }
        for (let g = 0; g < word.length; g++) {
            if (word[g].search(/[АЕЄИІЇОУЮЯ]/) == 0) {   //шукаємо всі можливі правильні варіанти наголосів
                posVar.push(word.substring(0, g).toLowerCase() + word[g].toUpperCase() + word.substring(g + 1).toLowerCase())
            }
        }
        e.target.classList.add('chosen');
        counter++;
        Array.from(content.children).forEach(elm=>{elm.classList.add('inactive');if(posVar.some(w=>w===elm.innerHTML))
            {elm.classList.add('correct')}
            else {elm.classList.add('wrong')}

        })
        Array.from(content.children).forEach(elm=>{if(elm.classList.contains('chosen')&&elm.classList.contains('wrong')){ls.add(words[number]);mistakes++;}})
        Array.from(content.children).forEach(elm=>{if(!isStart&&elm.classList.contains('chosen')&&elm.classList.contains('correct')){ls.remove(ls.get()[number]);number--}})
        posVar=[];
        number++;
    }
const fillContent=function(word){
    let forms = [];
    let m = word.indexOf('(');  //шукаємо індекс скобки якшо такий є
    let leftover = '';
    if (m !== -1) {         // якшо є тто вирізаємо саме слово без скоби
        leftover = word.substring(m);  //те шо в дужках вирізаємо
        word = word.substring(0, m)  
    }
    word = word.toLowerCase()
    for (let o = 0; o < word.length; o++) {
        if (word[o].search(/[АЕЄИІЇОУЮЯаеєиіїоуюя]/) !== -1) { forms.push(word.substring(0, o) + word[o].toUpperCase() + word.substring(o + 1)) }
    }
    forms.forEach(e => { content.innerHTML += `<div class="variant">${e}</div>` });
    expl.innerHTML=leftover;
    
}