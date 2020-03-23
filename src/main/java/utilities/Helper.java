package utilities;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

public class Helper{

	public WebDriver drv;
	

	public WebDriver browserMethod() throws IOException {
		Properties prop = new Properties();
		FileInputStream fis = new FileInputStream(
				"C:\\Users\\jayan\\eclipse-workspace\\MoneyControlCucumber\\resources\\data.properties");
			
		prop.load(fis);

		 String browser = prop.getProperty("browser");
			
		if(browser.equals("firefox")) {
			System.setProperty("webdriver.firefox.driver", "C:\\Users\\jayan\\Downloads\\geckodriver-v0.26.0-win64\\geckodriver.exe");
			drv = new FirefoxDriver();
					}
		
		if(browser.equals("Chrome")) {
			System.setProperty("webdriver.chrome.driver", "C:\\Users\\jayan\\Downloads\\chromedriver_win32 (3)\\chromedriver.exe");
			drv = new ChromeDriver();
					}
		
		if(browser.equals("IE")) {
			System.setProperty("webdriver.firefox.driver", "C:\\IEDriverServer.exe");
		    drv = new InternetExplorerDriver();
					}
		
		drv.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
		return drv;
		
	}
	
	
	public void getscreenshots(String result) throws IOException {
		File src=	 ((TakesScreenshot)drv).getScreenshotAs(OutputType.FILE);
		FileUtils.copyFile(src,new File("C:\\Users\\jayan\\eclipse-workspace\\MoneyControlCucumber\\resources\\Screenshot\\"+result+"screenshot.png"));
	}
}
