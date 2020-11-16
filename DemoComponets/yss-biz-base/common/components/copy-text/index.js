
import { isFunc, setStyle, addClass } from 'yss-biz'
let clipboardInstance

const getClipBoardInstance = () => {
    let clipboardInstance = document.createElement('textarea')
    addClass(clipboardInstance, 'yss-copy-onlyone-textarea')
    setStyle(clipboardInstance, { opacity: 0, position: 'fixed', top: '-100px', })
    document.body.appendChild(clipboardInstance)
    return clipboardInstance
}

export default (text, onSuccess, onError) => {
    clipboardInstance = clipboardInstance || getClipBoardInstance()
    clipboardInstance.value = text
    clipboardInstance.select();
    clipboardInstance.setSelectionRange(0, clipboardInstance.value.length);
    let res;
    try {
        document.execCommand('copy');
        res = true;
    } catch (err) {
        res = false;
    }
    if (res) {
        isFunc(onSuccess) && onSuccess();
    } else {
        isFunc(onError) && onError();
    }
}