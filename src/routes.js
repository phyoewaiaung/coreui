import React from 'react';

const SubMenu = React.lazy(() => import('./views/menus/sub-menu/SubMenu'));
const TestCode = React.lazy(() => import('./views/menus/TestCode/TestCode'));
const TestCode1 = React.lazy(() => import('./views/menus/TestCode1/TestCode1'));
const Calculate = React.lazy(() => import('./views/menus/Calculate/Calculate'));
const FormTable = React.lazy(() => import('./views/menus/FormTable/FormTable'));
const StudentTableForm = React.lazy(() => import('./views/menus/StudentTableForm/StudentTableForm'));
const Edit = React.lazy(() => import('./views/menus/Edit/Edit'));






const routes = [
  { path: '/', exact: true, name: 'Home' },
  // { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/menus/sub-menu', name: 'Sub Menu', component: SubMenu },
  { path: '/menus/TestCode', name: 'TestCode', component: TestCode },
  { path: '/menus/TestCode1', name: 'TestCode1', component: TestCode1 },
  { path: '/menus/Calculate', name: 'Calculate', component: Calculate },
  { path: '/menus/FormTable', name: 'FormTable', component: FormTable },
  { path: '/menus/StudentTableForm', name: 'StudentTableForm', component: StudentTableForm },
  { path: '/menus/Edit', name: 'Edit', component: Edit },





];

export default routes;
