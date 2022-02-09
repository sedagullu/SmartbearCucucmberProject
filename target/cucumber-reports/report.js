$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/validateCarvan.feature");
formatter.feature({
  "name": "Carvana Project Functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on \"http://secure.smartbearsoftware.com/samples/testcomplete12/WebOrders/login.aspx\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseSteps.userIsOn(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate invalid login attempt",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "user enters username as \"abcd\"",
  "keyword": "When "
});
formatter.match({
  "location": "CarvanaSteps.userEntersUsernameAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters password as \"abcd1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "CarvanaSteps.userEntersPasswordAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Login\" button",
  "keyword": "And "
});
formatter.match({
  "location": "CarvanaSteps.userClicksOnLoginButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Invalid Login or Password.\" Message",
  "keyword": "Then "
});
formatter.match({
  "location": "CarvanaSteps.userShouldSeeMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on \"http://secure.smartbearsoftware.com/samples/testcomplete12/WebOrders/login.aspx\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseSteps.userIsOn(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate valid login attempt",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "user enters username as \"Tester\"",
  "keyword": "When "
});
formatter.match({
  "location": "CarvanaSteps.userEntersUsernameAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters password as \"test\"",
  "keyword": "And "
});
formatter.match({
  "location": "CarvanaSteps.userEntersPasswordAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Login\" button",
  "keyword": "And "
});
formatter.match({
  "location": "CarvanaSteps.userClicksOnLoginButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be routed to \"http://secure.smartbearsoftware.com/samples/testcomplete12/weborders/\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CarvanaSteps.userShouldBeRoutedTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on \"http://secure.smartbearsoftware.com/samples/testcomplete12/WebOrders/login.aspx\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseSteps.userIsOn(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate \"Web Orders\" menu items",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "user enters username as \"Tester\"",
  "keyword": "When "
});
formatter.match({
  "location": "CarvanaSteps.userEntersUsernameAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters password as \"test\"",
  "keyword": "And "
});
formatter.match({
  "location": "CarvanaSteps.userEntersPasswordAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Login\" button",
  "keyword": "And "
});
formatter.match({
  "location": "CarvanaSteps.userClicksOnLoginButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be routed to \"http://secure.smartbearsoftware.com/samples/testcomplete12/weborders/\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CarvanaSteps.userShouldBeRoutedTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate below menu items are displayed",
  "rows": [
    {
      "cells": [
        "View all orders",
        "View all products",
        "Order"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CarvanaSteps.validateBelowMenuItemsAreDisplayed(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on \"http://secure.smartbearsoftware.com/samples/testcomplete12/WebOrders/login.aspx\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseSteps.userIsOn(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate “Check Al” and “Uncheck All” links",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "user enters username as \"Tester\"",
  "keyword": "When "
});
formatter.match({
  "location": "CarvanaSteps.userEntersUsernameAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters password as \"test\"",
  "keyword": "And "
});
formatter.match({
  "location": "CarvanaSteps.userEntersPasswordAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Login\" button",
  "keyword": "And "
});
formatter.match({
  "location": "CarvanaSteps.userClicksOnLoginButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be routed to \"http://secure.smartbearsoftware.com/samples/testcomplete12/weborders/\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CarvanaSteps.userShouldBeRoutedTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Check All\" button",
  "keyword": "When "
});
formatter.match({
  "location": "CarvanaSteps.userClicksOnLoginButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "all rows should be checked",
  "keyword": "Then "
});
formatter.match({
  "location": "CarvanaSteps.allRowsShouldBeChecked()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Uncheck All\" button",
  "keyword": "When "
});
formatter.match({
  "location": "CarvanaSteps.userClicksOnLoginButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "all rows should be unchecked",
  "keyword": "Then "
});
formatter.match({
  "location": "CarvanaSteps.allRowsShouldBeUnchecked()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on \"http://secure.smartbearsoftware.com/samples/testcomplete12/WebOrders/login.aspx\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseSteps.userIsOn(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate adding new order",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "user enters username as \"Tester\"",
  "keyword": "When "
});
formatter.match({
  "location": "CarvanaSteps.userEntersUsernameAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters password as \"test\"",
  "keyword": "And "
});
formatter.match({
  "location": "CarvanaSteps.userEntersPasswordAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Login\" button",
  "keyword": "And "
});
formatter.match({
  "location": "CarvanaSteps.userClicksOnLoginButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be routed to \"http://secure.smartbearsoftware.com/samples/testcomplete12/weborders/\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CarvanaSteps.userShouldBeRoutedTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Order\" menu item",
  "keyword": "When "
});
formatter.match({
  "location": "CarvanaSteps.userClicksOnMenuItem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects \"FamilyAlbum\" as product",
  "keyword": "And "
});
formatter.match({
  "location": "CarvanaSteps.userSelectsAsProduct(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters 2 as quantity",
  "keyword": "And "
});
formatter.match({
  "location": "CarvanaSteps.userEntersAsQuantity(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters all address information",
  "keyword": "And "
});
formatter.match({
  "location": "CarvanaSteps.userEntersAllAddressInformation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters all payment information",
  "keyword": "And "
});
formatter.match({
  "location": "CarvanaSteps.userEntersAllPaymentInformation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Process\" button",
  "keyword": "And "
});
formatter.match({
  "location": "CarvanaSteps.userClicksOnLoginButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"View all orders\" menu item",
  "keyword": "And "
});
formatter.match({
  "location": "CarvanaSteps.userClicksOnMenuItem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see their order displayed in the \"List of All Orders\" table",
  "keyword": "Then "
});
formatter.match({
  "location": "CarvanaSteps.userShouldSeeTheirOrderDisplayedInTheTable(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate all information entered displayed correct with the order",
  "keyword": "And "
});
formatter.match({
  "location": "CarvanaSteps.validateAllInformationEnteredDisplayedCorrectWithTheOrder()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on \"http://secure.smartbearsoftware.com/samples/testcomplete12/WebOrders/login.aspx\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseSteps.userIsOn(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate \"Delete Selected\" button",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "user enters username as \"Tester\"",
  "keyword": "When "
});
formatter.match({
  "location": "CarvanaSteps.userEntersUsernameAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters password as \"test\"",
  "keyword": "And "
});
formatter.match({
  "location": "CarvanaSteps.userEntersPasswordAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Login\" button",
  "keyword": "And "
});
formatter.match({
  "location": "CarvanaSteps.userClicksOnLoginButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be routed to \"http://secure.smartbearsoftware.com/samples/testcomplete12/weborders/\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CarvanaSteps.userShouldBeRoutedTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Check All\" button",
  "keyword": "When "
});
formatter.match({
  "location": "CarvanaSteps.userClicksOnLoginButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Delete Selected\" button",
  "keyword": "And "
});
formatter.match({
  "location": "CarvanaSteps.userClicksOnLoginButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate all orders are deleted from the \"List of All Orders\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CarvanaSteps.validateAllOrdersAreDeletedFromThe(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate user sees \"List of orders is empty. In order to add new order use this link.\" Message",
  "keyword": "And "
});
formatter.match({
  "location": "CarvanaSteps.validateUserSeesMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});