
var prefix = "http://127.0.0.1:3000/api/";

function updateLayout(p,c){
	$.post(prefix+"layout",p, c)
}

function getLayout(c){
	$.get(prefix+"layout",{}, c)
}

function updateComponent(id,p,c){
	$.post(prefix+"layout/"+id,{component:JSON.stringify(p)}, c);
}

module.exports = {
	updateLayout:updateLayout,
	getLayout:getLayout,
	updateComponent:updateComponent
}
