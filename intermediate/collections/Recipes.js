Recipes = new Mongo.Collection('recipes');

//allow/deny rules allows you to determine who will be able to view this collection. 
//e.g. who is allowed to insert into recipes
Recipes.allow({
	insert: function(userId, doc){
		return !!userId;
	},
	update: function(userId, doc){
		return !!userId;
	}
});
//above says who is allowed to insert into recipes function? 
//person allowed to insert is if userId exists (if return !!userID comes up true) 
//if true, you can add recipes. so if userID exists and you are signed in, you can add

Ingredient = new SimpleSchema({
	name: {
		type: String
	},
	amount: {
		type: String
	}
});

RecipeSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Name"
	},
	desc: {
		type: String,
		label: "Description"
	},
	ingredients: {
		type: [Ingredient]
	},
	inMenu: {
		 type: Boolean,
		 defaultValue: false,
		 optional: true,
		 autoform: {
		 	type: "hidden"
		 }
	},
	author: {
		type: String,
		label: "Author",
		autoValue: function() {
			return this.userId
	},
		autoform: {
			type: "hidden"
		}
	},
		//autoValue function will return the userID.
	createdAt: {
		type: Date,
		label: "Created At",
		autoValue: function(){
			return new Date()
		},
		autoform: {
			type: "hidden"
		}
	}
});

Meteor.methods({
	toggleMenuItem: function(id, currentState){
 		Recipes.update(id, {
 			$set: {
 				inMenu: !currentState
 			}
 		});
	},
	deleteRecipe: function(id){
		Recipes.remove(id);
	}
});

//need to attach the schema to the collection as follows.
Recipes.attachSchema( RecipeSchema );