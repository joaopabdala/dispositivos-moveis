import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

export default function Login(){

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const login = () => console.log(username, password)

    return (
        <View> 

           <TextInput 
                style={styles.form} 
                placeholder="Username" 
                value={username} 
                onChangeText={setUsername} 
            />

            <TextInput 
                style={styles.form} 
                placeholder="Password" 
                secureTextEntry 
                value={password} 
                onChangeText={setPassword} 
            />
            
            <Button title="Login" onPress={login}/>
        </View>
    )

}
const styles = StyleSheet.create({
    form: {
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        width: 300,
        marginBottom: 15,
    },
    container: {
        padding: 10,
    }
});