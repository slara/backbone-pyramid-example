/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var RiskzoneformView = Backbone.View.extend({

        template: JST['app/scripts/templates/riskzoneform.ejs'],

        events: {
            'click #sync-btn': 'syncModel'
        },

        initialize: function () {
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        syncModel: function () {
            var nameinput = $('#nameInput').val();
            console.log(this.model.get('name'), nameinput);

            this.model.set('name', nameinput);

            this.model.save();
        }
    });

    return RiskzoneformView;
});