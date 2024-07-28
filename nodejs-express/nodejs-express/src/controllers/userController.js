class UserController {
  // is not a good practice to use Request and Response in the controller
  createUser(user) {
    // validations rules
    if (!user) throw new Error('User is required');
    if (user.email === undefined) throw new Error('Email is required');

    // business rules normally with database
    // gilbertopsantosjr@gmail.com
    // call a service class ask if the email is already in use
    console.log('POST users', user);
  }
  getAllUsers() {
    console.log('GET users');
    return [{ name: 'Gilberto' }, { name: 'Maria' }];
  }
  getUserById(id) {
    console.log('GET by Id:', id);
  }
  updateUserById(user, id) {
    console.log(`PUT by Id: ${user}`, id);
  }
  deleteUserById(id) {
    console.log(`DELETE by Id: ${id}`);
  }
}
export default UserController;
