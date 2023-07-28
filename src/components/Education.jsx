import PropTypes from 'prop-types';

function Education({handleEdit, person}) {

  return (
    <>
      <div className="card">
        <h2>Education Information</h2>
        <p>Name: {person[3].schoolName} </p>
        <p>Email: {person[4].titleOfStudy} </p>
        <p>Phone number: {person[5].dateOfStudy} </p>
        <button onClick={handleEdit}>Edit</button>
        
      </div>
    </>
  )
}

export default Education

Education.propTypes = {
  handleEdit: PropTypes.func.isRequired,
  person: PropTypes.array.isRequired,
};