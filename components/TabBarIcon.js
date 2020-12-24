import React from "react";
import { FontAwesome } from "@expo/vector-icons";

import Colors from "../constants/Colors";

export default function TabBarIcon(props) {
	return (
		<FontAwesome
			name={props.name}
			size={props.size || 26}
			color={props.focused ? Colors.tabIconSelected : props.button ? Colors.iconButton : props.color ? props.color : Colors.tabIconDefault}
		/>
	);
}
