package text;

import java.util.ArrayList;
import java.util.List;

public class ExpectedTexts {
    public static final String FamilyAlbum = "FamilyAlbum";
    public static final String name = "Alex Smith";
    public static final String quantity = "2";
    public static final String date = "02/07/2022";
    public static final String streetAdress = "160 Jefferson Lane";
    public static final String city = "Chicago";
    public static final String state = "Illinois";
    public static final String zipCode = "60102";
    public static final String masterCard = "MasterCard";
    public static final String cardNumber = "123412341234";
    public static final String expireDate = "11/23";

    public static final List<String> orderInfos = new ArrayList<>();

    public List<String> getOrderInfos() {
        getOrderInfos().add(FamilyAlbum);
        getOrderInfos().add(name);
        getOrderInfos().add(quantity);
        getOrderInfos().add(date);
        getOrderInfos().add(streetAdress);
        getOrderInfos().add(city);
        getOrderInfos().add(state);
        getOrderInfos().add(zipCode);
        getOrderInfos().add(masterCard);
        getOrderInfos().add(cardNumber);
        getOrderInfos().add(expireDate);
        return orderInfos;
    }
}
