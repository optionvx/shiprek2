Router.configure({
  layoutTemplate: 'main_layout'
});

Router.map(function(){
  //comingsoon
  this.route('comingsoon', {
    path: '/comingsoon',
    template: 'comingsoon'
  });

  //Login
  this.route('login', {
    path: '/login',
    template: 'login'
  });
  //Signup
  this.route('signup', {
    path: '/signup',
    template: 'signup'
  });
  //Profile
  this.route('profile', {
    path: '/profile',
    template: 'profile'
  });
  //Database
  this.route('database', {
    path: '/database',
    template: 'database'
  });
  //Collaborate
  this.route('collaborate', {
    path: '/collaborate',
    template: 'collaborate'
    });
    //Search
    this.route('search', {
      path: '/search',
      template: 'search'
    });
    //Questions
    this.route('questions', {
      path: '/questions',
      template: 'questions'
    });
    //dataentry
    this.route('dataentry', {
      path: '/dataentry',
      template: 'dataentry'
    });
    });
