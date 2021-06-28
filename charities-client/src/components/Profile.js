import { getCurrentUser } from '../helpers';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getAllCharities, getAllComments } from '../actions/charityActions';
import CharityCard from './CharityCard';
import { Card } from 'react-bootstrap';
import {getCategories} from '../actions/charityActions'

const Profile = ({ getCharities, charities, getAllCategories, getComments }) => {
  const [profile, setProfile] = useState();

  
  const [userCharities, setuserCharities] = useState();

  useState(() => {
    getAllCategories()
    const data = getCurrentUser();
    getCharities();
    getComments();
    setProfile(data);

  }, [profile]);



  return profile ? (
    <div>
      <h3 className="text-center"> Welcome {profile.name}! </h3>

      <h5 className="text-center"> Your Charities </h5>
      <div className="d-flex justify-content-center flex-wrap items-center h-100 w-100">
        {charities.charities ? (
          charities.charities
            .filter((ele) => ele.user_id == profile.id)
            .map((charity) => (
              <CharityCard key={charity.id} charity={charity} />
            ))
        ) : (
          <h3> Loading... </h3>
        )}
      </div>
      <h5 className="text-center"> Your Comments </h5>
      <div className="w-50 mx-auto">
        <div className="d-flex justify-content-center flex-column items-center h-100 w-100">
          {charities.comments ? (
            charities.comments
              .filter((ele) => ele.user_id == profile.id)
              .map((com, index) => (
                <Card
                  key={index.toString()}
                  className="w-100 prof-comment-card mb-3"
                >
                  <Card.Header className="fw-light">
                    User: {com.username}
                  </Card.Header>
                  <Card.Body>
                    <Card.Text className="fw-light">
                      ({index + 1}) {com.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))
          ) : (
            <h3> Loading </h3>
          )}
        </div>
      </div>
    </div>
  ) : (
    <p>Loading ... </p>
  );
};

const mapStateToProps = (state) => ({ charities: state.charity });

const mapDispatchToProps = {
  getCharities: () => getAllCharities(),
  getComments: () => getAllComments(),
  getAllCategories: () => getCategories()
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
