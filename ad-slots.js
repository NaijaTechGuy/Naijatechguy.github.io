
 ads = new Array(9);
    ads[0] = "<a href='https://goo.gl/FzaGhd' rel='nofollow' target='blank'>" + 
             "<img height='320px' src='https://i.imgur.com/tJKxLN0.png'/></a>";

    ads[1] = "<a href='https://goo.gl/UyJNbX' rel="'nofollow' target="'blank'">" +
             "<img height='320px' src='https://i.imgur.com/2ARyCfZ.png'/></a>";

    ads[2] = "<a href='https://goo.gl/FzaGhd' rel='nofollow' target='blank'>" + 
             "<img height='320px' src='/wp-content/uploads/2019/01/symac23.png'/></a>";

    ads[3] = "<a href='https://goo.gl/UyJNbX' rel='nofollow' target='blank'>" +
             "<img height='320px' src='/wp-content/uploads/2019/01/Untitled-3.png'/></a>";

 ads[4] = "<a href='https://goo.gl/MN6ocq' rel='nofollow' target='blank'>" +
             "<img height='320px' src='/wp-content/uploads/2019/01/1.jpg'/></a>";

    ads[5] = "<a href='https://goo.gl/FzaGhd' rel='nofollow' target='blank'>" + 
             "<img height='320px' src='https://i.imgur.com/tJKxLN0.png'/></a>";

ads[6] = "<a href='https://goo.gl/FzaGhd' rel='nofollow' target='blank'>" + 
             "<img height='320px' src='https://i.imgur.com/tJKxLN0.png'/></a>";

ads[7] = "<a href='https://goo.gl/MN6ocq' rel='nofollow' target='blank'>" + 
             "<img height='320px' src='/wp-content/uploads/2019/01/Bike-Race-Sports-Medium-Rectangle-Ad.jpg'/></a>";

ads[8] = "<a href='https://goo.gl/MN6ocq' rel='nofollow' target='blank'>" + 
             "<img height='320px' src='/wp-content/uploads/2019/01/Bike-Race-Sports-Medium-Rectangle-Ad.jpg'/></a>";
    index = Math.floor(Math.random() * ads.length);
    document.write(ads[index]); 
