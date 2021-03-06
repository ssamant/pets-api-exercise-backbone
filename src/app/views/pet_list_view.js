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

  events: {
    'click #add-pet': 'addPet'
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
  },

  getFormData: function() {
    var petName = this.$('#name').val();
    this.$('#name').val('');

    var petAge = this.$('#age').val();
    this.$('#age').val('');

    return {
      name: petName,
      age: petAge
    };
  },

  addPet: function() {
    var pet = new Pet(this.getFormData());
    console.log(pet);
    this.model.create(pet);
  }

});



export default PetListView;
