import styles from "./styles.module.css";
import {Menu} from "antd";
import { Header } from 'antd/es/layout/layout';


export const HeaderPage = () => {
    return (
        <Header className={styles.header} >
            <div className="demo-logo" />

            <ul>
                <li> <a href=""> salam </a> </li>
                <li> <a href=""> registrate </a> </li>
            </ul>
      </Header>
    );
};