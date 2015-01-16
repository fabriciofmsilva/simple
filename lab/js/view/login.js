pl.view.login = {

  /*
   * @method makeLogin
   * @param none.
   * @return none.
   */
  makeLogin: function() {
    var loginButton = document.forms['Login'].commit;

    loginButton.addEventListener('click',
      pl.view.login.handleMakeLogin, false);
  },

  handleMakeLogin: function() {
    var userInput = document.forms['Login'].user.value;
    var passwordInput = document.forms['Login'].password.value;

    Login.checkLogin(userInput, passwordInput);
  }
};
