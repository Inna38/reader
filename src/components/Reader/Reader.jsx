import { Component } from 'react';

import { Controls } from './Controls/Controls';
import { Progress } from 'components/Progress/Progress';
import { Publication } from 'components/Publication/Publication';

const LOCAL_KEY = 'reader_item';

export class Reader extends Component {
  state = {
    index: 0,
  };

  componentDidUpdate(_, prevState) {
    if (prevState.index !== this.state.index) {
      localStorage.setItem(LOCAL_KEY, JSON.stringify(this.state.index));
    }
  }

  componentDidMount() {
    if (localStorage.getItem(LOCAL_KEY) !== null) {
      this.setState({
        index: JSON.parse(localStorage.getItem(LOCAL_KEY)),
      });
    }
  }

  changeIndex = value => {
    this.setState(prev => ({
      index: prev.index + value,
    }));
  };

  render() {
    const { index } = this.state;
    const totalItems = this.props.items.length;
    const currentItem = this.props.items[this.state.index];
    return (
      <div>
        <Controls
          onPrevClick={this.changeIndex}
          onNextClick={this.changeIndex}
          current={index + 1}
          totalItems={totalItems}
        />

        <Progress currentPage={index + 1} totalPage={totalItems} />

        <Publication item={currentItem} />
      </div>
    );
  }
}
