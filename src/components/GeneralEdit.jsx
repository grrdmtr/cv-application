import PropTypes from 'prop-types';

function GeneralEdit({handleEdit, person, handleItemChange}) {

  return (
    <>
      <div className="card">
        <h2>General Information</h2>
        <ul>
          {person.map((item, index) => (
            index >= 0 && index < 3 ? 
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

export default GeneralEdit

GeneralEdit.propTypes = {
  handleEdit: PropTypes.func.isRequired,
  person: PropTypes.array.isRequired,
  handleItemChange: PropTypes.func.isRequired,
};