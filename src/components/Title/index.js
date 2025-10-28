import React, { useState } from "react";
import { Text, View } from "react-native";
import styles from './styles';

const Title = () => {
    const [stateText, setStateText] = useState('');
    console.log('UPDATE');
        
    const onTextPress = () => {
        setStateText('Updated State')
    }

    return (
        <View>
            <Text onPress={onTextPress} style={styles.title}>{stateText}</Text>
        </View>
    );
};

export default React.memo(Title);