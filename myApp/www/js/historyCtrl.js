app.controller('historyCtrl',function($scope){
	var list = [
		{
			'mealName':'咖哩佐青菜',
			'author':'Alice Spring',
			'time':'5/1 10:15AM'
		},
		{
			'mealName':'清新生活烤鴨全家餐',
			'author':'Oxford123',
			'time':'5/1 10:10AM'
		},
		{
			'mealName':'天堂鳥套餐',
			'author':'Peer Zack',
			'time':'5/1 9:45AM'
		}
	];
	$scope.lists = list;
	console.log('ya');
});