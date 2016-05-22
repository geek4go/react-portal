import React, { Component } from 'react';
import ReactGridLayout from 'react-grid-layout';
import Users from './users';
import Widget from './widget';

class Dashboard extends Component {
	render() {
		var layout = [
  	  	{i: 'a', x: 0, y: 0, w: 4, h: 21},
  	  	{i: 'b', x: 4, y: 0, w: 3, h: 3},
    		{i: 'c', x: 7, y: 0, w: 2, h: 2}
		];

		return (
			<ReactGridLayout className="layout" layout={layout} cols={12} rowHeight={20} width={1400}>
    		<div key={'a'} className="widget">
          <Widget title="Users Management">
            <Users />
          </Widget>
        </div>
    		<div key={'b'} className="widget">
          <Widget  title="My Notes">
            <div >- implement this </div>
          </Widget>
          </div>
    		<div key={'c'} className="widget">
          <Widget  title="My Todos">
            <div >- implement this </div>
          </Widget>
          </div>
  		</ReactGridLayout>
  	);
	}
}
export default Dashboard;