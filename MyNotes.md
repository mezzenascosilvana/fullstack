# FULL STACK NOTES PER CLASS #
This is a Full Stack course by Dublin School
## Scope of the framework ##
Html5, CSs and JavaScript Framework ordered by class, also, each class contain the homework
****
### Class1:
 - Learning Contacts
 - Learning basic structure of HTML
 - Setup the environment
 - General concepts
 - Learning what are the structure folder for the framework
 - How can I validate the html sintaxis?
 - Learning how can provide an style to "MyNotes.md" file : https://docs.readme.com/rdmd/docs/headings
  - 1. https://validator.w3.org/
  - 2. https://www.freeformatter.com/html-validator.html
  - 3. for Fire fox: I have HTML 5 Validator Add ons plug
 1. Question: No question
 #### Homework1 
 - To Run index.html: copy file index.html and page1.html from class1 folder to the root of HTML folder 
** **
### Class2: 
- Learning and practicing style
- Introduction to global style // block with diferentes styles to avoid to write a single style in each lline
 - Remmeber each component has a marging and padding by default. they are present in each single component or tag by default
- Learning "table" tag and their structure
- Review the "a" and the "href" tag // class 3 I have more practice
- Introduction to "asid" and "section" tags
- Example of the page with "<aside>" is RTE website
1. Question? When should I use in a < style> tag : border-radius: 50%; o border radius: 50px;
2. Question? Why does the table is on the left if inside my  style tag it is  to center?
3. Question? why is my video not playing
 
#### Homework 2 // No homework
** **
### Class3: 
- Structure about HTML: header and footer
- Introduction of block with style
- Each html component like h1 has by default some values (margin, widht, height) but I can modify them with the stlyle block.  
- I can apply style to my html page and my body.
- Each html component like h1 has by default some values (margin, widht, height) but I can modify them with the
        stlyle block border-radius: round edges width, height: dimentions object-fit: border: color of the border //
        there is diferent way to select color, rgb , #number or witht name of the color
