var image = document.getElementById("imgSlider"); 
    var address = [
        "https://cdn.shopify.com/s/files/1/0266/6276/4597/files/WS_D_d4023a82-ef56-4d20-8a3c-7fb6b9780602_1024x1024.jpg?v=1642098196",
        "https://cdn.shopify.com/s/files/1/0266/6276/4597/files/14th_Jan_-_WS_D_-M3_1920x1100_b96d639b-16b6-4adb-9ec9-de1ba3a8798e_1024x1024.jpg?v=1642161891",
        "https://cdn.shopify.com/s/files/1/0266/6276/4597/files/14th_Jan_-_WS_D_-M2_1920x1100_21a4eb86-98a0-440e-bd4f-5559d9e8cb09_1024x1024.jpg?v=1642161978",
        "https://cdn.shopify.com/s/files/1/0266/6276/4597/files/14th_Jan_-_WS_D_-M1_1920x1100_bbb91119-29c9-4bce-bca8-f1930839126c_1024x1024.jpg?v=1642162082",
        "https://cdn.shopify.com/s/files/1/0266/6276/4597/files/14th_Jan_-_WS_D_-M5_1920x1100_152424b8-eb49-42bb-bef1-3d5171d3277c_1024x1024.jpg?v=1642162145",
        "https://cdn.shopify.com/s/files/1/0266/6276/4597/files/14th_Jan_-_WS_D_-M4_1920x1100_be826da4-d22a-4ef2-809a-c3f667544280_1024x1024.jpg?v=1642162198",
        "https://cdn.shopify.com/s/files/1/0266/6276/4597/files/14th_Jan_-_WS_D_-M6_1920x1100_351a8313-b3e2-4ed2-a35b-c961d7feb9ea_1024x1024.jpg?v=1642162268",
    ];
        
        
        
    var count = 0;
        setInterval(function () {
        if (count == 7) {
        count = 0;
        }
    image.src = address[count];
    count++;
    }, 2000);



    // function displayThis(){
    //     id = 
    // }

    /---------/ 


    $(function() {
       var print = function(msg) {
         alert(msg);
       };

    //    var setInvisible = function(brands) {
    //      brands.css('visibility', 'hidden');
    //    };

       var setVisible = function(brands) {
         brands.css('visibility', 'visible');
       };

       var brands = $("#brands");
       var items = brands.children();

       // Inserting Buttons
       brands.prepend('<div id="right-button" style="visibility: hidden;"><a href="#"><</a></div>');
       brands.append('  <div id="left-button"><a href="#">></a></div>');

       // Inserting Inner
       items.wrapAll('<div id="inner" />');

       // Inserting Outer
       debugger;
       brands.find('#inner').wrap('<div id="outer"/>');

       var outer = $('#outer');

       var updateUI = function() {
         var maxWidth = outer.outerWidth(true);
         var actualWidth = 0;
         $.each($('#inner >'), function(i, item) {
           actualWidth += $(item).outerWidth(true);
         });

         if (actualWidth <= maxWidth) {
           setVisible($('#left-button'));
         }
       };
       updateUI();



       $('#right-button').click(function() {
         var leftPos = outer.scrollLeft();
         outer.animate({
           scrollLeft: leftPos - 800
         }, 800, function() {
           debugger;
           if ($('#outer').scrollLeft() <= 0) {
             setInvisible($('#right-button'));
           }
         });
       });

       $('#left-button').click(function() {
         setVisible($('#right-button'));
         var leftPos = outer.scrollLeft();
         outer.animate({
           scrollLeft: leftPos + 800
         }, 500);
       });

       $(window).resize(function() {
         updateUI();
       });
    });
