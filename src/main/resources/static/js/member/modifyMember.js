$(function(){
	//비밀번호 갱신 숨김
	$("#check").hide();
	
	//기존 비밀번호 체크
	$("#currentPwd").blur(function(){
		var currentPwd = $(this).val();
		if(currentPwd ==''){
			$("#currentPwdErr").text("필수 입력 사항입니다.");
		}else{
			$.ajax({
				type: "post",
				async: false,
				url: "${contextPath}/me/pwdCheck",
				data: {currentPwd : currentPwd},
				success: function(data){
					if(data == 0){
						$("#currentPwdErr").text("비밀번호가 틀립니다.");
					}else{
						$("#currentPwdErr").text('');
					}
				},
				error: function(){
					alert("서버 내부 에러가 발생했습니다.");
				}
			});
		}
	});
	
	//비밀번호 체크
	$("#newPwd").blur(function(){
		var newPwd = $(this).val();
		if(newPwd ==''){
			$("#newPwdErr").text("필수 입력 사항입니다.");
		}else{
			var reg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}/;
			if(!reg.test(newPwd)){
				$("#newPwdErr").text("비밀번호 형식이 맞지 않습니다.");
			}else{		
				$("#newPwdErr").text('');
				if($("#pwd2").val() != newPwd){
					$("#pwd2Err").text("비밀번호 확인이 맞지 않습니다.");
				}else{$("#pwd2Err").text('');}
			}
		}
	});
	
	//비밀번호 확인
	$("#pwd2").blur(function(){
		var pwd2 = $("#pwd2").val();
		if(pwd2 ==''){
			$("#pwd2Err").text("필수 입력 사항입니다.");
		}else{
			if($("#newPwd").val() != pwd2){
				$("#pwd2Err").text("비밀번호 확인이 맞지 않습니다.");
			}else{$("#pwd2Err").text(''); }
		}
	});
	
	//이름 확인
	$("#name").blur(function(){
		var name = $(this).val();
		if(name ==''){
			$("#nameErr").text("필수 입력 사항입니다.");
		}else{
			var reg = /^[가-힣]{2,5}$/;
			if(!reg.test(name)){
				$("#nameErr").text("정확한 이름을 입력하세요.");
			}else{ $("#nameErr").text(''); }
		}
	});
	
	//휴대폰 확인
	$("#phone").blur(function(){
		var phone = $(this).val();
		if(phone ==''){
			$("#phoneErr").text("필수 입력 사항입니다.");
		}else{ 
			var reg = /^01([0|1|6|7|8|9]?)-([0-9]{3,4})-([0-9]{4})$/;
			if(!reg.test(phone)){
				$("#phoneErr").text("양식에 맞는 휴대폰 번호를 입력하세요");
			}else{ $("#phoneErr").text(''); }
		}
	});
});

function pwdCheck() {
	var currentPwd = $("#currentPwd").val();
	if(currentPwd==''){
		alert("기존 비밀번호를 입력해주세요.");
	}
	else if($("#currentPwdErr").text() !=''){
		alert("기존 비밀번호가 다릅니다.");
	}else{
		$("#check").show();
	}
}
	
function modify(){
	var result = 1;
	var currentPwd = $("#currentPwd");
	var newPwd = $("#newPwd");
	var name = $("#name");
	var phone = $("#phone");
	var postCode = $("#postCode");
	var detailAddr = $("#detailAddr");
	
	if(currentPwd.val()==''){
		$("#currentPwdErr").text("필수 입력 사항입니다.");
		result = 0;
	}
	
	if(newPwd.val()=='') {
		$("#newPwd").val(currentPwd.val());
	} 
	if(detailAddr.val()==''){
		$("#addrErr").text("필수 입력 사항입니다.");
		result = 0;
	}
	else{
		$("#addrErr").text('');
	}
	
	if(result==0){
		alert("필수 사항을 기입해주세요.");
		return false;
	}
	
	if($("#currentPwdErr").text()!=''||$("#newPwdErr").text()!=''||$("#pwd2Err").text()!=''
			||$("#nameErr").text()!=''||$("#phoneErr").text()!=''
			||$("#addrErr").text()!=''||$("#emailErr").text()!=''){
		alert("오류 사항을 확인 후 다시 입력해주세요.");
		return false;
	} 
	
}

function Enter_Remove(){ // input 에서 enter 입력시 다음에 있는 button이 호출되는 현상때문에 

     // 엔터키의 코드는 13입니다.
	if(event.keyCode == 13){
		return false;
	}
}