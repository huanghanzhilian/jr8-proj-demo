define("demo/dialog/dialog", function(require, exports, module) {
	module.exports = function(opt) {
		var $ = require('zepto');
		require('libs/zepto.dialog');
		//.dialog-alert,.dialog-confirm,.dialog-custom


		$('.info-wrap').on('click', '.dialog-confirm', function(e) {
			$.dialog({
				type: "confirm",
				title: "提示",
				message: "sssqwqwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwqwqwwwwwwwww",
				onConfirm: function() {
					alert("www");
				}
			});
		})

		$('.info-wrap').on('click', '.dialog-alert', function(e) {
			$.dialog({
				type: "alert",
				title: "alert",
				message: "sssqwqwssswwssqwqwqwq"
			});
		})

		$('.info-wrap').on('click', '.dialog-custom', function(e) {
			$.dialog({
				type: "custom",
				title: "custom",
				message: "sssqwqwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwsssqwqwqwqwwwwwwwwwqwqwwwwwwwww"
			});
		})
	}
});