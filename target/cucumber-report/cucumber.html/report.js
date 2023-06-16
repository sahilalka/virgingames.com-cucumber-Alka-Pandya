$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("games.feature");
formatter.feature({
  "line": 1,
  "name": "Home Test",
  "description": "As a user I want to select specific Game from the Webpage",
  "id": "home-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3115357600,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should select game successfully from the Webpage",
  "description": "",
  "id": "home-test;user-should-select-game-successfully-from-the-webpage",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on Home Page.",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on search all games tab.",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on Online slots menu.",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on Game Name \"3 Secret Cities\".",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should be able to verify the image text \"3 Secret Cities\".",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 104429701,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnSearchAllGamesTab()"
});
formatter.result({
  "duration": 3161666000,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cspan data-tracking\u003d\"{\u0026quot;label\u0026quot;:\u0026quot;...\u0026quot;,\u0026quot;section\u0026quot;:\u0026quot;Top Nav\u0026quot;,\u0026quot;mvtVariant\u0026quot;:\u0026quot;\u0026quot;,\u0026quot;mvtCampaign\u0026quot;:\u0026quot;\u0026quot;}\" mvt-tracking\u003d\"{\u0026quot;recommendationId\u0026quot;:\u0026quot;undefined\u0026quot;}\"\u003eAll Games\u003c/span\u003e is not clickable at point (1141, 117). Other element would receive the click: \u003cdiv id\u003d\"__tealiumGDPRecModal\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d114.0.5735.111)\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_372\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [30d6432bc3e0cc027390ba6553bbce9b, clickElement {id\u003d1A2DB30302E2035132A5CCE07AEF1CB7_element_23}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 114.0.5735.111, chrome: {chromedriverVersion: 114.0.5735.90 (386bc09e8f4f..., userDataDir: C:\\Users\\sahil\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:56409}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:56409/devtoo..., se:cdpVersion: 114.0.5735.111, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (30d6432bc3e0cc027390ba6553bbce9b)] -\u003e xpath: //span[@data-tracking\u003d\u0027{\"label\":\"All Games\",\"section\":\"Top Nav\",\"mvtVariant\":\"\",\"mvtCampaign\":\"\"}\u0027]]\nSession ID: 30d6432bc3e0cc027390ba6553bbce9b\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:193)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:257)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:78)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:52)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.virgingames.utilities.Utility.clickOnElement(Utility.java:51)\r\n\tat com.virgingames.pages.HomeTestPage.clickOnSearchAllGamesTab(HomeTestPage.java:35)\r\n\tat com.virgingames.steps.HomePageSteps.iClickOnSearchAllGamesTab(HomePageSteps.java:21)\r\n\tat ✽.When I click on search all games tab.(games.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "HomePageSteps.iMouseHoverOnOnlineSlotsMenu()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3 Secret Cities",
      "offset": 22
    }
  ],
  "location": "HomePageSteps.iClickOnGameName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3 Secret Cities",
      "offset": 43
    }
  ],
  "location": "HomePageSteps.iShouldBeAbleToVerifyTheImageText(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 985912900,
  "status": "passed"
});
});