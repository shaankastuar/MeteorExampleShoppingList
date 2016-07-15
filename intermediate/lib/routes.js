if (Meteor.isClient) {	 
	 Accounts.onLogin(function(){
		FlowRouter.go('recipe-book');
	});

	Accounts.onLogout(function(){
		FlowRouter.go('home');
	});
}

FlowRouter.triggers.enter([function(context, redirect){
	if(!Meteor.userId()){
		FlowRouter.go('home');
	}
}]);

//if user is logged in and goes to home route, go to recipe-book
FlowRouter.route('/', {
	name: 'home',
	action(){
		if(Meteor.userId()){
			FlowRouter.go('recipe-book')
		}
		BlazeLayout.render('HomeLayout');
	}

});

FlowRouter.route('/recipe-book', {
	name: 'recipe-book',
	action(){
		BlazeLayout.render('MainLayout', {main: 'Recipes'});
	}

});

FlowRouter.route('/recipe/:id', {
	name: 'recipe',
	action(){
		BlazeLayout.render('MainLayout', {main: 'RecipeSingle'});
	}

});

FlowRouter.route('/menu', {
	name: 'menu',
	action(){
		BlazeLayout.render('MainLayout', {main: 'Menu'});
	}
});

FlowRouter.route('/shopping-list', {
	name: 'shopping-list',
	action(){
		BlazeLayout.render('MainLayout', {main: 'ShoppingList'});
	}
});

//line 9 test is the path
//line 10 "test" is the name of the route
//line 12: MainLayout is the template name that we're rendering on. 
//line 12 (cont'd) main' is the section on the MainLayout we are rendering onto. See line 7 on MainLayout.html
//"Test" is the template we're rendering into that area.