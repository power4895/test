
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<script src = "http://code.jquery.com/jquery-1.11.1.min.js"></script>
<script>
	var url = "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=0b5c8cb28ec0808ef0f67c3ed28a962e&targetDt=20190501";
	
	$(function(){
		
		$.ajax({
			type: 'GET',
			url: url,
			dataType: 'json',
			success: jsonParser
		});
		
		function jsonParser(data){
			var showList = data.boxOfficeResult.dailyBoxOfficeList;
			$(showList).each(function(idx, item){
				document.write("<h2>" + item.rank + ","+ item.movieNm + "</h2>");
			});
		}
	});
	
</script>
</head>
<body>
	<div id = "movie-box">
	
	</div>
</body>
</html>