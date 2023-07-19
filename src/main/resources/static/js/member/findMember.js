$(function(){			
	//이름 확인
	$("#name").blur(function(){
		var name = $(this).val();
		var reg = /^[가-힣]{2,5}$/;
		if(!reg.test(name)){
			$("#nameErr").text("정확한 이름을 입력하세요.");
		}else{ $("#nameErr").text(''); }
	});
	
	//휴대폰 확인
	$("#phone").blur(function(){
		var phone = $(this).val();
		var reg = /^01([0|1|6|7|8|9]?)-([0-9]{3,4})-([0-9]{4})$/;
		if(!reg.test(phone)){
			$("#phoneErr").text("양식에 맞는 휴대폰 번호를 입력하세요");
		}else{ $("#phoneErr").text(''); }
	});
	
	//이메일 확인
	$("#email").blur(function(){
		var email = $(this).val();
		var reg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
		if(!reg.test(email)){
			$("#emailErr").text("이메일 형식이 맞지 않습니다.");
		}else{ $("#emailErr").text(''); }
	});
});

function emailSearch(){
	var name = $("#name").val();
	var phone = $("#phone").val();
	
	if(name==''){
		$("#nameErr").text("필수 입력 사항입니다.");
	}
	if(phone==''){
		$("#phoneErr").text("필수 입력 사항입니다.");
	}
	if($("#nameErr").text()!='' || $("#phoneErr").text()!=''){
		alert("오류 사항을 확인 후 다시 입력해주세요.");
		return false;
	}
}

function pwdSearch(){
	var email = $("#email").val();
	if(email==''){
		$("#emailErr").text("이메일을 입력해주세요.");
	}
	if($("#emailErr").text()!=''){
		alert("오류 사항을 확인 후 다시 입력해주세요.");
		return false;
	}else{
		$.ajax({
			type: "post",
			async: false,
			url: "${contextPath}/me/pwdSearch",
			data: {email: email},
			success: function(data){ // 0: 실패, 1: 성공, -1: 이메일은 존재하나 메일 발송에 실패한 경우
				if(data == 0){
					alert("해당 이메일로 등록된 회원이 없습니다.");
				}else if(data == -1){
					alert("임시 비밀번호 발급에 실패했습니다. \n다시 시도해주시기 바랍니다.");
				}else{
					alert(email+"로 임시 비밀번호를 발급했습니다. \n다시 로그인 해주시기 바랍니다.");
					location.href=contextPath+"/co/index.go";
				}
			},
			error: function(){
				alert("서버 내부 에러가 발생했습니다.");
			}
		});
	}	
}