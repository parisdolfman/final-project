import React, { useState, useEffect, useRef } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCurrentUser } from '../helpers/index';
import { Card, Button, Form, Modal } from 'react-bootstrap';
import {
  getAllCharities,
  deleteCharity,
  addComment,
  deleteComment,
  getAllComments,
  updateComment,
  getCategories,
  updateCharity,
} from '../actions/charityActions';

const ShowPage = ({
  charities,
  getCharities,
  deleteChrity,
  createComment,
  removeComment,
  getComments,
  editComment,
  editCharity,
  categories,
  getAllCategories
}) => {
  const [charity, setCharity] = useState([]);
  const [commentID, setComentId] = useState('');
  const [comments, setcomments] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const editDescription = useRef();
  const history = useHistory();



  const editName = useRef('');
  const editImage = useRef('');
  const editCategory = useRef('');

  const description = useRef('');
  const current_user = getCurrentUser();
  const { id } = useParams();




  useEffect(() => {
    getAllCategories();
    getCharities();
    getComments();
    if (charities.comments) {
      const data = charities.comments.filter((com) => com.charity_id == id);

      setcomments(data);
    }
    if (charities.charities) {
      setCharity(charities.charities.filter((ele) => ele.id == id));
    }
  }, []);

  const handleComment = (e) => {
    e.preventDefault();
    createComment({
      description: description.current.value,
      user_id: current_user.id,
      charity_id: id,
    });
    getCharities();
    description.current = '';
    getComments();
    window.location.reload();
  };
  const handleEditCommment = (e) => {
    e.preventDefault();
    editComment({ description: editDescription.current.value, id: commentID });
    getCharities();
    editDescription.current = '';
    getComments();
    window.location.reload();
  };

  const handleEditCahrity = (e) => {
    e.preventDefault();
    editCharity(
      {
        name: editName.current.value,
        image: editImage.current.value,
        category_id: editCategory.current.value,
      },
      id,
    );
    getCharities();
    editName.current = '';
    editImage.current = '';
    editCategory.current = '';
    getComments();
    window.location.reload();
  };

  return charities.charities ? (
    <div>
      <Modal
        show={showModal}
        onHide={() => setShowModal((ele) => !ele)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Comment
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleEditCommment}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Charity Comment</Form.Label>
              <Form.Control
                ref={editDescription}
                defaultValue={editDescription.current}
                type="text"
                placeholder="Enter comment"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Update Comment
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* update charity modal  */}
      <Modal
        show={editModal}
        onHide={() => setEditModal((ele) => !ele)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Update Charity
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleEditCahrity}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Charity Name</Form.Label>
              <Form.Control
                ref={editName}
                defaultValue={editName.current}
                type="text"
                placeholder="Enter name"
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Image Url</Form.Label>
              <Form.Control
                ref={editImage}
                defaultValue={editImage.current}
                type="text"
                placeholder="image"
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label> Category</Form.Label>
              <Form.Control ref={editCategory} as="select">
                {charities.categories?.map((cha) => (
                  <option key={cha.id} value={cha.id}>
                    {cha.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
              Update Charity
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      <h3 className="text-center">
        {' '}
        Charity Name :{' '}
        {charities.charities.filter((ele) => ele.id == id)[0].name}{' '}
      </h3>
      <h5 className="text-center">
        {' '}
        userName :{' '}
        {charities.charities.filter((ele) => ele.id == id)[0].username}{' '}
      </h5>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <img
          className="show-img text-center"
          alt="charity logo"
          src={charities.charities.filter((ele) => ele.id == id)[0].image}
        />

        {charities.charities.filter((ele) => ele.id == id)[0].user_id ==
        current_user.id ? (
          <div className="text-center">
            <Button
              variant="info"
              className="mx-1"
              onClick={() => {
                getCategories();
                console.log(charities);
                editName.current = charities.charities.filter(
                  (ele) => ele.id == id,
                )[0].name;
                editImage.current = charities.charities.filter(
                  (ele) => ele.id == id,
                )[0].image;
                setEditModal((ele) => !ele);
              }}
            >
              {' '}
              Edit{' '}
            </Button>
            <Button
              variant="danger"
              className="mx-1"
              onClick={() => {
                deleteChrity(
                  charities.charities.filter((ele) => ele.id == id)[0].id,
                );
                getCharities();
                history.push('/');
                window.location.reload();
              }}
            >
              {' '}
              Delete{' '}
            </Button>
          </div>
        ) : null}
        <div className="w-50">
          <h2 className="py-3"> Comments </h2>
          {charities.comments
            ? charities.comments
                .filter((com) => com.charity_id == id)
                .map((com, index) => (
                  <Card key={index.toString()} className="w-100 comment-card">
                    <Card.Header className="fw-light">
                      Name: {com.username}
                    </Card.Header>
                    <Card.Body>
                      <Card.Text className="fw-light">
                        ({index + 1}) {com.description}
                      </Card.Text>

                      {com.user_id == current_user.id ? (
                        <>
                          <Button
                            variant="outline-danger"
                            onClick={() => {
                              removeComment(com.id);
                              comments.splice(index, 1);
                              window.location.reload();
                            }}
                            className="mx-2"
                          >
                            {' '}
                            Delete{' '}
                          </Button>
                          <Button
                            variant="outline-info"
                            onClick={() => {
                              setShowModal((e) => !e);
                              editDescription.current = com.description;
                              setComentId(com.id);
                            }}
                          >
                            {' '}
                            Edit{' '}
                          </Button>
                        </>
                      ) : null}
                    </Card.Body>
                  </Card>
                ))
            : null}
        </div>
        <Form className="w-50" onSubmit={handleComment}>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Comment</Form.Label>
            <Form.Control
              ref={description}
              className="w-100"
              as="textarea"
              rows={3}
            />
          </Form.Group>
          <Button type="submit"> Comment </Button>
        </Form>
      </div>
    </div>
  ) : (
    <p> Loading... </p>
  );
};

const mapDispatchToProps = {
  getCharities: () => getAllCharities(),
  deleteChrity: (id) => deleteCharity(id),
  createComment: (data) => addComment(data),
  removeComment: (id) => deleteComment(id),
  getComments: () => getAllComments(),
  editComment: (data) => updateComment(data),
  getAllCategories: () => getCategories(),
  editCharity: (data, id) => updateCharity(data, id),
};

const mapStateToProps = (state) => ({
  charities: state.charity,
  categories: state,
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowPage);
