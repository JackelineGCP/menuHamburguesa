var boton = document.getElementById("btn");
boton.addEventListener("click", showMenu);
function showMenu(){
	var menu = document.getElementById("opcs-menu");
	if(menu.classList.contains("disabled-menu")){
		menu.classList.remove("disabled-menu");
		menu.classList.add("enabled-menu");
    }else{
			menu.classList.remove("enabled-menu");
			menu.classList.add("disabled-menu");
    }
}
