/**
 * 
 */

 
function  getResultList(locationCode, clientId){
	
	console.log('배열 받아오기 함수 내 진입');
	
	
		$.ajax({
		"url": `../service?command=clientGetResult&locationCode=${locationCode}&clientId=${clientId}`,
		"method": "GET",
		"timeout": 0,
		
		
	}).done(function(response) {
	 // 결과 데이터를 리스트에 저장
    var resultList = response.list;
console.log('배열 받아오는거 성공');
    // 결과 데이터를 HTML에 추가
    for(var i=0; i<resultList.length; i++){
        var result = resultList[i];
        var rowHtml = '<tbody><tr><td>' + result.month + '</td><td>' + result.total + '</td></tr></tbody>';
        $('#result-table').append(rowHtml);
    }
	});

}
 
 
 