
var body = document.getElementsByTagName("body")[0];

var preformatted_data = body.getElementsByTagName("pre")[0];

try{
	var table = display(JSON.parse(preformatted_data.innerHTML));
	//table = display(data);
	$(preformatted_data).hide();
	$(body).append(table);
}catch(err){
	alert("Invalid JSON Format");
}

function display(obj) {
	if(typeof obj === "object"){
		if(obj.length === undefined){
			var objTbl = '<div class="container">';
			objTbl += '<div class="header expand row"><div class="row">&nbsp&nbsp[-]<span class="sign"></span></div></div>';
			for(var key in obj){
				objTbl += '<div class="row">';
				objTbl += '<div class="col-*-*">'+key+'</div>&nbsp&nbsp : &nbsp&nbsp';
				objTbl += '<div class="col-*-*">'+display(obj[key])+'</div>';
				objTbl += '</div>';
			}	
			objTbl += '</div>';
			return objTbl;
		} else {
			var arrTbl = '<div class="container">';
			var i = 0;
			for(item in obj){
				arrTbl += '<div class="row">';
				arrTbl += '<div class="col-*-*">('+(i++)+')</div>&nbsp&nbsp:&nbsp&nbsp';
				arrTbl += '<div class="col-*-*">'+display(obj[item])+'</div>';
				arrTbl += '</div>';
			}	
			arrTbl += '</div>';
			return arrTbl;
		}
	}else{
		return obj;
	}
}

$('.header').click(function(){
	if(this.innerHTML === "[+]"){
		this.innerHTML = "[-]";
	}else{
		this.innerHTML = "[+]";
	}
    $(this).toggleClass('expand').nextUntil('div.header').slideToggle(100);
});