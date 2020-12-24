import * as WebBrowser from "expo-web-browser";
import React from "react";
import {
	StyleSheet,
	Text,
	View,
	Linking,
	StatusBar,
	Alert,
	SafeAreaView
} from "react-native";

import IconButton from "../components/IconButton.js";

export default class MoreScreen extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<SafeAreaView style = {{flex: 1, backgroundColor: "#ddd"}}>
					<StatusBar hidden />
					<View style = {styles.headerContainer}>
						<Text style = {styles.header}>More</Text>
					</View>
					<View style = {styles.iconsContainer}>
						<IconButton onPress = {() => Alert.alert("Coming Soon!", "The Favorites System will be available soon. Thank you for your patience!")} name='Clear All Favorites' iconName='heart'/>

						<IconButton onPress={() => this.props.navigation.navigate("About")} name='About' iconName='info'/>

						<IconButton
							onPress={() => Linking.openURL("https://docs.google.com/forms/d/e/1FAIpQLSedjgj450wNlgRispv67jB2HhhxNYNmYA6O6xJy-kykOdnpng/viewform")}
							name='Suggest'
							iconName='pencil-square'
						/>
					</View>
				</SafeAreaView>
			</View>
		);
	}
}

MoreScreen.navigationOptions = {
	header: null,
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff"
	},
	headerContainer: {
		backgroundColor: "#ddd",
		paddingVertical: 15,
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderBottomColor: "#bbb",
	},
	header: {
		fontSize: 20,
		textAlign: "center"
	},
	iconsContainer: {
		flex: 1,
		flexDirection: "row",
		flexWrap: "wrap",
		alignItems: "stretch",
		backgroundColor: "#fff"
	}
});
