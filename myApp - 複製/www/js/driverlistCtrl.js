app.controller('driverlistCtrl',function($scope){
	var list = [
		{
			'Dest':'臺北',
			'from':'出發地點：臺北',
			'time':'5/1 10:15AM'
		},
		{
			'Dest':'臺南',
			'from':'出發地點：臺中',
			'time':'5/1 9:12AM'
		}
	];
	$scope.lists = list;
});