// ! function(e) {
//     var t = function(e) { return e.split("").reverse().join("") },
//         n = {
//             numberStep: function(t, n) {
//                 var r = Math.floor(t);
//                 e(n.elem).text(r)
//             }
//         },
//         r = function(e) {
//             var t = e.elem;
//             t.nodeType && t.parentNode && ((t = t._animateNumberSetter) || (t = n.numberStep), t(e.now, e))
//         };
//     e.Tween && e.Tween.propHooks ? e.Tween.propHooks.number = { set: r } : e.fx.step.number = r, e.animateNumber = {
//         numberStepFactories: {
//             append: function(t) {
//                 return function(n, r) {
//                     var o = Math.floor(n);
//                     e(r.elem).prop("number", n).text(o + t)
//                 }
//             },
//             separator: function(n, r, o) {
//                 return n = n || " ", r = r || 3, o = o || "",
//                     function(a, i) {
//                         var u = 0 > a,
//                             p = Math.floor((u ? -1 : 1) * a).toString(),
//                             m = e(i.elem);
//                         if (p.length > r) {
//                             for (var f, l, c, h = p, s = r, b = h.split("").reverse(), v = (p = [], 0), S = Math.ceil(h.length / s); v < S; v++) {
//                                 for (f = "", c = 0; c < s && (l = v * s + c) !== h.length; c++) f += b[l];
//                                 p.push(f)
//                             }
//                             h = p.length - 1, s = t(p[h]), p[h] = t(parseInt(s, 10).toString()), p = p.join(n), p = t(p)
//                         }
//                         m.prop("number", a).text((u ? "-" : "") + p + o)
//                     }
//             }
//         }
//     }, e.fn.animateNumber = function() {
//         for (var t = arguments[0], r = e.extend({}, n, t), o = e(this), a = [r], i = 1, u = arguments.length; i < u; i++) a.push(arguments[i]);
//         if (t.numberStep) {
//             var p = this.each((function() { this._animateNumberSetter = t.numberStep })),
//                 m = r.complete;
//             r.complete = function() { p.each((function() { delete this._animateNumberSetter })), m && m.apply(this, arguments) }
//         }
//         return o.animate.apply(o, a)
//     }
// }(jQuery);

/*

working but not useful for projects because it does not work on scroll 

 */
// $('.number').each(function() {
//     $(this).prop('Counter', 0).animate({
//         Counter: $(this).text()
//     }, {
//         duration: 32000,
//         easing: 'swing',
//         step: function(now) {
//             $(this).text(Math.ceil(now));
//         }
//     });
// });



var a = 0;
$(window).scroll(function() {

    var oTop = $('#counter').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $('.number').each(function() {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            }, {
                duration: 3600,
                easing: 'swing',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                    //alert('finished');
                }

            });
        });
        a = 1;
    }

});