var MSG={"app":"Leanote","share":"Share","noTag":"No Tags","inputEmail":"Email is required","history":"Histories","editorTips":"Tips","editorTipsInfo":"<h4>1. Short cuts</h4>ctrl+shift+c Toggle code<h4>2. shift+enter Get out of current block</h4> eg. <img src=\"/images/outofcode.png\" style=\"width: 90px\"/> in this situation you can use shift+enter to get out of current code block.","all":"Newest","trash":"Trash","delete":"Delete","unTitled":"UnTitled","writingMode":"Writing Mode","normalMode":"Normal Mode","saving":"Saving","saveSuccess":"Save success","update":"Update","close":"Close","cancel":"Cancel","send":"Send","shareToFriends":"Share to friends","publicAsBlog":"Public as blog","cancelPublic":"Cancel public","move":"Move","copy":"Copy","rename":"Rename","exportPdf":"Export PDF","addChildNotebook":"Add child notebook","deleteAllShared":"Delete shared user","deleteSharedNotebook":"Delete shared notebook","copyToMyNotebook":"Copy to my notebook","defaulthhare":"Default","friendEmail":"Friend email","readOnly":"Read only","writable":"Writable","inputFriendEmail":"Friend email is required","clickToChangePermission":"Click to change permission","sendInviteEmailToYourFriend":"Send invite email to your friend","friendNotExits":"Your friend hasn't %s's account, invite register link: %s","emailBodyRequired":"Email body is required","sendSuccess":"success","inviteEmailBody":"Hi,I am %s, %s is awesome, come on!","historiesNum":"We have saved at most <b>10</b> latest histories with each note","noHistories":"No histories","datetime":"Datetime","restoreFromThisVersion":"Restore from this version","confirmBackup":"Are you sure to restore from this version? We will backup the current note.","errorEmail":"Please input the right email"};function getMsg(key, data) {var msg = MSG[key];if(msg) {if(data) {if(!isArray(data)) {data = [data];}for(var i = 0; i < data.length; ++i) {msg = msg.replace("%s", data[i]);}}return msg;}return key;}