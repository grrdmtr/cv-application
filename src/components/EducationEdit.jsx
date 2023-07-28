import PropTypes from 'prop-types';

function EducationEdit({handleEdit, person, handleItemChange}) {

  return (
    <>
      <div className="card">
        <h2>Education Information</h2>
        <ul>
          {person.map((item, index) => (
            index > 2 && index < 6 ? 
            <li key={item.id}>
              <input
                value={Object.values(item)[0]}
                onChange={e => {
                  handleItemChange(item.id, e)
                }}
              />
            </li> : null
          ))}
        </ul>
        <button onClick={handleEdit}>Submit</button>
      </div>
    </>
  )
}

export default EducationEdit

EducationEdit.propTypes = {
  handleEdit: PropTypes.func.isRequired,
  person: PropTypes.array.isRequired,
  handleItemChange: PropTypes.func.isRequired,
};