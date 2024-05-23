/// <reference types="cypress"/>
import { BasePage } from "./base";

export class CreateAccountpage extends BasePage{
url = 'https://magento.softwaretestingboard.com/customer/account/create/'

    firstName(){
    return cy.get('[title="First Name"]')
}
lastName(){
    return cy.get('[title="Last Name"]')
}
email(){
    return cy.get('[title="Email"]')
}
password(){
    return cy.get('[title="Password"]')
}
confirmPasssoword(){
    return cy.get('[title="Confirm Password"]')
}
createAccountButton(){
    return cy.get('.submit')
}
passwordErrorMessage(){
    return cy.get("#password-error")
}

fillDeatils(firstName, lastName, email, password, confirmPasssoword){
    this.firstName().type(firstName)
    this.lastName().type(lastName)
    this.email().type(email)
    this.password().type(password)
    this.confirmPasssoword().type(confirmPasssoword)
}
submitForm(){
    this.createAccountButton().click()
}
assertPasswordError(){
    this.passwordErrorMessage().should('contain','Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.')
}
}