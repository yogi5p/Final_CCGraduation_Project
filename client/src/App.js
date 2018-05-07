import React, { Component } from "react";
import logo from "./logo.svg";
<<<<<<< HEAD
import AppCss from "./App.css";
import about from "./about.js";
=======
import "./App.css";
>>>>>>> 5d6b8abcb15c428d365598f698a98763a3c4b655

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <div id="header">
<<<<<<< HEAD
          <a href="/" id="logo">
            <img src="images/logo.gif" width="310" height="114" alt="" />
=======
          {" "}
          <a href="#" id="logo">
            <img
              src="images/HauteDoglogo.png"
              width="310"
              height="114"
              alt=""
            />
>>>>>>> 5d6b8abcb15c428d365598f698a98763a3c4b655
          </a>
          <ul class="navigation">
            <li class="active">
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="petmart.html">PetMart</a>
            </li>
            <li>
<<<<<<< HEAD
              <a href="about.js">About us</a>
            </li>
            <li>
              <a href="about.js">Blog</a>
=======
              <a href="about.html">About us</a>
            </li>
            <li>
              <a href="blog.html">Blog</a>
>>>>>>> 5d6b8abcb15c428d365598f698a98763a3c4b655
            </li>
            <li>
              <a href="petguide.html">PetGuide</a>
            </li>
            <li>
              <a href="contact.html">Contact us</a>
            </li>
          </ul>
        </div>
        <div id="body">
          <div class="banner">&nbsp;</div>
          <div id="content">
            <div class="content">
              <ul>
                <li>
<<<<<<< HEAD
=======
                  {" "}
>>>>>>> 5d6b8abcb15c428d365598f698a98763a3c4b655
                  <a href="#">
                    <img
                      src="images/puppy.jpg"
                      width="114"
                      height="160"
                      alt=""
                    />
                  </a>
                  <h2>What they need</h2>
                  <p>
                    Mirum est notare quam littera gothica, quam nunc putamus
<<<<<<< HEAD
                    parum clara m, ant epo suerit li tterar.
=======
                    parum clara m, ant epo suerit li tterar.{" "}
>>>>>>> 5d6b8abcb15c428d365598f698a98763a3c4b655
                    <a class="more" href="#">
                      View all
                    </a>
                  </p>
                </li>
                <li>
<<<<<<< HEAD
=======
                  {" "}
>>>>>>> 5d6b8abcb15c428d365598f698a98763a3c4b655
                  <a href="#">
                    <img src="images/cat.jpg" width="114" height="160" alt="" />
                  </a>
                  <h2>Something good</h2>
                  <p>
                    Gothica, quam nun c putamus parum claram, anteposuerit
<<<<<<< HEAD
                    litterarum formas humani tatis per seacula.
=======
                    litterarum formas humani tatis per seacula.{" "}
>>>>>>> 5d6b8abcb15c428d365598f698a98763a3c4b655
                    <a class="more" href="#">
                      View all
                    </a>
                  </p>
                </li>
                <li>
<<<<<<< HEAD
=======
                  {" "}
>>>>>>> 5d6b8abcb15c428d365598f698a98763a3c4b655
                  <a href="#">
                    <img src="images/koi.jpg" width="114" height="160" alt="" />
                  </a>
                  <h2>Kinds of Fish</h2>
                  <p>
                    Quam nunc putamus parum claram, antep osuerit litter arum
<<<<<<< HEAD
                    formas humanitatis per seacula quarta.
=======
                    formas humanitatis per seacula quarta.{" "}
>>>>>>> 5d6b8abcb15c428d365598f698a98763a3c4b655
                    <a class="more" href="#">
                      View all
                    </a>
                  </p>
                </li>
                <li>
<<<<<<< HEAD
=======
                  {" "}
