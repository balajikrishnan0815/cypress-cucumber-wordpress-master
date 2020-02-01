Feature: Create and verify blogs in word press

  @e2etest
  Scenario Outline: Login to word press website and verify successful login
    Given I'm at Wordpress
    And Press Log In link
    When I login to Wordpress using <Username> and <Password>
    Then I verify login is successful
    And I navigate to blog page
    And I close popup dialog

    Examples: 
      | Username                     | Password     |
      | balajikrishnan0815@gmail.com | Password@123 |

  @e2etest
  Scenario Outline: Create blog and verify randomly blog
    Given I click on create post
    When I create blog using <BlogTitle>,<ImageURL> and <ImageCaption>
    Then I verify create blog using <BlogTitle>

    Examples: 
      | BlogTitle | ImageURL                                                     | ImageCaption |
      | Test 1    | https://homepages.cae.wisc.edu/~ece533/images/airplane.png   | Test 1       |
      | Test 2    | https://homepages.cae.wisc.edu/~ece533/images/arctichare.png | Test 2       |
      | Test 3    | https://homepages.cae.wisc.edu/~ece533/images/baboon.png     | Test 3       |
      | Test 4    | https://homepages.cae.wisc.edu/~ece533/images/boat.png       | Test 4       |
      | Test 5    | https://homepages.cae.wisc.edu/~ece533/images/fruits.png     | Test 5       |

  @e2etest
  Scenario: Logout from word press and verify logout is successful
    Given I logout from Wordpress
