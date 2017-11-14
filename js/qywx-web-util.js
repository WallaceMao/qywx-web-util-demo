(function (window, document) {
    var ALERT_ID = 'rsqWeAlert'
    function makeElement (params) {
        var tag = params.tag || "div"
        var ele = document.createElement(tag)
        if (params.id) {
            ele.setAttribute("id", params.id)
        }
        if (params.classList) {
            ele.setAttribute("class", params.classList)
        }
        if (params.style) {
            ele.setAttribute("style", params.style)
        }
        return ele
    }
    function alertTemplate (options){
        var title = options.title || '提示'
        var msg = options.message || ''
        var btn = options.button || '确定'
        var html =
                '<div class="weui-mask"></div>' +
                '<div class="weui-dialog">' +
                    '<div class="weui-dialog__hd">' +
                        '<strong class="weui-dialog__title">' + title + '</strong>' +
                    '</div>' +
                    '<div class="weui-dialog__bd">' + msg + '</div>' +
                    '<div class="weui-dialog__ft">' +
                        '<a id="rsqAlertBtn" href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary">' + btn + '</a>' +
                    '</div>' +
                '</div>'
        return html
    }
    function showAlert (params) {
        var ele = makeElement({id: ALERT_ID})
        ele.innerHTML = alertTemplate(params)
        document.body.appendChild(ele)
        var btn = ele.querySelector(".weui-dialog__btn")
        btn.addEventListener('click', hideAlert)
    }
    function hideAlert (params) {
        var ele = document.getElementById(ALERT_ID)
        document.body.removeChild(ele)
    }
    window.rsqwork = {
        showAlert: showAlert,
        hideAlert: hideAlert
    }
})(window, document)