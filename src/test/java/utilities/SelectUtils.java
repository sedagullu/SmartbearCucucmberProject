package utilities;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

public class SelectUtils {

    private static Select select;

    public static void selectDropdownByText(WebElement dropdown, String selectDropdown){
        new Select(dropdown).selectByVisibleText(selectDropdown);
    }

    public static void selectDropdownByIndex(WebElement dropdown, int selectDropdown){
        new Select(dropdown).selectByIndex(selectDropdown);
    }

    public static String getSelectedDropdownText(WebElement dropdown){
        return new Select(dropdown).getFirstSelectedOption().getText();
    }
}