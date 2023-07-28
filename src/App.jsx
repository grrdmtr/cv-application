import { useState } from 'react'
import General from './components/General'
import GeneralEdit from './components/GeneralEdit'
import Education from './components/Education'
import EducationEdit from './components/EducationEdit'
import Experience from './components/Experience'
import ExperienceEdit from './components/ExperienceEdit'
import './App.css'

const initialPerson = [
  {name: 'Dima', id: 0},
  {email: 'dumitrugraur@gmail.com', id: 1},
  {phone: '0742180160', id: 2},
  {schoolName: 'Prometeu', id: 3},
  {titleOfStudy: 'High School', id: 4},
  {dateOfStudy: '2013', id:5},
  {companyOne: 'Google Corp.', position: 'intern', id: 6},
  {companyTwo: 'Apple Inc.', position: 'Software Developer', id: 7},
  {companyThree: 'Deloitte', position: 'CEO', id: 8}
]

function App() {
  const [generalEdit, setGeneralEditMode] = useState(false);
  const [educationEdit, setEducationEditMode] = useState(false);
  const [experienceEdit, setExperienceEditMode] = useState(false);
  const [person, setPerson] = useState(initialPerson)

  const handleGeneralState = () => {
    setGeneralEditMode(!generalEdit);
  }

  const handleEducationState = () => {
    setEducationEditMode(!educationEdit);
  }

  const handleExperienceState = () => {
    setExperienceEditMode(!experienceEdit);
  }

  function handleGeneralEdit(id, e) {
    setPerson(person.map(item => {
      if (item.id === id) {
        return {
          ...item,
          name: e.target.value,
          email: e.target.value,
          phone: e.target.value,
        };
      } else {
        return item;
      }
    }));
  }

  function handleEducationEdit(id, e) {
    setPerson(person.map(item => {
      if (item.id === id) {
        return {
          ...item,
          schoolName: e.target.value,
          titleOfStudy: e.target.value,
          dateOfStudy: e.target.value,
        };
      } else {
        return item;
      }
    }));
  }

  function handleExperienceEdit(id, e) {
    setPerson(person.map(item => {
      if (item.id === id) {
        return {
          ...item,
          companyOne: e.target.value,
          companyTwo: e.target.value,
          companyThree: e.target.value,
        };
      } else {
        return item;
      }
    }));
  }

  return (
    <>
      { !generalEdit ? <General
               handleEdit={handleGeneralState}
               person={person} /> :
               <GeneralEdit
               handleEdit={handleGeneralState}
               handleItemChange={handleGeneralEdit}
               person={person} /> }
      { !educationEdit ? <Education
               handleEdit={handleEducationState}
               person={person} /> :
               <EducationEdit
               handleEdit={handleEducationState}
               handleItemChange={handleEducationEdit}
               person={person} /> }
      { !experienceEdit ? <Experience
               handleEdit={handleExperienceState}
               person={person} /> :
               <ExperienceEdit
               handleEdit={handleExperienceState}
               handleItemChange={handleExperienceEdit}
               person={person} /> }

    </>
  )
}

export default App
