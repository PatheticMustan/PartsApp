import React from "react";
import {View, Text, StyleSheet, Image, ProgressBarAndroidComponent} from "react-native";
import TabBarIcon from "./TabBarIcon.js";
import Touchable from "react-native-platform-touchable";

export default function ListItem(props) {
	const styles = StyleSheet.create({
		itemContainer: {
			paddingLeft: 20
		},
		itemInfoContainer: {
			borderTopWidth: StyleSheet.hairlineWidth,
			borderTopColor: "#ccc",
			paddingVertical: 20,
			paddingLeft: 10,
			flexDirection: "row",
			alignItems: "center"
		},
		nameContainer: {
			flex: 1,
			paddingLeft: 10
		},
		name: {
			fontSize: 18,
		},
		iconContainer: {
			position: "absolute",
			right: 20
		},

		image: {
			flex: 1,
			width: 70,
			height: 70,
			resizeMode: "contain"
		}
	});

	return (
		<Touchable
			background={Touchable.Ripple("#ccc", false)}
			onPress = {() => props.nav.navigate("Item", {item: props.item, type: props.type})}
		>
			<View style = {styles.itemContainer}>
				<View style = {styles.itemInfoContainer}>

					<View>
						<Image
							style={styles.image}
							source={props.item.fileName[0]} />
					</View>

					<View style = {styles.nameContainer}>
						<Text style = {styles.name}>{props.item.name}</Text>
					</View>
            
					<View style = {styles.iconContainer}>
						<TabBarIcon name = {"angle-right"} />
					</View>

				</View>
			</View>
		</Touchable>
	);
}