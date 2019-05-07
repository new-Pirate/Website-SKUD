$(function () {
    $(".tab").click(function () {
        $(".content").removeClass("active");
        $(".headItemImg").removeClass("bordered");
        $(".headItemImg").removeClass("borderedTwo");
        if ($(this).hasClass("tab-1")) {
            if ($(".content-1").hasClass("active")) {
                $(".content-1").removeClass("active");
            } else {
                $(".content-1").addClass("active");
                $(".img-1").addClass("bordered");
            }
        } else if ($(this).hasClass("tab-2")) {
            if ($(".content-2").hasClass("active")) {
                $(".content-2").removeClass("active");
            } else {
                $(".content-2").addClass("active");
                $(".img-2").addClass("bordered");
            }
        } else if ($(this).hasClass("tab-3")) {
            if ($(".content-3").hasClass("active")) {
                $(".content-3").removeClass("active");
            } else {
                $(".content-3").addClass("active");
                $(".img-3").addClass("borderedTwo");
            }
        } else if ($(this).hasClass("tab-4")) {
            if ($(".content-4").hasClass("active")) {
                $(".content-4").removeClass("active");
            } else {
                $(".content-4").addClass("active");
                $(".img-4").addClass("borderedTwo");
            }
        }
    });


    $(".tab").click(function () {
        $(".propsContent").removeClass("active");
        $(".propsTab").removeClass("borderedPropsUnit");
        if ($(this).hasClass("propsTab-1")) {
            if ($(".propsContent-1").hasClass("active")) {
                $(".propsContent-1").removeClass("active");
            } else {
                $(".propsContent-1").addClass("active");
                $(".propsTab-1").addClass("borderedPropsUnit");
            }
        } else if ($(this).hasClass("propsTab-2")) {
            if ($(".propsContent-2").hasClass("active")) {
                $(".propsContent-2").removeClass("active");
            } else {
                $(".propsContent-2").addClass("active");
                $(".propsTab-2").addClass("borderedPropsUnit");
            }
        }
    });

    /*Page - 2, catalog */

    $(".systemsTitle").click(function () {
        $(".systemsTitleImg").toggleClass("systemsTitleImgRotate");
        $(".systemsMenuWrap, .catalog , .moreWrap").toggleClass("invis");
    });

    $(".price").click(function () {
        $(".priceImg").toggleClass("priceImgRotate");
        $(".priceSubmenu").toggleClass("invis");
    });

    $(".width").click(function () {
        $(".widthImg").toggleClass("widthImgRotate");
        $(".widthSubmenu").toggleClass("invis");
    });

    $(".housing").click(function () {
        $(".housingImg").toggleClass("housingImgRotate");
        $(".housingSubmenu").toggleClass("invis");
    });

    $(".length").click(function () {
        $(".lengthImg").toggleClass("lengthImgRotate");
        $(".lengthSubmenu").toggleClass("invis");
    });

    $(".material").click(function () {
        $(".materialImg").toggleClass("materialImgRotate");
        $(".materialSubmenu").toggleClass("invis");
    });

    $(".radius").click(function () {
        $(".radiusImg").toggleClass("radiusImgRotate");
        $(".radiusSubmenu").toggleClass("invis");
    });

    /* Popup Production */

    $('.gradTextBtn a').mouseover(function () {
        let el = $(this);
        el.parent().addClass('menu-active');
    });

    $(".gradTextBtn").mouseleave(function () {
        $('.gradTextBtn').removeClass('menu-active');
    });

    $(".submenuItem").each(function () {
        $(this).click(function () {
            $(this).siblings().toggleClass("vis");
        });
    });

    /* Popup onlineCalc */

    $('.onlineBtn a').mouseover(function () {
        let el = $(this);
        el.parent().addClass('menu-active');
    });

    $(".onlineBtn").mouseleave(function () {
        $('.onlineBtn').removeClass('menu-active');
    });

    /* Popup Услуги */

    $('.amenitiesBtn a').mouseover(function () {
        let el = $(this);
        el.parent().addClass('menu-active');
    });

    $(".amenitiesBtn").mouseleave(function () {
        $('.amenitiesBtn').removeClass('menu-active');
    });


    /*Page - 11, calculated */

    $('.questionDescBtn').click(function () {
        let el = $(".calculation");
        let blackout = $(".blackout");
        el.addClass('calculationVisible');
        blackout.addClass('calculationVisible');
    });

    $(".calculationCloseBtn").click(function () {
        let el = $(".calculation");
        let blackout = $(".blackout");
        el.removeClass('calculationVisible');
        blackout.removeClass('calculationVisible');
    });

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

    /* Links */

    $('.cartWrap').click(function () {
        document.location.href = $(this).attr('href');
    });

    $('.logoText').click(function () {
        document.location.href = $(this).attr('href');
    });
    $('.footerLogo').click(function () {
        document.location.href = $(this).attr('href');
    });
    $('.catalogItem').click(function () {
        document.location.href = $(this).attr('href');
    });

    /* отмена переходов на главной */

    function windowSize() {
        if ($(window).width() <= '990') {
            $(".gradText").click(function() {
                return false;
            });

            $(".onlineBtnHref").click(function() {
                return false;
            });
        }
    }

    $(window).on('load resize', windowSize);
});