import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons"

export default function IconButton({ icon, size, color, onPress }) {
    return (
        <Pressable style={({ pressed }) => pressed && styles.pressed} onPress={onPress}>
            <View style={styles.buttonContainer}>
                <Ionicons name={icon} size={size} color={color} />
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        padding: 6, margin: 8,
        borderRadius: 24
    },
    pressed: {
        opacity: 0.75
    }
})
