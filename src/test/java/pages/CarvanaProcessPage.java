package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class CarvanaProcessPage {
    public CarvanaProcessPage(WebDriver driver) {
        PageFactory.initElements(driver, this);
    }

    @FindBy(id = "ctl00_MainContent_fmwOrder_ddlProduct")
    public WebElement menuItem;

    @FindBy(xpath = "//input[contains(@type,'text')]")
    public List<WebElement> infoInputBoxes;

    @FindBy(xpath = "//table[@class='RadioList']//input")
    public List<WebElement> inforRadioButtons;

    @FindBy(id = "ctl00_MainContent_fmwOrder_InsertButton")
    public WebElement processButton;

}
