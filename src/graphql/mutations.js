/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAnswers = /* GraphQL */ `
  mutation CreateAnswers(
    $input: CreateAnswersInput!
    $condition: ModelAnswersConditionInput
  ) {
    createAnswers(input: $input, condition: $condition) {
      id
      answer1
      answer2
      answer3
      answer4
      createdAt
      updatedAt
    }
  }
`;
export const updateAnswers = /* GraphQL */ `
  mutation UpdateAnswers(
    $input: UpdateAnswersInput!
    $condition: ModelAnswersConditionInput
  ) {
    updateAnswers(input: $input, condition: $condition) {
      id
      answer1
      answer2
      answer3
      answer4
      createdAt
      updatedAt
    }
  }
`;
export const deleteAnswers = /* GraphQL */ `
  mutation DeleteAnswers(
    $input: DeleteAnswersInput!
    $condition: ModelAnswersConditionInput
  ) {
    deleteAnswers(input: $input, condition: $condition) {
      id
      answer1
      answer2
      answer3
      answer4
      createdAt
      updatedAt
    }
  }
`;
export const createOptions = /* GraphQL */ `
  mutation CreateOptions(
    $input: CreateOptionsInput!
    $condition: ModelOptionsConditionInput
  ) {
    createOptions(input: $input, condition: $condition) {
      id
      option1
      option2
      option3
      option4
      createdAt
      updatedAt
    }
  }
`;
export const updateOptions = /* GraphQL */ `
  mutation UpdateOptions(
    $input: UpdateOptionsInput!
    $condition: ModelOptionsConditionInput
  ) {
    updateOptions(input: $input, condition: $condition) {
      id
      option1
      option2
      option3
      option4
      createdAt
      updatedAt
    }
  }
`;
export const deleteOptions = /* GraphQL */ `
  mutation DeleteOptions(
    $input: DeleteOptionsInput!
    $condition: ModelOptionsConditionInput
  ) {
    deleteOptions(input: $input, condition: $condition) {
      id
      option1
      option2
      option3
      option4
      createdAt
      updatedAt
    }
  }
`;
export const createQuestions = /* GraphQL */ `
  mutation CreateQuestions(
    $input: CreateQuestionsInput!
    $condition: ModelQuestionsConditionInput
  ) {
    createQuestions(input: $input, condition: $condition) {
      id
      question
      createdAt
      updatedAt
    }
  }
`;
export const updateQuestions = /* GraphQL */ `
  mutation UpdateQuestions(
    $input: UpdateQuestionsInput!
    $condition: ModelQuestionsConditionInput
  ) {
    updateQuestions(input: $input, condition: $condition) {
      id
      question
      createdAt
      updatedAt
    }
  }
`;
export const deleteQuestions = /* GraphQL */ `
  mutation DeleteQuestions(
    $input: DeleteQuestionsInput!
    $condition: ModelQuestionsConditionInput
  ) {
    deleteQuestions(input: $input, condition: $condition) {
      id
      question
      createdAt
      updatedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      username
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      username
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      username
      createdAt
      updatedAt
    }
  }
`;
