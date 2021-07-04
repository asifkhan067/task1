import './App.css';

function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="div1">
      <div className="search">
        <div className="top">
          <div className="logo1">
            <img className="logo" src="http://localhost:3000/images/logo.png"></img>
          </div>
          <div className="searchboxcontainer">
            <i class="fa fa-search" aria-hidden="true"></i>
            <input type="text" placeholder="Search your content" className="searchbox"></input>&nbsp;
          </div>
        </div>
      </div>

      <div className="navbar">
        <div className="bottom">
          <div className="nav">
          <ul className="left">
            <li className="left">Home</li>
            <li className="left">Files</li>
            <li className="left">Paper</li>
            <li className="left">Showcase</li>
            <li className="left"><div className="upgr"><img className="upgrade" src="http://localhost:3000/images/upgrade.png"></img></div></li>
            <div className="user">
              <li className="left" id ="info">Personal<i class="fa fa-angle-up" aria-hidden="true"></i></li>
              <li className="left" id="privacy">Only you<i class="fa fa-angle-down" aria-hidden="true"></i></li>
            </div>
          </ul>
          </div>
          <div className="mid">
            <ul className="middle">
            <li><h1>Home</h1></li>
            <li>
              <div className="project-section">
              <div className="scn"><img className="scene" src="http://localhost:3000/images/scene.png"></img></div>
              <div className="project">
                <ul className="projectul">
                  <li><span id="project">Project</span></li>
                  <li className="description1">We should be ready to revile the new</li>
                  <li className="description">project next week and we are very excited</li>
                  <div className="story-section"> 
                  <li className="storyli"><div className="story"><input type="checkbox" className="check"></input><span className="job">Creating storyboard   <a href="">@Bruce Patterson</a></span></div></li>
                  <li className="storyli"><div className="story"><input type="checkbox" className="check"></input><span className="job"><s>Preparing the source files</s>   <a href="">@Charlie Huff</a></span></div></li>
                  </div>
                </ul>
              </div>
              </div>
            </li>
            <li >
              <div className="recent">
              <span id="recent">Recent</span>
              <img className="icon" src="http://localhost:3000/images/explore.png"></img>
              <img className="icon" src="http://localhost:3000/images/option.png"></img>
              <img className="icon" id="plus" src="http://localhost:3000/images/plus.png"></img>
              </div>
            </li>
            <li>
              <div className="folder">
                <i class="fa fa-folder-o" aria-hidden="true"></i>
                <span className="folder-name">
                  Project venus
                </span>
                <span className="type">
                  Folder
                </span>
              </div>
            </li>
            <li>
              <div className="folder">
                <i class="fa fa-music" aria-hidden="true"></i>
                <span className="folder-name">
                  Billie Eilish
                </span>
                <span className="type">
                Music
                </span>
              </div>
            </li>
            <li>
              <div className="folder">
              <i class="fa fa-picture-o" aria-hidden="true"></i>
                <span className="folder-name">
                  City Skyline
                </span>
                <span className="type">
                  Picture
                </span>
              </div>
            </li>
            </ul>
          </div>
        </div>
      </div>
      </div>
      <div className="div2">
        
        <i class="fa fa-bell-o" aria-hidden="true"></i>
        <img className="icon" id="profile" src="http://localhost:3000/images/profile.png"></img>
        <div className="music">
        <img id="coffee" src="http://localhost:3000/images/billie.png"></img>
        <ul>
          <li className="artist">Billie Eilish</li>
          <li className="detail">1.5 MB - Modified 3 hours ago</li>
          <li><img  id= "music" src="http://localhost:3000/images/music.png"></img></li>
          <li id="icons">
          <img className="icon" src="http://localhost:3000/images/attahment.png"></img>
          <img className="icon" src="http://localhost:3000/images/menu.png"></img>
          <img className="icon" src="http://localhost:3000/images/play.png"></img>
          </li>
        </ul>
        </div>
        <div className="comments">
          <ul>
          <li>
          <img className="pp" id="img1" src="http://localhost:3000/images/pp1.jpg"></img>
          <img className="pp" id="img2" src="http://localhost:3000/images/pp2.jpg"></img>
          <img className="pp" id="img3" src="http://localhost:3000/images/pp3.jpg"></img>
          <img className="pp" id="img4" src="http://localhost:3000/images/add.png"></img>
          </li>
          <li>
            <div className="com">
              <div className="image">
          <img className="pp" src="http://localhost:3000/images/pp2.jpg"></img></div>
          <div className="comm">
          <span><a>@Marie</a> we need to make <br></br>sure to review the cover</span>
          </div>
          </div>
          </li>
          <li>
            <div className="wcom">
              <div id="pp">
            <img className="pp" src="http://localhost:3000/images/profile.png"></img></div>
            <div><input className="comment-box" type="text" placeholder="write a comment"></input></div>
            </div>
          </li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  );
}
export default App;