- Padding : is the distance between the image with the next element 
  - <!--<stlyle>
        html {
        padding: 0px;
        margin: 0px;
        border: 10px solid greenyellow;
        background-color: beige;
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
        }
        body {
        padding: 0px;
        margin: 0px;
        border: 10px solid rgb(246, 24, 172);
        }
        .logo{
        border-radius: 50px;
        width: 200px;
        height: 200px;
        object-fit: cover;
        border: 5px solid rgb(22, 198, 234);
        padding: 5px;
        }
        .class2{
        color:white;
        text-align: center;
        </style>
        -->

- Learning navegation : it a best practice add the navegation inside the header. In some company the navegation can be outside the header, I should ask why it is outside the header
- Learning how to use "section" tags. It was using  title for "h1" and description for "h5"
- Learning how to use "article" tag  and "aside" using "div" tag ( e.g: page1)
- Learning how to add advertising (e.g: page1)
- Introduction of "form" tag and input
- To Run index.html: copy file index.htmt, page1.html, page2.html, page3.htl from class3 folder to the root of HTML folder 
1. Question1 : if I create a style block on the index page. Only, I can use inside a component with the word property "class = logo"? // No need to ask
2. Question 2: On the page 1 the style.css file was not apply to the "section","div". Why?
3. Question 3: the <form> tag should be always into the <main> or <footer> block?
#### Homework3 ## No homework 
** **
### Class4: in progress
- Learning form
- Learning "span" tag help you to add the focus on the input tag
- Learning "label" tag and  for insid de tag. 
- Remember!!!!!: "input" "id" should have the same name.
- "required" word is necessary to appear an alert. the msg provides isnt possible to customize because it is provider by the browser
- the word "action" inside the <form> sends the data to the backend. this file can be .js or .java or .phr , etc. ( e.g => action ="back-end.js")
- "method": If I want to see the data on the browser I can inside <form> the word "method", but inside the "input" tag I should use the atribute "name". ( e.g: method ="get")
      method result: http://127.0.0.1:5500/HTML/index.html?name=Paola&email=testing%40test.com
- Get method: It is not safe, it is better to use "Post" but we do not have the backend yet
- Learning: atribute "pattern", it is used when we want to regex some values. Search in internet "sample of regex". But the message isnt possible to customize. As a workaround we can use the attribute "title". 
- (e.g: pattern="[@]" title="@ isnt acceptable  // result: "Please match the requested format. @ isnt acceptable" msg will be appear )
- The calendar added on this class is the calendar provided by the browser.
- There is a library that we can use to change the sytle of the calendar. for that I should use like React ( searh : https://www.javatpoint.com/primefaces-calendar )
- I can create my own calendar in javascript but it is a lot of questions.
- Learning <textare> tag
- Padding rules: what is the padding for the <label> tag, it is providing by the <form >tag .
  - what is the padding for the <form> tag, it is providing by the <main> tag.
  - I SHOULD FOLLOW THE HTML STRUCTURE
- How can I find the color ? // the colour is a hash number and it is provider by designer
 - 1. Type #number whatever number and you will see the menu with the colors
 - 2. Type the name of the color e.g : red
 - 3. Type rgb; you will see the menu with the colors
1. Question: why the border of the input tag didnt appear in red
2. Question: when should I use ( rgb or rgba ) ? ( e.g: border: 5px solid rgb(94, 37, 238);  box-shadow: 0 0 10px rgba(27, 26, 29);)
- Group the <input>tags using <fieldset>  tag. feldset tag use legend tag 
- Input=> type = checkbox // you can check or uncheck it
- What is padding and what is margin?
- Learning how to use dropdonw list <select> tag
- Clean cache, using autocomplete = off inside the <input> tag
- Learning how to apply style to a specify component find it by type, id, name. ( e.g: input[type="email"])
#### WorkClass4: 
- There isnt homework. 
- There is a classwork : Page called "workClass4.html"
1. Question: is there a way to mark all the elements "ol" as bold inside the "style" tag section or I should do individually?
2. Question: I dont know if the point 5 was implemented properly 
#### HomeWork4:
- I need the slides for this class to do it
** **
### Class 5 and 6 06102024 : ( in progress )
- Review style "Rounded Corned"
- Review style Shadow: this style can be applied to the boxes and text =>"Box Shadow", "Text Shadow". On class 4 I have an example of box shadow.
** **
### Class 6 second part /06112024: (I started for the middle of the class... in progress )
- More styles ( review)
- Starting with JavaScript
- Learning Fake Anchor (the example is on the "ul" tag

#### HomeWork 6 second part:
1. Qustion: the last function from "myfirstscript.js" doesnt work. Why?
  - The problem was: I was using a textarea. I change the component and the code is working
** **
### Class 7:
- Learning how to use the console log: I can write on the console a big portion of the code and it runs.
- For exemple: var age =18
- console.log("can drink")
- else{
  console.log("cant) }
- With Node.js I can run javascripts outside the browser.
- Learning: how import the scritps
- To comment multiple lines with "//" I need to use contol+/
- Learning: how I should organize the different pages ( contact, page1,) created in a folder called "pages". Also, I learn how can I refer this location inside my index.html.
- Research: how should I use Jquery, because it looks intresting. In the market developers use React, because Jquery is old librery.
1. Question : innerHTML doesnt work for me. could you check the file "mysecondscritpt.js"?
  - The problem was: I was using a textarea. I change the component and the code is working
** **
### Class 8:
- Learning: how can use the console// OPEN file "scriptClass8.js"
  - You can load all the script that you want into your index 
  - Loading my script into ny .js file 
  - How define an object and call it.
  - How define a function inside an onbject and call it.
  - How use prompt command
  -
- Book to read : Domain-Driven Design :Tackling Complexity in the Heart of Software(https://www.awesomebooks.com/book/9780321125217/domain-driven-design?gad_source=1&gclid=CjwKCAjwy8i0BhAkEiwAdFaeGLjTjmTqWHx3IjlL1wtSTc9XZVfA86ZI1tvuAOYFDNXIG44pgfQ2ERoCEQ0QAvD_BwE)
#### CassWork 8:
- it is on the .js file called "scriptsClassWork8.js"
** **
### Class 9:
- Rememaber the onclik is an event to load your content "loadContent" (see your: index.html)
- Imposible to undertand this class, I need to create a new repo with a very very detail explanation to show my doubts
#### CassWork 9:
- in Progress
### Class 10:
- Normal loop
- Review array.forEach(element)..... loop
- Review the 10 last minutes where I have interaction between the html and the loops

#### CassWork 10: In progress
** **
### Class: 25062024
- End points to play : https://jsonplaceholder.typicode.com/
                       https://dog.ceo/dog-api/documentation/breed