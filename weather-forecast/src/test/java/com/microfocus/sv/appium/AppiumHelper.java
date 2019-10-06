// (C) Copyright 2009-2018 Micro Focus or one of its affiliates.
package com.microfocus.sv.appium;

import com.microfocus.sv.tools.mcclient.McClient;
import com.microfocus.sv.tools.mcclient.McClientException;
import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;
import org.microfocus.sv.api.SvClient;
import org.openqa.selenium.Capabilities;

import java.net.URI;
import java.net.URISyntaxException;
import java.net.URL;

public class AppiumHelper {

    /**
     * Creates an SV session on Mobile Center
     * @param androidDriver Appium session with Mobile Center device
     * @return The SV client for deploying REST/Mobile API virtual lab connected to mobile device
     */
    public static SvClient createSvSession(AndroidDriver<MobileElement> androidDriver) {
        try {
            final URL mcServerUrl = androidDriver.getRemoteAddress();
            final String mcApiUrl = new URI(mcServerUrl.getProtocol(), null, mcServerUrl.getHost(), mcServerUrl.getPort(), "/rest", null, null).toString();

            McClient mcClient;
            final Capabilities capabilities = androidDriver.getCapabilities();
            final String mcClientId = (String) capabilities.getCapability("oauthClientId");
            if (mcClientId != null) {
                // authenticate using the access key
                final String mcClientSecret = (String) capabilities.getCapability("oauthClientSecret");
                final String mcTenantId = (String) capabilities.getCapability("tenantId");
                mcClient = new McClient(mcApiUrl,
                    "client=" + mcClientId + "; secret=" + mcClientSecret + "; tenant=" + mcTenantId);
            } else {
                // authenticate with username and password
                final String mcUsername = (String) capabilities.getCapability("userName");
                final String mcPassword = (String) capabilities.getCapability("password");
                mcClient = new McClient(mcApiUrl, mcUsername, mcPassword);
            }

            final String svEndpoint = mcClient.createSvSession(androidDriver.getSessionId().toString());
            return SvClient.newInstance(svEndpoint);
        } catch (McClientException | URISyntaxException e) {
            throw new RuntimeException(e);
        }
    }
}
