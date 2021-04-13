document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    let botaoTirarFoto = document.getElementById("botaoTirarFoto");
    botaoTirarFoto.addEventListener('click', TirarFoto);
}

function TirarFoto() {
    if (!navigator.camera) {
        alert("Erro: o plugin do cordova nao foi instalado!!")
    }
    var options = {
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL,
        encodingType: Camera.EncodingType.JPEG,
        mediaType: Camera.MediaType.PICTURE,
        sourceType: 1,
        encodingType: 0
    }

    navigator.camera.getPicture(
        function(imgData) {
            let imgHTMLTag = document.getElementById("imgHTMLTag");
            imgHTMLTag.src = "data:image/jpeg;base64,"+imgData;
        },
        function(e) {
            alert(e);
        }, options);

}
