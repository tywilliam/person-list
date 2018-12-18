import React   from 'react';

// import logo from './logo.svg';
import './App.css';
const App = () => (<PersonList/>)

const PersonList = () => {

  const people = [
    {
      img: 22, job: 'developer' , name: 'john'
    },
    {
      img: 19, job: 'UX/UI Designer', name: 'Rick'
    },
    {
      img: 35, job: "Photographer", name: 'Peter'
    }
  ];
  return (
    <section>
      <Person person={people[0]} />
      <Person person={people[1]} />
      <Person person={people[2]} />
    </section>
  );
};
const Person = () => {
  const { img, name, job, children } = props.person;
  const { children } = props;
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return <div className="person">
    <img src={url} alt=" "/>
    <div>
      <h4>{name}</h4>
      <h4>{job}</h4>
    </div>
  </div>
}
export default App;
