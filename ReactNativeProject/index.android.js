/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

class ReactNativeProject extends Component {
    render() {
        return (
            <View>
                <Greeting name='Jaina' time="time=---------"/>
                <Greeting name='aaaaaaaaaaaaaaaaaaaa'/>

                <Blink text='bbbbbbbbbbbbbbbbbbbb'> </Blink>
                <FlexDirectionBasics>

                </FlexDirectionBasics>
            </View>
        );
    }
}
class Greeting extends Component {
    render() {
        return (
            <View>
                <Text style={styles.bigBlue}>Hello {this.props.name}!</Text>
                <Text>props is null {this.props.time}!</Text>
            </View>
        );
    }
}
class FlexDirectionBasics extends Component {
    render() {
        return (
            // Try setting `flexDirection` to `column`.
            <View style={{flexDirection: 'column', justifyContent: 'center', alignItems:'center'}}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}/>
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}/>
            </View>
        );
    }
}

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showText: true,
            buy: 'time'
        };

        // 每1000毫秒对showText状态做一次取反操作
        setInterval(() => {
            this.setState({showText: !this.state.showText, buy: 'time3452624'});
        }, 1000);
    }

    render() {
        // 根据当前showText的值决定是否显示text内容
        let display = this.state.showText ? this.props.text : this.state.buy;
        return (
            <Text>{display}</Text>
        );
    }
}

const styles = StyleSheet.create({
    bigBlue: {
        textAlign: 'center',
        backgroundColor: 'blue',
        height: 50,
        fontSize: 24,
        fontWeight: 'bold',
        color: 'red'
    }
});

AppRegistry.registerComponent('ReactNativeProject', () => ReactNativeProject);
