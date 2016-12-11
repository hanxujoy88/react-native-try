/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * @author:hanxu 
 */ 

var React = require('react');

 import {
   View,
   Button,
   Text,
   Image,
   ScrollView,
   StyleSheet,
   WebView,
   AppRegistry,
   TouchableHighlight,
   Navigator,
   TouchableOpacity,
 } from 'react-native';


 var RadiusButton = require('./components/RadiusButton');  

 var myapp  = React.createClass({
    render(){
      return (
        <Navigator
          style = {styles.container}
          initialRoute={{id:"main",title:"主界面"}}
          renderScene={this.renderNav}
          configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
          navigationBar={
            <Navigator.NavigationBar
              routeMapper={NavigationBarRouteMapper}
              style={styles.navBar}/>
          } />
      );
    },
    renderNav(route,nav){
        switch (route.id) {
          case 'main':
            return <MainScreen navigator={nav} title="Main"/ >;
          case 'detail':
            return (<DetailScreen navigator={nav} title="Detail"/ >);
          case 'resume':
            return <ResumeScreen navigator={nav} title="Resume"/ >;  
        }
    }
 });

 var MainScreen = React.createClass({
   toDetail(){
     this.props.navigator.push({id:"detail"});
   },
   toResume(){
     this.props.navigator.push({id:"resume"}); 
   },
   render(){
     return (
       <View style={styles.containView}>
          <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
       style={{width: 400, height: 400}} />

          <RadiusButton
                btnName= '查看简历'
                textStyle= {{
                            fontSize: 16,
                            color: '#222222',
                          }}
                btnStyle= {{
                            width: 300,
                            height: 44,
                            borderRadius: 25,
                            marginTop:15
                          }}
                underlayColor= '#4169e1'
                onPress={this.toDetail} >
          </RadiusButton>


          <RadiusButton
                btnName= '查看作品'
                textStyle= {{
                            fontSize: 16,
                            color: '#222222',
                          }}
                btnStyle= {{
                            width: 300,
                            height: 44,
                            borderRadius: 25,
                            marginTop:15
                          }}
                underlayColor= '#4169e1'
                onPress={this.toResume} >
          </RadiusButton>

       </View>
     );
   }
 });


 var DetailScreen = React.createClass({
   toMain(){
     this.props.navigator.pop();
   },
   render(){
     return (
          <ScrollView style={{ height:2000,marginTop:70,padding:5}}>
              <Text style={{ fontSize:30 }}>个人简介:{'\n'}</Text>

              <Text style={styles.blackText}>丰富的项目经验，可以快速开发常用功能和组件。{'\n'}
              熟练掌握原生JS(ES5和部分ES6新特性).
              熟悉基于原型的继承模式,函数式编程。{'\n'}
              熟悉JQuery,了解常用API的使用
              熟悉异步编程原理，如Ajax异步，DOM异步编程,回调函数等.{'\n'}
              熟悉流行前端框架，如ReactJS,熟悉组件化，模块化开发{'\n'}
              熟悉div+css布局，熟悉CSS3媒体查询和Bootstarp布局移动端页面{'\n'}
              熟悉常用跨域请求如(jsonp,CROS){'\n'}
              熟练使用PS,DW等创作工具(切图，作图等){'\n'}
              有PHP实战经验,熟悉PHP codeigniter框架{'\n'}
              </Text>
              <Text style={styles.blackText}>
                  2014/07 - 至今  优酷（2年）{'\n'}
              </Text> 
              <Text style={styles.blackText}>
                  工作描述：{'\n'}
              </Text>
              <Text style={styles.blackText}>
                  1.后台版权系统前端开发和维护(所用技术：ReactJS,中间层:基于codeigniter的PHP框架) {'\n'}
                  2.后台评论管理系统前端开发(所用技术：前端bootstrap+JQuery,中间层:基于codeigniter的PHP框架)
              </Text>
          </ScrollView>
     );
   }
 });


 var ResumeScreen = React.createClass({
    toMain(){
        this.props.navigator.pop();
   },
   render(){
      return (
        <WebView
        source={{uri: 'https://github.com/hanxujoy88'}}
        style={{marginTop: 60}}/>
     );
   }
 });

 var NavigationBarRouteMapper = {
   //左边Button
   LeftButton: function(route, navigator, index, navState) {
        if (route.id === 'main') {
            return null;
        }
        var previousRoute = navState.routeStack[index - 1];
     return (
       <TouchableOpacity
  //       onPress={() => navigator.push({id:'detail',title:'Detail'})}
         onPress={() => navigator.pop()}
         style={styles.navBarRightButton}>
         <Text style={[styles.navBarText, styles.navBarButtonText]}>
           {previousRoute.title}
         </Text>
       </TouchableOpacity>
     );  
   },

      //右边Button
   RightButton: function(route, navigator, index, navState) {
      return null;
   },

   //标题
   Title: function(route, navigator, index, navState) {
     return (
       <Text style={[styles.navBarText, styles.navBarTitleText]}>
         {route.title}
       </Text>
     );
   },
 };


 const styles = StyleSheet.create({
   container: {
     flex: 1,
   },
   button: {
     padding: 15,
   },
   containView:{
     flex: 1,
     justifyContent: 'center',
   },
   detailContainView:{
     flex:1,
     justifyContent: 'center',
     backgroundColor:'#ffffff',
   },
   resumeContainsub:{
     flex:1,
     margin:80,
     justifyContent: 'flex-start',
     backgroundColor:'#ffffff',
   },
   blackText:{
     fontSize:20,
     textAlign:'left',
   },
   navBar: {
  backgroundColor: 'white',
  },
  navBarText: {
    fontSize: 16,
    marginVertical: 10,
  },
  navBarTitleText: {
    color: '#373E4D',
    fontWeight: '500',
    marginVertical: 9,
  },
  navBarLeftButton: {
    paddingLeft: 10,
  },
  navBarRightButton: {
    paddingRight: 10,
  },
  navBarButtonText: {
    color: '#5890FF',
  },
 });

 AppRegistry.registerComponent('myapp', () => myapp);

