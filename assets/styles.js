$( document ).ready(function() {
    loveBtn = $(".card-button.love");
    loveBtn.click(function(){
        btn = $(this).children()
        if (btn[0].style.display != "none") {
            btn[0].style.display = "none"
            btn[1].style.display = "inline-block"
        } else {
            btn[0].style.display = "inline-block"
            btn[1].style.display = "none" 
        }
    });

    getStories = $('.stories')
    stories = getStories[0]
    value = 0
    minValue = 0
    maxValue = stories.scrollWidth - stories.clientWidth
    stories.addEventListener('wheel', function(e) {
        e.preventDefault()
        if (e.deltaY > 0) {
            value +=70
            if (value > maxValue) value = maxValue
            $({leftScrollValue: stories.scrollLeft}).animate({leftScrollValue: value}, {
                duration: 100,
                easing:'linear',
                step: function() {
                    stories.scrollLeft = this.leftScrollValue;
                }
            });
        } else {
            value -=70
            if (value < minValue) value = minValue
            $({leftScrollValue: stories.scrollLeft}).animate({leftScrollValue: value}, {
                duration: 100,
                easing:'linear',
                step: function() {
                    stories.scrollLeft = this.leftScrollValue;
                }
            });
        }
    });
});

