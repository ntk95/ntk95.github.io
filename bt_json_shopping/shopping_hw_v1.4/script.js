$(document).ready(function() {
    "use strict";

    var menuActive = false;
    var header = $('.header');
    setHeader();
    initCustomDropdown();
    initPageMenu();

    function setHeader() {

        if (window.innerWidth > 991 && menuActive) {
            closeMenu();
        }
    }

    function initCustomDropdown() {
        if ($('.custom_dropdown_placeholder').length && $('.custom_list').length) {
            var placeholder = $('.custom_dropdown_placeholder');
            var list = $('.custom_list');
        }

        placeholder.on('click', function(ev) {
            if (list.hasClass('active')) {
                list.removeClass('active');
            } else {
                list.addClass('active');
            }

            $(document).one('click', function closeForm(e) {
                if ($(e.target).hasClass('clc')) {
                    $(document).one('click', closeForm);
                } else {
                    list.removeClass('active');
                }
            });

        });

        $('.custom_list a').on('click', function(ev) {
            ev.preventDefault();
            var index = $(this).parent().index();

            placeholder.text($(this).text()).css('opacity', '1');

            if (list.hasClass('active')) {
                list.removeClass('active');
            } else {
                list.addClass('active');
            }
        });


        $('select').on('change', function(e) {
            placeholder.text(this.value);

            $(this).animate({ width: placeholder.width() + 'px' });
        });
    }

    /*

    4. Init Page Menu

    */

    function initPageMenu() {
        if ($('.page_menu').length && $('.page_menu_content').length) {
            var menu = $('.page_menu');
            var menuContent = $('.page_menu_content');
            var menuTrigger = $('.menu_trigger');

            //Open / close page menu
            menuTrigger.on('click', function() {
                if (!menuActive) {
                    openMenu();
                } else {
                    closeMenu();
                }
            });

            //Handle page menu
            if ($('.page_menu_item').length) {
                var items = $('.page_menu_item');
                items.each(function() {
                    var item = $(this);
                    if (item.hasClass("has-children")) {
                        item.on('click', function(evt) {
                            evt.preventDefault();
                            evt.stopPropagation();
                            var subItem = item.find('> ul');
                            if (subItem.hasClass('active')) {
                                subItem.toggleClass('active');
                                TweenMax.to(subItem, 0.3, { height: 0 });
                            } else {
                                subItem.toggleClass('active');
                                TweenMax.set(subItem, { height: "auto" });
                                TweenMax.from(subItem, 0.3, { height: 0 });
                            }
                        });
                    }
                });
            }
        }
    }

    function openMenu() {
        var menu = $('.page_menu');
        var menuContent = $('.page_menu_content');
        TweenMax.set(menuContent, { height: "auto" });
        TweenMax.from(menuContent, 0.3, { height: 0 });
        menuActive = true;
    }

    function closeMenu() {
        var menu = $('.page_menu');
        var menuContent = $('.page_menu_content');
        TweenMax.to(menuContent, 0.3, { height: 0 });
        menuActive = false;
    }



});

$(document).ready(function() {


    if ($('.bbb_viewed_slider').length) {
        var viewedSlider = $('.bbb_viewed_slider');

        viewedSlider.owlCarousel({
            loop: true,
            margin: 30,
            autoplay: true,
            autoplayTimeout: 6000,
            nav: false,
            dots: false,
            responsive: {
                0: { items: 1 },
                575: { items: 2 },
                768: { items: 3 },
                991: { items: 4 },
                1199: { items: 6 }
            }
        });

        if ($('.bbb_viewed_prev').length) {
            var prev = $('.bbb_viewed_prev');
            prev.on('click', function() {
                viewedSlider.trigger('prev.owl.carousel');
            });
        }

        if ($('.bbb_viewed_next').length) {
            var next = $('.bbb_viewed_next');
            next.on('click', function() {
                viewedSlider.trigger('next.owl.carousel');
            });
        }
    }


});