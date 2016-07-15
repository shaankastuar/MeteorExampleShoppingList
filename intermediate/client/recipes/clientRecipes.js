// Meteor.subscribe('recipes');
//above is not template level

//below is template level. auto run set up inside the function in on created
//the auto run will unsubscribe from any old subscriptions. when you go to next recipe, not
//still subscribed to the previous one.
Template.Recipes.onCreated(function(){
	var self = this;
	self.autorun(function(){
		self.subscribe('recipes');
	});
});


Template.Recipes.helpers({
	recipes: ()=> {
		return Recipes.find({});
	} 
});