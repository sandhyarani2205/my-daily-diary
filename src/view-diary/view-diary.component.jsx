// @ts-nocheck
import React from 'react';
import { Link } from 'react-router-dom';

class DiaryView extends React.Component {
    constructor() {
        super();
    }

    render(){
        return(
          <div>
              <Link to="/create">
              <button type="button">Add</button>
              </Link>
          </div>
        )
    }
}

export default DiaryView;