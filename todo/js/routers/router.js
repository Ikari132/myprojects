
var Workspase = Backbone.Router.extend({

	routes:{
		'*filter': 'setFilter'
	},

	setFilter:function(param){
		
		window.app.Todos.trigger('filter');

	},



}); 

app.TodoRouter = new Workspase();
Backbone.history.start();