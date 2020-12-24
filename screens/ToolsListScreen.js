import * as WebBrowser from "expo-web-browser";
import React from "react";
import {
	ScrollView,
	StyleSheet,
	Text,
	View,
	StatusBar
} from "react-native";

import ListItem from "../components/ListItem.js";

import data from "../data.js";

export default class ToolsListScreen extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<StatusBar hidden />
				<ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
					<View style={styles.titleTextContainer}>
						<Text style = {styles.title}>Tools</Text>
					</View>
						
					{data.tools.map(tool => <ListItem type = "Tools" item={tool} nav = {this.props.navigation}/>)}
				</ScrollView>
			</View>
		);
	}
}

ToolsListScreen.navigationOptions = {
	header: null,
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	contentContainer: {
		paddingTop: 30,
	},
	titleTextContainer: {
		paddingLeft: 20,
		paddingBottom: 10,
		flexDirection: "row",
	},
	title: {
		fontWeight: "bold",
		fontSize: 30
	}
});