>>>>>>> 5d6b8abcb15c428d365598f698a98763a3c4b655
                  <a href="#">
                    <img
                      src="images/bird.jpg"
                      width="114"
                      height="160"
                      alt=""
                    />
                  </a>
                  <h2>Fun birds</h2>
                  <p>
                    Mirum est notare quam littera gothica , quam nunc putamus
<<<<<<< HEAD
                    parum claram, anteposuerit.
=======
                    parum claram, anteposuerit.{" "}
>>>>>>> 5d6b8abcb15c428d365598f698a98763a3c4b655
                    <a class="more" href="#">
                      View all
                    </a>
                  </p>
                </li>
              </ul>
            </div>
            <div id="sidebar">
              <div class="search">
                <input type="text" name="s" value="Find" />
                <button>&nbsp;</button>
<<<<<<< HEAD
                <label for="articles">
                  <input type="radio" id="articles" /> Articles
                </label>
                <label for="products">
                  <input type="radio" id="products" checked /> PetMart Products
=======
                <label for="parks">
                  <input type="radio" id="dogparks" />
                  Dog Parks
                </label>
                <label for="stores">
                  <input type="radio" id="petstores" checked />
                  Pet Stores
                </label>
                <label for="vets">
                  <input type="radio" id="vetclinics" checked />
                  Vet Clinics
                </label>
                <label for="hotels">
                  <input type="radio" id="hotels" checked />
                  Hotels
>>>>>>> 5d6b8abcb15c428d365598f698a98763a3c4b655
                </label>
              </div>
              <div class="section">
                <ul class="navigation">
                  <li class="active">
                    <a href="#">Shopping Guides</a>
                  </li>
                  <li>
                    <a href="#">Discounted Items</a>
                  </li>
                </ul>
                <div class="aside">
                  <div>
                    <div>
                      <ul>
                        <li>
<<<<<<< HEAD
                          <a href="#">Pet Accesories </a>
=======
                          <a href="#">Pet Accesories </a>{" "}
>>>>>>> 5d6b8abcb15c428d365598f698a98763a3c4b655
                          <a class="more" href="#">
                            see all
                          </a>
                        </li>
                        <li>
<<<<<<< HEAD
                          <a href="#">Bath Essentials</a>
=======
                          <a href="#">Bath Essentials</a>{" "}
>>>>>>> 5d6b8abcb15c428d365598f698a98763a3c4b655
                          <a class="more" href="#">
                            see all
                          </a>
                        </li>
                        <li>
<<<<<<< HEAD
                          <a href="#">Pet Food</a>
=======
                          <a href="#">Pet Food</a>{" "}
>>>>>>> 5d6b8abcb15c428d365598f698a98763a3c4b655
                          <a class="more" href="#">
                            see all
                          </a>
                        </li>
                        <li>
<<<<<<< HEAD
                          <a href="#">Pet Vitamins</a>
=======
                          <a href="#">Pet Vitamins</a>{" "}
>>>>>>> 5d6b8abcb15c428d365598f698a98763a3c4b655
                          <a class="more" href="#">
                            see all
                          </a>
                        </li>
                        <li>
<<<<<<< HEAD
                          <a href="#">Pet Needs</a>
=======
                          <a href="#">Pet Needs</a>{" "}
>>>>>>> 5d6b8abcb15c428d365598f698a98763a3c4b655
                          <a class="more" href="#">
                            see all
                          </a>
                        </li>
                        <li>
<<<<<<< HEAD
                          <a href="#">Pet Toy and Treats</a>
=======
                          <a href="#">Pet Toy and Treats</a>{" "}
>>>>>>> 5d6b8abcb15c428d365598f698a98763a3c4b655
                          <a class="more" href="#">
                            see all
                          </a>
                        </li>
                        <li>
<<<<<<< HEAD
                          <a href="#">Pet Supplies</a>
=======
                          <a href="#">Pet Supplies</a>{" "}
>>>>>>> 5d6b8abcb15c428d365598f698a98763a3c4b655
                          <a class="more" href="#">
                            see all
                          </a>
                        </li>
                        <li>
