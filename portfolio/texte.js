

var suite = document.getElementById('suite');
var p = document.createElement('p');

var texte = document.createTextNode('j'ai dû démissionner pour effectuer une reconversion professionnelle dans le Développement Web, domaine qui m’intéresse depuis de nombreuses années.
J’ai donc suivi la formation au sein de la 3W Academy...');

suite.onclick = function() {
suite.parentNode.removeChild(suite);
document.body.appendChild(p)
p.appendChild(texte);
}
