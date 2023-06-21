import React from 'react'

function Home() {

    let possible_suppliers = true
    let awarded_supplier = true

  return (

    <div class="body--events">
        <div class="events-box">

            <div class="events__awarded-box">
                <div class="events__awarded-box--title">
                    <h3>RECOMMENDED SUPPLIER TO BE AWARDED</h3>
                </div>

                <div class="events__awarded-box--suppliers">
                    {
                        awarded_supplier ?
                                <div className="supplier__details-tr">
                                    <div className="awarded__supplier-details">
                                        <p>Supplier Name: <h3>Name</h3></p>
                                        <div className="awarded__supplier-details__ratings">
                                            <h4>Reason: </h4> 
                                            <p>Evaluation 100% Price</p>
                                        </div>
                                    </div>
                                    <input type="hidden" value="" name="events[awarded_supplier_id]" />
                                    <button className='btn btn-award-primary' id ="submitBtnJS">
                                        <i class="fa-solid fa-plus"></i><span>Award</span>
                                    </button>
                                </div>
                            
                        : 
                            
                            <div class="supplier__details-tr">
                                <div class="">
                                    <p>Supplier Name: <h3>None</h3></p>
                                </div>
                                <button className='btn btn-award-primary disabled'>
                                    <i class="fa-solid fa-plus"></i><span>Award</span>
                                </button>
                            </div>
                    }
                </div>
            </div>



            <div class="events__possible-box">
                <div class="events__possible-box--title">
                    <h3>POSSIBLE SUPPLIERS</h3>
                </div>
                <div class="events__awarded-box--suppliers">
                    {
                        possible_suppliers ?
                        // <%= form_tag(possible_supplier_path(auth_id: params[:auth_id], object_id: params[:object_id]), method: :post) do %>
                    
                                <div class="supplier__details-tr supplier__details-tr--possible">
                                    <div class="possible__supplier">
                                        <p>Supplier Name: <h3>Supplier Name</h3></p>
                                        <div class="possible__motivation" id="possibleSupplierDiv">
                                            <textarea name="events[awarded_supplier_text]" class="text__area" placeholder="Leave a motivation for choosing this supplier..." cols="60" rows="5" id="awarded_supplier_text" required></textarea>
                                            
                                        </div>
                                        <div class="possible__ratings">
                                            <h4>Ratings: </h4> 
                                            <p>Price: 100%</p> <span class="vertical__divider-small"></span>   
                                            <p>Compliance: 0%</p> <span class="vertical__divider-small"></span>
                                            <p>Technical: 0%</p> 
                                        </div>
                                    </div>
                                    <input type="hidden" value="" name="events[awarded_supplier_id]" />
                                    <button className='btn btn-award-secondary'>
                                        <i class="fa-solid fa-plus"></i><span>Award</span>
                                    </button>
                                </div>
                        :
                        <div class="supplier__details-tr">
                            <div class="">
                                <p>Supplier Name: <h3>None Suppliers</h3></p>
                            </div>
                        </div>
                    }
                </div>
            </div>


            
        </div>
    </div>

  );
}

export default Home