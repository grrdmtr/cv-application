import PropTypes from 'prop-types';

function General({handleEdit, person}) {

  return (
    <>
      <div className="card">
        <h2>General Information</h2>
        <p>Name: {person[0].name} </p>
        <p>Email: {person[1].email} </p>
        <p>Phone number: {person[2].phone} </p>
        <button onClick={handleEdit}>Edit</button>
        
      </div>
    </>
  )
}

export default General

General.propTypes = {
  handleEdit: PropTypes.func.isRequired,
  person: PropTypes.array.isRequired,
};