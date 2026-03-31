var li_elementos = document.querySelectorAll(".container .menu ul li");

for(var i = 0; i < li_elementos.length; i++){
    li_elementos[i].addEventListener("Click", function(){
        li_elementos.forEach(function(li) {
            li.classList.add("active");
        })
        this.classList.add("active");
        var li_valor = this.getAttribute("data-li");
        alert(li_valor);
    })
}