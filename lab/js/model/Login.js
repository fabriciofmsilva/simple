/**
 * Constructor
 */
function Login(slots) {
  this.user = slots.user;
  this.password = slots.password;
};

/*
 * Class-level ("static") properties
 */
Login.users = {};

/*
 * Class-level ("static") methods
 */

Login.checkLogin = function(user, password) {
  if(user === Login.users.id.user &&
      password === Login.users.id.password) {
    console.log('Login success!');
  } else {
    console.log('Login failed!');
  }
}

//  Create and save test data
Login.createTestData = function() {
  Login.users['id'] = new Login({
    user: 'fabricio',
    password: '123456'
  });
};
