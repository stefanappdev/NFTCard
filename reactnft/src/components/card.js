import React from 'react'
import '../styles/App.css'

function Card() {
  return (

    <main>
           

        <div className='main-app'>

            <div className='nftcard'>
              
                    <figure id="img-con" className='card-con'>

                        <img alt="My nft card" src='./images/image-equilibrium.jpg' />
                    
                   
                    <figcaption>   <h3 className='image-description'>Equilibrium #3429</h3> </figcaption>
                    
                    </figure>
                        <br/><br/>
                    
                    
                    <div id='description' className='card-con'>

                          
                          <p>Our Equilibrium collection promotes balance and calm</p>
                         
                          <br/>

                          <span className='ETH'>
                          <img alt="value in Etherium" src='./images/icon-ethereum.svg'/>  
                              0.041ETH
                            
                            </span> 
                            
                            <span className='days'>
                            <img alt="days remaining" src='./images/icon-clock.svg'/> 
                              3 days left
                            </span>
                          
                    </div>

                      <br/>

                    <hr/>

                    <div id='footer' className='card-con'>

                    <img alt="image of nft creator" src='./images/image-avatar.png' className='creator-img'/>
                        <p>Creation of <span className='creator'>jules Wyvern</span> </p>

                    </div>


                

            </div>

        </div>
    
    </main>
  )
}

export default Card