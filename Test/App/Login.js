describe('login page', function() {
    browser.driver.get('https://testt.fundingsocieties.com/');
    it('should render login page', function() {
        // click on login button
        browser.driver.findElement(By.id('loginID')).click();
        // Checking the current url
        var currentUrl = browser.driver.getCurrentUrl();
        expect(currentUrl).toMatch('/login');
    });

    it('should not be able to sign in with invalid credentials', function() {
        // Find page elements
        var userNameField = browser.driver.findElement(By.id('username'));
        var userPassField = browser.driver.findElement(By.id('password'));
        var userLoginBtn  = browser.driver.findElement(By.xpath("//button[text()='Login']"));

        // Fill input fields
        userNameField.sendKeys('testfunding1@yopmail.com');
        userPassField.sendKeys('360@Logica123');

        // Click to sign in - waiting for Angular as it is manually bootstrapped.
        userLoginBtn.click().then(function() {
            browser.ignoresynchronization = true;
            browser.sleep(10000);
            var errorMessage = browser.driver.findElement(By.xpath("//div[@id='login-error']")).getText();
            expect(errorMessage).toMatch('Invalid Username/Password.');
        }, 10000);
    });

    it('should sign in with valid credentials', function() {
        // Find page elements
        var userNameField = browser.driver.findElement(By.id('username'));
        var userPassField = browser.driver.findElement(By.id('password'));
        var userLoginBtn  = browser.driver.findElement(By.xpath("//button[text()='Login']"));

        // Fill input fields
        userNameField.clear();
        userNameField.sendKeys('testfunding1@yopmail.com');
        userPassField.sendKeys('360@Logica');

        // Click to sign in - waiting for Angular as it is manually bootstrapped.
        userLoginBtn.click().then(function() {
            browser.ignoresynchronization = true;
            browser.sleep(10000);
            var accountDetailsTitle = browser.driver.findElement(By.xpath("//div[@id='dashboardContent']/h3")).getText();
            expect(accountDetailsTitle).toMatch('MY ACCOUNT DETAILS');
        }, 10000);
    });

});