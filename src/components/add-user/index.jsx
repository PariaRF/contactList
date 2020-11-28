import React,{Component} from "react";
import styles from "./style.module.scss";
import external from "../filter/style.module.scss";

class AddUser extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
                <div className={styles.card}>
                    <lable className={styles.space}>Name:</lable>
                    <input name="inputName" onChange={this.props.onChange} type="text"  className={external.filterBox}/>
                    <br/>
                    <lable className={styles.space}>Family:</lable>
                    <input  name="inputFamilyName" type="text" className={external.filterBox} />
                    <br/>
                    <lable className={styles.spaceTwo}>Number:</lable>
                    <input  name="inputPhoneNumber" className={external.filterBox}/>
                    <br/>
                    <lable className={styles.spaceThree}>ID:</lable>
                    <input  name="inputID" className={external.filterBox}/>
                    <br/>
                    <button className={styles.btn}>save</button>
                </div>
            </>
        )
    }
}

export default AddUser;