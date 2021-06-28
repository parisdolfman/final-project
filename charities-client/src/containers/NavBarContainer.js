import NavBar from '../components/NavBar';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return state;
};
const mapDispatchToProps = {};
const NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBar);

export default NavBarContainer;