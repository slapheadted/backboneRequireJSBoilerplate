require.config({
  enforceDefine: true,
  paths: {
    'jquery': 'vendor/jquery/jquery',
    'lodash': 'vendor/lodash/lodash',
    'backbone': 'vendor/backbone/backbone'
  },
  shim: {
    "lodash": {
      deps: [],
      exports: "_"
    },
    "backbone": {
      deps: ['jquery', 'lodash'],
      exports: "Backbone"
    }
  }
});

define([
	'App'
	], function(App) {
		App.initialize();
	}
);
