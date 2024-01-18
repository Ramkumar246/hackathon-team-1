import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-quetions',
  templateUrl: './quetions.component.html',
  styleUrls: ['./quetions.component.css']
})
export class QuetionsComponent implements OnInit {
  survey: any; // Replace 'any' with your actual survey model interface
  currentSectionIndex = 0;
  userResponses: { [key: string]: string } = {};
  constructor(private AuthService: AuthService) {}

  ngOnInit(): void {
    let datas = this.getSampleSurveyData()
    this.survey = datas
      console.log(datas);
     // Fetch survey data from the service when the component initializes
    //  this.AuthService.getSurveyData().subscribe((data: any) => {
    //   // this.survey = data;
    //   // this.survey = 
    // });
  }

  selectValue(sectionId: number, category: string, value: string): void {
    // Store the user's response for the current section and category
    this.userResponses[`${sectionId}_${category}`] = value;
  }
  nextSection(): void {
    // Move to the next section
    this.currentSectionIndex++;

    if (this.currentSectionIndex === this.survey?.sections?.length) {
      console.log('Survey Completed!', this.userResponses);
      // You can send the responses to your server or perform any other actions here
      const storedData = localStorage.getItem('email');
      const selectlanguage = localStorage.getItem('language');
      console.log("storedData",storedData)
      let response = { 
        "email" :storedData , 
        "languageid" : selectlanguage,
        "responses" : this.userResponses
      }
   console.log("responsssss",response);
   

    }
  }
  getSampleSurveyData(): any {
    return{
      "sections": [
          [
              {
                  "id": 1,
                  "section": "Acceptance",
                  "question": "I distinguish my capacity to recognise factors beyond my control from my ability to intellectually pinpoint the reasons for such limitations, understanding that true acceptance hinges on cognitive comprehension rather than emotional reactions.",
                  "Importance": [
                      [
                          {
                              "id": 1,
                              "value": "Not a Priority\r\n"
                          },
                          {
                              "id": 2,
                              "value": "Low Priority\r\n"
                          },
                          {
                              "id": 3,
                              "value": "Priority\r\n"
                          },
                          {
                              "id": 4,
                              "value": "High Priority\r\n"
                          },
                          {
                              "id": 5,
                              "value": "Critical\r\n"
                          }
                      ]
                  ],
                  "Performance": [
                      [
                          {
                              "id": 6,
                              "value": "I am terrible at this\r\n"
                          },
                          {
                              "id": 7,
                              "value": "I am poor at this\r\n"
                          },
                          {
                              "id": 8,
                              "value": "I am average at this\r\n"
                          },
                          {
                              "id": 9,
                              "value": "I am good at this\r\n"
                          },
                          {
                              "id": 10,
                              "value": "I am excellent at this\r\n"
                          }
                      ]
                  ]
              }
          ],
          [
              {
                  "id": 2,
                  "section": "Ambition",
                  "question": "I closely assess my drive to embrace challenges as avenues for growth, my ability to manage my fear of failure, and my consistent commitment to self-care, recognising that true ambition balances aspiration with well-being to fortify self-confidence and mental resilience.",
                  "Importance": [
                      [
                          {
                              "id": 1,
                              "value": "Not a Priority\r\n"
                          },
                          {
                              "id": 2,
                              "value": "Low Priority\r\n"
                          },
                          {
                              "id": 3,
                              "value": "Priority\r\n"
                          },
                          {
                              "id": 4,
                              "value": "High Priority\r\n"
                          },
                          {
                              "id": 5,
                              "value": "Critical\r\n"
                          }
                      ]
                  ],
                  "Performance": [
                      [
                          {
                              "id": 6,
                              "value": "I am terrible at this\r\n"
                          },
                          {
                              "id": 7,
                              "value": "I am poor at this\r\n"
                          },
                          {
                              "id": 8,
                              "value": "I am average at this\r\n"
                          },
                          {
                              "id": 9,
                              "value": "I am good at this\r\n"
                          },
                          {
                              "id": 10,
                              "value": "I am excellent at this\r\n"
                          }
                      ]
                  ]
              }
          ],
          [
              {
                  "id": 3,
                  "section": "Autonomy",
                  "question": "I have the agency and authority to make and act on my thoughts and decisions, undeterred by competing personal circumstances, external pressures or societal expectations.",
                  "Importance": [
                      [
                          {
                              "id": 1,
                              "value": "Not a Priority\r\n"
                          },
                          {
                              "id": 2,
                              "value": "Low Priority\r\n"
                          },
                          {
                              "id": 3,
                              "value": "Priority\r\n"
                          },
                          {
                              "id": 4,
                              "value": "High Priority\r\n"
                          },
                          {
                              "id": 5,
                              "value": "Critical\r\n"
                          }
                      ]
                  ],
                  "Performance": [
                      [
                          {
                              "id": 6,
                              "value": "I am terrible at this\r\n"
                          },
                          {
                              "id": 7,
                              "value": "I am poor at this\r\n"
                          },
                          {
                              "id": 8,
                              "value": "I am average at this\r\n"
                          },
                          {
                              "id": 9,
                              "value": "I am good at this\r\n"
                          },
                          {
                              "id": 10,
                              "value": "I am excellent at this\r\n"
                          }
                      ]
                  ]
              }
          ],
          [
              {
                  "id": 4,
                  "section": "Awareness",
                  "question": "I keenly observe my emotional resilience and comfort levels when faced with volatility, uncertainty, complexity, and ambiguity, understanding that true awareness lies in my response to these challenges.",
                  "Importance": [
                      [
                          {
                              "id": 1,
                              "value": "Not a Priority\r\n"
                          },
                          {
                              "id": 2,
                              "value": "Low Priority\r\n"
                          },
                          {
                              "id": 3,
                              "value": "Priority\r\n"
                          },
                          {
                              "id": 4,
                              "value": "High Priority\r\n"
                          },
                          {
                              "id": 5,
                              "value": "Critical\r\n"
                          }
                      ]
                  ],
                  "Performance": [
                      [
                          {
                              "id": 6,
                              "value": "I am terrible at this\r\n"
                          },
                          {
                              "id": 7,
                              "value": "I am poor at this\r\n"
                          },
                          {
                              "id": 8,
                              "value": "I am average at this\r\n"
                          },
                          {
                              "id": 9,
                              "value": "I am good at this\r\n"
                          },
                          {
                              "id": 10,
                              "value": "I am excellent at this\r\n"
                          }
                      ]
                  ]
              }
          ],
          [
              {
                  "id": 5,
                  "section": "Discrnment",
                  "question": "I probe my capacity for introspective thought, my objective open-mindedness, and my diligent nurturing of critical and unbiased thinking, understanding that true discernment is an art of mindful reflection and unbiased evaluation.",
                  "Importance": [
                      [
                          {
                              "id": 1,
                              "value": "Not a Priority\r\n"
                          },
                          {
                              "id": 2,
                              "value": "Low Priority\r\n"
                          },
                          {
                              "id": 3,
                              "value": "Priority\r\n"
                          },
                          {
                              "id": 4,
                              "value": "High Priority\r\n"
                          },
                          {
                              "id": 5,
                              "value": "Critical\r\n"
                          }
                      ]
                  ],
                  "Performance": [
                      [
                          {
                              "id": 6,
                              "value": "I am terrible at this\r\n"
                          },
                          {
                              "id": 7,
                              "value": "I am poor at this\r\n"
                          },
                          {
                              "id": 8,
                              "value": "I am average at this\r\n"
                          },
                          {
                              "id": 9,
                              "value": "I am good at this\r\n"
                          },
                          {
                              "id": 10,
                              "value": "I am excellent at this\r\n"
                          }
                      ]
                  ]
              }
          ],
          [
              {
                  "id": 6,
                  "section": "Intention",
                  "question": "I meticulously examine my personal purpose for entrepreneurship and its alignment with my business vision, understanding that genuine intention weaves a cohesive thread between personal aspiration and organisational mission.",
                  "Importance": [
                      [
                          {
                              "id": 1,
                              "value": "Not a Priority\r\n"
                          },
                          {
                              "id": 2,
                              "value": "Low Priority\r\n"
                          },
                          {
                              "id": 3,
                              "value": "Priority\r\n"
                          },
                          {
                              "id": 4,
                              "value": "High Priority\r\n"
                          },
                          {
                              "id": 5,
                              "value": "Critical\r\n"
                          }
                      ]
                  ],
                  "Performance": [
                      [
                          {
                              "id": 6,
                              "value": "I am terrible at this\r\n"
                          },
                          {
                              "id": 7,
                              "value": "I am poor at this\r\n"
                          },
                          {
                              "id": 8,
                              "value": "I am average at this\r\n"
                          },
                          {
                              "id": 9,
                              "value": "I am good at this\r\n"
                          },
                          {
                              "id": 10,
                              "value": "I am excellent at this\r\n"
                          }
                      ]
                  ]
              }
          ],
          [
              {
                  "id": 7,
                  "section": "Passion",
                  "question": "I possess a genuine and deeply-rooted belief in my business idea, an intense enthusiasm for the impact I can create, and an unwavering drive to deliver meaningful solutions to the problems I aim to solve.",
                  "Importance": [
                      [
                          {
                              "id": 1,
                              "value": "Not a Priority\r\n"
                          },
                          {
                              "id": 2,
                              "value": "Low Priority\r\n"
                          },
                          {
                              "id": 3,
                              "value": "Priority\r\n"
                          },
                          {
                              "id": 4,
                              "value": "High Priority\r\n"
                          },
                          {
                              "id": 5,
                              "value": "Critical\r\n"
                          }
                      ]
                  ],
                  "Performance": [
                      [
                          {
                              "id": 6,
                              "value": "I am terrible at this\r\n"
                          },
                          {
                              "id": 7,
                              "value": "I am poor at this\r\n"
                          },
                          {
                              "id": 8,
                              "value": "I am average at this\r\n"
                          },
                          {
                              "id": 9,
                              "value": "I am good at this\r\n"
                          },
                          {
                              "id": 10,
                              "value": "I am excellent at this\r\n"
                          }
                      ]
                  ]
              }
          ],
          [
              {
                  "id": 8,
                  "section": "Purpose",
                  "question": "My entrepreneurial pursuit goes beyond personal success or profit, but is rooted in a profound sense of purpose that embodies my deeper motivations for 'why' I want to do this.",
                  "Importance": [
                      [
                          {
                              "id": 1,
                              "value": "Not a Priority\r\n"
                          },
                          {
                              "id": 2,
                              "value": "Low Priority\r\n"
                          },
                          {
                              "id": 3,
                              "value": "Priority\r\n"
                          },
                          {
                              "id": 4,
                              "value": "High Priority\r\n"
                          },
                          {
                              "id": 5,
                              "value": "Critical\r\n"
                          }
                      ]
                  ],
                  "Performance": [
                      [
                          {
                              "id": 6,
                              "value": "I am terrible at this\r\n"
                          },
                          {
                              "id": 7,
                              "value": "I am poor at this\r\n"
                          },
                          {
                              "id": 8,
                              "value": "I am average at this\r\n"
                          },
                          {
                              "id": 9,
                              "value": "I am good at this\r\n"
                          },
                          {
                              "id": 10,
                              "value": "I am excellent at this\r\n"
                          }
                      ]
                  ]
              }
          ],
          [
              {
                  "id": 9,
                  "section": "Refinement",
                  "question": "I scrutinise my dedication to cultivating relationships with those who bolster my aspirations, empathise with my concerns, and guide me to fine-tuning purpose-driven actions, recognising that true refinement emerges from valuable interpersonal connections.",
                  "Importance": [
                      [
                          {
                              "id": 1,
                              "value": "Not a Priority\r\n"
                          },
                          {
                              "id": 2,
                              "value": "Low Priority\r\n"
                          },
                          {
                              "id": 3,
                              "value": "Priority\r\n"
                          },
                          {
                              "id": 4,
                              "value": "High Priority\r\n"
                          },
                          {
                              "id": 5,
                              "value": "Critical\r\n"
                          }
                      ]
                  ],
                  "Performance": [
                      [
                          {
                              "id": 6,
                              "value": "I am terrible at this\r\n"
                          },
                          {
                              "id": 7,
                              "value": "I am poor at this\r\n"
                          },
                          {
                              "id": 8,
                              "value": "I am average at this\r\n"
                          },
                          {
                              "id": 9,
                              "value": "I am good at this\r\n"
                          },
                          {
                              "id": 10,
                              "value": "I am excellent at this\r\n"
                          }
                      ]
                  ]
              }
          ],
          [
              {
                  "id": 10,
                  "section": "Resilience",
                  "question": "I swiftly adapt and recover from challenges and setbacks, am not discouraged by adversity, and actively use difficulty as a learning opportunity for personal growth and motivation to continue working toward my goals.",
                  "Importance": [
                      [
                          {
                              "id": 1,
                              "value": "Not a Priority\r\n"
                          },
                          {
                              "id": 2,
                              "value": "Low Priority\r\n"
                          },
                          {
                              "id": 3,
                              "value": "Priority\r\n"
                          },
                          {
                              "id": 4,
                              "value": "High Priority\r\n"
                          },
                          {
                              "id": 5,
                              "value": "Critical\r\n"
                          }
                      ]
                  ],
                  "Performance": [
                      [
                          {
                              "id": 6,
                              "value": "I am terrible at this\r\n"
                          },
                          {
                              "id": 7,
                              "value": "I am poor at this\r\n"
                          },
                          {
                              "id": 8,
                              "value": "I am average at this\r\n"
                          },
                          {
                              "id": 9,
                              "value": "I am good at this\r\n"
                          },
                          {
                              "id": 10,
                              "value": "I am excellent at this\r\n"
                          }
                      ]
                  ]
              }
          ],
          [
              {
                  "id": 11,
                  "section": "Responsibility",
                  "question": "I assess my commitment to owning my reactions to uncontrollable circumstances and my duty to harness my utmost potential as an entrepreneur, recognising that true responsibility is rooted in both accountability and the drive to achieve one's highest purpose.",
                  "Importance": [
                      [
                          {
                              "id": 1,
                              "value": "Not a Priority\r\n"
                          },
                          {
                              "id": 2,
                              "value": "Low Priority\r\n"
                          },
                          {
                              "id": 3,
                              "value": "Priority\r\n"
                          },
                          {
                              "id": 4,
                              "value": "High Priority\r\n"
                          },
                          {
                              "id": 5,
                              "value": "Critical\r\n"
                          }
                      ]
                  ],
                  "Performance": [
                      [
                          {
                              "id": 6,
                              "value": "I am terrible at this\r\n"
                          },
                          {
                              "id": 7,
                              "value": "I am poor at this\r\n"
                          },
                          {
                              "id": 8,
                              "value": "I am average at this\r\n"
                          },
                          {
                              "id": 9,
                              "value": "I am good at this\r\n"
                          },
                          {
                              "id": 10,
                              "value": "I am excellent at this\r\n"
                          }
                      ]
                  ]
              }
          ],
          [
              {
                  "id": 12,
                  "section": "Mindset Ranking",
                  "question": "In your opinion, please rank the following 11 mindset disciplines (with 1 being the most valuable and 11 being the least valuable) for your own entrepreneurial journey.",
                  "Importance": [
                      [
                          {
                              "id": 1,
                              "value": "Not a Priority\r\n"
                          },
                          {
                              "id": 2,
                              "value": "Low Priority\r\n"
                          },
                          {
                              "id": 3,
                              "value": "Priority\r\n"
                          },
                          {
                              "id": 4,
                              "value": "High Priority\r\n"
                          },
                          {
                              "id": 5,
                              "value": "Critical\r\n"
                          }
                      ]
                  ],
                  "Performance": [
                      [
                          {
                              "id": 6,
                              "value": "I am terrible at this\r\n"
                          },
                          {
                              "id": 7,
                              "value": "I am poor at this\r\n"
                          },
                          {
                              "id": 8,
                              "value": "I am average at this\r\n"
                          },
                          {
                              "id": 9,
                              "value": "I am good at this\r\n"
                          },
                          {
                              "id": 10,
                              "value": "I am excellent at this\r\n"
                          }
                      ]
                  ]
              }
          ]
      ]
  }
  }

}
