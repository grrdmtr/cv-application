import PropTypes from 'prop-types';

function ExperienceEdit({handleEdit, person, handleItemChange}) {

  return (
    <>
      <div className="card">
        <h2>Experience Information</h2>
        <ul>
          {person.map((item, index) => (
            index > 5 ? 
            <li key={item.id}>
              <input
                value={Object.values(item)[0]}
                onChange={e => {
                  handleItemChange(item.id, e)
                }}
              />
              <input
                value={Object.values(item)[1]}
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

export default ExperienceEdit

ExperienceEdit.propTypes = {
  handleEdit: PropTypes.func.isRequired,
  person: PropTypes.array.isRequired,
  handleItemChange: PropTypes.func.isRequired,
};