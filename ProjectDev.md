<h1 align=center> 10CT2 Task 2 WebDev - Project Development </h1 align=center>










# Diverge


<img src="https://github.com/Tunip-Anip/Influencial-Website/blob/main/Images/Flowchartgorithm.png" alt="MindMap">


| **Idea Name**                 | **What It Does**                                                                        | **Influence it Explores**                                        | **Who It Helps**                                                          |
| ----------------------------- | --------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------- |
| Positive Affirmations Website | Provide Positive Affirmations                                                           | Self Doubt, emotional instability with person influences         | Everyone                                                                  |
| Colour palette Generator      | Generates a complementary colour palette                                                | Social presentation and conformation within society                | People with indecisive colour choices                                     |
| Art scroller website          | Gives creative art pieces                                                               | Technological influence on creativity and inspiration            | People who need inspiration on artworks or other creative needs           |
| CLUELESS Codes                | Provides information on symbology/ helps people explore different religions and cultures | Misinformation through lack of knowledge and interest in beliefs | People with an interest to learn                                          |
| Blog Tutorial Website         | Provides information with a tutorial made to the public                                 | Knowledge through technological information on the web           | people in an interest to learn in a specific subject                      |
| Style Creator                 | Gives a combination of clothes and ways to style them with each other                   | Social presentation and fear of being presented out of order     | People who are self conscious with how they are perceived by everyone else |            










# Converge


### Effort x Impact Matrix
<img src="https://github.com/Tunip-Anip/Influencial-Website/blob/main/Images/Plane.png" alt="Effort,Impact Plane">


### Peer Idea Evaluation w/ William
<img src="https://github.com/Tunip-Anip/Influencial-Website/blob/main/Images/First%20Idea.png" alt="Idea 1 Peer Evaluation">
<img src="https://github.com/Tunip-Anip/Influencial-Website/blob/main/Images/Second%20Idea.png" alt="Idea 2 Peer Evaluation">


### Converge Evaluation


From my Effort impact matrix it was clear that the style editor, it being high effort and medium impact was a bad choice. Since the Clueless codes website is already existent it has the lowest effort possible and it does have a medium to high impact but the integrity of the task would be compromised if I used previously made. The daily positive affirmations website also has low impact but medium effort so it was crossed out. And the Blog has too high an effort to provide for its impact. With this two results were left, the colour palette generator and the Art scroller website. The Art scroller website had medium effort but high impact making it a feasible and positive project to create. The Colour palette generator while having a medium impact does have low effort so it was also another feasible project for creation.


The most decisive factor on the SWOT analysis would be the threats, where spam was a common factor of both of the finalists, the art scroller website has 1 extra threat for image moderation. The Art Scroller Website and the Colour Palette Gen have similar Strengths while the Colour palette has less weaknesses but also has less opportunities. Overall the Colour Palette Generator has a larger scope of success than the Art Scroller Website.


# Design Brief
Design, develop, and document a web application that explores the theme of influence and aims to have a positive social impact. Your app should make users think, feel, or act differently in a way that contributes to change — big or small.


You will brainstorm ideas, evaluate options, design your user interface, and build your app using web technologies (HTML, CSS, JavaScript, Flask). Your final product should demonstrate creative thinking, technical skills, and an understanding of influence in society.


Requirements
Your web app should:


Respond clearly to the theme "Influence"


Aim to have a positive social impact (local, national or global)


Be interactive in some way (form, buttons, quiz, media, etc.)


Include a clear message or call to action


Use multimedia elements (e.g. text, images, audio, video, animation)


Be designed with accessibility and user experience in mind


Suggestions Before We Start
Wicked Problems: You might choose to focus on some broader societal issues such as promoting digital wellbeing, challenging stereotypes, encouraging environmental action, raising awareness about misinformation or celebrating cultural diversity.


Localised Issues: You could also go a bit more local and focus on peer influence, community volunteering, student voice, school culture, eco choices at GHS or highlighting local legends.


# Requirements Outline:
## Purpose of the Application:
The application will provide an assortment of complementary colours depending on what type of color is needed whether it is warm toned, cool toned, etc. This will help people increase their creativity with style and help resolve indecisiveness with colours.


