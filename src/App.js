import React from 'react';
import Split from './composition/Split'
import Tooltip from './composition/Tooltip'
import Messages from './Messages'
import Tabs from './state/Tabs'
import './App.css';

const firstTooltip = (
  <Tooltip color="hotpink" message="tooltip message">
    ipsum
  </Tooltip>
)
const secondTooltip = (
  <Tooltip color="#126BCC" message="another tooltip message">
    officiis
  </Tooltip>
)

const tabsProp = [
  {
    name: 'First tab',
    content: 'First content'
  },
  {
    name: 'Second Tab',
    content: 'Second content'
  },
  {
    name: 'Third Tab',
    content: 'Third content'
  }
]

function App() {
  return (
    <main>

      <div>
        <Tabs tabs={tabsProp}/>
      </div>

      <div className="App">
        <h1>YOUR APPLICATION NAME!</h1>
        <Messages name="Messages" unread={0} />
        <Messages name="Notifications" unread={10} />
        <div>Hello!</div>
      </div>

      <Split className="left" flexBasis={2}>
      This is the content for the left `Split`. Lorem {firstTooltip} dolor sit amet consectetur, 
      adipisicing elit.
       Incidunt ex velit suscipit facere officia?
       <Tooltip message="one more tooltip message">
         Nessesitatibus?
       </Tooltip>
      </Split>

      <Split className="right">
      This is the content for the right `Split`. 
      Inventore aliquid {secondTooltip} suscipit repellat. 
      Quaerat quis officiis quam fuga. Aliquid quo possimus id soluta aspernatur.
      </Split>
      
    </main>
  );
}

export default App;