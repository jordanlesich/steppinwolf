export const steps = [
  {
    step: 0,
    tag: "Q0",
    frame: [
      {
        type: "message",
        message: "Welcome to SteppinWolf JS",
      },
      {
        type: "message",
        message: "Let's start with an easy question",
      },
      {
        type: "singleQA",
        question: "How long has the Portal Project Discord been open?",
        subText: "Rougly speaking. No need to be specific",
        help:
          "Type your response into the input then hit the submit button or the 'Enter' key to pass in your response.",
        response: "Thanks. On to the next question",
        input: {
          type: "textInput",
          dataLabel: "serverLifespan",
          validation: [
            { type: "not-empty", response: "Please type in a response" },
          ],
        },
      },
    ],
  },
  {
    step: 0,
    tag: "Q1",
    frame: [
      {
        type: "message",
        message: "Welcome to SteppinWolf JS",
      },
      {
        type: "message",
        message: "Let's start with an easy question",
      },
      {
        type: "singleQA",
        question: "How long has the Portal Project Discord been open?",
        subText: "Rougly speaking. No need to be specific",
        help:
          "Type your response into the input then hit the submit button or the 'Enter' key to pass in your response.",
        input: {
          type: "text",
          dataLabel: "serverLifespan",
          validation: [
            { type: "not-empty", response: "Please type in a response" },
          ],
          response: "Thanks. On to the next question",
        },
      },
    ],
  },
];