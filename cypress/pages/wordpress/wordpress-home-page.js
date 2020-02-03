const USERNAME='balajikrishnan0815@gmail.com';
const PASSWORD='Password@123';
const USERNAME_TEXTBOX='input[name=usernameOrEmail]';
const PASSWORD_TEXTBOX='input[name=password]';
const LOGIN_TEXT='Log In';
const ADDPOSTTEXT='Add New Post';
const CONTINUE_BUTTON = 'button[type=submit]';
const MYSITE_OPTION = 'a[data-tip-target=my-sites]';
const POST_OPTION = 'span[data-e2e-sidebar=Posts]';
const CREATEPOST_BUTTON = 'span[class=masterbar__item-content]';
const BLOGTITLE = 'textarea[id=post-title-0]';
const BLOGBODY = 'p[role*=textbox]';
const SAVEDRAFT = 'button[class*=save-draft]';
const ADDICON = '#editor > div > div > div.components-navigate-regions > div > div.edit-post-editor-regions__body > div.edit-post-editor-regions__content > div.edit-post-visual-editor.editor-styles-wrapper > div.block-editor__typewriter > div > div:nth-child(2) > div > div > div:nth-child(2) > div > div > div > div > button';
const ADDIMAGE = 'button[class*=item-image]';
const INSERTIMAGEURL = 'div[class=block-editor-media-placeholder__url-input-container]';
const TYPEURL = 'input[type=url]';
const UPLOADIMAGEURL = 'button[type=Submit]';
const IMAGECAPTION = 'figcaption[role=textbox]';
const PUBLISH = 'button[class*=publish-panel__toggle]';
const POSTPUBLISH = 'div[class=editor-post-publish-panel__header-publish-button]';
const PROFILEICON = '#header > a.masterbar__item.masterbar__item-me > span > img';
const LOGOUT_BUTTON = '#secondary > div > div > div.sidebar__me-signout > button';
const SIGNIN_BUTTON = '#masterbar > ul > li:nth-child(2) > a';
const  SIGNIN_TEXT= 'Sign In';
const IMAGEBLOCKFRAME='iframe[src*=blank]';
const VIEWPOST='div[class=post-publish-panel__postpublish-buttons] > a';
const CREATEDPOSTTITLE='a[class=post-item__title-link]';
const PUBLISHEDTAB='a[href*="posts/34072"] > span[class*=section-nav-tab__text]';
const CLOSEDIALOG='button[aria-label="Close dialog"]';
const WRITEPOST='a[title="Create a New Post"]';
const clickElement = (element) =>   cy.get(element).click();
const enterTextInElement = (element,text) =>   cy.get(element) .type(text);

const switchToBlogFrameClickElement = (element) =>  cy.get('#primary > div > iframe').then($iframe => {
    const iframe = $iframe.contents();
    const webElement = iframe.find(element);
    cy.wrap(webElement).click();
});
const switchToBlogFrameEnterTexInElement = (element,text) =>  cy.get('#primary > div > iframe').then($iframe => {
    const iframe = $iframe.contents();
    const webElement = iframe.find(element);
    cy.wrap(webElement).type(text);
});

class WordpressHomePage {
  static visit() {
    cy.visit('/');
  }
  
  static navigateToBlogPage() {
	cy.visit('/');  
	  }
 
  static loginToWordpress(username,password) {
	  enterTextInElement(USERNAME_TEXTBOX,username);
	  clickElement(CONTINUE_BUTTON);
	  enterTextInElement(PASSWORD_TEXTBOX,password);
	  clickElement(CONTINUE_BUTTON);
	  WordpressHomePage.waitForFiveSeconds();
	  }
  
  static clickLoginLink() {
	  clickElement(LOGIN_BUTTON);
	  
	  }
  
  static clickCreatePost() {
	  clickElement(CREATEPOST_BUTTON);
	  }
  
  static clickPostOptionFromLeftSideBar() {
	  clickElement(POST_OPTION);
	  }
  
  static clickMySite() {
	  clickElement(MYSITE_OPTION);
	  }
  
  static verifySuccessfulLogin() {
	  cy.server()
	  cy.url().should('include', '/read')
	  }
  
  static verifyBlogPage() {
	  cy.server()
	  cy.url().should('include', '.blog')
	  }
  
  static waitForTwoSeconds() {
	  cy.wait(2000)
	  }
  static waitForFiveSeconds() {
	  cy.wait(5000)
	  }
  
  static waitForEightSeconds() {
	  cy.wait(8000)
	  }
  static waitForTenSeconds() {
	  cy.wait(10000)
	  }
  static waitForFifteenSeconds() {
	  cy.wait(15000)
	  }
  
  static navigateToWriteBlog() {
	  cy.visit('/block-editor/post/34072.home.blog');
  }
  static addPost() {
	  enterTextInElement(USERNAME_TEXTBOX,username);
	  clickElement(CONTINUE_BUTTON);
	  enterTextInElement(PASSWORD_TEXTBOX,password);
	  clickElement(CONTINUE_BUTTON);
	  }
  
  static closeDialog() {
	  clickElement(WRITEPOST);
	  WordpressHomePage.waitForFifteenSeconds();
	  cy.get('#primary > div > iframe').then($iframe => {
		    const iframe = $iframe.contents();
		    const closeDialog = iframe.find(CLOSEDIALOG);
		    if( iframe.find(CLOSEDIALOG).length>0)
		    cy.wrap(closeDialog).click();
		});
  }
  
  static createPost(blogTitle,imageURL,imageCaption) {
	  switchToBlogFrameEnterTexInElement(BLOGTITLE,blogTitle);
	  switchToBlogFrameClickElement(ADDICON);
	  switchToBlogFrameClickElement(ADDIMAGE);
	  switchToBlogFrameClickElement(INSERTIMAGEURL);
	  switchToBlogFrameEnterTexInElement(TYPEURL,imageURL);
	  switchToBlogFrameClickElement(UPLOADIMAGEURL);
	  switchToBlogFrameEnterTexInElement(IMAGECAPTION,imageCaption);
	  switchToBlogFrameClickElement(PUBLISH);
	  switchToBlogFrameClickElement(POSTPUBLISH);
	  WordpressHomePage.waitForEightSeconds();
	  }
		    
  static verifyCreatedPost(blogTitle) {
	  cy.visit('/posts/34072.home.blog');
	  WordpressHomePage.waitForTwoSeconds();
	  clickElement(PUBLISHEDTAB);
	  WordpressHomePage.waitForTwoSeconds();
	 cy.get(CREATEDPOSTTITLE).should('have.attr', 'data-e2e-title', blogTitle)
	 
  }
  
  static logoutWordPress() {
	  clickElement(PROFILEICON);
	  clickElement(LOGOUT_BUTTON);
	  cy.get(SIGNIN_BUTTON).should('be.visible')
	  }
}

export default WordpressHomePage;
