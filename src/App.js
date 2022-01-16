import React, {Component} from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';


class App extends Component
{
    state = {
        contacts: [
          {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
          {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
          {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
          {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
        ],
        filter: '',        
      }

      searchName = (searchName) =>{
        return this.state.contacts.map((contact)=>contact.name.toLowerCase()).includes(searchName.toLowerCase());
      }      

      addContact = data =>
      {        
        const id = uuidv4();
        const inputName = data.name;         
        if(this.searchName(inputName)){return alert(`${inputName} is already in contacts`)}     
        return this.setState((prevState)=>({contacts:[{id, name: data.name, number: data.number}, ...prevState.contacts]}))
      };

      changeFilter = e =>{        
        this.setState({filter : e.currentTarget.value});
      };

      delContact = (id) =>
      {
        this.setState(prevState=>({
          contacts: prevState.contacts.filter(contact=>contact.id!==id),
        }))
      }    

    render(){     
      const {filter}  = this.state;          
      const normalizedFilter = this.state.filter.toLowerCase();
      const visibleContacts = this.state.contacts.filter(contact=>contact.name.toLowerCase().includes(normalizedFilter))     
    
  return(
  <>
  <div className='container'>
  <h1>Phonebook</h1>
  <ContactForm 
  onSubmit={this.addContact} />

  <h2>Contacts</h2>
  <Filter 
  value = {filter}
  onChange= {this.changeFilter} />

  <ContactList 
  contacts={visibleContacts}
  onDelContact = {this.delContact}
   />
</div> 
</>
)
}}

export default App;