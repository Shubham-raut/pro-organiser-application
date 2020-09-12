import React, { useState, useEffect, useContext } from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/Authentication";
import { getBoards, sudoBoardData } from "../../Functions/Functions";
import Loader from "../Modals/Loader/Loader";


const Home = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [boardData, setBoardData] = useState([]);

  useEffect(() => {
    //Function is defined in Function
    if (user) {
      getBoards(user.email)
        .then((boardData) => {
          setBoardData(boardData);
          setLoading(false);
        })
        .catch(() => {
          setBoardData([]);
        })
    }
    else {
      setBoardData(sudoBoardData);
      setLoading(false);
    }
  }, [user]);

  return (
    <>
      {loading ?
        <Loader /> :
        <>
          {
            user ?
              < p className={styles.para}>Boards</p> :
              <p className={styles.para}>Boards</p>
          }
          {boardData.length === 0 && (
            <p className={styles.emptyMsg}>You haven't created any boards. Kindly click on the 'Create Board' button in the navigation bar to create a board.</p>
          )}

          <div className={styles.ctrBoard}>
            {boardData.map((x) => (
              <Link
                className={styles.btnBoard}
                to={{
                  pathname: `/board/${x.id}`,
                  state: {
                    id: x.id,
                    boardName: x.boardName,
                    teamMembers: x.teamMembers,
                  },
                }}
                key={x.id}
              >
                {x.boardName}
              </Link>
            ))}
          </div>

          {
            user ?
              null :
              <p className={styles.para}>
                <Link style={{ color: 'blueviolet' }} to="/login">Login </Link>
                 to access all features
              </p>
          }

        </>
      }
    </>
  )
}

export default Home;