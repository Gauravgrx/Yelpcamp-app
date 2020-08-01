var mongoose =require("mongoose");
var Campground =require("./models/campground");
var Comment =require("./models/comment");


var data =[
	{
		name:"Cloud's Rest",
		image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSxPW5M2yF-yKXNw8_xBreQXCnjsntsaMhz8s-Y-zXjhtOyQpnl&usqp=CAU",
		description:"Lorem ipsum dolor sit amet,consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore manga aliqua. Ut enim ad veniam, quis nostrud exercitation ullamco laboris hdjjv uhfiai7 icuiwijf fuhfiwij"
	},
	{
		name:"Desert Mesa",
		image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT7o6a5b2rRtKWF0g4C6nWlc6oQvFGvG5fflxtDOkiw-Qh5cuZp&usqp=CAU",
		description:"Lorem ipsum dolor sit amet,consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore manga aliqua. Ut enim ad veniam, quis nostrud exercitation ullamco laboris hdjjv uhfiai7 icuiwijf fuhfiwij"
	},
	{
		name:"Canyon Floor",
		image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT9-TWckyGc2_vbF_MF0ixOAfrUJtG7vAxUcKZF6UVq9IWjRb7H&usqp=CAU",
		description:"Lorem ipsum dolor sit amet,consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore manga aliqua. Ut enim ad veniam, quis nostrud exercitation ullamco laboris hdjjv uhfiai7 icuiwijf fuhfiwij"
	}
]


function seedDB(){
	Campground.remove({},function(err){
		if(err){
			console.log(err);
		}
		console.log("remove campgrounds!");
		
		data.forEach(function(seed){
			Campground.create(seed,function(err,campground){
				if(err){
					console.log(err)
				}else{
					console.log("added a campground");
					
					Comment.create(
					{
						text:"This place is great,but I wish there was internet",
						author:"Homer"
					},function(err,comment){
						if(err){
							console.log(err);
						}else{
							campground.comments.push(comment);
							campground.save();
							console.log("created new comment");
						}
					});
				}
			});
		});
	});
}


module.exports =seedDB;