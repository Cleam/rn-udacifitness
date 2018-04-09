import React, { Component } from 'react';
import { View } from 'react-native';
import UdaciSlider from './UdaciSlider';
import UdaciSteppers from './UdaciSteppers';
import DateHeader from './DateHeader';
import { getMetricMetaInfo } from '../utils/helpers';

export default class AddEntry extends Component {
  state = {
    run: 0,
    bike: 0,
    swim: 0,
    sleep: 0,
    eat: 0
  };

  increment = metric => {
    const { max, step } = getMetricMetaInfo(metric);

    this.setState(state => {
      const count = state[metric] + step;
      return {
        ...state,
        [metric]: Math.min(max, count)
      };
    });
  };

  decrement = metric => {
    this.setState(state => {
      const count = state[metric] - getMetricMetaInfo(metric).step;
      return {
        ...state,
        [metric]: Math.max(count, 0)
      };
    });
  };

  slide = (metric, value) => {
    this.setState(() => ({
      [metric]: value
    }));
  };

  render() {
    const metaInfo = getMetricMetaInfo();
    return (
      <View>
        {/* {getMetricMetaInfo('bike').getIcon()} */}
        <DateHeader date={new Date().toLocaleDateString()} />
        {Object.keys(metaInfo).map(key => {
          const { getIcon, type, ...rest } = metaInfo[key];
          const value = this.state[key];
          return (
            <View key={key}>
              {getIcon()}
              {type === 'slider' ? (
                <UdaciSlider
                  value={value}
                  onChange={value => this.slide(key, value)}
                  {...rest}
                />
              ) : (
                <UdaciSteppers
                  value={value}
                  onIncrement={() => this.increment(key)}
                  onDecrement={() => this.decrement(key)}
                  {...rest}
                />
              )}
            </View>
          );
        })}
      </View>
    );
  }
}
