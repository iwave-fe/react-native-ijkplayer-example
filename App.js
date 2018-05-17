import React from 'react';
import {
    Image,
    StatusBar,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    Text,
    Slider,
    View,
    Animated,
    ActivityIndicatorIOS,
    ProgressBarAndroid,
    Platform,
} from 'react-native';
//import RCTIJKPlayer from 'react-native-ijkplayer';
//import RCTIJKPlayerWithController from 'react-native-ijkplayer/RCTIJKPlayerWithController';
import RCTIJKPlayer from 'react-native-ijkplayer/IJKPlayer';
var {height, width} = Dimensions.get('window');
console.log("width, height", width, height);
//import Icon from 'react-native-vector-icons/FontAwesome';
const iconSize = 120;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    player: {
        width: width,
        height: height,
        backgroundColor: 'rgba(0,0,0,1)',
    },
});


export default class Example extends React.Component {
    constructor(props) {
        super(props);
        this.rctijkplayer = null;
        this.state = {
            playBackInfo: {
            },
            fadeAnim: new Animated.Value(1),
            hasController: false,
        };
    }
    componentDidMount() {
        // let url = "/Users/cong/Downloads/111.mov";
        // this.rctijkplayer.start({url: url});
    }
    componentWillUnmount() {
        clearInterval(this.playbackInfoUpdater);
    }

    render() {
        let uri = Platform.select({
          ios:
            "http://www.ne.jp/asahi/music/myuu/wave/eine.mp3",
          android:
            "http://www.ne.jp/asahi/music/myuu/wave/eine.mp3",
        });
        console.log("uri => ", uri);
        let src = {uri: uri};
        return (<View
                style={styles.container}
            >
              <StatusBar
                  animated
                  hidden
              />
              <RCTIJKPlayer
                  ref={(rctijkplayer) => {
                      this.rctijkplayer = rctijkplayer;
                  }}
                  style={styles.player}
                  height={height/2}
                  width={width}
                  left={0}
                  top={100}
                  source={src}
              >
              </RCTIJKPlayer>
            </View>
        );
    }
}
