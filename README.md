
# rn-tabview-scrollable

We built a library for our project using react-native-tab-view because we felt it was not like this library and the developers need it a lot.


![Android](demo/Android4.gif)

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
