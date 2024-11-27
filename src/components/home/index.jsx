import React from 'react'
import { useNavigate } from 'react-router-dom'



const Home = () => {
            const navigate = useNavigate()
            
            const backgroundStyle = {
                backgroundImage: "url('https://images.unsplash.com/photo-1596275281743-e7399c7bdfa9?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
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
                    <h1 style={{ fontSize: "3em", marginBottom: "10px" ,color:"black"}}>Welcome to Scholaro</h1>
                    <p style={{ fontWeight: "bold", fontSize: "1.8em", maxWidth: "600px", margin: "0 auto" , color:"black"}}>
                      Are you looking for a scholarships or an Internships ? We got you covered.
                    </p>
                  </div>
                  <div>
                  <button className='industrial-attachment-button'
                                                    name="IndustrialAttachment"
                                                    style={buttonStyle}
                                                            
                                                    onClick={() => {
                                                    navigate("/List?name=industrialAttachment")}}>
                                                    <b>Industrial Attachments</b>
                                                    </button>
            
                                                    <button  className='apprenticeship-button'
                                                             name ="apprenticeships"
                                                             style={buttonStyle}
                                                           
                                                    onClick={(event) => {
                                                    navigate("/List?name=apprenticeship")}}>
                                                    <b>Apprenticeships</b>
                                                    </button>
            
                                                    <button className='undergraduate-button'
                                                            name="undergraduate"
                                                            style={buttonStyle}
                                                           
                                                    onClick={(event) => {
                                                    navigate("/List?name=undergraduate")}}>
                                                    <b>Undergraduate Scholarships</b>
                                                    </button>
            
                                                    <button className='postgraduate-button'
                                                            name ="postgraduate"
                                                            style={buttonStyle}
                                                            
                                                    onClick={(event) => {
                                                    navigate("/List?name=postgraduate")}}>
                                                    <b>Post Graduate Scholarships</b>
                                                    </button>
                  </div>
                </div>
              );
            };
            
export default Home