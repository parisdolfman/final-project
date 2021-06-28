import HomePage from '../components/HomePage';
import { connect } from 'react-redux';
import {
  getAllCharities,
  getCategories,
  getAllComments,
  createCharty,
  chanegFilter,
} from '../actions/charityActions';

const mapStateToProps = (state) => ({ state });

const mapDispatchToProps = {
  getCharities: () => getAllCharities(),
  getCategories: () => getCategories(),
  getComments: () => getAllComments(),
  addCharity: (data) => createCharty(data),
  updateFilter: (data) => chanegFilter(data),
};

const HomePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);

export default HomePageContainer;