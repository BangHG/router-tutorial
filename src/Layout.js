import React from 'react';
import { Outlet } from 'react-router-dom';


// ## 13.5.1 공통 레이아웃 컴포넌트
// 재사용하는 방법~~!

const Layout = () => {
  return (
    <div>
      <header style={{background:'lightgray',padding:16,fontSize:14}}>
        HEADER
      </header>
      <main>
        <Outlet/>
      </main>
    </div>
  );
};

export default Layout;