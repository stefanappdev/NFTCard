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
                      <span>0.0412ETH</span> <span>3 days left</span>
                      
                      </div>

                      <br/>

                    <hr/>

                    <div id='footer' className='card-con'>

                    <img alt="My nft card" src='./images/image-avatar.png' />
                        <p>Creation of jules Wyvern</p>

                    </div>


                

            </div>

        </div>
    
    </main>
  )
}

export default Card