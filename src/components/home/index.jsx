import React from 'react'
import { useNavigate } from 'react-router-dom'



const Home = () => {
            const navigate = useNavigate()
            
            const backgroundStyle = {
                backgroundImage: "url('https://plus.unsplash.com/premium_photo-1713296255442-e9338f42aad8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dW5pdmVyc2l0eXxlbnwwfHwwfHx8MA%3D%3D')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
                color: "white",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px",
                textAlign: "center",
              };
            
              const buttonStyle = {
                padding: "15px 30px",
                margin: "10px",
                fontSize: "18px",
                border: "2px solid white",
                borderRadius: "25px",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                color: "#333",
                cursor: "pointer",
                fontWeight: "bold",
                textTransform: "uppercase",
                boxShadow: "0 5px 10px rgba(0, 0, 0, 0.3)",
                transition: "all 0.3s ease",
              };
            
              const buttonHoverStyle = {
                backgroundColor: "#333",
                color: "white",
              };
            
              return (
                <div style={backgroundStyle}>
                  <div>
                    <h1 style={{ fontSize: "3em", marginBottom: "10px" ,color:"white"}}>Welcome to Scholaro</h1>
                    <p style={{ fontWeight: "bold", fontSize: "1.8em", maxWidth: "600px", margin: "0 auto" , color:"white"}}>
                      Are you looking for a scholarships or an Internships ? We got you covered.
                    </p>
                  </div>
                  <div>


                  <button className='undergraduate-button'
                                                            name="undergraduate"
                                                            style={buttonStyle}
                                                           
                                                    onClick={(event) => {
                                                    navigate("/List?name=undergraduate")}}>
                                                    <b>Undergraduate</b>
                                                    </button>

                  <button className='industrial-attachment-button'
                                                    name="IndustrialAttachment"
                                                    style={buttonStyle}
                                                            
                                                    onClick={() => {
                                                    navigate("/List?name=industrialAttachment")}}>
                                                    <b>Attachments</b>
                                                    </button>

                                                    <button className='postgraduate-button'
                                                            name ="postgraduate"
                                                            style={buttonStyle}
                                                            
                                                    onClick={(event) => {
                                                    navigate("/List?name=postgraduate")}}>
                                                    <b>Post Graduate</b>
                                                    </button>
            
                                                    <button  className='apprenticeship-button'
                                                             name ="apprenticeships"
                                                             style={buttonStyle}
                                                           
                                                    onClick={(event) => {
                                                    navigate("/List?name=apprenticeship")}}>
                                                    <b>Apprenticeships</b>
                                                    </button>
            
                                                    
            
                                                   
                  </div>
                </div>
              );
            };
            
export default Home