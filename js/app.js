const baseURL = 'https://www.misalink.tk';

window.onload = function () {
    document.getElementById("url").focus();
}

const sendReq = () => {
    $('#result').val('');
    const createText = $('#create-button-text');
    const loading = $('#loading');
    createText.css('display', 'none');
    loading.css('display', 'inline-block');
    const url = $('#url').val();
    const password = $('#password').val();
    const body = {};
    if (password !== '') body.password = password;
    body.link = url;

    axios.post(`${baseURL}/document/encode`, body)
    .then(res => {
        createText.css('display', 'inline-block');
        loading.css('display', 'none');
        if (res.data.message) $('#result').val('URL is invalid');
        if (res.data.code) $('#result').val(`${baseURL}/${res.data.code}`);
    });
}

$(document).ready(() => {
    $('#form').on('submit', (e) => {
        e.preventDefault();
        sendReq();
    });
});

$("#copy-button").click(() => {
    var copyText = document.getElementById("result");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
});
