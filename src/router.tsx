import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom'

interface RouterProps {
  children: React.ReactNode;
}

const Router: React.FC<RouterProps> = ({ children }) => {
  return (
    <BrowserRouter>
      <Switch>
        { children }
      </Switch>
    </BrowserRouter>
  );
}

export default Router;