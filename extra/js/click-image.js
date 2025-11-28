
$(document).ready(function () {
    //图片自动添加链接，首先去掉本来就是链接的图片
    $(".md-content img").not("a img").not(".code_img_opened").not(".code_img_closed").each(function () {
        $(this).wrap("<a rel='image' target='_blank' href='" + this.src + "'></a>");
    });
    //图片虚化
    $(".content img").not(".code_img_opened").not(".code_img_closed").hover(
        function () { $(this).fadeTo("fast", 0.7); },
        function () { $(this).fadeTo("fast", 1); });
});
