//Apps

//Calculator 
function dis(val)
         {
             document.getElementById("result").value+=val
         }
           
         //function that evaluates the digit and return result
         function solve()
         {
             let x = document.getElementById("result").value
             let y = eval(x)
             document.getElementById("result").value = y
         }
           
         //function that clear the display
         function clr()
         {
             document.getElementById("result").value = ""
         }
// Next App


var i = 0,
minimizedWidth = new Array,
minimizedHeight = new Array,
windowTopPos = new Array,
windowLeftPos = new Array,
panel,
id;

// Flags URL begins here

	// Loads the flag into RAM.
	function getParameterByName(name, url) {
	    if (!url) url = window.location.href;
	    name = name.replace(/[\[\]]/g, "\\$&");
	    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
	        results = regex.exec(url);
	    if (!results) return null;
	    if (!results[2]) return '';
	    return decodeURIComponent(results[2].replace(/\+/g, " "));
	}
	
		// Loads startup value into RAM.
	function getStartValByName(name, url) {
	    if (!url) url = window.location.href;
	    name = name.replace(/[\[\]]/g, "\\$&");
	    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
	        results = regex.exec(url);
	    if (!results) return null;
	    if (!results[2]) return '';
	    return decodeURIComponent(results[2].replace(/\+/g, " "));
	}
	
	var paRameter = getParameterByName('flag');
	var startup = getStartValByName('startup');

 
 // Enables flag when page loads
	 $(document).ready(function() {
	
// CSSDev: enables css dev theme
		if (paRameter == 'ThisIsTheSecretDevMode!') {
		   $("<style type='text/css'> @import url(system/css/themes/dev.css);</style>").appendTo("#desktop");
		} 
		if (paRameter == 'EnableVecteriaMode') {
			$("<style type='text/css'> @import url(system/css/themes/vecteria.css);</style>").appendTo("#desktop");
		 } 

		if (paRameter == 'NoStartup') {
			$("<style type='text/css'> #startup {  display:none !important; }</style>").appendTo("#desktop");
		  }

		  if (paRameter == 'DisableTheming') {
			$("<style type='text/css'> .themes {  display:none !important; }</style>").appendTo("div");
			} 
			
		  if (startup == 'no') {
			$('#startup').css('display','none');
		} 
	
		
		
		// No code inserted, does nothing.
		else {
		}
	});
	var search_htm_url = "index.html?startup=no&?flag=";
	function enableFlag() {
		if ((document.searchpage.keyword.value.length == 0)
		|| (document.searchpage.keyword.value == " ")) {
		alert("Please enter a flag!");
		} else {
		sel = document.searchpage.and_or.selectedIndex;
		location.href = search_htm_url
		+ escape(document.searchpage.keyword.value)
		
		}
		return false;
		}
// Flag code ends here

//jQuery
setTimeout(function(){
    $("#startup").fadeOut(200);
	document.getElementById("startupsnd").play(); 
}, 2000)
  
$(function() {
	$("#icons a").draggable();
});
//end of jquery

