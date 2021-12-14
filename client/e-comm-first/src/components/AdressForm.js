import React,{useState} from 'react'

function AdressForm() {
  const [checkOut, setCheckout] = useState('')
    return (
        <div class="container" width="30%"><br/>
          <h1>Shipping Address</h1><br/>
  <form>
  <div>
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
    </div>
  </div>
  <div class="form-group col-md-10">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div class="form-group col-md-10">
    <label for="inputAddress2">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div class="form-row">
    <div class="form-group col-md-5">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity"/>
    </div>
    <div class="form-group col-md-3">
      <label for="inputState">Province</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>AB</option>
        <option>ON</option>
        <option>BC</option>       
        <option>QC</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Postal Code</label>
      <input type="text" class="form-control" id="inputZip"/>
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      
      
    </div>
  </div>
  <button type="submit" class="btn btn-primary" oncClick={setCheckout}>Pay and Checkput</button>
  
</form>
        </div>
    )
}

export default AdressForm
