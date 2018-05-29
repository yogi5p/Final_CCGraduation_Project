const keys = require('.config/keys');

passport.use( new GoogleStrategy({
    //options for google
    callbackURL:'/auth/google/redirect',
    clentID: 'keys.google.clientID',
    clientSecret:'keys.google.clientSecret'
    }, (accessToken, refreshToken, profile, done) 
    //accessToken acesses info
    //refresh refreshes token since the expire
    =>{
    //passport callback function
    //check if user already exist and doesnt duplicate users in DB
    User.findOne({googleId: profile.id}).then((currentUser) =>{
    if(currentUser){
    //already exist
    console.log('user is:', currentUser);
    } else{ 
    //if not create one/creates new users when logging into google
    new User({
    username: profile.displayName,
    googleId: profile.id
    }).save().then((newUser) => {console.log('new user created:' + newUser);
    });
    });