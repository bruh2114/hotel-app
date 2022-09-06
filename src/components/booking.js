import Button from "react-bootstrap/Button";
import Col from "react-bootstrap";
import Form from "react-bootstrap";
import Row from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import { useState } from "react";
import {db} from '../config/firebase';
import {addDoc, collection} from 'firebase/firestore'
import Card from "react-bootstrap";
import Carousel from "react-bootstrap";

function Booking (){
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [numGuests, setNumGuests] = useState("");
    const [roomType, setRoomType] = useState("");
    const [checkin, setCheckin] = useState("");
    const [checkout, setCheckout] = useState("");

    const handleChange = (e) => {
        setNumGuests(e.target.value)
    }

    const addBooking = (() =>{
        const collectionRef = collection(db, "booking");

        const booking = {
            name: name, 
            surname: surname,
            checkin: checkin,
            checkout: checkout,
            numGuests: numGuests,
        };

        addDoc(collectionRef, booking).then(()=>{
           alert ("Booking successful")
        }).catch((err)=>{
            console.log(err);
        })
    })

    const navigate = useNavigate();
    const [appreciate, setAppreciate] = useState("");

    const book = ()=>{
        navigate('/appreciate')
    }
    return (
        <div className="book">
            <div>
                <Row classname="Form">
                    <Form.Group as={Col} controlId="formGridName">
                        <small>name</small>
                        <input className='nameform' type="text" placeholder="Please enter your name" onChange={(e)=>setName(e.target.value)}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridSurname">
                        <small>surname</small>
                        <input className='nameform' type="text" placeholder="Please enter your surname" onChange={(e)=>setSurname(e.target.value)}/>
                    </Form.Group>
                </Row>

                <div className="formBottom">
                <Form.Group controlId="formGridAddress">
                        
                        <select className="bookInfo" placeholder="Room Type" onChange={(e)=>setRoomType(e.target.value)}>
                            <option>1 Bed</option>
                            <option>2 Bed & Breakfast</option>
                            <option>Suite</option>
                        </select>
                    </Form.Group>

                    <Form.Group controlId="formGridAddress1">
                        <input className="bookInfo" type='date' placeholder="Check-in" onChange={(e)=>setCheckin(e.target.value)}/>
                    </Form.Group>

                    <Form.Group controlId="formGridAddress1">
                        <input className="bookInfo" type='date' placeholder="Check-out" onChange={(e)=>setCheckout(e.target.value)}/>
                    </Form.Group>
                    
                    <Form.Group controlId="formGridAddress">
                        
                        <select className="bookInfo" defaultValue="Choose...">
                            <option>Rooms -1</option>
                            <option>1 Room</option>
                            <option>2 Room</option>
                            <option>3+ Room</option>
                        </select>
                    </Form.Group>

                   
                </div>
            </div>
        </div>
        
    )
}
export default Booking;