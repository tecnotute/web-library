function addCopyButtons(clipboard) {
    document.querySelectorAll('pre > code').forEach(function(codeBlock) {
        var ButtonCopy = document.getElementById('ButtonCopy');
        ButtonCopy.type = 'Button';
        ButtonCopy.title = 'Click to copy code'
        ButtonCopy.className = 'copy-code-button rounded-lg text-white block ml-auto mr-4 px-6 py-2 capitalize text-lg cursor-pointer focus:outline-0 duration-500 ease- bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-600';
        ButtonCopy.innerHTML = '<i class="fa fa-clipboard"> </i>&nbsp;copy';
        ButtonCopy.style

        ButtonCopy.addEventListener('click', function() {
            // var error = 'd';
            clipboard.writeText(codeBlock.innerText).then(function() {
                /* Chrome doesn't seem to blur automatically,
                   leaving the ButtonCopy in a focused state. */
                ButtonCopy.blur();

                ButtonCopy.innerHTML = '<i class="fa fa-clipboard-check"></i>&nbsp;Copied';

                setTimeout(function() {
                    ButtonCopy.innerHTML = '<i class="fa fa-clipboard"> </i>&nbsp;copy';
                }, 5000);
            }, function(error) {
                ButtonCopy.innerHTML = '<i class="fa fa-exclamation-circle"></i>&nbsp;Error';
            });
        });

        var pre = codeBlock.parentNode;
        if (pre.parentNode.classList.contains('highlight')) {
            var highlight = pre.parentNode;
            highlight.parentNode.insertBefore(ButtonCopy, highlight);
        } else {
            pre.parentNode.insertBefore(ButtonCopy, pre);
        }
    });
}
// ButtonCopy.innerText = 'Copy code';

// To add icon in copy code button :) 
// document.getElementById('ButtonCopy').innerHTML = '<i class="fa fa-clipboard"> </i>'

if (navigator && navigator.clipboard) {
    addCopyButtons(navigator.clipboard);
} else {
    var script = document.createElement('script');
    script.src = '../vendor/highLight.JS/Plugin-CopyCode.js';
    script.integrity = 'sha256-waClS2re9NUbXRsryKoof+F9qc1gjjIhc2eT7ZbIv94=';
    script.crossOrigin = 'anonymous';
    script.onload = function() {
        addCopyButtons(clipboard);
    };
    document.body.appendChild(script);
}