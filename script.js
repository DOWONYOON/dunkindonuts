   $(document).ready(function(){
        $('#popup_bt').click(function(){
            $('#popup').css({'display':'none'})
        })
        $('#slide_box2 button').click(function(){
            $('#slide_box1').slideToggle(300);
        })
        // 서브메뉴
        $('#header2_right>li').mouseenter(function(){
            $(this).children('div').stop().slideDown();
        })
        $('#header2_right>li').mouseleave(function(){
            $(this).children('div').stop().slideUp();
        })
        // 두번째 슬라이드 (4개)
        sec2_slide_num = 0
        setInterval(function(){
            if( sec2_slide_num <= -804){ sec2_slide_num = 0;
            $('.sec2_left_slide').css({left:0})
            }
            sec2_slide_num =  sec2_slide_num - 268 //0 -268 -536 -804 -1072
            $('.sec2_left_slide').animate({left:sec2_slide_num},200)
            sec2_slide_num2 = sec2_slide_num / -268
            if( sec2_slide_num2 == 3){sec2_slide_num2 = 0}
            $('#sec2_bt>li').eq(sec2_slide_num2).css({'width':'10','height':'10','background-color':'#2c1810'}).siblings().css({'width':'8','height':'8','background-color':'#999'})
        },4000)

        $('#sec2_bt>li').click(function(){
            sec2_slide_num = $(this).index() * - 268
            $(this).css({'width':'10','height':'10','background-color':'#2c1810'})
            $(this).siblings().css({'width':'8','height':'8','background-color':'#999'})
            $('.sec2_left_slide').animate({left:sec2_slide_num},200)
        })
        // 메인 슬라이드

        $('#slide_btn>li').click(function(){
            slide_num = $(this).index()*-100;
            $(this).css({'transform':'scale(1.6)','background-color':'#fff'})
            $(this).siblings().css({'transform':'scale(1)','background-color':'#ccc'})
            $('#slide_img').animate({left:slide_num+'%'})
        })

        setInterval(function(){
          if(slide_num <= -600){
                    $('slide_img').stop().css({left:0},300)
                    slide_num = 0
                    $('#slide_btn>li').eq(0).css({'transform':'scale(1.6)','background-color':'#fff'}).siblings().css({'transform':'scale(1)','background-color':'#ccc'})
                }
                slide_num = slide_num - 100
                $('#slide_img').stop().animate({left:slide_num+'%'},300)
                slide_num2 = slide_num/-100
                if(slide_num2 == 6){slide_num2 = 0}
                $('#slide_btn>li').eq(slide_num2).css({'transform':'scale(1.6)','background-color':'#fff'}).siblings().css({'transform':'scale(1)','background-color':'#ccc'})
            },4000)

        slide_num = 0
        $('#next_btn').click(function(){
            if(slide_num <= -600){
                $('slide_img').stop().css({left:0})
                slide_num = 0
                $('#slide_btn>li').eq(0).css({'transform':'scale(1.6)','background-color':'#fff'}).siblings().css({'transform':'scale(1)','background-color':'#ccc'})
            }
            slide_num = slide_num - 100
            $('#slide_img').stop().animate({left:slide_num+'%'})
            slide_num2 = slide_num/-100
            if(slide_num2 == 6){slide_num2 = 0}
            $('#slide_btn>li').eq(slide_num/-100).css({'transform':'scale(1.6)','background-color':'#fff'}).siblings().css({'transform':'scale(1)','background-color':'#ccc'})
        })

        $('#prev_btn').click(function(){
            if(slide_num >= 0){
                $('#slide_img').stop().css({left:-600+'%'})
                slide_num = -600
            }
            slide_num = slide_num + 100
            $('#slide_img').stop().animate({left:slide_num+'%'})
            $('#slide_btn>li').eq(slide_num/-100).css({'transform':'scale(1.6)','background-color':'#fff'}).siblings().css({'transform':'scale(1)','background-color':'#ccc'})
        })

        //스크롤이벤트
        $(window).scroll(function(){
            sc = $(window).scrollTop()
            $('#scroll_text').text(sc)
            if(sc>=1000){               
              $('#banner1_1').animate({left:-150}).css({'opacity':'1'},300)
              $('#banner1_2').animate({right:800}).css({'opacity':'1'},300)
            }
            if(sc>=2400){               
                $('#banner2_box1').css({'opacity':'1','transform':'rotateY(0deg)'},300)
                $('#banner2_box2').css({'opacity':'1','transform':'rotateY(0deg)'},300)
              }         
        })
    })
