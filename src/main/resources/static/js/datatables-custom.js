function overdueModal(modal, result) {
	$('.calendar').pignoseCalendar({
		lang: 'ko',
		multiple: true,
		disabledRanges: [
			[moment(result.end_day)+1, moment()]
			],
		init: function(context){
			$(this).pignoseCalendar('set', result.start_day+'~'+result.end_day);
		}//end of init
	});//end of pignoseCalendar
	
	//날짜는 클릭 못하게 여기서는 보여주는것만 하는거
	$('.pignose-calendar-body').addClass('clickX');
	
	$('.modal-footer button[value="overdue"]').removeClass("sr-only");
	modal.find('.item').text(result.item);
	modal.find('.duration').text(result.start_day+"~"+result.end_day);
	modal.find('.overdue_day').text(result.overdue_day);
	modal.find('.payment').text(result.payment.toLocaleString()+"원");
	modal.find('.arrears').text(result.arrears.toLocaleString()+"원");
	modal.find('.now_deposit').text(result.now_deposit.toLocaleString()+"원");
	modal.find('.item_price').text(result.item_price.toLocaleString()+"원");
	modal.find('.name').text(result.name);
	modal.find('.email').text(result.email);
	modal.find('.phone').text(result.phone);
	modal.find('.addr').html("("+result.postCode+") "+result.roadAddr + "<br>" + result.detailAddr);
	if(result.overdue == '-') modal.find('.house').text(result.house);
	else modal.find('.house').text(result.overdue);
	
}//end of overdueModal

function reservationModal(modal, result) {
	$('.calendar').pignoseCalendar({
    	lang: 'ko',
    	multiple: true,
		init: function(context){
	          $(this).pignoseCalendar('set', result.start_day+'~'+result.end_day);
	    }
    });//end of pignoseCalendar
	
	//날짜는 클릭 못하게 여기서는 보여주는것만 하는거
	$('.pignose-calendar-body').addClass('clickX');
	
	var today = moment();
	var start_day = moment(result.start_day,'YYYY-MM-DD');
	if(moment.duration(today.diff(start_day)).asDays()>=1){
		$('.modal-footer button[value="deldel"]').removeClass("sr-only");
	}
	
	modal.find('.num').text(result.num);
	modal.find('.res_day').text(result.res_day);
	modal.find('.start_day').text(result.start_day);
	modal.find('.end_day').text(result.end_day);
	modal.find('.payment').text(result.payment.toLocaleString()+"원");
	modal.find('.name').text(result.name);
	modal.find('.phone').text(result.phone);
	modal.find('.email').text(result.email);
	modal.find('.addr').html("("+result.postCode+") "+result.roadAddr + "<br>" + result.detailAddr);
}//end of reservationModal

function itemsModal(modal,result) {
	$('.calendar').pignoseCalendar({
		lang: 'ko',
		multiple: true,
		disabledRanges: [
			[moment(result.end_day)+1, moment()]
			],
		init: function(context){
			$(this).pignoseCalendar('set', result.start_day+'~'+result.end_day);
		}//end of init
	});//end of pignoseCalendar
	
	//날짜는 클릭 못하게 여기서는 보여주는것만 하는거
	$('.pignose-calendar-body').addClass('clickX');
	
	var today = moment();
	var end_day = moment(result.end_day,'YYYY-MM-DD');
	if(moment.duration(today.diff(end_day)).asDays()>=1){
		$('.modal-footer button[value="overdue"]').removeClass("sr-only");
	}
	modal.find('.item').text(result.item);
	modal.find('.start_day').text(result.start_day);
	modal.find('.end_day').text(result.end_day);
	modal.find('.payment').text(result.payment.toLocaleString()+"원");
	modal.find('.item_price').text(result.item_price.toLocaleString()+"원");
	modal.find('.name').text(result.name);
	modal.find('.phone').text(result.phone);
	modal.find('.email').text(result.email);
	modal.find('.addr').html("("+result.postCode+") "+result.roadAddr + "<br>" + result.detailAddr);
	if(result.overdue == '-') modal.find('.house').text(result.house);
	else modal.find('.house').text(result.overdue);
}//end of itemsModal

