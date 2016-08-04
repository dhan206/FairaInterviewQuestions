# FairaInterviewQuestions

Derek Han Faira Interview Questions August 2nd, 2016

#What is a &#60;div> and what is a &#60;span>? When does it make sense to use one instead of the other?

A &#60;div> is an HTML tag that is used to divide up content inside of a webpage. Content inside of a &#60;div> element can be manipulated via CSS or Javascript. A &#60;span> is an HTML tag that is used to ‘target’ or ‘tag’ specific content on a webpage, it can be found within a &#60;div> element but a &#60;div> is generally not found nested inside of a &#60;span> tag.

It makes sense to use a &#60;div> when content on a webpage needs to be sectioned, moved around, styled, or animated. A &#60;span> is used when inline content needs to be styled or manipulated. A &#60;span> generally targets a single word or phrase to style. It can also acts as a placeholder for dynamically changing variables altered via Javascript.

#What does RGB stand for? Can you explain what is a color space and give examples of other ones? 
RGB stands for Red Green Blue. A color space is a specific organization of colors. It allows for colors to be reproduced through numbers or hex values. Other examples of color spaces include CMYK, CIELAB, and CIEXYZ.

#Explain the relationship between HTML, CSS and Javascript. 
HTML is used to structure and tag content on a webpage.

CSS is used to style HTML elements on a webpage. Styling includes color, sizing, margin, padding, borders, alignment, etc.

Javascript is the programming language of the web. In many cases, it is used on the frontend to manipulate the DOM. It can also be used to retrieve information from APIs through ajax request and asynchronously update the webpage, resulting in a seamless user-friendly experience.

#Explain what is Responsive design. How can it be accomplished? 
Responsive design is when a webpage changes it content, sizing, and layout based on the size of the screen it is displayed on. This can be accomplished by altering the CSS based on the size of the screen. Media queries are a technique used to alter the CSS rules based on characteristics of the device the page is being displayed on. A common characteristic checked is the width of the page. Another technique used is arranging the webpage on a fluid grid that changes the content’s grid usage based on the size of the device it is displayed on.

Bootstrap is a powerful library that can help a webpage satisfy responsive design. 

#Give an example of a technology or technique which you learned about recently which you thought was particularly interesting. 
I recently implemented schema.org’s markup on three of my current employer’s websites. Each website receives around 2 million visitors a month. It allows for Google to scrape the webpage/website for the company’s logo, name, social media profiles, description, etc and display this information on the search page. This helps increase page ranking on Google and similar search engines. I also implemented this markup on all of our reviews, blogpostings, and affiliate offers pages to increase the rankings, resulting in higher revenue.

#Provide the solution to one of the two problems below:

Problem 1: Provide the skeleton for a Web page which contains 10 images. Whenever the user positions the mouse over one of the images, all other images become black and white. The solution needs to include all necessary code.

https://github.com/dhan206/FairaInterviewQuestions


