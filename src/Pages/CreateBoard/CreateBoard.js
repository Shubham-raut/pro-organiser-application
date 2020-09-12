import React, { useState, useContext } from "react";
import styles from "./CreateBoard.module.css";
import { addBoard } from "../../Functions/Functions";
import Loader from "../Modals/Loader/Loader";
import { useHistory } from "react-router-dom";
import { AuthContext } from '../../Context/Authentication';

const CreateBoard = (props) => {
    let { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [members, setMembers] = useState("");
    const [type, setType] = useState("");
    const history = useHistory();

    //Funtion to add Board details to Database
    const saveBoard = (e) => {
        e.preventDefault();
        if (user) {
            const team = members.split(",").map((x) => x.trim());
            const boardDetails = {
                user: user.email,
                boardName: name,
                teamMembers: team,
                boardType: type,
            }


            //Functon defined separately in Functions.js
            addBoard(boardDetails)
                .then((created) => {
                    if (created) {
                        setLoading(true);
                        props.history.push("/");
                    } else {
                        alert("Could not add Board");
                    }
                })
                .catch((err) => {
                    alert("Could not add Board. Some error occured.");
                });
        }
        else {
            alert('Please login first to access all fearures');
            history.replace('/');
        }
    };

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                    <div className={styles.ctr}>
                        <p>Create a Board</p>
                        <form onSubmit={saveBoard}>
                            <label htmlFor="name">Enter a name for your Board</label>
                            <input
                                required
                                className={styles.fields}
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                                placeholder="eg.Agile Sprint Board"
                            ></input>
                            <label htmlFor="team">Add your team members</label>
                            <input
                                required
                                className={styles.fields}
                                type="text"
                                id="team"
                                onChange={(e) => {
                                    setMembers(e.target.value);
                                }}
                                placeholder="Add your Team (separated by commas)"
                            ></input>
                            <label htmlFor="type">Enter the type of your Board</label>
                            <input
                                required
                                className={styles.fields}
                                type="text"
                                id="type"
                                onChange={(e) => {
                                    setType(e.target.value);
                                }}
                                placeholder="eg.Design UX"
                            ></input>
                            <button
                                type="submit"
                                className={styles.CreateBoard}
                                id="CreateBoard"
                            >
                                Create
            </button>
                        </form>
                    </div>
                )}
        </>
    );
}

export default CreateBoard;