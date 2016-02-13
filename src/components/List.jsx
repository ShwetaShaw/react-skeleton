var React = require('react');
var ListItem = require('./ListItem.jsx');

var ingredients = [{"id":1,"text":"Shweta"},{"id":2,"text":"Shreya"},{"id":3,"text":"Ankit"}]

var List = React.createClass({
	render : function() {
		var listItem = ingredients.map(function(item) {
			return <ListItem key={item.id} ingredient={item.text} />;
		});

		return(<ul>{listItem}</ul>);
	}
});

module.exports = List;


