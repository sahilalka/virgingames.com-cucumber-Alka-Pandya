Feature: Home Test
  As a user I want to select specific Game from the Webpage

  @sanity @regression
    Scenario: User should select game successfully from the Webpage
    Given  I am on Home Page.
    When   I click on search all games tab.
    When   I mouse hover on Online slots menu.
    And    I click on Game Name "3 Secret Cities".
    Then   I should be able to verify the image text "3 Secret Cities".


