import React, { Component } from "react";
import {
  StyleSheet,
  View,
  PanResponder,
  Animated,
  Dimensions,
} from "react-native";

export default class DragItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pan: new Animated.ValueXY(),
      color: "blue",
    };

    this.val = { x:0, y:0 }
    this.state.pan.addListener((value) => this.val = value);

    this.panResponder = PanResponder.create({
        onStartShouldSetPanResponder: (e, gesture) => true,
        onPanResponderGrant: (e, gesture) => {
          this.state.pan.setOffset({
            x: this.val.x,
            y:this.val.y
          });
        //   this.state.pan.setValue({ x:0, y:0});
        },
        
        // visual of item moving

        onPanResponderMove: Animated.event([ 
          null, { dx: this.state.pan.x, dy: this.state.pan.y }
        ]),

        // what happens on release
        onPanResponderRelease: (e, gesture) => {
          if (this.isRed(gesture)) {
            this.setState({color: "red"})
          } else if (this.isBlue(gesture)) {
            this.setState({color: "blue"})
          }
        }
      });
  }

//   componentWillMount () {

//     this.val = { x:0, y:0 }
//     this.state.pan.addListener((value) => this.val = value);

//     this.panResponder = PanResponder.create({
//         onStartShouldSetPanResponder: (e, gesture) => true,
//         onPanResponderGrant: (e, gesture) => {
//           this.state.pan.setOffset({
//             x: this.val.x,
//             y:this.val.y
//           });
//         //   this.state.pan.setValue({ x:0, y:0});
//         },
        
//         // visual of item moving
//         onPanResponderMove: Animated.event([ 
//           null, { dx: this.state.pan.x, dy: this.state.pan.y }
//         ]),
//         // what happens on release
//         onPanResponderRelease: (e, gesture) => {
//           if (this.isRed(gesture)) {
//             this.setState({color: "red"})
//           } 
//         }
//       });
//   }

  isRed (gesture) {
    return gesture.moveY < 250;
  }

  isBlue (gesture) {
    return gesture.moveY > 250;
  }

  renderDragItem () {
    const panStyle = {
      transform: this.state.pan.getTranslateTransform()
    }
      return (
          <Animated.View
            {...this.panResponder.panHandlers}
            style={[panStyle, styles.circle, {backgroundColor:this.state.color}]}
          />
      );
  }

  render () {
    return (
      <View style={{ width: "20%", alignItems: "center" }}>
        {this.renderDragItem()}
      </View>
    );
  }

//   componentDidMount() {
//     this.val = { x:0, y:0 }
//     this.state.pan.addListener((value) => this.val = value);

//     this.panResponder = PanResponder.create({
//         onStartShouldSetPanResponder: (e, gesture) => true,
//         onPanResponderGrant: (e, gesture) => {
//           this.state.pan.setOffset({
//             x: this.val.x,
//             y:this.val.y
//           });
//         //   this.state.pan.setValue({ x:0, y:0})
//         },
        
//         // visual of item moving
//         onPanResponderMove: Animated.event([ 
//           null, { dx: this.state.pan.x, dy: this.state.pan.y }
//         ]),
//         // what happens on release
//         onPanResponderRelease: (e, gesture) => {
//           if (this.isBlue(gesture)) {
//             this.setState({color: "blue"})
//           } 
//         }
//       });
//   }

}

let CIRCLE_RADIUS = 50;
let styles = StyleSheet.create({
  circle: {
    width: CIRCLE_RADIUS * 1,
    height: CIRCLE_RADIUS * 1,
    borderRadius: CIRCLE_RADIUS,
  }
});