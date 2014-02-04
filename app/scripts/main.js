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
  	else	{this.url ='http://25.media.tumblr.com/7ea8c62fb08e39cb5b020b94dc3247aa/tumblr_mknytwunbh1qlioqzo1_500.jpg'}
  if (cap) {this.caption = cap}	
  	else	 {this.caption = 'Put in a caption you dummy'}
}


$('.get-started').click(function(){
	$('.inputtainer.avatar').fadeIn('slow');
  $('.mainlogo').fadeOut('.slow');
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

// img submit button that puts things into the array within my object
$('.gal-submit').click(function(){
	$('.inputtainer.gal-img-upload').fadeOut('slow');
		var img     = $('.user-img').val();
    var cap    	= $('.user-caption').val();

    var photoupdate = new Img(img,cap)

    var lastUser =_.last(userData)
    var lasUserImgArray = lastUser.images
    
    lasUserImgArray.push(photoupdate)
    
    var galleryTemplate = _.template($('.gallery-template').text());

    var oppositeUserData = userData.reverse()
    $('.gal-img-box').remove()


    _.each(oppositeUserData, function(user, index){
      _.each(user.images, function(image, index){
        $('.gallerytainer').append(galleryTemplate(image))
      });
    })
    userData.reverse()

	$('.gallery').fadeIn('slow')

  $('.gal-img-box').mouseover(function(){
    $(this).children('.caption').show()
  })
  $('.gal-img-box').mouseout(function(){
    $(this).children('.caption').hide()
  })
});

$('.add-another-photo').click(function(){
  $('.gallery').fadeOut('slow');
    $('.inputtainer.gal-img-upload').fadeIn('slow')
  })

$('.gallery-finish').click(function(){
  $('.input-field').val('')
  $('.gallery').fadeOut('slow');
  $('.mainlogo').fadeOut('.slow');
  $('.thank-you').fadeIn('slow');
})

$('.nav-home').click(function(){
  $('.thank-you').fadeOut('.slow');
  $('.gallery').fadeOut('.slow');
  $('.inputtainer.gal-img-upload').fadeOut('.slow');
  $('.avatartainer').fadeOut('.slow');
  $('.inputtainer.avatar').fadeOut('.slow')
  $('.mainlogo').fadeIn('.slow');
  $('.vertically-center-div .start').fadeIn('slow')
})

$('.nav-gal').click(function(){
  $('.gallery').fadeIn('.slow');
})

// $('.nav-about').click(function(){
//   $('.thank-you').fadeIn('slow')
  
// })

// $('.nav-gal').click(function(){
//   $('.thank-you').fadeIn('slow')
  
// })
	// $('.inputtainer.gal-img-upload').fadeIn('slow');

  // Userdata below
userData = [
  {
    avatarUserName: 'Bertman45',
    avatarEmail: 'Bertman45@gmail.com',
    avatarLocation: 'Greenville, SC',
    avatarProfilePic: 'http://lorempixel.com/150/150/',
    images: [
    { 
      url: 'http://lorempixel.com/150/150/',
      caption: 'this is a test caption'
    },
     { 
      url: 'http://lorempixel.com/150/150/',
      caption: 'this is a test caption'
    },
    ]
  },
  {
    avatarUserName: 'Bertman45',
    avatarEmail: 'Bertman45@gmail.com',
    avatarLocation: 'Greenville, SC',
    avatarProfilePic: 'http://lorempixel.com/150/150/',
    images: [
    { 
      url: 'http://lorempixel.com/150/150/',
      caption: 'this is a test caption'
    },
     { 
      url: 'http://lorempixel.com/150/150/',
      caption: 'this is a test caption'
    },
    ]
  },
  {
    avatarUserName: 'Bertman45',
    avatarEmail: 'Bertman45@gmail.com',
    avatarLocation: 'Greenville, SC',
    avatarProfilePic: 'http://lorempixel.com/150/150/',
    images: [
    { 
      url: 'http://lorempixel.com/150/150/',
      caption: 'this is a test caption'
    },
     { 
      url: 'http://lorempixel.com/150/150/',
      caption: 'this is a test caption'
    },
    ]
  },
  {
    avatarUserName: 'Bertman45',
    avatarEmail: 'Bertman45@gmail.com',
    avatarLocation: 'Greenville, SC',
    avatarProfilePic: 'http://lorempixel.com/150/150/',
    images: [
    { 
      url: 'http://lorempixel.com/150/150/',
      caption: 'this is a test caption'
    },
     { 
      url: 'http://lorempixel.com/150/150/',
      caption: 'this is a test caption'
    },
    ]
  }
]
    var galleryTemplate = _.template($('.gallery-template').text());

    _.each(userData, function(user, index){
      _.each(user.images, function(image, index){
        $('.gallerytainer').append(galleryTemplate(image))
      });
    })