package org.williamhill.automation;

import org.junit.runner.RunWith;
import cucumber.api.junit.*;

import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(tags = {"@placeBet"},
plugin = {"pretty", "html:target/cucumber"})
public class RunCucumberTests {
}