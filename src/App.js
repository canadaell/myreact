//项目的根组件
//app->index.js->index.html(root)
const index=100;
function getname(){
  return 'zhangsan';
}
function App() {
  return (
    <div className="App">
      this is my first react app
      {/*引号传递字符串*/}
      {'zifuchuan'}
      {/*识别js变量 */}
      {index}
      {/*调用函数*/}
      {getname()}
      {/*方法调用*/}
      {new Date().getDate()}
      {/*使用js对象*/}
      <div style={{color:'red',fontSize:'20px'}}>这是一个div</div>
    </div>
  );
}

export default App;
