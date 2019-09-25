import React from 'react';

const QUESTION_DATA = [
  {
    question: <span>Ms. Durkin asked for volunteers to help ..... with the employee fitness program.</span>,
    answers: [
      <span>she</span>,
      <span>her</span>,
      <span>hers</span>,
      <span>herself</span>
    ],
    correct: 1
  },
  {
    question: <span>Lasner Electronics' staff have extensive ..... of current hardware systems.</span>,
    answers: [
      <span>know</span>,
      <span>known</span>,
      <span>knowledge</span>,
      <span>knowledgeable</span>
    ],
    correct: 2
  },
  {
    question: <span>..... a year, Tarrin Industrial Supply audits the accounts of all its factories.</span>,
    answers: [
      <span>Once</span>,
      <span>Immediately</span>,
      <span>Directly</span>,
      <span>Yet</span>
    ],
    correct: 0
  },
  {
    question: <span>Ms. Pham requested a refund ..... the coffeemaker she received was damaged.</span>,
    answers: [
      <span>despite</span>,
      <span>why</span>,
      <span>concerning</span>,
      <span>because</span>
    ],
    correct: 3
  },
  {
    question: <span>Information ..... the artwork in the lobby is available at the reception desk.</span>,
    answers: [
      <span>across</span>,
      <span>about</span>,
      <span>upon</span>,
      <span>except</span>
    ],
    correct: 1
  },
  {
    question: <span>With the Gema XTI binoculars, users can ..... see objects that are more than 100 meters away.</span>,
    answers: [
      <span>ease</span>,
      <span>easy</span>,
      <span>easily</span>,
      <span>easier</span>
    ],
    correct: 2
  },
  {
    question: <span>The Physical Therapy Association is commited to keeping costs ..... for its certification programs.</span>,
    answers: [
      <span>affordable</span>,
      <span>permitted</span>,
      <span>cutting</span>,
      <span>necessary</span>
    ],
    correct: 0
  },
  {
    question: <span>Mr. Brennel ..... positions in various areas of the company before he became president.</span>,
    answers: [
      <span>occupation</span>,
      <span>occupational</span>,
      <span>occupying</span>,
      <span>occupied</span>
    ],
    correct: 3
  },
  {
    question: <span>To remain on schedule, editors must submit all ..... to the book to the authors by Friday.</span>,
    answers: [
      <span>ideas</span>,
      <span>essays</span>,
      <span>revisions</span>,
      <span>suggestions</span>
    ],
    correct: 2
  },
  {
    question: <span>..... industry professionals are allowed to purchase tickets to the Kuo Photography Fair</span>,
    answers: [
      <span>Only</span>,
      <span>Until</span>,
      <span>Unless</span>,
      <span>Quite</span>
    ],
    correct: 0
  },
  {
    question: <span>At Pharmbeck's banquet, Mr. Jones ..... a trophy for his performance in this year's quality-improvement initiative.</span>,
    answers: [
      <span>accepted</span>,
      <span>congratulated</span>,
      <span>nominated</span>,
      <span>hoped</span>
    ],
    correct: 0
  },
  {
    question: <span>Ms. Suto claims that important market trends become ..... with the use of data analysis.</span>,
    answers: [
      <span>predict</span>,
      <span>prediction</span>,
      <span>predictable</span>,
      <span>predictably</span>
    ],
    correct: 2
  },
  {
    question: <span>One of Grommer Consulting's goals is to enhance the relationship ..... salespeople and their customers.</span>,
    answers: [
      <span>inside</span>,
      <span>within</span>,
      <span>around</span>,
      <span>between</span>
    ],
    correct: 3
  },
  {
    question: <span>Depending on your answers to the survey, we ..... you to collect additional information.</span>,
    answers: [
      <span>may call</span>,
      <span>are calling</span>,
      <span>have been called</span>,
      <span>must be calling</span>
    ],
    correct: 0
  },
  {
    question: <span>..... Jemburger opened its newest franchise, the first 100 customers were given free hamburgers.</span>,
    answers: [
      <span>Now</span>,
      <span>When</span>,
      <span>As if</span>,
      <span>After all</span>
    ],
    correct: 1
  },
  {
    question: <span>Please include the serial number of your product in any ..... with the customer service department.</span>,
    answers: [
      <span>corresponds</span>,
      <span>correspondence</span>,
      <span>correspondingly</span>,
      <span>correspondent</span>
    ],
    correct: 1
  },
  {
    question: <span>The award-winning film Underwater Secrets promotes awareness ..... ocean pollution and its effects on our planet.</span>,
    answers: [
      <span>of</span>,
      <span>to</span>,
      <span>form</span>,
      <span>with</span>
    ],
    correct: 0
  },
  {
    question: <span>BYF Company specializes in ..... promotional items to help companies advertise their brand.</span>,
    answers: [
      <span>personally</span>,
      <span>personalized</span>,
      <span>personality</span>,
      <span>personalizes</span>
    ],
    correct: 1
  },
  {
    question: <span>..... the rent increase is less than 2 percent, Selwin Electrical Supply will continue to lease the space.</span>,
    answers: [
      <span>As long as</span>,
      <span>Along with</span>,
      <span>Not only</span>,
      <span>Otherwise</span>
    ],
    correct: 0
  },
  {
    question: <span>Belden Hospital's chief of staff meets regularly with the staff to ensure that procedures ..... correctly.</span>,
    answers: [
      <span>to be performed</span>,
      <span>would have performed</span>,
      <span>had been performed</span>,
      <span>are being performed</span>
    ],
    correct: 3
  },
  {
    question: <span>Any requests for time off should be addressed to the ..... department supervisor.</span>,
    answers: [
      <span>urgent</span>,
      <span>appropriate</span>,
      <span>subsequent</span>,
      <span>deliverable</span>
    ],
    correct: 1
  },
  {
    question: <span>World Fish Supply delivers the freshest fish possible thanks to innovative ..... and shipping methods.</span>,
    answers: [
      <span>preserves</span>,
      <span>preserved</span>,
      <span>preserve</span>,
      <span>preservation</span>
    ],
    correct: 3
  },
  {
    question: <span>Company executives are currently reviewing the annual budget ..... submitted to them by the Financial Planning</span>,
    answers: [
      <span>requirements</span>,
      <span>deliveries</span>,
      <span>developers</span>,
      <span>qualities</span>
    ],
    correct: 0
  },
  {
    question: <span>Even the CEO had to admit that Prasma Designs' win was ..... the result of fortunate timing.</span>,
    answers: [
      <span>parts</span>,
      <span>parted</span>,
      <span>partly</span>,
      <span>parting</span>
    ],
    correct: 2
  },
  {
    question: <span>Mr. Singh took notes on ..... the focus group discussed during the morning session.</span>,
    answers: [
      <span>each</span>,
      <span>several</span>,
      <span>another</span>,
      <span>everything</span>
    ],
    correct: 3
  },
  {
    question: <span>Last year, Tadaka Computer Solutions ranked third ..... in regional earnings.</span>,
    answers: [
      <span>together</span>,
      <span>overall</span>,
      <span>consecutively</span>,
      <span>generally</span>
    ],
    correct: 1
  },
  {
    question: <span>..... the popularity of the BPT39 wireless speaker, production will be increased fivefold starting next month.</span>,
    answers: [
      <span>On behalf of</span>,
      <span>Whether</span>,
      <span>Moreover</span>,
      <span>As a result of</span>
    ],
    correct: 3
  },
  {
    question: <span>Zypo Properties has just signed a lease agreement with the law firm ..... offices are on the third floor.</span>,
    answers: [
      <span>how</span>,
      <span>what</span>,
      <span>whose</span>,
      <span>wherever</span>
    ],
    correct: 2
  },
  {
    question: <span>..... events this year caused profits in the second and third quarters to differ significantly from original projections.</span>,
    answers: [
      <span>Total</span>,
      <span>Marginal</span>,
      <span>Representative</span>,
      <span>Unforeseen</span>
    ],
    correct: 3
  },
  {
    question: <span>The timeline for the pathway lighting project was extended to ..... input from the environmental commission.</span>,
    answers: [
      <span>use up</span>,
      <span>believe in</span>,
      <span>make into</span>,
      <span>allow for</span>
    ],
    correct: 3
  }
];

export default QUESTION_DATA;
