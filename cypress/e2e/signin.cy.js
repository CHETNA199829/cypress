import { HomePage } from "../pages/home"
import { CreateAccountpage } from "../pages/create-account"
describe('Signin', () => {
  it('Happy path', () => {
    const home = new HomePage()
    home.visit()
    home.selectCreateAccount()
    const createAccountpage = new CreateAccountpage();
    createAccountpage.fillDeatils("abc", "bacd", "abc2345@gmail.com", "Jumping@123", "Jumping@123")
    createAccountpage.submitForm()
  })
  it('Weak password', () => {
    const home = new HomePage()
    home.visit()
    home.selectCreateAccount()
    const createAccountpage = new CreateAccountpage();
    createAccountpage.fillDeatils("abc", "bacd", "abc2345@gmail.com", "abcd", "abcd")
    createAccountpage.submitForm()
    createAccountpage.assertPasswordError()
  })
})