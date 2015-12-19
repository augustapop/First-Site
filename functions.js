console.info("page loaded");
var person = {
    employed: true,
    age: 29,
    name: 'First Last',
    skills: ['html', 'css', 'js']
};
console.debug(person);
console.info(person.name);
console.debug(person.age);
console.debug(person.employed);
function getInfo(name) {
    var msg = "Hello " + name + ", " +
        "welcome at FastTrackIT.";
    return msg;
}
// store result of call to function
var info = getInfo("Ioana");
console.info(info);
var banner = document.getElementById("banner");
banner.innerHTML=info;
var links=document.getElementsByTagName("a");
links[0].onclick=function()
{
    var text=this.innerHTML;
    console.info('click on the link',text);
    var agendaLista=document.getElementsByClassName('lista-agenda');
    if(text=='HOME')
    {
        agendaLista[0].style.display='none';
    }
    else
    {
        agendaLista[0].style.display='block';
    }
}
