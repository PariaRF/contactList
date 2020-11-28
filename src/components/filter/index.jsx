import React, { Component } from "react";
import ContactItem from "../contact-item";
import styles from "./style.module.scss";

class Filter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: "",
        }
    };

    updateSearch = (event) => {
        this.setState({
            search: event.target.value.substr(0, 20)
        })
    }

    render() {
        let filterContact = this.props.contact.filter(
            (contact) => {
                return contact.name.indexOf(this.state.search) === ! -1
            }
        )
        return (
            <>
                {filterContact.map((contact,index) => {
                    return <ContactItem  contact={contact} key={index} />
                })}
                <input placeholder="Enter Name" onChange={this.updateSearch} value={this.state.search} className={styles.filterBox} />
            </>
        )
    }
}

export default Filter;