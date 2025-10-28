import React, { useEffect, useState } from "react";
import { View } from "react-native";

import Title from '../../components/Title';
import TitleClass from '../../components/Title/classComponent';
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
    const [title, setTitle] = useState('My First Component!!');

    useEffect(() => {
        setTimeout(() => {
            setTitle('Updated prop text using timeout function.');
        }, 3000);
    }, []);

    console.log('title:>>', title);

    return (
        <SafeAreaView>
            <View>
                <Title />

                <TitleClass text="Class Component" />
            </View>
        </SafeAreaView>
    );
};

export default React.memo(Home);