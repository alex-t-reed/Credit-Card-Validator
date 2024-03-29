let card = document.getElementsByTagName('input')[0];

// Limits input to 18 digits
card.addEventListener('keypress', function () {
    if (card.value.length > 17) {
        card.value = card.value.substr(0, 18);
        alert('Only cards up to 18 digits are supported, do not enter spaces.');
    }
});

// Removes spaces from input
card.addEventListener('keypress', () => {
    let old = card.value;
    card.value = old.split(' ').join('');
});

card.addEventListener('keypress', function () {
    if (!/[^a-zA-Z]/.test(card.value)) {
        card.value = '';
    }
});

// Stops space abuse
card.addEventListener('keypress', () => {
    if (card.value.trim() == '') {
        card.value = '';
    }
});

function luhnAlgo(num) {
    var sum = 0;
    for (i = 0; i < num.length; i++) {
        if (i % 2 == 0) {
            if (parseInt(num[i] * 2) < 10) {
                sum += parseInt(num[i] * 2);
            } else {
                let fix = parseInt(num[i] * 2);
                let num1 = fix.toString()[0];
                let num2 = fix.toString()[1];
                sum += parseInt(num1) + parseInt(num2);
            }
        } else {
            sum += parseInt(num[i]);
        }
    }
    if (sum % 10 == 0 && num.length > 0 && num.trim() != "") {
        return true;
    } else {
        return false;
    }
}

let tests = [
    {
        "name": "American Express",
        "range": ['24', '37'],
        "length": [15]
    },
    {
        "name": "Visa",
        "range": ['4'],
        "length": [13, 16]
    },
    {
        "name": "Discover",
        "range": ['6011', '622', '644', '645', '646', '647', '648', '649', '65'],
        "length": [16]
    },
    {
        "name": "MasterCard",
        "range": ['51', '52', '53', '54', '55'],
        "length": [16]
    },
    {
        "name": "Maestro",
        "range": ['5018', '5020', '5038', '6304', '6759', '6761', '6762', '6763'],
        "length": [16]
    },
    {
        "name": "Diners Club and Carte Blanche",
        "range": ['36', '38', '300', '301', '302', '303', '304', '305'],
        "length": [14]
    },
    {
        "name": "JCB",
        "range": ['2123', '1800'],
        "length": [15]
    },
    {
        "name": "JCB",
        "range": ['3'],
        "length": [16]
    }
];

function check() {
    let authenticity = {};
    if (luhnAlgo(card.value)) {
        authenticity.boolean = true;
        for (i = 0; i < tests.length; i++) {
            for (j = 0; j < tests[i].range.length; j++) {
                if (card.value.startsWith(tests[i].range[j])) {
                    authenticity.name = tests[i].name;
                    let cardDisplay = document.getElementById('card-info');
                    cardDisplay.classList.add('active');
                    let type = document.getElementsByTagName('h2')[0];
                    type.classList.add('active');
                    type.innerText = authenticity.name + ' Card';
                    let cardNumber = document.getElementsByTagName('h1')[1];
                    cardNumber.classList.add('active');
                    cardNumber.innerText = card.value;
                    break;
                }
            }
        }
    } else {
        let cardDisplay = document.getElementById('card-info');
        cardDisplay.classList.remove('active');
        let type = document.getElementsByTagName('h2')[0];
        type.classList.remove('active');
        let cardNumber = document.getElementsByTagName('h1')[1];
        cardNumber.classList.remove('active');
        authenticity.boolean = false;
        if (authenticity.name) {
            delete authenticity.name;
        }
        if (card.value.length == 0 || !/[^a-zA-Z]/.test(card.value)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You need to enter in a card first.'
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'The card is invalid.'
            });
        }
    }
    if (authenticity.boolean && typeof authenticity.name != 'string') {
        Swal.fire({
            icon: 'success',
            title: 'Valid Card',
            text: 'The card number is valid, but we do not recognize it yet.'
        });
    }
    console.log(authenticity);
}
