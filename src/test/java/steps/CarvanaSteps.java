package steps;

import cucumber.api.java.Before;
import cucumber.api.java.an.E;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;
import io.cucumber.datatable.dependency.com.fasterxml.jackson.annotation.JsonTypeInfo;
import org.junit.Assert;
import org.openqa.selenium.NotFoundException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import pages.CarvanaHomePage;
import pages.CarvanaProcessPage;
import pages.CarvanaWebOrdersPage;
import text.ExpectedTexts;
import utilities.Driver;
import utilities.ElementUtils;
import utilities.SelectUtils;
import utilities.Waiter;

import java.util.List;

public class CarvanaSteps {
    WebDriver driver;
    CarvanaHomePage carvanaHomePage;
    CarvanaWebOrdersPage carvanaWebOrdersPage;
    CarvanaProcessPage carvanaProcessPage;


    @Before
    public void setUp() {
        driver = Driver.getDriver();
        carvanaHomePage = new CarvanaHomePage(driver);
        carvanaWebOrdersPage = new CarvanaWebOrdersPage(driver);
        carvanaProcessPage = new CarvanaProcessPage(driver);
    }

    @When("user enters username as {string}")
    public void userEntersUsernameAs(String inputLogin) {
        switch (inputLogin) {
            case "abcd":
                carvanaHomePage.usernameInput.sendKeys(inputLogin);
                break;
            case "Tester":
                carvanaHomePage.usernameInput.sendKeys(inputLogin);
                break;
            default:
                throw new NotFoundException(inputLogin + " can not be found!!!");
        }
    }

    @And("user enters password as {string}")
    public void userEntersPasswordAs(String inputLogin) {
        switch (inputLogin) {
            case "abcd1234":
                carvanaHomePage.passwordInput.sendKeys(inputLogin);
                break;
            case "test":
                carvanaHomePage.passwordInput.sendKeys(inputLogin);
                break;
            default:
                throw new NotFoundException(inputLogin + " can not be found!!!");
        }
    }

    @And("user clicks on {string} button")
    public void userClicksOnLoginButton(String button) {

        switch (button) {
            case "Login":
                carvanaHomePage.loginButton.click();
                break;
            case "Check All":
                carvanaWebOrdersPage.checkUncheckLink.get(0).click();
                break;
            case "Uncheck All":
                carvanaWebOrdersPage.checkUncheckLink.get(1).click();
                break;
            case "Delete Selected":
                carvanaWebOrdersPage.deleteAllButton.click();
                break;
            case "Process":
                carvanaProcessPage.processButton.click();
                break;
            default:
                throw new NotFoundException(button + " can not found!!!");
        }
    }

    @Then("user should see {string} Message")
    public void userShouldSeeMessage(String messageText) {
        Assert.assertEquals(messageText, carvanaHomePage.invalidMessage.getText());
    }


    @Then("user should be routed to {string}")
    public void userShouldBeRoutedTo(String url) {
        Assert.assertEquals(url, driver.getCurrentUrl());

    }

    @And("validate below menu items are displayed")
    public void validateBelowMenuItemsAreDisplayed(DataTable dataTable) {

        List<String> expectedWebOrderTexts = dataTable.asList();

        for (int i = 0; i < carvanaWebOrdersPage.webOrdersList.size(); i++) {
            Assert.assertEquals(expectedWebOrderTexts.get(i), carvanaWebOrdersPage.webOrdersList.get(i).getText());
        }
    }

    @Then("all rows should be checked")
    public void allRowsShouldBeChecked() {
        for (int i = 0; i < carvanaWebOrdersPage.webOrdersList.size(); i++) {
            Assert.assertTrue(carvanaWebOrdersPage.checkBoxes.get(i).isSelected());
        }
    }

    @Then("all rows should be unchecked")
    public void allRowsShouldBeUnchecked() {
        for (int i = 0; i < carvanaWebOrdersPage.unCheckBoxes.size(); i++) {
            Assert.assertTrue(carvanaWebOrdersPage.unCheckBoxes.get(i).isSelected());
        }
    }

    @When("user clicks on {string} menu item")
    public void userClicksOnMenuItem(String menuItem) {
        switch (menuItem) {
            case "Order":
                carvanaWebOrdersPage.webOrdersList.get(2).click();
                break;
            case "View all orders":
                carvanaWebOrdersPage.webOrdersList.get(0).click();
                break;
            default:
                throw new NotFoundException(menuItem + " can not be found!!!");
        }
    }

    @And("user selects {string} as product")
    public void userSelectsAsProduct(String option) {
        SelectUtils.selectDropdownByText(carvanaProcessPage.menuItem, option);
    }


    @And("user enters {int} as quantity")
    public void userEntersAsQuantity(int quantity) {
        carvanaProcessPage.infoInputBoxes.get(0).click();
        carvanaProcessPage.infoInputBoxes.get(0).clear();
        carvanaProcessPage.infoInputBoxes.get(0).sendKeys(String.valueOf(quantity));
    }

    @And("user enters all address information")
    public void userEntersAllAddressInformation() {
        carvanaProcessPage.infoInputBoxes.get(4).sendKeys(ExpectedTexts.name);
        carvanaProcessPage.infoInputBoxes.get(5).sendKeys(ExpectedTexts.streetAdress);
        carvanaProcessPage.infoInputBoxes.get(6).sendKeys(ExpectedTexts.city);
        carvanaProcessPage.infoInputBoxes.get(7).sendKeys(ExpectedTexts.state);
        carvanaProcessPage.infoInputBoxes.get(8).sendKeys(ExpectedTexts.zipCode);

    }

    @And("user enters all payment information")
    public void userEntersAllPaymentInformation() {
        carvanaProcessPage.inforRadioButtons.get(0).click();
        carvanaProcessPage.infoInputBoxes.get(9).sendKeys(ExpectedTexts.cardNumber);
        carvanaProcessPage.infoInputBoxes.get(10).sendKeys(ExpectedTexts.expireDate);
    }

    @Then("user should see their order displayed in the {string} table")
    public void userShouldSeeTheirOrderDisplayedInTheTable(String table) {
        Assert.assertTrue(carvanaWebOrdersPage.firstRow.isDisplayed());
    }

    @And("validate all information entered displayed correct with the order")
    public void validateAllInformationEnteredDisplayedCorrectWithTheOrder() {
        for (int i = 0; i < ExpectedTexts.orderInfos.size(); i++) {
            Assert.assertEquals(ExpectedTexts.orderInfos.get(i), carvanaWebOrdersPage.setOrderInfos(carvanaWebOrdersPage.firstRowEachInfo).get(i).getText());
            Assert.assertTrue(carvanaWebOrdersPage.setOrderInfos(carvanaWebOrdersPage.firstRowEachInfo).get(i).isDisplayed());
        }
    }

    @Then("validate all orders are deleted from the {string}")
    public void validateAllOrdersAreDeletedFromThe(String table) {
        try {
            Assert.assertFalse(carvanaWebOrdersPage.table.isDisplayed());
        } catch (Exception e) {
            System.out.println("");
        }


    }

    @And("validate user sees {string} Message")
    public void validateUserSeesMessage(String messageText) {
        Waiter.pause(5);
        Assert.assertTrue(carvanaWebOrdersPage.orderMessage.isDisplayed());

    }
}