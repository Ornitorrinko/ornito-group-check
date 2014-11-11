$(function(){

	var buttons = [{
			name: "domingo"
			, label: "D"
			, id: 1
		},{
			name: "segunda"
			, label: "S"
			, id: 2
		},{
			name: "terca"
			, label: "T"
			, id: 3
		},{
			name: "quarta"
			, label: "Q"
			, id: 4
		},{
			name: "quinta"
			, label: "Q"
			, id: 5
		},{
			name: "sexta"
			, label: "S"
			, id: 6
		},{
			name: "sabado"
			, label: "S"
			, id: 7
		}];

	$(".ornito-group-check")
		.ornitoGroupCheck({
			buttons: buttons //required
			, onClick: onClicked //optional
		});

	function onClicked(ev, isChecked) {
		if(isChecked){
			// do something
		}else{
			// do something else
		}

		console.log('event=>', ev);
	}
});
