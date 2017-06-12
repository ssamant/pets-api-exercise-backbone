import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Pet from '../models/pet.js';

var PetView = Backbone.View.extend({

  initialize: function(params) {
    this.template = params.template;
    this.listenTo(this.model, "change", this.render);
    console.log("Initialize PetView");
    console.log(this.model);
  },

  render: function() {
    var compiledTemplate = this.template({pet: this.model.toJSON()});
    console.log(compiledTemplate);
    this.$el.html(compiledTemplate);
    console.log("Render PetView");
    return this;
  },

  events: {

  }


});

export default PetView;
