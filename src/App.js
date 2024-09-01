import logo from './logo.svg';
import './App.css';
import { FaUndo } from "react-icons/fa";
import { FaRedo } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaEllipsisV } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa";
import { FaGem } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";


import React, { useState, useEffect } from "react";


function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);



  return (
    <>
    {/* body */}

    <div className="taskbar">
      <br></br><br></br><br></br>
      <FaHome />
      <br></br><br></br>
      <FaRegEnvelope />
      <br></br><br></br>
      <FaFolderOpen />
      <br></br><br></br>
      <FaRegComment />
      <br></br><br></br>
      <FaBookmark />
      <br></br><br></br>
      <FaRegSun />
      <br></br><br></br>
      <FaGem />
      <br></br><br></br>
      <FaEllipsisV />
      


    </div>
    <div className="topbar">
      <div className="withmargin">
        <div className="dashboard">
          Dashboard&emsp;/&emsp;<b>Floor Plans</b>
        </div>
        <FaBell style={{ color: 'red' }}/>&emsp;&emsp;
          <select>
            <option>Cartel Group</option>
          </select>
      </div>
    </div>
    <div className="midbody">
      <h2 className="withmargin">Adding Floor Plans</h2>
      <div className="addfloors">
        <div className="withmargin">
        The floor beneath their feet bore the scars of countless footsteps, each mark telling a story of its own. From the creaky wooden planks of an old farmhouse to the sleek, polished marble of a modern skyscraper, floors are the unsung heroes of our built environment. They provide the stage upon which our lives unfold, supporting our every step with steadfast reliability.

But floors are more than just a practical necessity; they are also a canvas for expression. Intricate mosaics tell tales of ancient civilizations, while hardwood floors whisper secrets of craftsmanship passed down through generations. From the opulent ballrooms of grand palaces to the humble simplicity of a cottage hearth, floors bear witness to the diverse tapestry of human experience.

Yet, despite their importance, floors often go unnoticed, taken for granted in the hustle and bustle of daily life. It is only when we pause to consider their significance that we truly appreciate the integral role they play in shaping our surroundings. So let us tread lightly upon these foundations of our world, mindful of the stories they hold and the journeys they support.
        </div>
      </div>
      <div className="adjustfloor">
        <h3 className="withmargin">Adjust Floor Plans</h3>
        <div className="imgfloor">
          <p align="right">Place image into the box below</p>
          <div className="floor">
            <div className="file-upload">
              <p>Upload Image</p>
                <input accept="image/*"
                type="file" 
                id="select-image" 
                onChange={e => setSelectedImage(e.target.files[0])}></input>
              {imageUrl && selectedImage && (<img src={imageUrl} alt={selectedImage.name} height="280vh"></img>)}
            </div>

          </div>
          
          <p align="right">
            <div className="edit">
              &emsp;&emsp;
              <a href="App.js">
                <FaEdit />
              </a>
            </div>
          <FaUndo />&emsp;<FaRedo />
          </p>
        </div>
        <div className="floordetails">
          <form>
            <label>Floor Name</label>
            <br></br>
            <input type="text" required></input>
            <br></br><br></br>
            <label>Interior Size</label>
            <br></br>
            <input type="text" required></input>
            <br></br><br></br>
            <label>Exterior Size</label>
            <br></br>
            <input type="text" required></input>
            <br></br><br></br>
            <label>Exterior Type</label>
            <br></br>
            <select required>
              <option value="">Select</option>
              <option value="one">Laminate</option>
              <option value="two">Tile</option>
              <option value="three">Carpet</option>
              <option value="four">Vinyl</option>
            </select>
            <br></br><br></br>
            <label>Facing Direction (Variable)</label>
            <br></br>
            <select required>
              <option value="">Select</option>
              <option value="one">North</option>
              <option value="two">South</option>
              <option value="three">East</option>
              <option value="four">West</option>
            </select>
            <br></br><br></br>
            <label>Floor Type</label>
            <br></br>
            <select required>
              <option value="">Select</option>
              <option value="one">Studio</option>
              <option value="two">1 Bed 1 Bath</option>
              <option value="three">2 Bed 1 Bath</option>
              <option value="four">3 Bed 2 Bath</option>
            </select>
            <br></br><br></br>
            <div className="savebutton">
              <button type="submit">Save</button>
            </div>
          </form>
          
        </div>
      </div>
    </div>
    <div className="bottombar">
      <div className="withmargin">
        <div className="copyright">
          <FaRegCopyright /> 2024 99Keys
        </div>
        <div className="about">
          About&emsp;Support&emsp;Contact Us
        </div>
      </div>

    </div>
    
    </>
  );
}

export default App;
