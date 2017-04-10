/**
 * 清除空格
 * @param content
 * @returns {*}
 */
export const trim = (content) => {
    return content.replace(/\s/g, '');
}

/**
 * 电话号码分割
 * @param tel
 * @param connect
 */
export const telSeparator = (tel, connect) => {
    var arrs = [],
        connect = connect || ' ';
    if (!tel) return '';
    tel = tel.toString().replace(/\s/g, '');
    arrs.push(tel.substring(0, 3));
    arrs.push(tel.substring(3, 7));
    arrs.push(tel.substring(7, 11));
    return arrs.join(connect).trimRight();
}
/**
 * 获取平台
 * @return {[string]} 平台信息
 */
export const getOS = () => {
	var ua = window.navigator.userAgent.toLowerCase();
	var os = null;
	
	if (ua.indexOf("iphone") > -1 || ua.indexOf("ipad") > -1 || ua.indexOf("ipod") > -1) {
        os = "ios";
    } else if (ua.indexOf("android") > -1) {
        os = "android";
    } else if(ua.indexOf('windows phone')){
		os = "wp";
    } else if(ua.indexOf('symbianos')){
		os = "sb";
    } else {
        os = 'pc';
    }
    return os;
}
