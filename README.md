# Credit Card Validator
 A simple credit card validator.

[https://alex-t-reed.github.io/Credit-Card-Validator/](https://alex-t-reed.github.io/Credit-Card-Validator/)

Credit card numbers consist of three parts:
1. Bank identification number or issue identification number (first 6 digits)
    - Some may be shorter than 6 digits in length, for example Visa, which is simply the number 4
2. Individual account number (6 to 9 digits long)
3. Check digit, added to validate authenticity based on [Luhn algorithm](https://wikipedia.org/wiki/Luhn_algorithm)

You can read more about validating credit cards here:
- [https://www.groundlabs.com/blog/anatomy-of-a-credit-card-luhn-checks-bin-ranges-data-discovery/](https://www.groundlabs.com/blog/anatomy-of-a-credit-card-luhn-checks-bin-ranges-data-discovery/)
- [https://stevemorse.org/ssn/cc.html](https://stevemorse.org/ssn/cc.html)