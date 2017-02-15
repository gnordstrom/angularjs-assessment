# Angular assessment
  This assessment is intended to assess your skills and knowledge of Angular concepts.

  We will be creating the front end for an e-commerce clothing site.

  There are 3 sections to this assessment.

  You are already provided with a few files and folders that you will utilize.

  Let's get started!

##Section 1

  1. Create a basic angular app that includes:
      - shopCtrl
      - shopService
      - app.js

  2. Setup your routes
      - Setup your routes and states in your app.js file.
      - Setup the routes for the home.html, about.html, blog.html and shop.html.
      - Setup the ui-view and ensure that the home.html loads first.

  3. Connect Navigation
      - Connect the navigation links that are located in the index.html to point to their corresponding pages.
      - Ensure that the Shop clothing button routes to the shop state as well.

##Section 2

  1. Every good company needs a logo. Your job is to create a logo using a Directive.

  2. Name the directive 'logo' and restrict it to an element.

  3. Create a templateUrl for your directive called 'logo.html' in your views. Use the image found in the img folder for the logo.

  4. Place your logo directive in the index.html file right above the opening nav tag.

  5. Give your directive element a class and use position absolute and additional css to place the logo in the upper right corner and resize the image to make it look good. Write your css in the app.css file in the styles folder.

##Section 3

  1. For this section we will be getting all of the products and displaying them on the shopping page using a functional Directive.

  2. For the shop.html view you're going to need to make an api call to http://practiceapi.devmounta.in/products to get all the products. Use your shopService to make this request.

  3. Ensure that the data that comes back from the request is saved in an array on $scope in your shopCtrl. You will be looping over this data and inputting it into your product directive.

  4. Now that we have our data, lets create our product directive. The template is provided for you in product-tmpl.html. The Directive needs to:
      - Have an isolate scope and take in the product and show the details.
      - Be clickable on the title and navigate to the product details.
      - Be clickable on the image and collapse the image and show a link that says "show image" instead.   
      - Be clickable on "show image" and hide the "show image" link and show the actual image.
      - All the styles are completed for you already so you'll just need to display the data in the right spot. <strong>LOOK FOR COMMENTS.</strong>

  5. Once you have created your directive you will need to loop over it on the shop.html view. <strong>LOOK FOR COMMENTS. </strong> 

  7. After your data is displaying correctly you'll need to get the product-details view configured. In your routes file add a route called details. This route is going to have an id passed in. The url will look like this:  ``` details/:id ```. Now that the route is setup you can finish the links in the shop.html file. The link that points to the product detail will need to pass along the id of the item being clicked using an ui-sref.

  8. Product-details.html will be the hardest view to get working. You'll need to check the state params for the id being passed along in the route. After you have that id you'll need to make an api call to http://practiceapi.devmounta.in/products/ + the id being passed in the route. This will return the specific product based off the id you passed. Put that product on $scope and display in the view.

  9. Host your solution on github pages.
      - Open the terminal to where this assessment is.
      - Add and commit all of your completed code.
      - Type git checkout -b gh-pages.
      - Type git push -u origin gh-pages.
      - Find your account name on github and insert it into this url http://YourGithubAccountName.github.io/angular-assessment
      - Open that url to make sure it works, then send that url to your assigned mentor!

# Congratulations! You have finished the assessment.
