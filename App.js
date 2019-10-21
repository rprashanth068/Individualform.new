import React, { Component } from 'react';
import './App.css'

export default class App extends Component {

  render() {
    return (

      <div className="container main-container ">
         <h5 className="contact-header">Contact</h5>
        <div className="contact-toolbar">
          <span><i class="far fa-save"></i></span>
          &nbsp;
          <span><i class="far fa-trash-alt"></i></span>
        </div>
         <div className="container  myform">       
        <h5>Name</h5>
        <div className="row">
          <div className="col-2">
            <div class="form-group">
              <label for="formGroupExampleInput">Title</label>
              <select className="form-control" selected="1">
              <option value="1">Mr</option>
              <option value="2">Mrs</option>
            </select>
            </div><div class="form-group">
              <label for="formGroupExampleInput">Title</label>
              <select className="form-control" selected="1">
              <option value="1">Mr</option>
              <option value="2">Mrs</option>
            </select>
            </div>
          </div>
          <div className="col-2">
            <div class="form-group">
              <label for="formGroupExampleInput">First Name</label>
              <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Type the first name of the individual." />
            </div>
          </div>
          <div className="col-2">
            <div class="form-group">
              <label for="formGroupExampleInput">Middle Name</label>
              <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Type the Middle name of the individual." />
            </div>
          </div>
          <div className="col-2">
            <div class="form-group">
              <label for="formGroupExampleInput">Last Name</label>
              <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Type the last name of the individual." />
            </div>
          </div>
          <div className="col-2">
            <div class="form-group">
              <label for="formGroupExampleInput">Preferred Name</label>
              <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Type the Preferred name of the individual." />
            </div>
          </div>
          <div className="col-2">
            <div class="form-group">
              <div class="form-check">
              <label class="form-check-label" for="gridCheck">
                  Deceased
            </label>
                <input class="form-check-input" type="checkbox" id="gridCheck" />                
              </div>
            </div>
          </div>
        </div>

        <hr/>

        <div className="row">
          <div className="col-12">
            <h5>Contact</h5>
            <div className="row ">
              <div className="col-2">
                <div class="form-group">
                  <label for="formGroupExampleInput">Home Phone</label>
                  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Type the Home phone number here" />
                </div>
              </div>
              <div className="col-2">
                <div class="form-group">
                  <label for="formGroupExampleInput">Mobile Number</label>
                  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Type the Cell/Mobile phone number here" />
                </div>
              </div>
              <div className="col-2">
                <div class="form-group">
                  <label for="formGroupExampleInput">Business Phone</label>
                  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Type the business/office phone number here" />
                </div>
              </div>
              <div className="col-1">
                <div class="form-group">
                  <label for="formGroupExampleInput">Ext</label>
                  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Type the Ext here" />
                </div>
              </div>
              <div className="col-2">
                <div class="form-group">
                  <label for="formGroupExampleInput">Fax Number</label>
                  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Type the fax number here" />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-3">
                <div class="form-group">
                  <label for="formGroupExampleInput">Email Address</label>
                  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Type the email address for the contact here" />
                </div>
              </div>
            </div>
          </div>

        </div>

        <hr/>
        <h5>Address</h5>
        <div className="row">
          <div className="col-4">
            <div class="form-group">
              <label for="formGroupExampleInput">Address</label>
              <textarea rows="5" type="text" class="form-control" id="formGroupExampleInput" placeholder="Type the street address here." />
            </div>
          </div>
          <div className="col-4">
            <div>
              <div class="form-group">
                <label for="formGroupExampleInput">City</label>
                <select className="form-control" selected="1">
                <option value="1">Mr</option>
                <option value="2">Mrs</option>
              </select>
              </div>
            </div>
            <div>              
              <div class="form-group">
              <label for="formGroupExampleInput">Province/State</label>
              <select className="form-control" selected="1">
              <option value="1">Mr</option>
              <option value="2">Mrs</option>
            </select>
            </div>
            </div>
          </div>
          <div className="col-4">
            <div>
            <div class="form-group">
              <label for="formGroupExampleInput">Country</label>
              <select className="form-control" selected="1">
              <option value="1">Mr</option>
              <option value="2">Mrs</option>
            </select>
            </div>              
            </div>
            <div>
              <div class="form-group">
                <label for="formGroupExampleInput">Postal/Zipcode</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Type in the postal code or zip code." />
              </div>
            </div>
          </div>

        </div>
        <div className="row">
          <div className="col-4">
            <div class="form-group">
              <label for="formGroupExampleInput">Home Quarter</label>
              <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Type the short legal of the residence/home quarter." />
            </div>
          </div>
          <div className="col-6">
            <div class="form-group align-residence">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="gridCheck" />
                <label class="form-check-label" for="gridCheck">
                  Residence is the same as listed address
                </label>
              </div>
            </div>
          </div>
        </div>
        <hr/>

        <h5>Tax Number </h5>
        <div className="row">
          <div className="col-3">
          <div class="form-group">
              <label for="formGroupExampleInput">GST#</label>
              <input type="text" class="form-control" id="formGroupExampleInput" placeholder="17 digit GST # after verifying.T" />
            </div>
          </div>
          <div className="col-3">
          <div class="form-group">
              <label for="formGroupExampleInput">HST#</label>
              <input type="text" class="form-control" id="formGroupExampleInput" placeholder="17 digit HST # after verifying.T" />
            </div>
          </div>
          <div className="col-3">
          <div class="form-group">
              <label for="formGroupExampleInput">PST#</label>
              <input type="text" class="form-control" id="formGroupExampleInput" placeholder="8 digit PST # after verifying." />
            </div>
          </div>
          <div className="col-3">
          <div class="form-group">
              <label for="formGroupExampleInput">QST#</label>
              <input type="text" class="form-control" id="formGroupExampleInput" placeholder="15 digit QST # after verifying." />
            </div>
          </div>
        </div>
        <hr/>

        <h5>Parent (Individual or Entity)</h5> 
         <div className="row">
        <div className="col-6">
            <div class="form-group">
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Type ahead box" />
            </div>
         </div>
         <div className="col-0 icons-align">
          </div><i class="fas fa-user"></i>
        </div>

        

        <hr/>

        <h5>Comments</h5>

        <div>

          <span><i class="far fa-edit"></i></span>

          &nbsp;

          <span><i class="far fa-trash-alt"></i></span>

        </div>

        <div className="row">

          <div className="col-11">

          <div class="form-group custom-form-input">

          <input type="text" class="form-control" id="formGroupExampleInput" placeholder="This is a Comment" />

            </div>

          </div>

          <div className="col-1 icons-align">

            <i class="fas fa-2x fa-plus-square"></i>

          </div>

        </div>

        <div className="row">

          <div className="col-12 scroll-table">

          <table class="table table-bordered">

            <thead>

              <tr>

              <th scope="row">

              <div class="form-check form-check-align">

              <input class="form-check-input" type="checkbox" id="gridCheck" />                      

               </div>

               </th>


                <th scope="col">General comment regarding Individual</th>

                <th scope="col">Date</th>

                <th scope="col">Who</th>

              </tr>

            </thead>

            <tbody>

              <tr>

                <th scope="row">

                  <div class="form-check">

                      <input class="form-check-input" type="checkbox" id="gridCheck" />                      

                  </div>

              </th>

                <td>Comment about person</td>

                <td>July 25 2019</td>

                <td>Michelle</td>

              </tr>

              <tr>

                <th scope="row">

                <div class="form-check">

                      <input class="form-check-input" type="checkbox" id="gridCheck" />                      

                  </div>

                </th>

                <td>Comment about person</td>

                <td>July 25 2019</td>

                <td>Michelle</td>

              </tr>              

              <tr>

                <th scope="row">

                <div class="form-check">

                      <input class="form-check-input" type="checkbox" id="gridCheck" />                      

                  </div>

                </th>

                <td>Comment about person</td>

                <td>July 25 2019</td>

                <td>Michelle</td>

              </tr>              

              <tr>

                <th scope="row">

                <div class="form-check">

                      <input class="form-check-input" type="checkbox" id="gridCheck" />                      

                  </div>

                </th>

                <td>Comment about person</td>

                <td>July 25 2019</td>

                <td>Michelle</td>

              </tr>              

              <tr>

                <th scope="row">

                <div class="form-check">

                      <input class="form-check-input" type="checkbox" id="gridCheck" />                      

                  </div>

                </th>

                <td>Comment about person</td>

                <td>July 25 2019</td>

                <td>Michelle</td>

              </tr>              

            </tbody>

          </table>

          </div>

        </div>



        <hr/>

        <h5>Documents</h5>

        <div>

          <span><i class="far fa-edit"></i></span>

          &nbsp;

          <span><i class="far fa-trash-alt"></i></span>

        </div>

        <div className="row">

          <div className="col-11">

          <div class="form-group custom-form-input">

          
         <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Document Four.pdf" />

            </div>

          </div>

          <div className="col-1 icons-align">

          <i class="far fa-2x fa-folder"></i>

          </div>

        </div>

        <div className="row">

          <div className="col-12 scroll-table">

          <table class="table table-bordered">

            <thead>

              <tr>

              <th scope="col">

               <div class="form-check form-check-align">

                <input class="form-check-input" type="checkbox" id="gridCheck" />                      

                </div>

                </th>


                <th scope="col">Document Name</th>

                <th scope="col">Date</th>

                <th scope="col">Who uploaded</th>

              </tr>

            </thead>

            <tbody>

              <tr>

                <th scope="row">

                  <div class="form-check form-check-align">

                      <input class="form-check-input" type="checkbox" id="gridCheck" />                      

                  </div>

                </th>

                <td>abc.docx</td>

                <td>June 25 2019</td>

                <td>Dave</td>

              </tr>

              <tr>

                <th scope="row">

                <div class="form-check">

                      <input class="form-check-input" type="checkbox" id="gridCheck" />                      

                  </div>

                </th>

                <td>xyz.xlsx</td>

                <td>June 25 2019</td>

                <td>Dave</td>

              </tr>              

              <tr>

                <th scope="row">

                <div class="form-check">

                      <input class="form-check-input" type="checkbox" id="gridCheck" />                      

                  </div>

                </th>

                <td>pqr.pdf</td>

                <td>June 25 2019</td>

                <td>Dave</td>

              </tr>              

              <tr>

                <th scope="row">

                <div class="form-check">

                      <input class="form-check-input" type="checkbox" id="gridCheck" />                      

                  </div>

                </th>

                <td>mnl.docx</td>

                <td>June 25 2019</td>

                <td>Dave</td>

              </tr>              

              <tr>

                <th scope="row">

                <div class="form-check">

                      <input class="form-check-input" type="checkbox" id="gridCheck" />                      

                  </div>

                </th>

                <td>jkl.txt</td>

                <td>June 25 2019</td>

                <td>Dave</td>

              </tr>              

            </tbody>

          </table>

          </div>

        </div>



      </div>

      </div>

     
    )

  }

}