import React from 'react';
import { View, ImageBackground, StyleSheet, Image } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/image 1.png')}
        style={styles.backgroundImage}
      >
        {/* Image in the top-left corner */}
        <Image
          source={require('../assets/HACKSUN 1.png')}
          style={styles.topLeftImage}
        />

        <Image
          source={require('../assets/HCKCLOUD 1.png')}
          style={styles.topRightImage}
        />
        <Image
          source={require('../assets/HCKTREE 1.png')}
          style={styles.aboveBottomImage}
        />
        <Image
          source={require('../assets/HCKSHACK 1.png')}
          style={styles.rightOfAboveBottomImage}
        />
        <Image
          source={require('../assets/image 6.png')}
          style={styles.aboveLeftOfTopLeftImage}
        />
        <Image
          source={require('../assets/image 6.png')}
          style={styles.treeBird}
        />
        <Image
          source={require('../assets/HCKTGRASS1 1.png')}
          style={styles.bottomImage}
        />
        {/* Your other components or content */}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    position: 'relative',
  },
  topLeftImage: {

    position: 'absolute',
    top: 0, // Shifted up by reducing the top value
    left: 0, // Shifted left by reducing the left value
  },
  topRightImage: {

    position: 'absolute',
    top: 0,
    right: 0, // Adjust the right position as needed
  },
  aboveBottomImage: {
    position: 'absolute',
    bottom: 30, // Adjust the bottom position as needed for the overlap
    alignSelf: 'center', // Center the image horizontally
  },
  rightOfAboveBottomImage: {
    position: 'absolute',
    bottom: 75, // Adjust the bottom position as needed
    right: 7, // Adjust the right position as needed
  },
  treeBird: {
    position: 'absolute',
    top: 300,
    right: 50,
  },
  aboveLeftOfTopLeftImage: {
    width: 50,
    height: 50,
    position: 'absolute',
    top: 200,
    left: 100,
  },
  bottomImage: {

    position: 'absolute',
    bottom: 0, // Adjust the bottom position as needed
    alignSelf: 'center', // Center the image horizontally
  },
});

export default Home;