<<<<<<< HEAD
                          <a href="#">Pet Emergency Kit</a>
=======
                          <a href="#">Pet Emergency Kit</a>{" "}
>>>>>>> 5d6b8abcb15c428d365598f698a98763a3c4b655
                          <a class="more" href="#">
                            see all
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="featured">
            <ul>
              <li>
                <a href="#">
                  <img
                    src="images/organic-and-chemical-free.jpg"
                    width="300"
                    height="90"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="images/good-food.jpg"
                    width="300"
                    height="90"
                    alt=""
                  />
                </a>
              </li>
              <li class="last">
                <a href="#">
                  <img
                    src="images/pet-grooming.jpg"
                    width="300"
                    height="90"
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div id="footer">
          <div class="section">
            <ul>
              <li>
<<<<<<< HEAD
=======
                {" "}
>>>>>>> 5d6b8abcb15c428d365598f698a98763a3c4b655
                <img
                  src="images/friendly-pets.jpg"
                  width="240"
                  height="186"
                  alt=""
                />
                <h2>
                  <a href="#">Friendly Pets</a>
                </h2>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetuer adepiscing elit, sed
<<<<<<< HEAD
                  diam nonummy nib.
                  <a class="more" href="#">
                    Read More
                  </a>
                </p>
              </li>
              <li>
=======
                  diam nonummy nib.{" "}
                  <a class="more" href="#">
                    Read More
                  </a>{" "}
                </p>
              </li>
              <li>
                {" "}
>>>>>>> 5d6b8abcb15c428d365598f698a98763a3c4b655
                <img
                  src="images/pet-lover2.jpg"
                  width="240"
                  height="186"
                  alt=""
                />
                <h2>
                  <a href="#">How dangerous are they</a>
                </h2>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, cons ectetuer adepis cing, sed
<<<<<<< HEAD
                  diam euis.
                  <a class="more" href="#">
                    Read More
                  </a>
                </p>
              </li>
              <li>
=======
                  diam euis.{" "}
                  <a class="more" href="#">
                    Read More
                  </a>{" "}
                </p>
              </li>
              <li>
                {" "}
>>>>>>> 5d6b8abcb15c428d365598f698a98763a3c4b655
                <img
                  src="images/healthy-dog.jpg"
                  width="240"
                  height="186"
                  alt=""
                />
                <h2>
                  <a href="#">Keep them healthy</a>
                </h2>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetuer adepiscing elit, sed
<<<<<<< HEAD
                  diam nonu mmy.
                  <a class="more" href="#">
                    Read More
                  </a>
=======
                  diam nonu mmy.{" "}
                  <a class="more" href="#">
                    Read More
                  </a>{" "}
>>>>>>> 5d6b8abcb15c428d365598f698a98763a3c4b655
                </p>
              </li>
              <li>
                <h2>
                  <a href="#">Love...love...love...pets</a>
                </h2>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetuer adepiscing elit, sed
<<<<<<< HEAD
                  diameusim.
                  <a class="more" href="#">
                    Read More
                  </a>
=======
                  diameusim.{" "}
                  <a class="more" href="#">
                    Read More
                  </a>{" "}
>>>>>>> 5d6b8abcb15c428d365598f698a98763a3c4b655
                </p>
                <img
                  src="images/pet-lover.jpg"
                  width="240"
                  height="186"
                  alt=""
                />{" "}
              </li>
            </ul>
          </div>
          <div id="footnote">
            <div class="section">
<<<<<<< HEAD
              Copyright &copy; 2018
              <a href="#">Waggs Space</a> All rights reserved
=======
              Copyright &copy; 2012 <a href="#">Company Name</a> All rights
              reserved | Website Template By{" "}
              <a target="_blank" href="http://www.freewebsitetemplates.com/">
                freewebsitetemplates.com
              </a>
>>>>>>> 5d6b8abcb15c428d365598f698a98763a3c4b655
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
