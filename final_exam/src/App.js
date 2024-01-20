import { useDispatch, useSelector } from "react-redux";
import { GET_API_DATA_PENDING } from "./Redux-Saga/Admin/Action/action";
import { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import { Button, Card } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';


function App() {
  const [data, setData] = useState([])
  const [showData, setShowData] = useState([])

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const dispatch = useDispatch();
  const selector = useSelector((state) => state.adminReducer);
  console.log(selector);
  useEffect(() => {
    dispatch({ type: GET_API_DATA_PENDING });
  }, [])

  useEffect(() => {
    setData(selector.data)

  }, [selector])

  console.log(showData);

  const addtoLocal = (e) => {
    console.log(e);
    const getDataLocal = JSON.parse(localStorage.getItem("data")) || []
    const newData = [...getDataLocal, e]
    console.log(newData);
    localStorage.setItem('data', JSON.stringify(newData))
  }

  useEffect(() => {
    const callDataLocal = JSON.parse(localStorage.getItem("data")) || []
    setShowData(callDataLocal)
  }, [])

  const deleteUserData = (index) => {
    console.log(index.id , 'index');
    const getDataLocal = JSON.parse(localStorage.getItem("data"));
    console.log(getDataLocal, 'getDataLocal');
    const newGetDataLocal = getDataLocal.filter((e) => e.id !== index.id)
    console.log(newGetDataLocal, 'newGetDataLocal');
    localStorage.setItem("data", JSON.stringify(newGetDataLocal));
  };


  return (
    <>

      <div className="container">
        <Button variant="primary" onClick={handleShow}>
          Card
        </Button>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {
              showData?.map((e) => {
                return (
                  <Card>
                    <Card.Body className="text-center">
                      <Card.Title>Card Title</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">{e.id}</Card.Subtitle>
                      <Card.Text>{e.title}</Card.Text>
                      <Button className="btn btn-primary btn-sm" style={{ margin: '2px' }}> update</Button>
                      <Button className="btn btn-primary btn-sm" onClick={() => deleteUserData(e)}> Delete</Button>
                    </Card.Body>
                  </Card>
                )
              })
            }
          </Offcanvas.Body>
        </Offcanvas>



        <table class="table">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">completed</th>
              <th scope="col">title</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              data.slice(0, 50).map((e) => {
                return (
                  <tr key={e.id}>
                    <th >{e.id}</th>
                    <td>Mark</td>
                    <td>{e.title}</td>
                    <td>
                      <div>
                        <button className="btn btn-primary btn-sm" onClick={() => addtoLocal(e)}>Add</button>
                      </div>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
