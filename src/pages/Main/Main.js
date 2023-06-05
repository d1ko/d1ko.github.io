import {Layout} from "antd";
import { HeaderPage } from '../../components';
import { Route } from 'react-router-dom';

export const Main = () => {
  return (
    <Layout>
      <HeaderPage />
      <Layout.Content>
      </Layout.Content>
    </Layout>
  );
}