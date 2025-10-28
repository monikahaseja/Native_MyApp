import { View } from "react-native";
import React from "react";
import Title from '../../components/Title';
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {

    return (
        <SafeAreaView>
            <View>
                <Title />
            </View>
        </SafeAreaView>
    );
};

export default React.memo(Home);