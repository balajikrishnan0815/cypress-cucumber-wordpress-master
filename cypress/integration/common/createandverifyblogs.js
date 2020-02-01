import { Given, When } from 'cypress-cucumber-preprocessor/steps';
import WordpressHomePage from '../../pages/wordpress/wordpress-home-page';

Given(/^I'm at Wordpress$/, () => {
  WordpressHomePage.visit();
});

When(/^Press Log In link$/, () => {
	WordpressHomePage.clickLoginLink();
});

When(/^I login to Wordpress using (.+) and (.+)$/, (username,password) => {
 WordpressHomePage.typeUserName(username);
 WordpressHomePage.clickContinueOrLogin();
 WordpressHomePage.typePassword(password);
 WordpressHomePage.clickContinueOrLogin();
 WordpressHomePage.waitForFiveSeconds();
});

Then(/^I verify login is successful$/, () => {
	 WordpressHomePage.verifySuccessfulLogin();
	});

When(/^I navigate to blog page$/, () => {
	WordpressHomePage.clickMySite();
	WordpressHomePage.verifyBlogPage();
});

When(/^I click on create post$/, () => {
	WordpressHomePage.addPost();
});

When(/^I create blog using (.+),(.+) and (.+)$/, (blogTitle,imageURL,imageCaption) => {
WordpressHomePage.createPost(blogTitle,imageURL,imageCaption);
});

Then(/^I verify create blog using (.+)$/, (blogTitle) => {
	WordpressHomePage.verifyCreatedPost(blogTitle);
	});

Given(/^I logout from Wordpress$/, () => {
	  WordpressHomePage.logoutWordPress();
	});

Then(/^I close popup dialog$/, () => {
	  WordpressHomePage.closeDialog();
	});




