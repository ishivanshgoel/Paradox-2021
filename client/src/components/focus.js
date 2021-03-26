window.addEventListener("DOMContentLoaded", function(event) {
	var x=document.getElementsByClassName('editor-field__input');
	for(let i=0;i<x.length;i++) {
		x[i].addEventListener("focus",function() {
			document.getElementsByClassName('editor-field')[i].classList.add('is-focused');
		});
		x[i].addEventListener("blur",function() {
			document.getElementsByClassName('editor-field')[i].classList.remove('is-focused');
		});
	}
});