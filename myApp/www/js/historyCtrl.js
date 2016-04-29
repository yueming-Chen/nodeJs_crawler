app.controller('historyCtrl',function($scope){
	var list = [
		{
			'Dest':'臺北',
			'from':'出發地點：臺北',
			'time':'4/13 10:15AM'
		},
		{
			'Dest':'臺南',
			'from':'出發地點：臺中',
			'time':'4/14 9:12AM'
		},
		{
			'Dest':'花蓮',
			'from':'出發地點：桃園',
			'time':'4/15 16:12PM'
		}
	];
	$scope.lists = list;
	console.log('ya');
});