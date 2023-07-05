import React from "react"
import {FaPhotoVideo as Photo} from 'react-icons/fa'
import './create.css'
function Create(){
    return(
        <div style={{
            display:'flex',
            justifyContent:'center',
            alignContent:'center',
            height:'100vh',
            // border: '2px solid black'
        }}>

        <div style={{
            backgroundColor:'black',
            opacity:'0.5',
            width:'100vw',
            height:'100vh',
            position:'absolute',
                    zIndex:'-1',
            }}>

            </div>
        <div style={{
            // color:'white',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            opacity:'1',
            width:'500px',
            height:'500px',
            backgroundColor:"white",
            borderRadius:'10px'
        }}>
            <div style={{
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                justifyContent:'center'
            }}>

                <h1>Create New Post</h1>
                <div></div>
                <Photo size={100}/>
            </div>
                <label for="images" class="drop-container" id="dropcontainer" >
                <span class="drop-title">Drag photos and videos here</span>
                or
                    <input type="file" id="images" accept="image/*" required></input>
                </label>
                {/* <button
                style={{
                    backgroundColor:'rgb(0, 149, 246)',
                    color:'white',
                    borderRadius:'5px',
                    width:'200px',
                    height:'30px',
                    border:'none'
                }}>Select from Computer</button> */}
        </div>
            </div>
    )
}

export default Create