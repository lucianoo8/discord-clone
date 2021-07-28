import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  login,
  logout,
  selectUser,
} from './userSlice';
import styles from './user.css';

export function User() {
  const count = useSelector(selectUser);
  const dispatch = useDispatch();
  //const [l, setIncrementAmount] = useState('2');

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(login())}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(logout())}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"

          onChange={e => login(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() =>
            dispatch(login(Number(login) || 0))
          }
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(login( ))}
        >
          Add Async
        </button>
      </div>
    </div>
  );
}
