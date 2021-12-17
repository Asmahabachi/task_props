import React from 'react'
import img from './../Assets/assouma.jpg'
import proj1 from './../Assets/proj1.jpg'
import proj2 from './../Assets/proj2.jpg'
import proj3 from './../Assets/proj3.jpg'
import proj4 from './../Assets/proj4.jpg'
function main(props) {
    return (
        <div className="container-fluid m-4">
            <div className="row img-text">
                <div className="col">
                    <p className="text"> Hello,my name is <span className="blue" >{props.name}</span> ,this is my web site</p>
                </div>
                <div className="col-4"><img src={img} alt="Assets" /> </div>
            </div>
                   <div className="contenue" ><span className="blue">Projects</span>
                </div>
                <div class="row row-cols-1 row-cols-md-4 g-4">
  <div class="col">
    <div class="card">
      <img src={proj1} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={proj2} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={proj3} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={proj4} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
<div className="contenue" >  <span className="blue">Contact us</span>
<form>
    <div>
        <label>Full Name:</label>
        <input type="text"  value="full name" />
    </div>
    <div>
        <label>Email:  </label>
        <input type="email"  value="email" />
    </div>
    <div>
        <label>message:</label> 
        <textarea></textarea>
    </div>
    <div>
        <button type="submit">send</button>
    </div>

</form>
               
               
               
                </div>
            
        </div>
    )
}

export default main
