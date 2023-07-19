var setTime = 59; //카운트 시간
var count = 0; //모달 띄우는 시간
var timer;

setInterval(setcount,1000); //1초마다 setcount함수를 실행(1000=>1초)

$(function(){
	$("#extendTime").click(function(){
		count = 0;
		setTime = 59;
		clearInterval(timer);		// 타이머 해제
		$("#timeMsg").html("60초");
	});
	
	$("#timerModal").on("show.bs.modal", function(){
		$("body").removeAttr('onmousemove'); //모달 띄워져 있을 때 mousemove 없앰
	});
	
	$("#timerModal").on("hide.bs.modal", function(){
		$("body").attr('onmousemove','count=0'); //모달 없어지면 다시 mousemove 생성
	});
});

function setcount() {
	if (count++ == 600){ // 10분 뒤 모달 띄우기
		setTime = 59;
		$("#openTimer").trigger("click");
		timer = setInterval(msg_time,1000);
	}
}
	
function msg_time() {	// 1초씩 카운트
	msg = (setTime % 60) + "초";	// 남은 시간 계산
	$("#timeMsg").html(msg);						
	setTime--;					// 1초씩 감소
	
	if (setTime < 0) {			// 시간이 종료 되었으면..	
		clearInterval(timer);		// 타이머 해제
		location.href=contextPath +"/me/logout";
	}
}		