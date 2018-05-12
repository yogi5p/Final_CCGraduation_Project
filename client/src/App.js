import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="header">
          {" "}
          <a href="#" id="logo">
            <img
              src="images/HauteDoglogo.png"
              width="310"
              height="114"
              alt=""
            />
          </a>
          <ul class="navigation">
            <li class="active">
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="petmart.html">PetMart</a>
            </li>
            <li>
              <a href="about.html">About us</a>
            </li>
            <li>
              <a href="blog.html">Blog</a>
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
                  {" "}
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
                    parum clara m, ant epo suerit li tterar.{" "}
                    <a class="more" href="#">
                      View all
                    </a>
                  </p>
                </li>
                <li>
                  {" "}
                  <a href="#">
                    <img src="images/cat.jpg" width="114" height="160" alt="" />
                  </a>
                  <h2>Something good</h2>
                  <p>
                    Gothica, quam nun c putamus parum claram, anteposuerit
                    litterarum formas humani tatis per seacula.{" "}
                    <a class="more" href="#">
                      View all
                    </a>
                  </p>
                </li>
                <li>
                  {" "}
                  <a href="#">
                    <img src="images/koi.jpg" width="114" height="160" alt="" />
                  </a>
                  <h2>Kinds of Fish</h2>
                  <p>
                    Quam nunc putamus parum claram, antep osuerit litter arum
                    formas humanitatis per seacula quarta.{" "}
                    <a class="more" href="#">
                      View all
                    </a>
                  </p>
                </li>
                <li>
                  {" "}
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
                    parum claram, anteposuerit.{" "}
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
                          <a href="#">Pet Accesories </a>{" "}
                          <a class="more" href="#">
                            see all
                          </a>
                        </li>
                        <li>
                          <a href="#">Bath Essentials</a>{" "}
                          <a class="more" href="#">
                            see all
                          </a>
                        </li>
                        <li>
                          <a href="#">Pet Food</a>{" "}
                          <a class="more" href="#">
                            see all
                          </a>
                        </li>
                        <li>
                          <a href="#">Pet Vitamins</a>{" "}
                          <a class="more" href="#">
                            see all
                          </a>
                        </li>
                        <li>
                          <a href="#">Pet Needs</a>{" "}
                          <a class="more" href="#">
                            see all
                          </a>
                        </li>
                        <li>
                          <a href="#">Pet Toy and Treats</a>{" "}
                          <a class="more" href="#">
                            see all
                          </a>
                        </li>
                        <li>
                          <a href="#">Pet Supplies</a>{" "}
                          <a class="more" href="#">
                            see all
                          </a>
                        </li>
                        <li>
                          <a href="#">Pet Emergency Kit</a>{" "}
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
        </div>
        <div id="footer">
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
          <div id="footnote">
            <div class="section">
              <a href="/">Waggs Space</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
