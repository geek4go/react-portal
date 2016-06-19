import React, { Component } from 'react'
import Todos from '../todo/todos'
import { dispatch } from '../../helpers/dispatcher'
import { dashboardRemoveWidget } from '../../actions/dashboard_actions'
import { tabbarShow } from '../../actions/tabbar_actions'
import { pageGetAll } from '../../actions/page_actions'
import Widget from '../dashboard/widget'
import TodoModel from '../../models/todo_model'
import TodoStore from '../../stores/todo_store'

class TodosWidget extends Component {

  componentWillMount() {
    this.store = TodoStore.create();
  }

  componentWillUnmount() {
    TodoStore.remove(this.store)
    this.store = null;
  }

  render() {
    var component = <Todos store={this.store} isRemoveStore={ true } />
    return (
      <Widget title="My Todos" 
        onOpenWidgetInTab={() => dispatch(tabbarShow(component,'todo',"Todo", 'page'))}
        onRemoveWidget={ () => dispatch(dashboardRemoveWidget(this.props.dashboardId, this.props.id))}
        onRefreshWidget= {() => dispatch(pageGetAll("todo"))} >
        <Todos store={this.store} isRemoveStore={ false } />
      </Widget>  
    )
  }
}
export default TodosWidget
