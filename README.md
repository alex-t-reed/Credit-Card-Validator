# Credit Card Validator

A simple credit card validator.

---

- [Demo](https://alex-t-reed.github.io/Credit-Card-Validator/)
- [Introduction](#introduction)
- [How to Use](#how-to-use)
- [Understanding Credit Card Numbers](#understanding-credit-card-numbers)
- [Validation Algorithm](#validation-algorithm)
- [Additional Resources](#additional-resources)
- [Contact](#contact)

---

## Introduction

This is a basic web application that allows users to validate credit card numbers. It uses the Luhn algorithm to determine the validity of the input card number. Feel free to try entering your card number and see the result. You can also experiment with changing one digit to observe the validation process.

## How to Use

1. Visit the [Credit Card Validator Demo](https://alex-t-reed.github.io/Credit-Card-Validator/).
2. Input your credit card number in the provided text field.
3. Click the "Check" button to validate the card.
4. The application will display whether the card is valid or not, along with the card type (e.g., Visa, MasterCard).

## Understanding Credit Card Numbers

Credit card numbers consist of three main parts:

1. **Bank Identification Number (BIN) or Issuer Identification Number (IIN)**: The first 6 digits of a credit card number. Some issuers may have shorter identification numbers, such as Visa (which starts with the digit 4).

2. **Individual Account Number**: This part is typically 6 to 9 digits long and uniquely identifies the cardholder's account.

3. **Check Digit**: The final digit of the credit card number, added to validate the authenticity of the entire number using the [Luhn algorithm](https://en.wikipedia.org/wiki/Luhn_algorithm).

## Validation Algorithm

The application uses the Luhn algorithm to validate credit card numbers. This algorithm verifies the integrity of the card number by performing a series of mathematical operations on the digits and checking if the result is divisible by 10.

## Additional Resources

For more information on credit card validation and anatomy, you can explore these resources:

- [Anatomy of a Credit Card: Luhn Checks, BIN Ranges, Data Discovery](https://www.groundlabs.com/blog/anatomy-of-a-credit-card-luhn-checks-bin-ranges-data-discovery/)
- [Steve Morse's Credit Card Validator](https://stevemorse.org/ssn/cc.html)

## Contact

- **Email**: [Alex Reed](mailto:alexreed@ucsb.edu)
- **LinkedIn**: [Alex Reed on LinkedIn](https://www.linkedin.com/in/alextreed?trk=profile-badge)

<div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="alextreed" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/alextreed?trk=profile-badge">Alex Reed</a></div>

Feel free to explore the [demo](https://alex-t-reed.github.io/Credit-Card-Validator/) and learn more about credit card validation!
