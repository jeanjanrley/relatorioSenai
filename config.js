var formato = { minimumFractionDigits: 2, minimumIntegerDigits: 2, style: 'currency', currency: 'BRL' }
var formatedString = '<%=value.toLocaleString("pt-BR", formato) %>';

const regionData = {
	labels: ["Este", "Norte", "Sul"],
	datasets: [
		{
			label: '101 Keyboard',
			backgroundColor: '#60BA47',
			borderColor: '#60BA47',
			data: [3787.51, 3886.06, 2090.96],
		},
		{
			label: '17" Monitor',
			backgroundColor: '#6ACADB',
			borderColor: '#6ACADB',
			data: [41142.14, 12592.71, 17651.32],
		},
		{
			label: 'Desktop CPU',
			backgroundColor: '#fff',
			borderColor: '#fff',
			data: [261359.63, 97047.29, 89882.21],
		},
		{
			label: 'PC Mouse',
			backgroundColor: '#EA017A',
			borderColor: '#EA017A',
			data: [1267.23, 971.43, 635.18],
		},
	],
};

const regionConfig = {
	type: 'line',
	data: regionData,
	options: {
		scaleFontFamily: "'Verdana'",
		scaleFontSize: 13,
		animation: false,
		scaleFontColor: "#484848",
		responsive: true,
		tooltipTemplate: formatedString,
		scaleLabel: formatedString
	},
	color: "#fff"
};

const storeData = {
	labels: ["Loja 1", "Loja 2", "Loja 3", "Loja 4", "Loja 5", "Loja 6", "Loja 7", "Loja 8"],
	datasets: [
		{
			label: '101 Keyboard',
			backgroundColor: '#60BA47',
			borderColor: '#60BA47',
			data: [975.16, 225.04, 890.77, 675.11, 3210.95, 1802.08, 1404.08, 581.34, 9764.53],
		},
		{
			label: '17" Monitor',
			backgroundColor: '#6ACADB',
			borderColor: '#6ACADB',
			data: [7211.21, 2798.38, 7641.73, 4520.46, 8072.25, 23598.45, 11301.15, 6242.54, 71386.17],
		},
		{
			label: 'Desktop CPU',
			backgroundColor: '#fff',
			borderColor: '#fff',
			data: [33955.50, 22370.68, 33556.03, 29960.74, 67086.55, 154444.41, 70962.33, 35952.89, 448289.13],
		},
		{
			label: 'PC Mouse',
			backgroundColor: '#EA017A',
			borderColor: '#EA017A',
			data: [290.25, 109.37, 235.56, 328.11, 643.33, 500.84, 568.68, 197.71, 2873.85],
		},
	],
};

const sotreConfig = {
	type: 'line',
	data: storeData,
	options: {
		scaleFontFamily: "'Verdana'",
		scaleFontSize: 13,
		animation: false,
		scaleFontColor: "#484848",
		responsive: true,
		tooltipTemplate: formatedString,
		scaleLabel: formatedString
	},
	color: "#fff"
};