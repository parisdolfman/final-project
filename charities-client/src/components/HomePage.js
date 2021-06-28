import React, { useEffect, useState, useRef } from 'react';
import CharityCard from './CharityCard';
import { getCurrentUser } from '../helpers';
import { Button, DropdownButton, Modal, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
const HomePage = ({
  getCharities,
  getCategories,
  state,
  getComments,
  addCharity,
  updateFilter,
}) => {
  useEffect(() => {
    getCharities();
    getCategories();
    getComments();
  }, []);
  const [showModal, setShowModal] = useState(false);

  
  const name = useRef();
  const image = useRef();
  const category = useRef();

  const current_user = getCurrentUser();
  const history = useHistory();

  const handleAddCharity = (e) => {
    e.preventDefault();
    addCharity({
      user_id: current_user.id,
      category_id: category.current.value,
      name: name.current.value,
      image: image.current.value,
    });
    getCharities();
    getComments();
    getCategories()
    window.location.reload();
  };

  return (
    <div>
      {/* new charity modal  */}
      <Modal
        show={showModal}
        onHide={() => setShowModal((ele) => !ele)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add New Charity
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAddCharity}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Charity Name</Form.Label>
              <Form.Control ref={name} type="text" placeholder="Enter name" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Image Url</Form.Label>
              <Form.Control ref={image} type="text" placeholder="image" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label> Category</Form.Label>
              <Form.Control ref={category} as="select">
                {state.charity?.categories?.map((cha) => (
                  <option key={cha.id} value={cha.id}>
                    {cha.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
              Add Charity
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <div className=" d-flex justify-content-between px-2 py-1">
        <Form>
          {state.charity?.categories ? (
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Control
                as="select"
                onChange={(ele) => updateFilter(ele.target.value)}
              >
                <option selected value="All">
                  All
                </option>
                {state.charity.categories.map((cat) => (
                  <option value={cat.id} key={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          ) : (
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Control as="select">
                <option>No categories</option>
              </Form.Control>
            </Form.Group>
          )}
        </Form>
        <Button
          onClick={() => setShowModal((ele) => !ele)}
          variant="outline-success"
        >
          ADD CHARITY
        </Button>{' '}
      </div>
      {state.filter == 'All' ? (
        <div className="d-flex flex-wrap gap-5">
          {state.charity?.charities?.length > 0 ? (
            state.charity.charities.map((charity, index) => (
              <CharityCard key={index.toString()} charity={charity} />
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      ) : (
        <div className="d-flex flex-wrap gap-5">
          {state.charity?.charities?.length > 0 ? (
            state.charity.charities
              .filter((ele) => ele.category_id == state.filter)
              .map((charity, index) => (
                <CharityCard key={index.toString()} charity={charity} />
              ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      )}
    </div>
  );
};

export default HomePage;
