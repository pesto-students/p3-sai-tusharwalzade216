# Pesto Assignments

Welcome to Pesto assignment - 1 from the [Week 1](https://pestotech.teachable.com/courses/1782350/lectures/40231525).

When a user enters an URL in the browser, how does the browser fetch the desired result? Explain this with the below in mind and Demonstrate this by drawing a diagram for the same.

- What is the main functionality of the browser?
- High Level Components of a browser.
- Rendering engine and its use.
- Parsers (HTML, CSS, etc)
- Script Processors
- Tree construction
- Order of script processing
- Layout and Painting

# How browsers work?

The article describes how the browsers actually work and what happens behind the scenes when we enter a URL.

## What is the main functionality of the browser?

The primary function of a web browser is to present the web resources chosen by us, by requesting it from the server and displaying it in the browser window. The resource could be any kind of document like HTML, PDF, image, text or some other type of content. It takes the location of the resource as an input from us, which is known as URI (Uniform Resource Identifier) or URL (Uniform Resource Locator). Most of the modern browsers follow the HTML/ CSS specifications provided by World Wide Web Consortium (W3C).

## High Level Components of a browser

1. The user interface: this is what we see in the browser such as address bar, navigation buttons, bookmark menu and everything except the window where we see our webpage.

2. The browser engine: responsible for displaying content on the screen. It creates a separate process to serve every user request, which is called the renderer process and it has a limited access to OS system calls.

3. The rendering engine: it is the browser process responsible for displaying the requested content in the browser window. It's job is to parse the document, for example, if the requested content is HTML, this engine parses the corresponding HTML/ CSS, and displays the parsed content on the screen.

4. Networking: this engine is responsible for connecting to the resources, through the network calls like HTTP requests. It's designed in a platform-independent way so that it can work on any platform; behind the scenes, it uses different implementations for different platforms.

5. UI backend: used to draw all the basic widgets like buttons, dropdowns, inputs, windows etc. This exposes a generic, platform-unindependent interface backed by the user interface methods provided by the operating system.

6. JavaScript interpreter: responsible for parsing and execution of JavaScript code.

7. Data storage: this is the persistence layer, useful for resources to store temporary data in the browser. This supports storage mechanisms such as Cookies, localStorage, sessionStorage, IndexedDB, WebSQL and FileSystem.

![Fig 1](./assets/images/browser_working-high_level.png)

## Rendering engine

As we saw above, the functionality of the rendering engine is to display the requested contents on the browser screen. It can have multiple instances running in the browser. For example, Chrome runs one instance per tab, so each tab runs in a separate process.

### What is an actual use of the rendering engine?

By default is supports displaying HTML, XML documents and images, but it can display other kind of documents too with the help of plug-ins/ extensions. We might have seen browsers displaying PDF as an example.

### Some existing rendering engines

- Trident - Internet Explorer
- Gecko - Firefox
- WebKit - Safari
- Blink (a fork of WebKit) - Chrome and Opera (from version 15)

### The journey from network to user interface

The rendering engine makes use of the networking layer to get the contents of the requested documents and this usually returns those contents in chunks. Then starts the process of Parsing -

![Fig 2](./assets/images/rendering_engine_working.png)

It then parse the HTML document and convert elements to DOM nodes and forms a content tree using them. Then will parse the styling rules from both the external CSS as well as the `style` tags present in the received document. The information parsed from HTML and CSS is used to create the another tree called render tree.

#### Render tree

contains rectangles with visual attributes such as color and dimensions in the correct order to display on the screen.

After constructing a render tree, it starts the layout process where each node gets it's own position coordinates i.e. the place where it's going to be appeared on the screen.

The nodes in the render tree are then actually placed & painted on the interface using the UI Backend layer.

It's important to understand here that this is an iterative/ gradual process. As it receive chunks from the network layer, the rendering engine will try to display content on the screen as soon as it receives a single chunk of data to achieve better performance/ user experience. It won't wait for all the chunks to come in at once, instead it quickly starts processing an every single chunk as it comes in and it goes on untill the contents are coming from network.

## Parsers

Parsing a document means translating it to a structure the code can use. It results in a tree of nodes that represent the structure of the document, which is called a Parse/ Syntax tree.

For example, parsing the expression `1 + 2 - 3` could generate this tree -
![Fig 3](./assets/images/parser.png)

## Grammar

Parsers are backed by a strong set of syntax rules that all the documents follows. That set of rules contains all the vocabulary specific to the document format and is called as Grammar.

Behind the scenes, parser is separated by 2 processes - lexical analysis and syntax analysis.

Lexical analysis is the process of breaking the input into the collection of valid building blocks, the tokens and see which all the tokens match the Grammar vocabulary. So, the component which does the lexical analysis is Lexer/ Tokenizer.

Syntax analysis checks the document for the language syntax rules. So, the component which does syntax analysis is Parser. It constructs the parse tree as a result of syntax analysis.

So every document goes through Lexical and Syntax analysis before the parse tree gets constructed.

## Translation

We need to understand that Parse tree isn't the final product, because the machine doesn't understand it, instead it needs it's own readable format. So here, translation comes into picture, it translates the parse tree into machine code.

## Types of Parsers

- Top down parser - where the start point is the highest level rule

- Bottom up/ Shift-reduce parser - scans the input until a rule is matched and then replaces the matching input with the rule until the end of the input. Here the input is shifted to right & gradually reduced to syntax rules that's why called Shift-reduce parser too.

### HTML Parser

The job of the HTML parser is to parse the HTML markup into a parse tree, conforming to the HTML syntax/ vocabulary defined by W3C organization.

The DOM has an almost one-to-one relation to the markup. For example:

```
<html>
    <body>
        <p>Hello World</p>
        <div><img src="example.png"/></div>
    </body>
</html>
```

would be converted into following DOM tree -
![Fig 4](./assets/images/html_parser.png)

### CSS Parser

Similar to the HTML Parser, the job of CSS parser is to parse CSS. It uses the lexical grammar defined by the regular expressions for each tokens such as identifier, classname etc.

Example:
![Fig 5](./assets/images/css_parser.png)

## Script Processors

The script processor executes Javascript code to process an event.

When the browser processes an HTML document, it does so from top to bottom. Upon encountering a `<script>` tag, it halts/ blocks further processing in order to download the referenced script file. Only after that download has completed and the respective JavaScript code has been processed, HTML processing continues.

## Tree construction

While the DOM tree is being constructed, the browser constructs another tree, the render tree. This tree is of visual elements/ frames in the order in which they will be displayed. It is the visual representation of the document. The purpose of this tree is to enable painting the contents in their correct order.

The render tree is a subset of DOM tree. The un-rendered elements (display: none) won't be there in render tree but in DOM tree.

## Order of script processing

### Scripts

If the parsing of the scripts done synchronously, it halts the parsing until resource is fetched. So, with HTML5 it can be done asynchronously making it defer and no parsing is halted.

### Speculative parsing

This is an optimization technique used by WebKit and Firefox. The idea behind is to fetch resources through the parallel connections to get better speed. While executing scripts, another thread (speculative parser) parses the rest of the document and finds out what other external resources need to be loaded from the network and loads them.

### Style Sheets

The styles are need to be loaded beforehand the scripts. If not done, the script will get wrong answers and apparently this caused lots of problems on the user interface.

## Layout

When the renderer is created and added to the tree, it does not have a position and size. Calculating these values is called layout or reflow.

It is a recursive process. It begins at the root renderer, which corresponds to the `<html>` element of the HTML document. Layout continues recursively through some or all of the frame hierarchy, computing geometric information/ coordinates for each renderer that requires it.

### Global and incremental layout

Layout can be triggered on the entire render tree - this is "global" layout. This can happen as a result of:

A global style change that affects all renderers, like a font size change.
As a result of a screen being resized
Layout can be incremental, only the dirty renderers will be laid out (this can cause some damage which will require extra layouts).

Incremental layout is triggered (asynchronously) when renderers are dirty. For example when new renderers are appended to the render tree after extra content came from the network and was added to the DOM tree.

## Painting

In this stage, the render tree is traversed and the renderer's "paint()" method is called to display content on the screen. Painting uses the UI infrastructure/ backend component.

Like layout, painting can also be global - the entire tree is painted - or incremental. In incremental painting, some of the renderers change in a way that does not affect the entire tree.

## Credits

- [Pesto Tech](https://www.pesto.tech/become-a-developer)
- [Pesto Students](https://github.com/pesto-students)
- [Web.dev](https://web.dev/howbrowserswork/)
- [Wikipedia](https://en.wikipedia.org/wiki/Browser_engine)
- [Stack Overflow](https://stackoverflow.com/a/47640505/5729813)
