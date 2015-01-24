var runtime=require("ksana2015-webruntime");
runtime.boot("decompose",function(){
	var Main=React.createElement(require("./src/main.jsx"));
	ksana.mainComponent=React.render(Main,document.getElementById("main"));
});