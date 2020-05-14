import React, {Component} from "react";
import {Animated, Dimensions,View,SafeAreaView} from "react-native";

import { TabView, TabBar } from 'react-native-tab-view';

const {width,height} = Dimensions.get("window");




export default class TabViewScrollable extends Component {
  
    nScroll = new Animated.Value(0);

    scroll = new Animated.Value(0);

 



  constructor(props) {
    super(props);
    this.state = {
      
      Scroll_height:width*.3
    }
  
    this.nScroll.addListener(Animated.event([{value: this.scroll}], {useNativeDriver: false}));
  }


_ChangeHeight =(event)=>{
    this.setState({Scroll_height:event.nativeEvent.layout.height})
}
  render() {
      const{Scroll_height}=this.state

      const{
          activeColor,
          inactiveColor,
          _renderIcon,
          _renderText,
          _indicatorStyle,
          _styleTab,
          colorStyle
        }=this.props

    let  tabY = this.nScroll.interpolate({
        inputRange: [0, Scroll_height, Scroll_height + 1],
        outputRange: [0, 0, 1]
      });

 

    return (
      <SafeAreaView>
    
        
        <Animated.ScrollView
          scrollEventThrottle={1}
          showsVerticalScrollIndicator={false}
          onScroll={Animated.event([{nativeEvent: {contentOffset: {y: this.nScroll}}}], {useNativeDriver: true})}
         >

          <Animated.View style={{
         
            backgroundColor: colorStyle
          }}>
            <View onLayout={this._ChangeHeight} >
           {this.props.topHeader}
            </View>
             
          </Animated.View>

          <TabView
        navigationState={this.state}
        {...this.props}
        initialLayout={{ width: width }}
         renderTabBar={(props)=> <Animated.View
          style={{transform: [{translateY: tabY}], zIndex: 1,elevation:1}}>
           <TabBar
          {...props}
          activeColor={activeColor}
          inactiveColor={inactiveColor} 
          renderIcon={_renderIcon}
          renderLabel={_renderText}
          indicatorStyle={_indicatorStyle}
          style={_styleTab}
        />
          </Animated.View>
      } 
      />
        </Animated.ScrollView>
     
     
      </SafeAreaView>
    )
  }
}


