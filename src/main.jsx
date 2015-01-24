//var kse=require("ksana-search");
// var decompose=require("decompose");
var maincomponent = React.createClass({
  getInitialState:function() {
  	return {result:"result"};
  },
  render: function() {
    return (
    <div>
        {this.state.result}
    </div>
    );
  }
});
module.exports=maincomponent;