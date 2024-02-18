
// $(".md-header .md-select").hide();
// $(document).ready(function () {
//     // 查找是否存在 .hero-image
//     if ($(".hero-image").length == 0) {
//         $(".md-header .md-select").hide();
//     } else {
//         $(".md-header .md-select").show();
//     }
// });


browserLang = navigator.language ? navigator.language : navigator.browserLanguage;
lang = browserLang.toLowerCase();
if (lang.substr(0, 2) === "zh") {
    // 显示所有 class = "class-zh-cn" 的元素
    $(".class-zh-cn").show();
    $(".class-none-zh-cn").hide();
}