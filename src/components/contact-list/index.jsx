import React from "react";
import ContactItem from "../contact-item";
import styles from "./style.module.scss";

const mockApiData = [
  {
    name: "Mahsa",
    familyName: "Pahlevani",
    phoneNumber: "+98912123456",
    ID: 0,
  },
  {
    name: "Ali",
    familyName: "Malek",
    phoneNumber: "+98912123456",
    ID: 1,
  },
  {
    name: "Sara",
    familyName: "Eyvani",
    phoneNumber: "+98912123456",
    ID: 2,
  },
];

const fetchFromMockApiEndPoint = (shouldShowError = false) =>
  new Promise((resolvePromise, rejectPromise) =>
    setTimeout(() => {
      return !shouldShowError
        ? resolvePromise(mockApiData)
        : rejectPromise(new Error("Mock API failed"));
    }, 1500)
  );

class ContactList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactsList: [],
    };
  }

  componentDidMount() {
    // TODO:  start api fetch here
    fetchFromMockApiEndPoint()
      .then(data => {
        this.setState({ contactsList: data })
      })
  }

  addNew = () =>{
    let name = prompt("Enter Name:");
    let familyName = prompt("Enter Family");
    let phoneNumber = prompt("Enter PhoneNumber:");
    let ID = Math.floor(Math.random()*100 +4);

    let item = {name,familyName,phoneNumber,ID};

    let items = this.state.contactsList.concat([item]);
 
    this.setState({
      contactsList: items
    }, () => console.log(this.state.contactsList) )
  }
  render() {
    const { contactsList } = this.state;
    return (
      <div className={styles.listWrapper}>
        {/* TODO:  edit here  and make it dynamic with API Call and mock data that provided in top of this file - use map for arrays in here and make it render at another function*/}
        <button onClick={this.addNew}>Add Contact</button>
        {
          contactsList.map((item) => <ContactItem key={item.ID} contactData={item} />)
        }
      </div>
    );
  }
}

export default ContactList;
