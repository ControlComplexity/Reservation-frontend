module.exports = {
	PID: 'pages', //图书馆

	NAV_COLOR: '#ffffff',
	NAV_BG: '#ff4427',

	MEET_NAME: '活动/预约', 
 
	MENU_ITEM: ['首页', '订单', '我的'], // 第1,4,5菜单

	NEWS_CATE: '1=活动,3=活动介绍',
	MEET_TYPE: '1=活动预约',

	DEFAULT_FORMS: [{
			type: 'line',
			title: '姓名',
			desc: '请填写您的姓名',
			must: true,
			len: 50,
			onlySet: {
				mode: 'all',
				cnt: -1
			},
			selectOptions: ['', ''],
			mobileTruth: true,
			checkBoxLimit: 2,
		},
		{
			type: 'line',
			title: '手机',
			desc: '请填写您的手机号码',
			must: true,
			len: 50,
			onlySet: {
				mode: 'all',
				cnt: -1
			},
			selectOptions: ['', ''],
			mobileTruth: true,
			checkBoxLimit: 2,
		}
	]
}