import $ from 'jquery'


const loadHtmlSucessCallback = []

export function onLoadHtmlSuccess(callback){
    if(!loadHtmlSucessCallback.includes(callback)){
        loadHtmlSucessCallback.push(callback)
    }
}

function loadInclude(parent) {
    if (!parent) parent = 'body'
    $(parent).find('[wm-include]')
        .each(function (i, e) {
            const url = $(e).attr('wm-include')
            $.ajax({
                url,
                success(data) {
                    $(e).html(data)
                    $(e).removeAttr('wm-include')

                    loadHtmlSucessCallback.forEach(callback=>callback(data))

                    loadInclude(e)
                }
            })
        })
}

loadInclude()