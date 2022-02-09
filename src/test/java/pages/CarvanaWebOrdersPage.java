package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.ArrayList;
import java.util.List;

public class CarvanaWebOrdersPage {
    public CarvanaWebOrdersPage(WebDriver driver) {
        PageFactory.initElements(driver, this);
    }

    @FindBy(xpath = "//ul[@id='ctl00_menu']//li")
    public List<WebElement> webOrdersList;

    @FindBy(xpath = "//p[@class='CheckUncheck']/a")
    public List<WebElement> checkUncheckLink;

    @FindBy(xpath = "//input[@checked='checked']")
    public List<WebElement> checkBoxes;

    @FindBy(xpath = "//input[@checked='unchecked']")
    public List<WebElement> unCheckBoxes;

    @FindBy(id = "ctl00_MainContent_btnDelete")
    public WebElement deleteAllButton;

    @FindBy(xpath = "//table/tbody/tr[2]/td")
    public List<WebElement> firstRowEachInfo;

    @FindBy(xpath = "//table/tbody/tr[2]")
    public WebElement firstRow;

    public List<WebElement> setOrderInfos(List<WebElement> elements) {
        int i;
        List<WebElement> newElements = new ArrayList<>();
        for (i = 0; i < elements.size(); i++) {
            if (elements.get(i).getText().length() > 0) {
                newElements.add(elements.get(i));
            }
        }
        return newElements;
    }

    @FindBy(id = "ctl00_MainContent_orderGrid")
    public WebElement table;

    @FindBy(id = "ctl00_MainContent_orderMessage")
    public WebElement orderMessage;

}

