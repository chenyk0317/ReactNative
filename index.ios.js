'use strict';

import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

class TestRN extends React.Component {
    render() {

        return (
                <View style={styles.container}>
                <Text style={styles.highScoresTitle}>
                Hello World
                </Text>
                <Text style={styles.scores}>
                TestRN
                </Text>
                </View>
                );
    }
}

const styles = StyleSheet.create({
                                 container: {
                                 flex: 1,
                                 justifyContent: 'center',
                                 alignItems: 'center',
                                 backgroundColor: '#FFFFFF',
                                 },
                                 highScoresTitle: {
                                 fontSize: 20,
                                 textAlign: 'center',
                                 margin: 10,
                                 },
                                 scores: {
                                 textAlign: 'center',
                                 color: '#333333',
                                 marginBottom: 5,
                                 },
                                 });

// Module name
AppRegistry.registerComponent('TestRN', () => TestRN);
