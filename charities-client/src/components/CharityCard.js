import { Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const CharityCard = ({ charity }) => {
  const history = useHistory();
  return (
    <Card className="m-1 card" style={{ width: '18rem' }}>
      <Card.Img className="card-img" variant="top" src={charity.image} />
      <Card.Body className="card-body">
        <Card.Title>{charity.name}</Card.Title>
        <Button
          onClick={() => history.push(`/charities/${charity.id}`)}
          variant="primary"
        >
          View Details
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CharityCard;
  