import PropTypes from "prop-types";
const Profile = (props) => {
  const styleOO = {
    color: "black",
    textAlign: "center",
    margin: "50px",
  };
  props.handleName(props.name);
  return (
    <>
      <div style={styleOO}>
        {props.name}
        <div>{props.age}</div>
        <div>{props.profession}</div>
        <div style={styleOO}>
          <img src={props.children} />
        </div>
      </div>
    </>
  );
};
Profile.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  profession: PropTypes.string,
};
Profile.defaultProps = {
  name: "Rahul",
  profession: "teacher",
  age: 45,
  children: "/710804.jpg",
};
export default Profile;
