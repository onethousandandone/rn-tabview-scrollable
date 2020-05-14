import React, {Component} from "react";
import { View,Image,Text,Dimensions} from "react-native";
const {width,height} = Dimensions.get("window");
import TabViewScrollable from '../src/lib/TabViewScrollable'
import Icon from 'react-native-vector-icons/AntDesign'

class ComponentOne extends Component {
  render(){
    return <View style={{flex:1,backgroundColor:'#f7f1e3',height:height}}></View>
  }
}
class ComponentTwo extends Component {
  render(){
    return <View style={{flex:1,backgroundColor:'#74b9ff',height:height}}></View>
  }
}
class ComponentTop extends Component {
  render(){
    return <View style={{flex:1}}>
      <Image source={{uri:'https://avatars2.githubusercontent.com/u/65309882?s=460&u=5da5ecfdc98f2ab930f6c1e50e9167e500fe03b4&v=4'}} 
      style={{width:width,height:height*.3}}/>
    </View>
  }
}

export default  class Example extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [
        { key: 0, title: 'ComponentOne',icon:'lock' },
        { key: 1, title: 'ComponentTwo',icon:'lock'  },
      ],
     
    }
  
   
  }
  _scene(rout){

    switch (rout.route.key) {
      case 0:
         return <ComponentTwo/>
      case 1:
        return <ComponentOne/>
      default:
        return null;
  }
  
}

  _header(){
    return <ComponentTop/>
  }
  _renderIcon = ({ route, focused, color }) => {
    return <Icon name={route.icon} size={24} color={color} />;
  }
  _renderText = ({ route, focused, color }) => {
    return  <Text style={{ color}}>
    {}
    {route.title}
  </Text>
  }
  render() {
    return (
        <TabViewScrollable
          onIndexChange={ind => this.setState({ index :ind})}
          navigationState={this.state}
          renderScene={(route)=>this._scene(route,this.props.navigation)}
          topHeader={this._header()}
         _renderIcon={this._renderIcon}
          _renderText={this._renderText}
          activeColor={'#ff7675'}
          inactiveColor={'#b2bec3'} 
          _indicatorStyle={{ backgroundColor: '#EA2027' }}
          _styleTab={{ backgroundColor: '#fff' }}
          colorStyle={'#ffff'}
        />
     )
  }
}

