import { getCurrentUser } from './index';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';



const SecureRoute = (props) => {
  const { component: Component, current_user, ...rest } = props;
  const user = getCurrentUser();

  return (
    <Route
      {...rest}
      render={(props) =>
        user  ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

const mapStateToProps = (state) => ({
  current_user: state.user,
});

export default connect(mapStateToProps)(SecureRoute);
asds
