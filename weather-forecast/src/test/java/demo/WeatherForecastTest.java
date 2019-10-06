// (C) Copyright 2009-2019 Micro Focus or one of its affiliates.
package demo;

import com.microfocus.sv.appium.AppiumHelper;
import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.remote.MobileCapabilityType;
import org.junit.AfterClass;
import org.junit.Assert;
import org.junit.BeforeClass;
import org.junit.Test;
import org.microfocus.sv.api.SvClient;
import org.openqa.selenium.remote.DesiredCapabilities;

import java.io.IOException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

public class WeatherForecastTest {

    private static SvClient sv;
    private static AndroidDriver<MobileElement> app;

    @BeforeClass
    public static void initLab() throws IOException {
        // read properties from the demo.properties file
        String mcUrl = getProperty("mc.url", true);
        String mcClientId = getProperty("mc.oauthClientId", true);
        String mcClienSecret = getProperty("mc.oauthClientSecret", false);
        String mcTenantId = getProperty("mc.tenantId", true);
        String mcWorkspaceName = getProperty("mc.mcWorkspaceName", true);

        // specify mobile phone to use and application to launch
        DesiredCapabilities capabilities = new DesiredCapabilities();
        capabilities.setCapability(MobileCapabilityType.PLATFORM_NAME, "Android");
        capabilities.setCapability("appPackage", "cz.martykan.forecastie");
        capabilities.setCapability("appActivity", "cz.martykan.forecastie.activities.SplashActivity");
        capabilities.setCapability("oauthClientId", mcClientId);
        capabilities.setCapability("oauthClientSecret", mcClienSecret);
        capabilities.setCapability("tenantId", mcTenantId);
        capabilities.setCapability("mcWorkspaceName", mcWorkspaceName);

        // attach Mobile Center embedded SV Lab Server
        app = new AndroidDriver<>(new URL(mcUrl), capabilities);
        sv = AppiumHelper.createSvSession(app);

        // create SV Lab
        sv.loadActiveVirtualLab("classpath:/sv-lab.json", sv.compileModuleFromSources("classpath:/demo/*"), true);
        sv.startActiveVirtualLab();

        // default timeout
        app.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
    }


    @Test
    public void testDisplayForecast() throws Exception {
        // simulate the modified captured scenario
        sv.runSimulation("capture");

        app.getPageSource();
        // test connecting to the Forecastie app's backend
        MobileElement element = app.findElementById("action_refresh");
        element.click();
        Thread.sleep(1000);
        element = app.findElementById("todayTemperature");
        // check the temperature displays and corresponds to the simulated value

        Assert.assertEquals("42 °C", element.getText());
    }

    @AfterClass
    public static void closeLab() {
        if (sv != null) {
            sv.close();
        }
        if (app != null) {
            app.quit();
        }
    }

    private static String getProperty(String propertyName, boolean print) {
        String propertyValue = System.getProperty(propertyName);
        if (propertyValue == null) {
            throw new RuntimeException("Property " + propertyName + " must be set");
        }
        if (print) {
            System.out.println("Using " + propertyName + " = " + propertyValue);
        }
        return propertyValue;
    }
}
