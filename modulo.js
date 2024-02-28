ternurines = ['Freya Chocolate', 
                'Sharon Fennec', 
                'Kippie Waddle', 
                'Ginger Snowdrift', 
                'Kate Perlwinkle', 
                'Avril Husky', 
                'Nancy Brightfield', 
                'Bran Highbranch', 
                'Lona Dale', 
                'Saffron Walnut'];

function randomTernurin() {
    let random = Math.floor(Math.random() * ternurines.length);
    console.log(ternurines[random]);
}

module.exports.randomTernurin = randomTernurin;