
// author : abhishek.roy
//----------------------------------------CODE START------------------------------------------------//
var body = document.getElementsByTagName("body")[0];

var json;

try {
    json = JSON.parse(body.innerHTML);
} catch (error) {
    try {
        var preJson = body.getElementsByTagName("pre")[0];
        json = JSON.parse(preJson);
        alert("JSON is preformatted");
    } catch (error) {
        alert(error);
    }
}

if( !isEmpty(json) ) {
    var header =    '<div class="container-fluid">'+
                    '<div class="row">'+
                    '<div class="col-*-*" style="padding:15px;"><button id="expand-all" type="button" class="btn btn-sm btn-info">Expand All</button></div>'+
                    '<div class="col-*-*" style="padding:15px;"><button id="collapse-all" type="button" class="btn btn-sm btn-info">Collapse All</button></div>'+
                    '</div>'+
                    '</div><b>{</b>';
    var divs = header + buildHTML(json)+'<b>}</b>';
    $(body).html(divs);
    $(body).css({ 'font-size': '12px',
                'font-family':'consolas' });
}

//----------------------------------------CODE END------------------------------------------------//

//----------------------------------------FUNCTIONS------------------------------------------------//

/**
 * @param {*} object 
 * @description : function to check if an object is empty
 * @returns boolean
 */
function isEmpty ( object ) {
    for(var key in object){
        return false;
    }
    return true;
}

/**
 * @param {*} jsonData 
 * @description : function to build <div> grid from jsonData
 * @returns String
 */
function buildHTML(jsonData) {
    var div;
    if(typeof jsonData === "object"){
		if(jsonData.length === undefined){
			div = '<div class="container-fluid">'; 
            div += '<div class="header">'+String.fromCharCode(0x25BD)+'</div><b>{</b>&ensp;';
            div += '<div class="content">';
			for(var key in jsonData){   
                div += '<div class="row">'; 
                div += '<div class="col-*-*">'+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+String.fromCharCode(0x25FE)+"&ensp;"+'</div>'; 
				div += '<div class="col-*-*">'+"&ensp;<b>"+key+"</b>&ensp; :"+'</div>'; 
				div += '<div class="col-10">'+buildHTML(jsonData[key])+'</div>'; 
				div += '</div>';    
			}	
			div += '</div><b>}</b>,</div>';    
			return div;
		} else {
            var i = 0;
			div = '<div class="container-fluid">';
			div += '<div class="header">'+String.fromCharCode(0x25BD)+'</div><b>[</b>&ensp;'; 
			div += '<div class="content">';
			for(item in jsonData){
				div += '<div class="row">';
				div += '<div class="col-*-*">'+'&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<i>['+(i++)+"]</i>&nbsp;:"+'</div>';
				div += '<div class="col-10">'+buildHTML(jsonData[item])+'</div>';
				div += '</div>';
			}	
			div += '</div><b>]</b>,</div>';
			return div;
		}
	}else{
        if(typeof jsonData === "number") {
            return '<b><font color="green">' + jsonData + '</font></b>,';
        }
        if(typeof jsonData === "string") {
            return '<font color="crimson">"' + jsonData + '"</font>,';
        }
        if(typeof jsonData === "boolean") {
            return '<b><font color="blue">' + jsonData + '</font></b>,';
        }
		return jsonData + ',';
	}
}


//----------------------------------------JQUERY------------------------------------------------//

/**
 * on clicking .header class objects :
 * 1. the visibility of .content class objects are toggled.
 * 2. the text inside .header class objects are changed.
 */
$(".header").click(function () {
    $header = $(this);
    $content = $header.next().next();
    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    $content.slideToggle(500, function () {
        //execute this after slideToggle is done
        //change text of header based on visibility of content div
        $header.text(function () {
            //change text based on condition
            return $content.is(":visible") ? String.fromCharCode(0x25BD) : String.fromCharCode(0x25BA);
        });
    });

});

/**
 * collapse all .content objects
 */
$("#collapse-all").click(function(){
    $content = $(".header").next().next();
    if($content.is(":visible")){
        $content.hide();
    }
});

/**
 * expand all .content objects
 */
$("#expand-all").click(function(){
    $content = $(".header").next().next();
    if(! $content.is(":visible")){
        $content.show();
    }
});

//----------------------------------------XXXXXXXXXX------------------------------------------------//