## Functional Requirements


* Website should save colours if clicked off of
* People can create color palettes
* Needs to produce 2 ore more colours to create a palette
## Non-Functional Requirements
* Can have different themes for the website
* Can make specific themes for colour palettes, such as 'Beach' or 'Winter'
* Can store previous colour palettes while randomising if the user needs to go back
* Needs to run smoothly with minimised lag


# Researching and Planning
## Explore Existing Ideas
<img src="https://github.com/Tunip-Anip/Influencial-Website/blob/main/Images/PMI.png" alt="PMI">

## Secondary Research
* https://www.kolenda.io/guides/color#color-preferences
* https://thesirenlppacs.com/5229/column-grid/paint-colors-and-why-youre-so-indecisive-about-them/

Indecisiveness while choosing colours is already a large issue within society,and most of all choosing  colours is enabled by the user's personal choice. human choice to feel attracted to certain colours is theorised to stem from the early need to perceive threats in the wild. As Nick Kolenda outlines, to choose colours you need an understanding of what theme your project requires. This understanding in the theme limits the range of colours which would be useful for each scenario. This thematicness of colors originates from our initial observation of these colours such as the sun producing light and heat being related to colours such as orange or yellow making them feel warm on their own.

Grace Davis provides a supporting perspective that colours are based on their surroundings, just as green and pink have the theme of a flowering plant their pairing in large objects takes away from the aesthetic values of the actual colours, creating a jarring colour scheme. The struggle to choose colours is very informed so the need for a way to make a colour palette is needed.


## Primary Research
<img src="https://github.com/Tunip-Anip/Influencial-Website/blob/main/Images/Graph1.png" alt="Graph">

As seen in the graph the choice of colour isnt a very big problem within the local area. This would decrease the value of a colour pallette generator since the users would already have the ability to create their own palettes with creatively curated colours. This would mean i would need to add more features to create a larger range of influence if the project needs to bypass a threshold of innovation.


<img src="https://github.com/Tunip-Anip/Influencial-Website/blob/main/Images/Graph2.png" alt="Graph">

From thi graph it supports the website slightly more as some people find themselves in situations where they need colour to choose a colour. This would benefit the cause of the colour palette geerator and help it gain traction to grow further. This sustains the audience of the website and proves that it may be a capable website in the future.


## UI / UX Design

## Prototype

# Producing and Implementing


## Week 1 Evaluation:
I have used the base from the Flask Web tutorials to add to the data portion of the project.
Alterations to this code are the 
```
profile =  TextAreaField('Profile Picture',validators=[DataRequired()])
```
and other Profile picture data storing.
In Html I added the actual colour change button and also made a slider whilst giving the pages connectivity with css

### HTML
```
 {% extends "base.html" %}

        {% block content %}
            <h1>Hi, {{ current_user.username }}!</h1>
            
            <input type="range" min="1" max="10" value="5" class="slider"
                 id="ColorRg" title="Number of Colors"
                 oninput="Getrange()"> 
            <p1 id="ColorOP">f</p1>
            <script>
            function Getrange(){
                document.getElementById("ColorOP").innerHTML = document.getElementById("ColorRg").value
                }
            </script>



            <div class="colorgen">
                <button id="colorgen" style="background-color: rgb(32, 34, 36); width: 10vw; height:10vw;" onclick="changecol()">
                    <script>
                            function changecol(){
                                randcolor = randcol()
                                document.getElementById("colorgen").style.backgroundColor = randcolor
                            }
                            function randcol(){
                                var o = Math.round, r = Math.random, s = 255;
                                return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
```
This sets up the base for the entire program, with our main functions. That being the random colour generator slider and the user profile page.
From this the setup for the entire program can be constructed with slight diffuculty and the functionality can improve.

### Peer FeedBack
"The website is very functional but it's not nice to look at and its kinda confusing to navigate" 

The common trend among peer review is thatthe website has lackluster aesthetics. This is very true as I haven't spent much time on the visual aspects of the project so further work on the CSS will be needed.

