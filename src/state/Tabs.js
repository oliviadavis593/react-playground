import React from 'react';

class Tabs extends React.Component{

    static defaultProps = {
        tabs: []
    };
    state = {
        currentTabIndex: 0
    };

    handleButtonClick = () => {
       this.setState({currentTabIndex: index})
    }

    render() {
        const buttons = this.props.tabs.map((tab, index) => (
            <button key={index} onClick={() => this.handleButtonClick}>
                {tab.name}
            </button>
        ))
        const currentTab = this.props.tabs[this.state.currentTabIndex]
        return(
            <div>
                {buttons}
                {/* only show content when the tabs array has length */}
                {this.props.tabs.length && (
                    <div className='content'>
                        {currentTab.content}
                    </div>
                )}
            </div>
        )
    }
}

export default Tabs; 

