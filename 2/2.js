function greeting() {
    let result = prompt("Как Вас зовут? ");
    while (true){
    if(confirm("ВЫ абсолютно уверены?")){
        let msg = 'Привет,' + result;
        alert(msg);
    }
    else{
        result = prompt("Есть время передумать и снова ввести имя");}
        let msg2 = 'Привет,' + result;
        alert(msg2)
    break;
    };
    
}
greeting();