function closedModal(modal,result) {
	$('.calendar').pignoseCalendar({
		lang: 'ko',
		theme: 'dark',
		multiple: true,
		disabledRanges: [
			[moment(result.end_day)+1, moment(result.return_day)]
			],
		init: function(context){
			$(this).pignoseCalendar('set', result.start_day+'~'+result.end_day);
		}
	});//end of pignoseCalendar
	
	//날짜는 클릭 못하게 여기서는 보여주는것만 하는거
	$('.pignose-calendar-body').addClass('clickX');
	
	modal.find('.item').text(result.item);
	modal.find('.start_day').text(result.start_day);
	modal.find('.end_day').text(result.end_day);
	modal.find('.return_day').text(result.return_day);
	modal.find('.payment').text(result.payment.toLocaleString()+"원");
	modal.find('.item_price').text(result.item_price.toLocaleString()+"원");
	modal.find('.name').text(result.name);
	modal.find('.phone').text(result.phone);
	modal.find('.email').text(result.email);
	modal.find('.addr').html("("+result.postCode+") "+result.roadAddr + "<br>" + result.detailAddr);
}//end of closedModal

function MemberModal(modal,result) {
	if(result.admin==1){
		modal.find('#name').closest('tr').find('span').removeClass('sr-only');
		$('#custom').removeAttr("checked","checked");
		$('#admin').attr("checked","checked");
	}else{
		$('#admin').removeAttr("checked","checked");
		$('#custom').attr("checked","checked");
	}
	modal.find('#reg_date').val(result.reg_date);
	modal.find('#name').val(result.name);
	modal.find('#phone').val(result.phone);
	modal.find('#email').val(result.email);
	modal.find('#pwd').val(result.pwd);
	modal.find('#postCode').val(result.postCode);
	modal.find('#roadAddr').val(result.roadAddr);
	modal.find('#detailAddr').val(result.detailAddr);
}//end of memberModal

$(document).ready(function() {
// Call the dataTables jQuery plugin
  var table = $('#dataTable').DataTable();
  
  $('#dataTable tbody').on( 'click', 'tr', function () {
      if ( $(this).hasClass('selected') ) {
          $(this).removeClass('selected');
      }
      else {
          table.$('tr.selected').removeClass('selected');
          $(this).addClass('selected');
      }
  } );//table tr 클릭시 강조
  
  $('.modal').on('show.bs.modal', function (event) {
	  var tr = $(event.relatedTarget); //modal 열게한 tr
	  var cate = tr.data('cate'); //data-cate 값 뽑아오기
	  var primary = tr.data('primary'); //data-primary
	  console.log(primary);
	  var allData = { 'cate':cate, 'primary' : primary };
	  var modal = $(this);
	  
	  $.ajax({
			type : 'POST',
			url : "../ad/modal_data",
			data : allData,
			dataType: 'text',
			success : function(r) {
				modal.find('.result').val(r);
				
				var result = JSON.parse(r);
				if(cate=='overdue') overdueModal(modal, result);
				else if(cate=='예약') reservationModal(modal, result);
				else if(cate=='보관') itemsModal(modal, result);
				else if(cate=='완료') closedModal(modal, result);
				else if(cate=='member') MemberModal(modal,result);
			}
		});//end of ajax

	});//모달 나타났을때...
  
  $('.modal').on('hide.bs.modal', function (event) {
	  $('#dataTable tbody tr.selected').removeClass('selected');
	  $('.modal-footer button[value="overdue"]').addClass("sr-only");
	  $('.modal-footer button[value="deldel"]').addClass("sr-only");
	});//모달 없어졌을 때..

  $(".sub").on('click', function() {
	var button = $(this);
	var nearForm = button.closest('form');
	//연장
	if(button.val() == 'extend') nearForm.attr("action", "../ad/extend_reserv");
	//to창고
	else if(button.val() == 'toitems') nearForm.attr("action", "../ad/warehousing_check");
	//빼기
	else if(button.val() == 'toclosed') nearForm.attr("action", "../ad/release_check");
	//연체 창고 옮기기
	else if(button.val() == 'overdue') nearForm.attr("action", "../ad/enter_overdue_location");
	//예약 오래된거 삭제
	else if(button.val() == 'deldel'){ 
		var check = confirm("정말 삭제하시겠습니까?");
		
		if(check){
			nearForm.attr("action", "../ad/delete_reservation");
		}else return false;
	}
	
	nearForm.submit();
  });//예약연장, 창고넣기, 창고 빼기 버튼 눌렀을 때
});//end of onload
