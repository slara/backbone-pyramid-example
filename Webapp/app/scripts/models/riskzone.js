/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var RiskzoneModel = Backbone.Model.extend({

        url: 'http://localhost:6543/riskzone',

        defaults: {
            name: 'support'
        },

        initialize: function () {
            this.on('change', this.printStatus, this);
        },

        parse: function (obj) {
            console.log(obj);
            return obj;
        },

        printStatus: function () {
            console.log('From model:', this.get('name'));
        }
    });

    return RiskzoneModel;
});