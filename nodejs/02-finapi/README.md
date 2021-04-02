<h1 align="center">
    FinAPI
</h1>

<h4 align="center">
  A NodeJs API to manage finances stuffs, promoted by Daniele Leão Evangelista (Rocketseat) during the Ignite bootcamp.
</h4>

## 🎯 Requirements
- [X] Should be able to create an account
- [X] Should be able to fetch the customer's statement
- [X] Should be able to make a deposit
- [X] Should be able to make a withdrawal
- [X] Should be able to fetch the customer's statement by date
- [X] Should be able to update customer account data
- [X] Should be able to get customer account data
- [X] Should be able to get customer account balance
- [X] Should be able to delete an account
  
## 🚫 Rules
- [X] Should not be able to create an account with existing CPF
- [X] Should not be able to fetch statements from a non-existing account
- [X] Should not be able to make a deposit to a non-existing account
- [X] Should not be able to make a withdrawal from a non-existing account
- [X] Should not be able to make a withdrawal when the balance is insufficient
- [X] Should not be able to delete a non-existing account

## 🔱 Routes examples (with cURL)

### Accounts

- Get account's data:
  ```bash
  $ curl --request GET \
    --url 'http://localhost:3333/accounts' \
    --header 'cpf: 99999999999'
  }'
  ```

- Get account's balance:
  ```bash
  $ curl --request GET \
    --url http://localhost:3333/accounts/balance \
    --header 'cpf: 99999999999'
  ```

- Create an account:
  ```bash
  $ curl --request POST \
    --url http://localhost:3333/accounts \
    --header 'Content-Type: application/json' \
    --data '{ "cpf": "99999999999", "name": "Alex Freitag" }'
  ```

- Update account's data:
  ```bash
  $ curl --request PUT \
    --url http://localhost:3333/accounts \
    --header 'Content-Type: application/json' \
    --header 'cpf: 99999999999' \
    --data '{ "name": "Eduardo" }'
  ```

- Remove account:
  ```bash
  $ curl --request DELETE \
    --url http://localhost:3333/accounts \
    --header 'cpf: 99999999999'
  ```

### Statements

- List statements (by date):
  ```bash
  $ curl --request GET \
  --url 'http://localhost:3333/statements?date=2021-03-24' \
  --header 'cpf: 99999999999'
  ```

### Deposits

- Make deposit:
  ```bash
  $ curl --request POST \
    --url http://localhost:3333/deposits \
    --header 'Content-Type: application/json' \
    --header 'cpf: 99999999999' \
    --data '{ "description": "Depósito do Ignite", "amount": 1500.00 }'
  ```

### Withdrawals

- Make withdrawal:
  ```bash
  $ curl --request POST \
    --url http://localhost:3333/withdrawals \
    --header 'Content-Type: application/json' \
    --header 'cpf: 99999999999' \
    --data '{ "amount": 800.00 }'
  ```




---
Made with 💜 by Alex Freitag 