//custom code
function startTime(){
    var date = new Date();
    var h = date.getHours(); 
    var m = date.getMinutes(); 
   // var s = date.getSeconds(); 
    //var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    //if(h > 12){
      //  h = h - 12;
        //session = "PM";
    //}
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    //s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + " " //+ session;
    document.getElementById("time").innerText = time;
    document.getElementById("time").textContent = time;
    setTimeout(startTime, 1000);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
function startDate(){
    var date = new Date();
	var d = date.getDate();
	var m = date.getMonth() + 1;
	var y = date.getFullYear();

	d = (d < 10) ? "0" + d : d;
    m = (m < 10) ? "0" + m : m;
    
    var date = y + "-" + m + "-" + d
    document.getElementById("date").innerText = date;
    document.getElementById("date").textContent = date;
    setTimeout(startDate, 1000);
}
function cs_change_music(music)
{
document.getElementById("my-audio").pause();
document.getElementById("my-audio").setAttribute('src', music);
document.getElementById("my-audio").load();
    $(".audioplayer").addClass("audioplayer-playing");
    document.getElementById("my-audio").play();
}


$(document).ready(function(){
	$("#appsmenu").click(function(){
		document.getElementById("appsmenu").classList.toggle("opened");
	  }, function(){
		document.getElementById("appsmenu").classList.remove("opened");
  
	});
  });			
  

function appstoggle() {
	document.getElementById("appsmenu").classList.toggle("opened");
}
document.oncontextmenu = rightClick;
  
  function rightClick(clickEvent) {
	  clickEvent.preventDefault();
	  // return false;
  }
  document.onclick = hideMenu;
  document.oncontextmenu = rightClick;
	
  function hideMenu() {
	  document.getElementById("contextMenu")
			  .style.display = "none"
  }

  function rightClick(e) {
	  e.preventDefault();

	  if (document.getElementById("contextMenu")
			  .style.display == "block")
		  hideMenu();
	  else{
		  var menu = document.getElementById("contextMenu")

		  menu.style.display = 'block';
		  menu.style.left = e.pageX + "px";
		  menu.style.top = e.pageY + "px";
	  }
  }

  function activatefull(ele) {
	if (ele.requestFullscreen) {
		ele.requestFullscreen();
	}
}

// Function for full screen activation
function deactivatefull() {
	if (document.exitFullscreen) {
		document.exitFullscreen();
	}
}

function openTab(tabName) {
var i;
var x = document.getElementsByClassName("tab");
for (i = 0; i < x.length; i++) {
x[i].style.display = "none";
}
document.getElementById(tabName).style.display = "block";
}
function openTabb(tabName) {
	var i;
	var x = document.getElementsByClassName("tabb");
	for (i = 0; i < x.length; i++) {
	x[i].style.display = "none";
	}
	document.getElementById(tabName).style.display = "block";
	}

  var changeBG = function(event) {
    var output = document.getElementsByClassName('desktop')[0];
    output.style.background= "url("+URL.createObjectURL(event.target.files[0])+")";
  };

  var resetBG = function(event) {
	var output = document.getElementsByClassName('desktop')[0];
	output.style.background= "";
  }
  function localBG() {
	document.getElementsByClassName('desktop')[0].style.background = "url('https://bing.biturl.top/?resolution=3840&format=image&index=0&mkt=en-CA')";
}


  function defaultColors() {
	// Get the checkbox
	var checkBox = document.getElementById("defaultColor");
	let root = document.documentElement;
	// If the checkbox is checked, display the output text
	if (checkBox.checked == true){
		root.style.setProperty('--wppickercolor', "");
		$('#taskbar').css('background', '');
		$('#appsmenu').css('background', '');
		$('#htmltemp').css('color', '');
		$('#watermark').css('color', '');
		$('#abranding a').css('color', '');
		$('button').css('border-color', '');
		$('#button').css('border-color', '');
		$('.checkBox').css('color', '');
		$('.calcbutton').css('border-color', '');
		$('.calctext').css('border-color', '');
		$('.textinput').css('border-color', '');
		$('.rstflgs').css('border-color', '');

	  
	} else {
		$('#taskbar').css('background', '');
		root.style.setProperty('--wppickercolor', "");
		$('#appsmenu').css('background', '');
		$('#htmltemp').css('color', '');
		$('#watermark').css('color', '');
		$('#abranding a').css('color', '');
		$('button').css('border-color', '');
		$('#button').css('border-color', '');
		$('.checkBox').css('color', '');
		$('.calcbutton').css('border-color', '');
		$('.calctext').css('border-color', '');
		$('.textinput').css('border-color', '');
		$('.rstflgs').css('border-color', '');
		$('#notebutton').css('border-color', '');
		$('#document-textarea').css('border-color', '');
	}
	const winhead = document.getElementsByClassName('windowHeader');
    $(winhead).css('background', '');
  }

  function centeredApps() {
	// Get the checkbox
	var checkBox = document.getElementById("centrdAppsChk");
	// Get the output text
	var appsBtn = document.getElementById("appsPanel");
	var appsmenu = document.getElementById("appsmenu");
	// If the checkbox is checked, display the output text
	if (checkBox.checked == true){
	  appsBtn.style.left = "unset";
	  appsBtn.style.position = "unset";
	  appsmenu.style.margin = "0 auto"
	  appsmenu.style.left = "0"
	  
	} else {
		appsBtn.style.left = "";
		appsBtn.style.position = "";
		appsmenu.style.margin = ""
		appsmenu.style.left = ""
	}
 
}



//THEMES COOKIES
// *** TO BE CUSTOMISED ***

var style_cookie_name = "ostheme" ;
var style_cookie_duration = 30 ;
var style_domain = "broimluna.github.io" ;

// *** END OF CUSTOMISABLE SECTION ***
// You do not need to customise anything below this line

function switch_style ( css_title )
{
// You may use this script on your site free of charge provided
// you do not remove this notice or the URL below. Script from
// https://www.thesitewizard.com/javascripts/change-style-sheets.shtml
  var i, link_tag ;
  for (i = 0, link_tag = document.getElementsByTagName("link") ;
    i < link_tag.length ; i++ ) {
    if ((link_tag[i].rel.indexOf( "stylesheet" ) != -1) &&
      link_tag[i].title) {
      link_tag[i].disabled = true ;
      if (link_tag[i].title == css_title) {
        link_tag[i].disabled = false ;
      }
    }
    set_cookie_style( style_cookie_name, css_title,
      style_cookie_duration, style_domain );
  }
}
function set_style_from_cookie()
{
  var css_title = get_cookie_style( style_cookie_name );
  if (css_title.length) {
    switch_style( css_title );
  }
}
function set_cookie_style ( cookie_name, cookie_value,
    lifespan_in_days, valid_domain )
{
    // https://www.thesitewizard.com/javascripts/cookies.shtml
    var domain_string = valid_domain ?
                       ("; domain=" + valid_domain) : '' ;
    document.cookie = cookie_name +
                       "=" + encodeURIComponent( cookie_value ) +
                       "; max-age=" + 60 * 60 *
                       24 * lifespan_in_days +
                       "; path=/" + domain_string ;
}
function get_cookie_style ( cookie_name )
{
    // https://www.thesitewizard.com/javascripts/cookies.shtml
	var cookie_string = document.cookie ;
	if (cookie_string.length != 0) {
		var cookie_array = cookie_string.split( '; ' );
		for (i = 0 ; i < cookie_array.length ; i++) {
			cookie_value = cookie_array[i].match ( cookie_name + '=(.*)' );
			if (cookie_value != null) {
				return decodeURIComponent ( cookie_value[1] ) ;
			}
		}
	}
	return '' ;
}




function startupFunctions() {
	startTime();
	startDate();
	set_style_from_cookie();
}


//End of custom code

// Core Code

function adjustFullScreenSize() {
	$(".fullSizeWindow .wincontent").css("width", (window.innerWidth - 32));
	$(".fullSizeWindow .wincontent").css("height", (window.innerHeight - 98));
	setTimeout(adjustFullScreenSize, 10);
}
function makeWindowActive(thisid) {
	$(".window").each(function() {      
		$(this).css('z-index', $(this).css('z-index') - 1);
	});
	$("#window" + thisid).css('z-index',1000);
	$(".window").removeClass("activeWindow");
	$("#window" + thisid).addClass("activeWindow");
	
	$(".taskbarPanel").removeClass('activeTab');
	
	$("#minimPanel" + thisid).addClass("activeTab");
}

function minimizeWindow(id){
	windowTopPos[id] = $("#window" + id).css("top");
	windowLeftPos[id] = $("#window" + id).css("left");
	
	$("#window" + id).animate({
		opacity: 0,

	}, 100, function() {		//animation complete
		$("#window" + id).addClass('minimizedWindow');
		$("#minimPanel" + id).addClass('minimizedTab');
		$("#minimPanel" + id).removeClass('activeTab');
	});	
}

function openWindow(id) {
	$('#window' + id).animate({
		opacity: 1,
	}, 0, function() {
	if ($('#window' + id).hasClass("minimizedWindow")) {
		openMinimized(id);
	} else {	
		makeWindowActive(id);
		$("#window" + id).removeClass("closed");
		$("#minimPanel" + id).removeClass("closed");
	}
});	
}
function closeWindwow(id) {

	$("#window" + id).animate({
		opacity: 0,

	}, 200, function() {
	$("#window" + id).addClass("closed");
	$("#minimPanel" + id).addClass("closed");
	});
}

function openMinimized(id) {
	$('#window' + id).removeClass("minimizedWindow");
	$('#minimPanel' + id).removeClass("minimizedTab");
	makeWindowActive(id);
		
	$('#window' + id).animate({
		opacity: 1,
	}, 200, function() {
	});				
}

$(document).ready(function(){
	$(".window").each(function() {      		// window template
		$(this).css('z-index',1000)
		$(this).attr('data-id', i);
		minimizedWidth[i] = $(this).width();
		minimizedHeight[i] = $(this).height();
		windowTopPos[i] = $(this).css("top");
		windowLeftPos[i] = $(this).css("left");
		$("#taskbar").append('<div class="taskbarPanel" id="minimPanel' + i + '" data-id="' + i + '">' + $(this).attr("taskicon") + '</div>');
		if ($(this).hasClass("closed")) {	$("#minimPanel" + i).addClass('closed');	}		
		$(this).attr('id', 'window' + (i++));
		$(this).wrapInner('<div class="wincontent"></div>');
		$(this).prepend('<div class="windowHeader"><strong>' + $(this).attr("headicon") + $(this).attr("data-title") + '</strong><span title="Minimize" class="winminimize"><span></span></span><span title="Maximize" class="winmaximize"><span></span><span></span></span><span title="Close" class="winclose">x</span></div>');
	});
	
	$("#minimPanel" + (i-1)).addClass('activeTab');
	$("#window" + (i-1)).addClass('activeWindow');
	
	$( ".wincontent" ).resizable();			// resizable
	$( ".window" ).draggable({ cancel: ".wincontent", iframeFix: true});	// draggable
	

    $(".window").mousedown(function(){		// active window on top (z-index 1000)
		makeWindowActive($(this).attr("data-id"));
    });
	
    $(".winclose").click(function(){		// close window
		closeWindwow($(this).parent().parent().attr("data-id"));
    });	

    $(".winminimize").click(function(){		// minimize window
		minimizeWindow($(this).parent().parent().attr("data-id"));
    });	
	
    $(".taskbarPanel").click(function(){		// taskbar click
		id = $(this).attr("data-id");
		if ($(this).hasClass("activeTab")) {	// minimize if active
			minimizeWindow($(this).attr("data-id"));
		} else {
			if ($(this).hasClass("minimizedTab")) {	// open if minimized
				openMinimized(id);
			} else {								// activate if inactive
				makeWindowActive(id);
			}
		}
    });	
	
    $(".openWindowDblClick").dblclick(function(){		// open closed window
		openWindow($(this).attr("data-id"));
    });
	$(".openWindow").click(function(){		// open closed window
		openWindow($(this).attr("data-id"));
    });
	
    $(".winmaximize").click(function(){
		if ($(this).parent().parent().hasClass('fullSizeWindow')) {			// minimize
			
			$(this).parent().parent().removeClass('fullSizeWindow');
			$(this).parent().parent().children(".wincontent").height(minimizedHeight[$(this).parent().parent().attr("data-id")]);	
			$(this).parent().parent().children(".wincontent").width(minimizedWidth[$(this).parent().parent().attr("data-id")]);
		} else {															// maximize
			$(this).parent().parent().addClass('fullSizeWindow');
			
			minimizedHeight[$(this).parent().parent().attr('data-id')] = $(this).parent().parent().children(".wincontent").height();
			minimizedWidth[$(this).parent().parent().attr('data-id')] = $(this).parent().parent().children(".wincontent").width();
			
			adjustFullScreenSize();
		}
    });		
	adjustFullScreenSize();	
});
//End of Core Code