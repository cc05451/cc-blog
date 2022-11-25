import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import styles from './index.less';
import React from 'react';

class HomePage extends React.Component{
  render(){
    return (
      <PageContainer ghost>
        <div className={styles.container}>
          <Guide name={trim(name)} />
          <p>123123123</p>
        </div>
      </PageContainer>
    );
  }
}
export default HomePage;
