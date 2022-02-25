import React from 'react';
import Modal from 'react-bootstrap/Modal'
import ModalDialog from 'react-bootstrap/ModalDialog'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./popupform.css"

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            local Buisness address
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>

            <label id="Country" for="Country">Country</label>

<select id="Countrys">

     <option value="Maharashtra">India</option>
     <option value="Asaam">Russia</option>
      <option value="Madhya Pradesh">Nepal</option>
     <option value="Chattishgardh">Bhutan</option>

     <option value="Telangana">Myanmar</option>
     <option value="Delhi">Bangladesh</option>
      <option value="Haryana">Shri Lanka </option>
     <option value="Punjaab">Israil</option>

       <option value="Andra Pradesh">Pakistan</option>
     <option value="Kerla">China</option>
      <option value="Rajasthan">USA </option>
     <option value="Gujraat">Canda</option>

     <option value="Utter Pradesh">Taiwan</option>
     <option value="Bihar">Germany</option>
      <option value="Uttarakhand">Australia </option>
     <option value="Jammu and Kashmir">Japan</option>

     <option value="Nagaland">South Korea</option>
     <option value="West Bengol">France</option>
      <option value="Odisa">Greenland </option>
     <option value="Kannyakumari">North Korea</option>

 </select>

            <lable id="popadd">Address</lable>
            <br/>
           <input id="popinp" type="text" />

           <lable  id="popadd1">Apt,suite,etc..</lable>
          
           <input  id="popinp1" type="text" />
<br/>
           <lable id="popadd2">City</lable>
           <input id="popinp2" type="text" />
<br/>
               
           <label id="state" for="State">State</label>

                  <select id="states">

                       <option value="Maharashtra">Maharashtra</option>
                       <option value="Asaam">Asaam</option>
                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                       <option value="Chattishgardh">Chattishgardh</option>

                       <option value="Telangana">Telangana</option>
                       <option value="Delhi">Delhi</option>
                        <option value="Haryana">Haryana </option>
                       <option value="Punjaab">Punjaab</option>

                         <option value="Andra Pradesh">Andra Pradesh</option>
                       <option value="Kerla">Kerla</option>
                        <option value="Rajasthan">Rajasthan </option>
                       <option value="Gujraat">Gujraat</option>

                       <option value="Utter Pradesh">Utter Pradesh</option>
                       <option value="Bihar">Bihar</option>
                        <option value="Uttarakhand">Uttarakhand </option>
                       <option value="Jammu and Kashmir">Jammu and Kashmir</option>

                       <option value="Nagaland">Nagaland</option>
                       <option value="West Bengol">West Bengol</option>
                        <option value="Odisa">Odisa </option>
                       <option value="Kannyakumari">Kannyakumari</option>

                   </select>

               
           </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
          <Button onClick={props.onHide}>Save</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  function App2() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <Button  id="editbutt1" variant="primary" onClick={() => setModalShow(true)}>
          Add a business address
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }
  export default App2;
//   render(<App />);