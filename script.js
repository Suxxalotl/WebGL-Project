'use strict'

document.addEventListener('DOMContentLoaded', main);

function main() {
    const CANVAS = document.getElementById('canvas');
    const gl = CANVAS.getContext('webgl');

    if (gl == null){
        alert('there was an issue initializing webGL. Your browser/machine might not support it.');
        return;
    }


}