Despite this the project is seeming to have its initial buildings in place for future improvement and additions.


## Week 2 Evaluation:
This week I have tried to link up the sldier bar to the amount of random colour boxes in the screen but to no avail. This week was mostly studying Jinja and knowling how to use it.

Since this week as focused on learning Jinja njot mmuch progress was put into the actual project but some font changes were made as well as fixing up positions of soem objects.

### Peer FeedBack
As above not much work was done so the peer feedback is mostly the same but with slight improvent in visual appeal

## Week 3 Evaluation:
A lot of progress was made this week. firstly I made a group of buttons in a div which are all affected by an onclick fucntion, this was done in a very roundabout and low skill way with a mass of nested '<divs>' but it works nevertheless. I also connected the sliderbar that was made in week one to the amoun t pof buttons shown on the screen with the 'display' aspect in css which allwoed for further control of the palette. Further styling was also done where I centred both the slider and the slider amoutn display. I also gave the navigation button symbols to provide a cleaner look to the nav bar at the top and I styled the login page.

With this the bulk opf the project is mainly done as the colour palette generator includes most of its intended features. Things I could add would probably be saving colour palettes that are liked or also allowing for inputing you own colours through a colour selection tool.

### HTML

Linking the amount of buttons with the range slider value
```
            <h1 class="base" style="text-align: center;">Hi, {{ current_user.username }}!</h1>
            <div style="text-align: center; margin-top:10vh"; display:block>
            <input type="range" min="1" max="9" value="5" class="slider" id="ColorRg" title="Number of Colors" oninput="Getrange()" onload="Getrange()" > 
            </div>
            <p style="text-align:center;margin-top:1vh;font-size:8vh;font-family:cfont" id="ColorOP">5</p>
            <script>
            function Getrange(){
                document.getElementById("ColorOP").innerHTML = document.getElementById("ColorRg").value
                console.log(document.getElementById("ColorRg").value)
                amount1()
                amount2()
                amount3()
                amount4()
                amount5()
                amount6()
                amount7()
                amount8()
                }
            </script>

```
Whenever anypart of the area is clicked all the buttons need to individually randomise their colour, example with:

```

            <div class="colorgen" style="text-align: center; width: 100%;top: 45vh;">
                <div  onclick="changecol()" onload="changecol()" >
                <div  onclick="changecol1()" onload="changecol1()" >
                <div  onclick="changecol2()" onload="changecol2()">
                <div  onclick="changecol3()" onload="changecol3()">
                <div  onclick="changecol4()" onload="changecol4()">
                <div  onclick="changecol5()" onload="changecol5()">
                <div  onclick="changecol6()" onload="changecol6()">
                <div  onclick="changecol7()" onload="changecol7()">
                <div  onclick="changecol8()" onload="changecol8()">
                    <button id="colorgen" style="background-color: rgb(32, 34, 36); width: 10vw; height:10vw;border: none;outline: none;" >
                        <p1 id="hexa" class="hexa" style="background-blend-mode:soft-light; text-shadow: 0 0 4px #000000, 0 0 5px #000000">HEX</p1>
                        <script>
                            function changecol(){
                                let randHex = randcolHex()

                                document.getElementById("colorgen").style.backgroundColor = randHex
                                document.getElementById("hexa").innerHTML = randHex
                                document.getElementById("hexa").style.color = '#ffffff'
                                if (document.getElementById("ColorRg").value > 1){
                                    document.getElementById("colorgen").style.display
                                }

                            }
                            function componentToHex(c) {
                                var hex = c.toString(16);
                                return hex.length == 1 ? "0" + hex : hex;
                            }
                            function rgbToHex(r, g, b) {
                                return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
                            }

                            function randcolHex(){
                                var o = Math.round, r = Math.random, s = 255;
                                return(rgbToHex(o(r()*s),o(r()*s),o(r()*s)))
                            }

                        </script>
                    </button>
```
### Peer FeedBack
I was told that the navigation buttons were hard to understand so It is a focus to make all the buttons a lot more intuitive, also I need to add css into the profile page.