import * as WebBrowser from "expo-web-browser";
import React from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	ScrollView,
	Linking,
	TouchableOpacity,
	StatusBar,
	SafeAreaView
} from "react-native";

import TabBarIcon from "../components/TabBarIcon.js";
import IconButton from "../components/IconButton.js";

export default class ItemScreen extends React.Component {
	render() {
		const item = this.props.navigation.getParam("item", {});
		const type = this.props.navigation.getParam("type", "Parts");
		let currentImage = 0;

		return (
			<View style = {styles.container}>
				<SafeAreaView style = {{flex: 1, backgroundColor: "#ddd"}}>
					<StatusBar hidden />
					<View style = {styles.headerContainer}>

						<View style = {{flex: 1, alignSelf: "center"}}>
							<TouchableOpacity onPress = {() => this.props.navigation.goBack()}>
								<View style = {styles.backContainer}>
									<TabBarIcon color = {"#29adff"} name = {"angle-left"} />
									<Text style = {styles.backText}> BACK</Text>
								</View>
							</TouchableOpacity>
						</View>

						<View style = {{flex: 1, alignSelf: "center"}}>
							<Text style = {styles.header}>{item.name}</Text>
						</View>

						<View style = {{flex: 1, alignItems: "flex-end", alignSelf: "center"}} />

					</View>

					<ScrollView style = {styles.container}>
						<View style = {styles.imageContainer}>
							<Image
								style = {styles.image}
								source = {item.fileName[currentImage]}
							/>
						</View>

						<View style={styles.iconsContainer}>
							<IconButton
								name = {type}
								iconName = {type == "Parts" ? "cog" : "wrench"}
							/>
                            
							<IconButton name={item.found} iconName = 'map-marker'/>
                            
							{item.vendor ? <IconButton onPress = {() => Linking.openURL(item.link)} name={item.vendor} iconName = 'shopping-cart'/> : <View></View>}
                            
						</View>

						<View style={styles.descriptionContainer}>
							<Text style={styles.description}>{item.description}</Text>
						</View>
					</ScrollView>
				</SafeAreaView>
			</View>
		);
	}
}

ItemScreen.navigationOptions = {
	header: null,
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff"
	},
	headerContainer: {
		flexDirection: "row",
		backgroundColor: "#ddd",
		paddingVertical: 15,
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderBottomColor: "#bbb",
	},
	header: {
		fontSize: 20,
		textAlign: "center",
		alignSelf: "center"
	},
	imageContainer: {
		paddingHorizontal: 20,
		paddingVertical: 10,
		flexDirection: "row",
		alignItems: "center"
	},
	image: {
		flex: 1,
		width: 300,
		height: 300,
		resizeMode: "contain",
	},
	iconsContainer: {
		flexDirection: "row",
		flexWrap: "wrap",
		alignItems: "stretch",
	},
	backContainer: {
		paddingLeft: 20,
		flexDirection: "row"
	},
	backText: {
		color: "#29adff",
		paddingLeft: 2,
		fontSize: 15,
		alignSelf: "center"
	},
	descriptionContainer: {
		padding: 40,
		flexDirection: "row",
		flexWrap: "wrap",
		alignItems: "center"
	},
	description: {
		flex: 1,
		textAlign: "center",
		fontSize: 15
	}
});
