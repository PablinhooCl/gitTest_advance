function caesarCipher(msg, key)
{
    var encMsg = "";

    for(var i = 0; i < msg.length; i++)
    {
        var code = msg.charCodeAt(i);

        // Encrypt only letters in 'A' ... 'Z' interval
        if (code >= 65 && code <= 90 )
        {
            code -= 65;
            code = mod(code + key, 26);
            code += 65;
        }else if((code >= 97 && code <= 122)){
            code -= 97;
            code = mod(code + key, 26);
            code += 97;
        }

        encMsg += String.fromCharCode(code);
    }

    return encMsg;
}
function mod(n, m) {
    return ((n % m) + m) % m;
  }
module.exports = caesarCipher;
export {caesarCipher};