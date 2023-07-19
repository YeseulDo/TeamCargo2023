
$(function(){
	/* 이메일 저장 */
	// 저장된 쿠키값을 가져와서 ID 칸에 넣어준다. 없으면 공백으로 들어감.
    var key = getCookie("key");
    $("#current_email").val(key); 
     
    if($("#current_email").val() != ''){ // 그 전에 ID를 저장해서 처음 페이지 로딩 시, 입력 칸에 저장된 ID가 표시된 상태라면,
        $("#emailSaveCheck").attr("checked", true); // ID 저장하기를 체크 상태로 두기.
    }
     
    $("#emailSaveCheck").change(function(){ // 체크박스에 변화가 있다면,
        if($("#emailSaveCheck").is(":checked")){ // ID 저장하기 체크했을 때,
            setCookie("key", $("#current_email").val(), 7); // 7일 동안 쿠키 보관
        }else{ // ID 저장하기 체크 해제 시,
            deleteCookie("key");
        }
    });
        
	$("#current_email").blur(function(){
		if($(this).val()==''){
			$("#current_emailErr").text("필수 입력 사항입니다.");
			$("#current_emailErr").show();
		}else{
			$("#current_emailErr").hide();
			if($("#emailSaveCheck").is(":checked")){ // ID 저장하기를 체크한 상태라면,
	            setCookie("key", $("#current_email").val(), 7); // 7일 동안 쿠키 보관
	            }
		}
	});
	
	$("#current_pwd").blur(function(){
		if($(this).val() ==''){
			$("#current_pwdErr").text("필수 입력 사항입니다.");
			$("#current_pwdErr").show();
		}else{ $("#current_pwdErr").hide(); }
	});
});
				
			
function login(){
	var result = 0;
	var email = $("#currnet_email");
	var pw = $("#current_pwd");

	if (email.val() == '') {
		$("#current_emailErr").text("필수 입력 사항입니다.");
		$("#current_emailErr").show();
		result = 1;
	}
	if (pw.val() == '') {
		$("#current_pwdErr").text("필수 입력 사항입니다.");
		$("#current_pwdErr").show();
		result = 1;
	}
	if(result==1){
		alert("필수 사항을 기입해주세요.");
		return false;
	}
};

/* 쿠키관련 */
function setCookie(cookieName, value, exdays){
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var cookieValue = escape(value) + ((exdays==null) ? "" : "; expires=" + exdate.toGMTString());
    document.cookie = cookieName + "=" + cookieValue;
}
 
function deleteCookie(cookieName){
    var expireDate = new Date();
    expireDate.setDate(expireDate.getDate() - 1);
    document.cookie = cookieName + "= " + "; expires=" + expireDate.toGMTString();
}
 
function getCookie(cookieName) {
    cookieName = cookieName + '=';
    var cookieData = document.cookie;
    var start = cookieData.indexOf(cookieName);
    var cookieValue = '';
    if(start != -1){
        start += cookieName.length;
        var end = cookieData.indexOf(';', start);
        if(end == -1)end = cookieData.length;
        cookieValue = cookieData.substring(start, end);
    }
    return unescape(cookieValue);
}