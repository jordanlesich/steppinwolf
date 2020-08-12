export const data = [
  {
    step: 0,
    tag: "Q0",
    frame: [
      {
        type: "message",
        message: "Welcome to SteppinWolf Demo",
      },
      {
        type: "message",
        message: "This is a message frame.",
        subText: "Each frame is rendered from JSON",
      },
      {
        type: "singleQA",
        question: "This is a simple Question/Answer Frame",
        tag: "Q0",
        subText: "Try it out.",
        help:
          "This adds additional text to help. It can be expressed in the JSON file",
        input: {
          type: "textBox",
          validation: [
            { type: "not-empty", response: "Please type in a response" },
          ],
        },
      },
    ],
  },
  {
    step: 1,
    tag: "Q1",
    frame: [
      {
        type: "singleQA",
        tag: "Q1",
        question: "How much do you love making forms?",
        subText: "Be honest",
        help: "Be really, really honest.",
        input: {
          type: "textBox",
          dataLabel: "serverLifespan",
          validation: [
            { type: "not-empty", response: "Please type in a response" },
          ],
        },
      },
    ],
  },
  {
    step: 2,
    tag: "Q2",
    frame: [
      {
        type: "message",
        message: "Same Here. No one has time for that shit",
      },
      {
        type: "singleQA",
        tag: "Q2",
        question: "What about theories of everything?",
        subText: "How much do you love those",
        help: "Be really, really honest.",
        input: {
          type: "textBox",
          dataLabel: "serverLifespan",
          validation: [
            { type: "not-empty", response: "Please type in a response" },
          ],
        },
      },
    ],
  },
  {
    step: 2,
    tag: "Q3",
    frame: [
      {
        type: "singleQA",
        tag: "Q3",
        question: "What about vetting people in Lobby/Introductions?",
        subText: "Wouldn't it be cool if something did that for you?",
        help: "Be really, really honest.",
        input: {
          type: "textBox",
          dataLabel: "serverLifespan",
          validation: [
            { type: "not-empty", response: "Please type in a response" },
          ],
        },
      },
      {
        type: "message",
        message: "We could use a different version of this for the server",
      },
      {
        type: "message",
        message: "All we need to do is type JSON",
      },
      {
        type: "message",
        message: "And just like that you have a stepper form.",
      },
    ],
  },
];
