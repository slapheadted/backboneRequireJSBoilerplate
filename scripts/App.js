define([
	'jquery',
	'lodash',
	'backbone',
	'routes/AppRouter'
], function($, _, Backbone, AppRouter) {
	var initialize = function() {
		AppRouter.initialize();
	};

	return {
		initialize: initialize
	};
});	
