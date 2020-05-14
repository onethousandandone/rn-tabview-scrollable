
# rn-tabview-scrollable

We built a library for our project using react-native-tab-view because we felt it was not like this library and the developers need it a lot.


<div style="width:260px;max-width:100%;"><div style="height:0;padding-bottom:213.85%;position:relative;"><iframe width="260" height="556" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameBorder="0" src="https://github.com/onethousandandone/rn-tabview-scrollable/blob/master/demo/Android4.gif"></iframe></div><p><a href="https://imgflip.com/gif/41e0vy">via Imgflip</a></p></div>

## Installation

Befor inistall [react-native-tab-view](https://github.com/react-native-community/react-native-tab-view) then =>

```bash
npm i rn-tabview-scrollable
```

## Usage

```js
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

```



## License
[MIT](https://choosealicense.com/licenses/mit/)
## copyright
Copyright reserved for 1001 (onethousandandone).
