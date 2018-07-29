import React, { Component } from 'react';
import {
  Page, Navbar, NavTitle, NavRight, Link, List, ListItem, Toggle
} from 'framework7-react';

export default class HomePage extends Component {
  state = {
    tasks: [{
      name: 'Hello'
    }, {
      name: 'Toptal'
    }, {
      name: 'Blog'
    }]
  };

  addTask = () => {
    this.$f7.dialog.prompt('Task Name:', 'Add Task', (name) => {
      this.setState({
        tasks: [
          ...this.state.tasks,
          { name }
        ]
      });
    });
  };

  render = () => (
    <Page>
      <Navbar>
        <NavTitle>To Do List</NavTitle>
        <NavRight>
          <Link iconOnly iconF7="add_round_fill" onClick={this.addTask}/>
        </NavRight>
      </Navbar>

      <List simple-list>
        {this.state.tasks.map((task, i) => (
          <ListItem title={task.name} key={i}>
            <Toggle slot="after"/>
          </ListItem>
        ))}
      </List>
    </Page>
  );
}
