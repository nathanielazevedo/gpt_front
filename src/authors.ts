export const authors = [
  {
    name: "Ashish Vaswani∗",
    affiliation: "Google Brain",
    email: "avaswani@google.com",
  },
  {
    name: "Noam Shazeer∗",
    affiliation: "Google Brain",
    email: "noam@google.com",
  },
  {
    name: "Niki Parmar∗",
    affiliation: "Google Research",
    email: "nikip@google.com",
  },
  {
    name: "Jakob Uszkoreit∗",
    affiliation: "Google Research",
    email: "usz@google.com",
  },
  {
    name: "Llion Jones∗",
    affiliation: "Google Research",
    email: "llion@google.com",
  },
  {
    name: "Aidan N. Gomez∗",
    affiliation: "University of Toronto",
    email: "aidan@cs.toronto.edu",
  },
  {
    name: "Lukasz Kaiser∗",
    affiliation: "Google Brain",
    email: "lukaszkaiser@google.com",
  },
  {
    name: "Illia Polosukhin∗",
    affiliation: "OpenAI",
    email: "illia.polosukhin@gmail.com",
  },
];

export const transOptions = [
  {
    title: "For a 3rd Grader",
    prompt: "Summarize this for a second-grade student:/n/n",
  },
  {
    title: "For an 8th Grader",
    prompt: "Summarize this for an eigth-grade student:/n/n",
  },
];

export const text =
  "The dominant sequence transduction models are based on complex recurrent or convolutional neural networks that include an encoder and a decoder. The best performing models also connect the encoder and decoder through an attention mechanism. We propose a new simple network architecture, the Transformer, based solely on attention mechanisms, dispensing with recurrence and convolutions entirely. Experiments on two machine translation tasks show these models to be superior in quality while being more parallelizable and requiring significantly less time to train. Our model achieves 28.4 BLEU on the WMT 2014 Englishto-German translation task, improving over the existing best results, including ensembles, by over 2 BLEU. On the WMT 2014 English-to-French translation task, our model establishes a new single-model state-of-the-art BLEU score of 41.0 after training for 3.5 days on eight GPUs, a small fraction of the training costs of the best models from the literature.";
