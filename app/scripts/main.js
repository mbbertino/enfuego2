function User (username,useremail,userlocation,profilepic,image) {
  if (username) {this.avatarUserName = username} 
  	else	{this.avatarUserName ='Jimbo Slice'}
  if (useremail) {this.avatarEmail = useremail}	
  	else	 {this.avatarEmail = 'useremail@hotmail.com'}
  if (userlocation) {this.avatarLocation = userlocation} 
  	else {this.avatarLocation = 'gveagas'}
  if (profilepic) {this.avatarProfilePic = profilepic}	
  	else  {this.avatarProfilePic = 'http://25.media.tumblr.com/7ea8c62fb08e39cb5b020b94dc3247aa/tumblr_mknytwunbh1qlioqzo1_500.jpg'}
  this.images = [
  ]	
}

function Img (img,cap) {
  if (img) {this.url = img} 
  	else	{this.url ='http://www.allfunnystuff.com/wp-content/uploads/2013/01/image8.jpg'}
  if (cap) {this.caption = cap}	
  	else	 {this.caption = 'Put in a caption you dummy'}
}
$('.get-started').click(function(){
	$('.inputtainer.avatar').fadeIn('slow');
	$('.start').fadeOut('slow')
});

$('.gallery-button').click(function(){
	$('.avatartainer').fadeOut('slow');
	$('.inputtainer.gal-img-upload').fadeIn('slow')
});

$('.avatar-submit').click(function(){
	$('.inputtainer.avatar').fadeOut('slow');
		var userN     = $('.user-name').val();
    var userE    	= $('.user-email').val();
    var userL    	= $('.user-location').val();
    var proPic    = $('.profile-pic').val();

    var newUser = new User(userN,userE,userL,proPic)

   	userData.push(newUser)

   	var lastThreeUsers = _.last(userData,3);
   	var avatarTemplate = _.template($('.avatar-template').text());

   	lastThreeUsers.reverse()

   	$('.avatarbox').remove()

   	_.each(lastThreeUsers,function(user,index){
   		$('.avatar-innertainer').append(avatarTemplate(user))
   	})

	$('.avatartainer').fadeIn('slow');
});


$('.gal-submit').click(function(){
	$('.inputtainer.gal-img-upload').fadeOut('slow');
		var img     = $('.user-img').val();
    var cap    	= $('.user-caption').val();

    var photoupdate = new User(img,cap)

    var lastUser =_.last(userData)

	$('.gallery').fadeIn('slow')
});

	// $('.inputtainer.gal-img-upload').fadeIn('slow');

	// Userdata below
userData = [
  {
    avatarUserName: 'Bertman45',
    avatarEmail: 'Bertman45@gmail.com',
    avatarLocation: 'Greenville, SC',
    avatarProfilePic: 'http://lorempixel.com/150/150/'
  },
  {
    avatarUserName: 'Bertman45',
    avatarEmail: 'Bertman45@gmail.com',
    avatarLocation: 'Greenville, SC',
    avatarProfilePic: 'http://lorempixel.com/150/150/'
  },
  {
    avatarUserName: 'Bertman45',
    avatarEmail: 'Bertman45@gmail.com',
    avatarLocation: 'Greenville, SC',
    avatarProfilePic: 'http://lorempixel.com/150/150/'
  },
  {
    avatarUserName: 'Bertman45',
    avatarEmail: 'Bertman45@gmail.com',
    avatarLocation: 'Greenville, SC',
    avatarProfilePic: 'http://lorempixel.com/150/150/'
  }
]