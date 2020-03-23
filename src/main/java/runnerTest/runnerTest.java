package runnerTest;


import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;
 
//@RunWith(Cucumber.class)
@CucumberOptions(
features = "src/main/java/MoneyControl/Features",
glue = "StepDefinations",
plugin = {"json:target/cucumber-reports/Cucumber.json","html:target/cucumber-reports"},
monochrome = true
		)
public class runnerTest extends AbstractTestNGCucumberTests {

}
