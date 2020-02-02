

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




class WordpressHomePage {
  static visit() {
    cy.visit('/');
  }
  
  static navigateToBlogPage() {
	    cy.visit('/');
	    
	  }
  

  static typeUserName(query) {
    cy.get(USERNAME_TEXTBOX) 
      .type(query);
  }
  
  static typePassword(query) {
	    cy.get(PASSWORD_TEXTBOX) 
	      .type(query);
	  }

  static clickLoginLink(query) {
	   cy.get('a').contains(LOGIN_TEXT)
	      .click();
	  }
  
  static clickContinueOrLogin() {
	   cy.get(CONTINUE_BUTTON).
	      click();
	  }
  
  static clickCreatePost() {
	   cy.get(CREATEPOST_BUTTON).
	      click();
	  }
  
  static clickPostOptionFromLeftSideBar() {
	   cy.get(POST_OPTION).
	      click();
	  }
  
  static clickMySite() {
	  cy.get(MYSITE_OPTION).
      click();
	  }
  
  static verifySuccessfulLogin() {
	  cy.server()
	  cy.url().should('include', '/read')
	  }
  
  static verifyBlogPage() {
	  cy.server()
	  cy.url().should('include', '.blog')
	  }
  
  static waitForFiveSeconds() {
	  cy.wait(5000)
	  }
  static waitForTenSeconds() {
	  cy.wait(10000)
	  }
  
  static addPost() {
	  cy.visit('/block-editor/post/34072.home.blog');
	  cy.wait(10000)
	     cy.get(USERNAME_TEXTBOX) 
      .type(USERNAME);
	  cy.get(CONTINUE_BUTTON).
	  click();
	  cy.get(PASSWORD_TEXTBOX) 
	  .type(PASSWORD);
	  cy.get(CONTINUE_BUTTON).
	  click(); 
      cy.wait(15000)
	  }
  
  static closeDialog() {
	  cy.get(WRITEPOST).
	  click();
	  cy.wait(15000)
	  cy.get('#primary > div > iframe').then($iframe => {
		    const iframe = $iframe.contents();
		    const closeDialog = iframe.find(CLOSEDIALOG);
		    cy.wrap(closeDialog).click();
		});
  }
  static createPost(blogTitle,imageURL,imageCaption) {
	  cy.get('#primary > div > iframe').then($iframe => {
		    const iframe = $iframe.contents();
		    const addTitle = iframe.find(BLOGTITLE);
		    cy.wrap(addTitle).type(blogTitle);
		});
	  
	  cy.get('#primary > div > iframe').then($iframe => {
		    const iframe = $iframe.contents();
		    const addIcon = iframe.find(ADDICON);
		    cy.wrap(addIcon).click();
		});
	  
	  cy.get('#primary > div > iframe').then($iframe => {
		    const iframe = $iframe.contents();
		    const addImage = iframe.find(ADDIMAGE);
		    cy.wrap(addImage).click();
		});
	  
	  cy.get('#primary > div > iframe').then($iframe => {
		    const iframe = $iframe.contents();
		    const insertImageUrl= iframe.find(INSERTIMAGEURL);
		    cy.wrap(insertImageUrl).click();
		});
	  
	  cy.get('#primary > div > iframe').then($iframe => {
		    const iframe = $iframe.contents();
		    const typeUrl= iframe.find(TYPEURL);
		    cy.wrap(typeUrl).type(imageURL);
		});
	  
	  cy.get('#primary > div > iframe').then($iframe => {
		    const iframe = $iframe.contents();
		    const uploadImageUrl= iframe.find(UPLOADIMAGEURL);
		    cy.wrap(uploadImageUrl).click();
		});
	  
	  cy.get('#primary > div > iframe').then($iframe => {
		    const iframe = $iframe.contents();
		    const imageTitle= iframe.find(IMAGECAPTION);
		    cy.wrap(imageTitle).type(imageCaption);
		});
	  
	  cy.get('#primary > div > iframe').then($iframe => {
		    const iframe = $iframe.contents();
		    const publish= iframe.find(PUBLISH);
		    cy.wrap(publish).click();
		});
	  
	  cy.get('#primary > div > iframe').then($iframe => {
		    const iframe = $iframe.contents();
		    const postPublish = iframe.find(POSTPUBLISH);
		    cy.wrap(postPublish) .click();
		});
	  cy.wait(7000)
	  }
		  
	  
  static verifyCreatedPost(blogTitle) {
	  cy.visit('/posts/34072.home.blog');
	  cy.wait(2000)
	  cy.get(PUBLISHEDTAB).
	  click();
	  cy.wait(2000)
	 cy.get(CREATEDPOSTTITLE).should('have.attr', 'data-e2e-title', blogTitle)
	 
  }
  
  
  static logoutWordPress() {
	  cy.get(PROFILEICON).click();
	    cy.get(LOGOUT_BUTTON)
	      .click();
	    cy.get(SIGNIN_BUTTON).should('be.visible')
	  }

  
}

export default WordpressHomePage;
