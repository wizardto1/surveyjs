import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as SurveyEditor from 'surveyjs-editor';
import * as Survey from 'survey-angular';

@Component({
  selector: 'surveyjs-component',
  template: `<div id="surveyContainer"></div>`
})
export class SurveyjsComponent  {
  editor: SurveyEditor.SurveyEditor;

  ngOnInit() {
        var json = {
 //title: "Berg Balance Test",
 completedHtml: "<h3>Thank you for answering the survey</h3>",
 pages: [
  {
   name: "page1",
   elements: [
    {
     type: "html",
     name: "question14",
     html: "<p>Please demonstrate each task and/or give instructions as written. When scoring, please record the lowest response category that applies for each item.In most items, the subject is asked to maintain a given position for a specific time. Progressively more points are deducted if the time or distance requirements are not met, if the subject's performance warrants supervision, or if the subject touches an external support or receives assistance from the examiner. Subjects should understand that they must maintain their balance while attempting the tasks. The choices of which leg to stand on or how far to reach are left to the subject. Poor judgment will adversely influence the performance and the scoring.Equipment required for testing are a stopwatch or watch with a second hand, and a ruler or otherindicator of 2, 5 and 10 inches (5, 12 and 25 cm). Chairs used during testing should be of reasonable height. Either a step or a stool (of average step height) may be used for item #12. Please use the timer on the top to answer the questions.</p>"
    }
   ],
   title: "Rules of the survey"
  },
  {
   name: "pa",
   elements: [
    {
     type: "radiogroup",
     name: "question2",
     title: "INSTRUCTIONS: Please stand up. Try not to use your hands for support.",
     isRequired: true,
     choices: [
      {
       value: "0",
       text: "0 (needs moderate or maximal assist to stand.)"
      },
      {
       value: "1",
       text: "1 ( needs minimal aid to stand or to stabilize.)"
      },
      {
       value: "2",
       text: "2 (able to stand using hands after several tries.)"
      },
      {
       value: "3",
       text: "3 (able to stand independently without using hands.)"
      },
      {
       value: "4",
       text: "4 (able to stand without using hands and stabilize independently.)"
      }
     ]
    },
    {
     type: "panel",
     name: "panel1"
    }
   ],
   title: "Sitting While Standing Up",
   description: "INSTRUCTIONS: Please stand up. Try not to use your hands for support.",
   questionsOrder: "initial"
  },
  {
   name: "S",
   elements: [
    {
     type: "radiogroup",
     name: "Standing Unsupported",
     title: "INSTRUCTIONS: Please stand for two minutes without holding. Start timer when ready.",
     isRequired: true,
     choices: [
      {
       value: "0",
       text: "0 (unable to stand 30 seconds unassisted.)"
      },
      {
       value: "1",
       text: "1 (needs several tries to stand unsupported.)"
      },
      {
       value: "2",
       text: "2 (able to stand 30 seconds unsupported.)"
      },
      {
       value: "3",
       text: "3 (able to stand 2 minutes with supervision.)"
      },
      {
       value: "4",
       text: "4 (able to stand safely for 2 minutes.)"
      }
     ]
    }
   ],
   title: "Standing Unsupported",
   description: "NSTRUCTIONS: Please stand for two minutes without holding."
  },
  {
   name: "page4",
   elements: [
    {
     type: "radiogroup",
     name: "question1",
     title: "INSTRUCTIONS: Please sit with arms folded for 2 minutes. If a subject is able to stand 2 minutes unsupported, score full points for sitting unsupported. Proceed to item #4. Start timer when ready",
     isRequired: true,
     choices: [
      {
       value: "0",
       text: "0 (unable to sit without support for 10 seconds.)"
      },
      {
       value: "1",
       text: "1 (able to sit 10 seconds.)"
      },
      {
       value: "2",
       text: "2 (able to sit 30 seconds.)"
      },
      {
       value: "3",
       text: "3 (able to sit 2 minutes under supervision.)"
      },
      {
       value: "4",
       text: "4 (able to sit safely and securely for 2 minutes.)"
      }
     ]
    }
   ],
   title: "Sitting With Back Unsupported But Feet Supported On Floor Or On A Stool",
   description: "INSTRUCTIONS: Please sit with arms folded for 2 minutes. If a subject is able to stand 2 minutes unsupported, score full points for sitting unsupported. Proceed to item #4. Start timer when ready"
  },
  {
   name: "page5",
   elements: [
    {
     type: "radiogroup",
     name: "question3",
     title: "INSTRUCTIONS: Please sit down.",
     isRequired: true,
     choices: [
      {
       value: "0",
       text: "0 (needs assistance to sit.)"
      },
      {
       value: "1",
       text: "1  (sits independently but has uncontrolled descent.)"
      },
      {
       value: "2",
       text: "uses back of legs against chair to control descent.)"
      },
      {
       value: "3",
       text: "3 ( controls descent by using hands.)"
      },
      {
       value: "4",
       text: "4 (sits safely with minimal use of hands.)"
      }
     ]
    }
   ],
   title: "Standing to Sitting",
   description: "INSTRUCTIONS: Please sit down."
  },
  {
   name: "page6",
   elements: [
    {
     type: "radiogroup",
     name: "question4",
     title: "INSTRUCTIONS: Arrange chairs(s) for a pivot transfer. Ask subject to transfer one way toward aseat with armrests and one way toward a seat without armrests. You may use two chairs (one with and one without armrests) or a bed and a chair.",
     choices: [
      {
       value: "0",
       text: "0 (needs two people to assist or supervise to be safe.)"
      },
      {
       value: "1",
       text: "1 ( needs one person to assist.)"
      },
      {
       value: "2",
       text: "2 ( able to transfer with verbal cueing and/or supervision.)"
      },
      {
       value: "3",
       text: "3 (able to transfer safely with definite need of hands.)"
      },
      {
       value: "4",
       text: "4 (able to transfer safely with minor use of hands.)"
      }
     ]
    }
   ],
   title: "Transfers",
   description: "INSTRUCTIONS: Arrange chairs(s) for a pivot transfer. Ask subject to transfer one way toward aseat with armrests and one way toward a seat without armrests. You may use two chairs (one with and one without armrests) or a bed and a chair."
  },
  {
   name: "page7",
   elements: [
    {
     type: "radiogroup",
     name: "question15",
     title: "INSTRUCTIONS: Please close your eyes and stand still for 10 seconds.",
     isRequired: true,
     choices: [
      {
       value: "0",
       text: "0 (needs help to keep from falling.)"
      },
      {
       value: "1",
       text: "1 ( unable to keep eyes closed 3 seconds but stays steady.)"
      },
      {
       value: "2",
       text: "2 (able to stand 3 seconds.)"
      },
      {
       value: "3",
       text: "3 (able to stand 10 seconds with supervision.)"
      },
      {
       value: "4",
       text: "4 (able to stand 10 seconds safely.)"
      }
     ]
    }
   ],
   title: "Standing Unsupported With Eyes Closed",
   description: "INSTRUCTIONS: Please close your eyes and stand still for 10 seconds."
  },
  {
   name: "page8",
   elements: [
    {
     type: "radiogroup",
     name: "question6",
     title: "INSTRUCTIONS: Place your feet together and stand without holding.",
     isRequired: true,
     choices: [
      {
       value: "0",
       text: "0 (needs help to attain position and unable to hold for 15 seconds.)"
      },
      {
       value: "1",
       text: "1 (needs help to attain position but able to stand 15 seconds feet together.)"
      },
      {
       value: "2",
       text: "2 ( able to place feet together independently but unable to hold for 30 seconds.)"
      },
      {
       value: "3",
       text: "3 (able to place feet together independently and stand for 1 minute with supervision.)"
      },
      {
       value: "4",
       text: "4 (able to place feet together independently and stand 1 minute safely.)"
      }
     ]
    }
   ],
   title: "Standing Unsupported With Feet Together",
   description: "INSTRUCTIONS: Place your feet together and stand without holding."
  },
  {
   name: "page2",
   elements: [
    {
     type: "html",
     name: "question16",
     html: "<p>THE FOLLOWING ITEMS ARE TO BE PERFORMED WHILE STANDING UNSUPPORTED.</p>\n<img src=\"https://clipartart.com/images/person-standing-clipart-4.jpg\" alt=\"W3Schools.com\" style=\"width:153px;height:142px;\">"
    }
   ],
   description: "THE FOLLOWING ITEMS ARE TO BE PERFORMED WHILE STANDING UNSUPPORTED."
  },
  {
   name: "page9",
   elements: [
    {
     type: "radiogroup",
     name: "question7",
     title: "INSTRUCTIONS: Lift arm to 90 degrees. Stretch out your fingers and reach forward as far as you can. (Examiner places a ruler at end of fingertips when arm is at 90 degrees. Fingers should nottouch the ruler while reaching forward. The recorded measure is the distance forward that thefinger reaches while the subject is in the most forward lean position. When possible, ask subject to use both arms when reaching to avoid rotation of the trunk).",
     isRequired: true,
     choices: [
      {
       value: "0",
       text: "0 (loses balance while trying/requires external support.)"
      },
      {
       value: "1",
       text: "1 ( reaches forward but needs supervision.)"
      },
      {
       value: "2",
       text: "2 ( can reach forward >2 inches safely.)"
      },
      {
       value: "3",
       text: "3 (reaches forward but needs supervision.)"
      },
      {
       value: "4",
       text: "4 (can reach forward confidently > 25 cm (10 inches). ) "
      }
     ]
    }
   ],
   title: "Reaching Forward With Outstretched Arm While Standing",
   description: "INSTRUCTIONS: Lift arm to 90 degrees. Stretch out your fingers and reach forward as far as youcan. (Examiner places a ruler at end of fingertips when arm is at 90 degrees. Fingers should nottouch the ruler while reaching forward. The recorded measure is the distance forward that thefinger reaches while the subject is in the most forward lean position. When possible, ask subject to use both arms when reaching to avoid rotation of the trunk)."
  },
  {
   name: "page10",
   elements: [
    {
     type: "radiogroup",
     name: "question5",
     title: "INSTRUCTIONS: Pick up the shoe/slipper which is placed in front of your feet.",
     isRequired: true,
     choices: [
      {
       value: "0",
       text: "0 (unble to try/needs assist to keep from losing balance or falling.)"
      },
      {
       value: "1",
       text: "1 ( unable to pick up and needs supervision while trying.)"
      },
      {
       value: "2",
       text: "2 ( unable to pick up but reaches 1-2 inches from slipper and keeps balance independently.)"
      },
      {
       value: "3",
       text: "3 ( able to pick up slipper but needs supervision.)"
      },
      {
       value: "4",
       text: "4 (able to pick up the slipper safely and easily.)"
      }
     ]
    }
   ],
   title: "Pick Up Object From The Floor From A Standing Position",
   description: "INSTRUCTIONS: Pick up the shoe/slipper which is placed in front of your feet."
  },
  {
   name: "page11",
   elements: [
    {
     type: "radiogroup",
     name: "question8",
     title: "INSTRUCTIONS: Turn to look directly behind you over toward left shoulder. Repeat to the right. Examiner may pick an object to look at directly behind the subject to encourage a better twist turn.",
     isRequired: true,
     choices: [
      {
       value: "0",
       text: "0 (needs assist to keep from losing balance or falling.)"
      },
      {
       value: "1",
       text: "1 ( needs supervision when turning.)"
      },
      {
       value: "2",
       text: "2 (turns sideways only but maintains balance.)"
      },
      {
       value: "3",
       text: "3 (looks behind one side only; other side shows less weight shift.)"
      },
      {
       value: "4",
       text: "4 (looks behind from both sides and weight shifts well.)"
      }
     ]
    }
   ],
   title: "Turning to Look Behind Over Left and Right Shoulders While Standing",
   description: "INSTRUCTIONS: Turn to look directly behind you over toward left shoulder. Repeat to the right.Examiner may pick an object to look at directly behind the subject to encourage a better twist turn."
  },
  {
   name: "page12",
   elements: [
    {
     type: "radiogroup",
     name: "question9",
     title: "INSTRUCTIONS: Turn completely around in a full circle. Pause. Then turn a full circle in the other direction.",
     isRequired: true,
     choices: [
      {
       value: "0",
       text: "0 (needs assistance while turning.)"
      },
      {
       value: "1",
       text: "1 ( needs close supervision or verbal cueing.)"
      },
      {
       value: "2",
       text: "2 (able to turn 360 safely but slowly.)"
      },
      {
       value: "3",
       text: "3 ( able to turn 360 safely one side only in <4 seconds.)"
      },
      {
       value: "4",
       text: "4 (able to turn 360 degrees safely in 4 seconds or less.)"
      }
     ]
    }
   ],
   title: "Turn 360 Degrees",
   description: "INSTRUCTIONS: Turn completely around in a full circle. Pause. Then turn a full circle in the other direction."
  },
  {
   name: "page13",
   elements: [
    {
     type: "radiogroup",
     name: "question10",
     title: "INSTRUCTIONS: Place each foot alternately on the step/stool. Continue until each foot has touched the step/stool four times.",
     isRequired: true,
     choices: [
      {
       value: "0",
       text: "0 (needs assistance to keep from falling/unable to try.)"
      },
      {
       value: "1",
       text: "1 (able to complete >2 steps needs minimal assistance.)"
      },
      {
       value: "2",
       text: "2 (able to complete 4 steps without aid with supervision.)"
      },
      {
       value: "3",
       text: "3 (able to stand independently and complete 8 steps in >20 seconds.)"
      },
      {
       value: "4",
       text: "4 (able to stand independently and safely and complete 8 steps in 20 seconds.)"
      }
     ]
    }
   ],
   title: "Count number of times step touch measured stool",
   description: "INSTRUCTIONS: Place each foot alternately on the step/stool. Continue until each foot has touched the step/stool four times."
  },
  {
   name: "page14",
   elements: [
    {
     type: "radiogroup",
     name: "question11",
     title: "INSTRUCTIONS: (DEMONSTRATE TO SUBJECT) Place one foot directly in front of the other. If you feel that you cannot place your foot directly in front, try to step far enough ahead that the heel of your forward foot is ahead of the toes of the other foot. (To score 3 points, the length of the stepshould exceed the length of the other foot and the width of the stance should approximate the subject's normal stride width).",
     isRequired: true,
     choices: [
      {
       value: "0",
       text: "0 (loses balance while stepping or standing.)"
      },
      {
       value: "1",
       text: "1 (needs help to step but can hold 15 seconds.)"
      },
      {
       value: "2",
       text: "2 (able to take small step independently and hold 30 seconds.)"
      },
      {
       value: "3",
       text: "3 (able to place foot ahead of other independently and hold 30 seconds.)"
      },
      {
       value: "4",
       text: "4 (able to place foot tandem independently and hold for 30 seconds.)"
      }
     ]
    }
   ],
   title: "Standing Unsupported One Feet In Front",
   description: "INSTRUCTIONS: (DEMONSTRATE TO SUBJECT) Place one foot directly in front of the other. If you feel that you cannot place your foot directly in front, try to step far enough ahead that the heel of your forward foot is ahead of the toes of the other foot. (To score 3 points, the length of the stepshould exceed the length of the other foot and the width of the stance should approximate the subject's normal stride width)."
  },
  {
   name: "page15",
   elements: [
    {
     type: "radiogroup",
     name: "question12",
     title: "INSTRUCTIONS: Stand on one leg as long as you can without holding.",
     isRequired: true,
     choices: [
      {
       value: "0",
       text: "0 (unable to try or needs assistance to prevent fall.)"
      },
      {
       value: "1",
       text: "1 ( tries to lift leg; unable to hold 3 seconds but remains standing independently.)"
      },
      {
       value: "2",
       text: "2 (   able to lift leg independently and hold = or >3 seconds.)"
      },
      {
       value: "3",
       text: "3 (able to lift leg independently and hold 5-10 seconds.)"
      },
      {
       value: "4",
       text: "4 (able to lift leg independently and hold >10 seconds.)"
      }
     ]
    }
   ],
   title: "Standing On One Leg",
   description: "INSTRUCTIONS: Stand on one leg as long as you can without holding."
  },
  {
   name: "page16"
  }
 ],
 showPageNumbers: true,
 showQuestionNumbers: "off",
 showProgressBar: "top",
 clearInvisibleValues: "none",
 requiredText: "",
 firstPageIsStarted: true,
 showPreviewBeforeComplete: "showAnsweredQuestions",
 showTimerPanelMode: "page"
};

        
        var model = new Survey.ReactSurveyModel(json);
        Survey.SurveyNG.render('surveyContainer', { model: model });
    }
}
