package com.virgingames.pages;

import com.virgingames.utilities.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomeTestPage extends Utility {
    private static final Logger log = LogManager.getLogger(HomeTestPage.class.getName());

    public HomeTestPage() {
        PageFactory.initElements(driver, this);
    }
    @CacheLookup
    @FindBy(xpath = "//span[contains(text(),'All Games')]")
    WebElement searchAllGames;

    @CacheLookup
    @FindBy(xpath = "//h2[normalize-space()='Online Slots']")
    WebElement onlineSlots;

    @CacheLookup
    @FindBy(xpath="//img[@alt='3 Secret Cities']")
    WebElement game3SecretCities;

    @CacheLookup
    @FindBy(xpath = " //h1[normalize-space()='3 Secret Cities'] ")
    WebElement gamesNameText;

    public void clickOnSearchAllGamesTab() {
        log.info("Click On search all games Tab");
        clickOnElement(searchAllGames);
    }
    public void mouseHoverOnlineSlotsMenu() {
        log.info("mouse hover on online slots menu" );
        mouseHoverToElement(onlineSlots);
    }
    public void clickOnGames() {
        log.info("Click on Games ");
        clickOnElement(game3SecretCities);
    }
    public String getTextFromGamesName() {
        log.info("Get text from gamesName '3 Secret Cities'");
        return getTextFromElement(gamesNameText);

    }

}
