const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(express.json());

const customers = [];

function verifyIfExistsAccountByCPF(request, response, next) {
  const { cpf } = request.headers;

  const customer = customers.find(
    (customer) => customer.cpf === cpf
  );

  if (!customer) {
    return response.status(404).json({ error: 'Customer not found.' });
  }

  request.customer = customer;

  return next();
}

function getBalance(statement) {
  const balance = statement.reduce((acc, operation) => {
    return operation.type === 'credit' 
      ? acc + operation.amount
      : acc - operation.amount;
  }, 0)

  return balance;
}

app.post('/accounts', (request, response) => {
  const { cpf, name } = request.body;

  const customerAlreadyExists = customers.some(
    (customer) => customer.cpf === cpf
  );

  if (customerAlreadyExists) {
    return response.status(400).json({
      error: 'Customer already exists!'
    })
  }

  customers.push({
    id: uuidv4(),
    cpf,
    name,
    statement: []
  });

  return response.status(201).send();
});

app.get('/statements', verifyIfExistsAccountByCPF, (request, response) => {
  const { customer } = request;

  const { date } = request.query;

  if (date) {
    const dateFormat = new Date(date + ' 00:00')

    const statements = customer.statement.filter((statement) =>
      statement.created_at.toDateString() === new Date(dateFormat).toDateString()
    )

    return response.json(statements);
  }

  return response.json(customer.statement);
})

app.post('/deposits', verifyIfExistsAccountByCPF, (request, response) => {
  const { description, amount } = request.body;

  const { customer } = request;

  const statementOperation = {
    description,
    amount,
    created_at: new Date(),
    type: 'credit'
  };

  customer.statement.push(statementOperation);

  return response.status(201).send();
})

app.post('/withdrawals', verifyIfExistsAccountByCPF, (request, response) => {
  const { amount } = request.body;
  const { customer } = request;

  const balance = getBalance(customer.statement);

  if (balance < amount) {
    return response.status(400).json({ error: 'Insufficient funds!' })
  }

  const statementOperation = {
    amount,
    created_at: new Date(),
    type: 'debit'
  };

  customer.statement.push(statementOperation);

  return response.status(201).send();
})

app.put('/accounts', verifyIfExistsAccountByCPF, (request, response) => {
  const { name } = request.body;
  const { customer } = request;

  customer.name = name;

  return response.status(201).send();
})

app.get('/accounts', verifyIfExistsAccountByCPF, (request, response) => {
  const { customer } = request;

  return response.json(customer);
})

app.listen(3333);