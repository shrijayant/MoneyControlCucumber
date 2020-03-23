package StepDefinations;

import java.io.File;
import java.io.IOException;
import utilities.*;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import cucumber.api.java.en.Then;

public class ABFRL extends Helper {


@Then("^Visit stock ABFRL$")
public void Visit_stock_ABFRL() throws InterruptedException, IOException {
drv = browserMethod();
drv.get("https://www.moneycontrol.com");
			  drv.findElement(By.xpath("//*[@id=\"search_str\"]")).sendKeys("ABFRL");
			  drv.findElement(By.xpath("//*[@id=\"mc_mainWrapper\"]/header/div[1]/div/div[2]/div[2]/div[1]/a")).click();
			  Thread.sleep(5000);
}
@Then("^Get stock name ABFRL$")
public void Get_stock_name_ABFRL() throws InterruptedException, IOException {
			  drv.findElement(By.xpath("//*[@id=\"sec_quotes\"]/div[2]/div/h1"));
			  Thread.sleep(5000);
}
@Then("^Get stock previous close ABFRL$")
public void Get_stock_previous_close_ABFRL() throws InterruptedException, IOException {
			  drv.findElement(By.xpath("//*[@id=\"div_nse_livebox_wrap\"]/div[1]/div[2]/div[1]/ul/li[1]/p[2]"));
			  Thread.sleep(5000);
			  File src=	 ((TakesScreenshot)drv).getScreenshotAs(OutputType.FILE);
				FileUtils.copyFile(src,new File("C:\\Users\\jayan\\eclipse-workspace\\MoneyControlCucumber\\resources\\Screenshot\\ABFRLscreenshot.png"));
drv.quit();}}