package com.virgingames.steps;

import com.virgingames.pages.HomeTestPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class HomePageSteps {


        @Given("^I am on Home Page\\.$")
        public void iAmOnHomePage() {

        }

        @When("^I click on search all games tab\\.$")
        public void iClickOnSearchAllGamesTab()throws Exception {
            Thread.sleep(2000);
           new HomeTestPage().clickOnSearchAllGamesTab();
        }

        @When("^I mouse hover on Online slots menu\\.$")
        public void iMouseHoverOnOnlineSlotsMenu() {
            new HomeTestPage().mouseHoverOnlineSlotsMenu();
        }

        @And("^I click on Game Name \"([^\"]*)\"\\.$")
        public void iClickOnGameName(String arg0)  {
            new HomeTestPage().clickOnGames();
        }

        @Then("^I should be able to verify the image text \"([^\"]*)\"\\.$")
        public void iShouldBeAbleToVerifyTheImageText(String arg0) {
            Assert.assertEquals(new HomeTestPage().getTextFromGamesName(),"actual text","Error message");
        }
    }

