import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Pet from '../models/pet.js';

var PetView = Backbone.View.extend({

  initialize: function(params) {
    var detailsTemplate = _.template($('#pet-info-template').html());
    console.log(detailsTemplate);
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
    'click': 'showPetDetails',
    'click .delete-pet': 'deletePet'
  },

  showPetDetails: function(){
    console.log(this.model);
  },

  deletePet: function(){
    var id = this.model.attributes.id;
    console.log("ID" + id);
    //destroy auto creates the url by adding the model id for the api delete request
    this.model.destroy();
  }


});

export default PetView;
