$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ABBOTINDIA.feature");
formatter.feature({
  "line": 1,
  "name": "Visit Money Control Home page",
  "description": "",
  "id": "visit-money-control-home-page",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Visit Money Control Home page",
  "description": "",
  "id": "visit-money-control-home-page;visit-money-control-home-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "Visit stock ABBOTINDIA",
  "keyword": "Then "
});
formatter.step({
  "line": 4,
  "name": "Get stock name ABBOTINDIA",
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "Get stock previous close ABBOTINDIA",
  "keyword": "Then "
});
formatter.match({
  "location": "ABBOTINDIA.Visit_stock_ABBOTINDIA()"
});
formatter.result({
  "duration": 49873764100,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d80.0.3987.149)\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027DESKTOP-D65NDT8\u0027, ip: \u0027192.168.0.106\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_161\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d79.0.3945.36 (3582db32b33893869b8c1339e8f4d9ed1816f143-refs/branch-heads/3945@{#614}), userDataDir\u003dC:\\Users\\jayan\\AppData\\Local\\Temp\\scoped_dir26184_1947781129}, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dANY, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:59968}, acceptInsecureCerts\u003dfalse, browserVersion\u003d80.0.3987.149, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dwindows, setWindowRect\u003dtrue}]\nSession ID: 2b98a368250a685b6beef6405c5c58b7\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:272)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:82)\r\n\tat StepDefinations.ABBOTINDIA.Visit_stock_ABBOTINDIA(ABBOTINDIA.java:22)\r\n\tat ✽.Then Visit stock ABBOTINDIA(ABBOTINDIA.feature:3)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ABBOTINDIA.Get_stock_name_ABBOTINDIA()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ABBOTINDIA.Get_stock_previous_close_ABBOTINDIA()"
});
formatter.result({
  "status": "skipped"
});
});