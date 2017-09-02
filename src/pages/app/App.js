import React, { Component } from 'react';
import 'semantic/dist/semantic.min.css'
import 'assets/font-awesome-4.6.3/css/font-awesome.min.css'
import { Container, Header, Icon, List } from 'semantic-ui-react'
import glamorous from 'glamorous'

const Div = glamorous.div({
  height: '100vh',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
})

class App extends Component {
  render() {
    const items = [
      'create-react-app',
      'react-router v3',
      'react-router-redux',
      'react-redux',
      'redux',
      'redux-thunk',
      'hot-loading',
      'lodash',
      'semantic-ui',
      'semantic-ui-react',
      'font-awesome',
      'absolute import (./src)',
      'glamorous'
    ]
    return (
      <Container>
        <Div>
          <Header as="h2" icon>
            <Icon name='settings' />
              Welcome to react-project
          </Header>
          <List bulleted>
            {items.map((item,i) => (
              <List.Item>
                {item}
              </List.Item>
            ))}
          </List>
        </Div>
      </Container>
    );
  }
}

export default App;
