import React from 'react'
import {Link} from 'react-router-dom'
import img from './common/img.jpeg'
import img1 from './common/img1.jpg'
import img2 from './common/img2.jpg'

export default function Signin() {
    return (
        
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img2} class="d-block w-100" alt="..." style={{height:'800px'}}/>
    </div>
    <div class="carousel-item">
      <img src={img1} class="d-block w-100" alt="..."style={{height:'800px'}}/>
    </div>
    <div class="carousel-item">
      <img src={img} class="d-block w-100" alt="..."style={{height:'800px'}}/>
    </div>
  </div>
  
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
  <div class="carousel-content">
         <h1 style={{margin:'5px'}}>iDesign</h1>
         <p class="jumbotron-lg-only">Log-in</p>
         <form name="user-info">
        <div class="form-group">
             <label for="email">Email:</label>
             <input type="email" name="email" class="form-control" placeholder="Email"/>
           </div>
           <div class="form-group">
             <label for="password">Password:</label>
             <input type="password" name="password" class="form-control" placeholder="Password"/>
           </div>
          <a href="#" class="btn btn-primary btn-large">Sign in</a>
          
        </form>
      </div>
  
        </div>
    )
}
