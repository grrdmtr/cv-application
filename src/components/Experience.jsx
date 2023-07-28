import PropTypes from 'prop-types';

function Experience({handleEdit, person}) {

  return (
    <>
      <div className="card">
        <h2>Experience Information</h2>
        <p>Company: {person[6].companyOne} - {person[6].position}</p>
        <p>Company: {person[7].companyTwo} - {person[7].position} </p>
        <p>Company: {person[8].companyThree} - {person[8].position}</p>
        <button onClick={handleEdit}>Edit</button>
        
      </div>
    </>
  )
}

export default Experience

Experience.propTypes = {
  handleEdit: PropTypes.func.isRequired,
  person: PropTypes.array.isRequired,
};