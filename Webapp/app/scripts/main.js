/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        bootstrap: 'vendor/bootstrap'
    }
});

require([
    'backbone',
    'models/riskzone',
    'views/riskzoneform',
    'views/jumbo'
], function (Backbone, RiskZoneModel, RiskZoneFormView, JumboView) {
    Backbone.history.start();
    var riskzone = new RiskZoneModel();
    riskzone.fetch();

    var jumbo = new JumboView({model: riskzone});
    $('#container').prepend(jumbo.render().el);

    var form = new RiskZoneFormView({model: riskzone});
    $('#placeholder').append(form.render().el);
});
