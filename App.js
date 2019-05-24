import React, { Component } from "react"
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity
} from "react-native"

class Player extends Component {
  constructor(props) {
    super(props)
    this.state = {
      life: parseInt(props.life, 10)
    }
  }
  render() {
    return (
      <View style={styles.master}>
        <View style={styles.player1}>
          <View style={styles.button}>
            <Button onPress={this.addLife} title="+" color="red" />
          </View>
          <View>
            <Text style={styles.life}>{this.state.life}</Text>
          </View>
          <View style={styles.button}>
            <Button onPress={this.removeLife} title="-" />
          </View>
        </View>
        <TouchableOpacity style={styles.resetButton} onPress={this.resetLife} />
        <Text style={styles.resetText}>X</Text>
      </View>
    )
  }

  //TODO: Move these all 3 under one function
  addLife = () => {
    this.setState({ life: this.state.life + 1 })
  }

  removeLife = () => {
    this.setState({ life: this.state.life - 1 })
  }

  resetLife = () => {
    this.setState({ life: "20" })
  }
}

export default class GameApp extends Component {
  render() {
    return <Player life="20" />
  }
}

const styles = StyleSheet.create({
  master: {
    padding: 45,
    backgroundColor: "skyblue",
    alignItems: "center",
    justifyContent: "center"
  },
  player1: {
    flexDirection: "row"
  },
  player2: {
    color: "green",
    fontWeight: "bold",
    fontSize: 60
  },
  button: {
    padding: 20
  },
  resetButton: {
    padding: 20
  },
  resetText: {
    fontSize: 30
  },
  life: {
    padding: 20,
    fontSize: 66,
    color: "green"
  }
})
