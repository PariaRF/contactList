import React from "react";
import AddUser from "../add-user";
import ContactItem from "../contact-item";
import Filter from "../filter";
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

const sampleContactData = {
  name: "Ali",
  familyName: "Malek",
  phoneNumber: "+98912123456",
  ID: 12,
};

class ContactList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactsList: [],
      showInput: false,
      inputValue: "",
      boxAdd: false,
    };
    this.showApi = this.showApi.bind(this);
  }

  

  showApi() {
    fetchFromMockApiEndPoint().then((mockApiData) => {
      this.setState({
        contactsList: [...mockApiData]
      }, () => console.log("in show" + this.state.contactsList))
    })
  }

  filter = (event) => {
    this.setState({
      boxAdd: false,
      showInput: true
    })
  }

  shoBox = () => {
    this.setState({
      showInput: false,
      boxAdd: true
    })
  }

  componentDidMount() {
    // TODO:  start api fetch here
    // fetchFromMockApiEndPoint().then((mockApiData) => {
    //     this.setState({
    //       contactsList: mockApiData
    //     }, () => console.log(this.state.contactList))
    //   })
  }
  render() {
    return (
      <div className={styles.listWrapper}>
        {/* TODO:  edit here  and make it dynamic with API Call and mock data that provided in top of this file - use map for arrays in here and make it render at another function*/}

        <div className={styles.buttonGroup}>
          <button onClick={this.showApi} className={styles.show}>Show Contact</button>
          <button onClick={(event) => this.filter(event)} className={styles.filter}>Search</button>
          <button onClick={this.shoBox} className={styles.addUser}>Add User</button>
          <hr />
          {this.state.showInput === true && this.state.boxAdd === false ? <Filter contact={mockApiData}/> : ""}
          {this.state.showInput === false && this.state.boxAdd === true ? <AddUser onChange={this.handleChange} /> : ""}
        </div>

        {
          this.state.contactsList.map((item) => {
            return (
              <ContactItem key={item.ID} contactData={item} />
            )
          })
        }
      </div>
    );
  }
}

export default ContactList;
