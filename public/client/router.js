Marginal.Router = Backbone.Router.extend({

  initialize: function(options){
    this.$el = options.el;
  },

  routes: {
    '':    'index',
    'add': 'add'
  },

  swapView: function(view){
    this.$el.html(view.render().el);
  },

  index: function(){
    var docs = new Marginal.Documents();
    var documentsView = new Marginal.DocumentsView({ collection: docs });
    this.swapView(documentsView);
  },

  add: function(){
    this.swapView(new Marginal.addDocumentView());
  }
});