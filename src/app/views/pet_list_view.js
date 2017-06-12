import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Pet from '../models/pet.js';
import PetView from './pet_view';

var PetListView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    console.log(params);
    this.listenTo(this.model, 'update', this.render);
    console.log("initialize Pet List View");
  },

  render: function() {
    console.log("Start render Pet List View");
    this.$('#pet-list').empty();
    var that = this;
    console.log("MODEL" + this.model);

    this.model.each(function(pet) {
      console.log("PET");
      var petView = new PetView({
        model: pet,
        template: that.template,

      });
      that.$('#pet-list').append(petView.render().el);
    });
    console.log("finshed rendering pet list");
  }
});

export default PetListView;
