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
 title: "Berg Balance Test",
 completedHtml: "<h3>Thank you for answering the survey</h3>",
 pages: [
  {
   name: "page1",
   elements: [
    {
     type: "html",
     name: "question14",
     html: "<ul><li>Please demonstrate each task and/or give instructions as written. When scoring, please record the lowest response category that applies for each item.</li><li>In most items, the subject is asked to maintain a given position for a specific time. Progressively more points are deducted if the time or distance requirements are not met, if the subject's performance warrants supervision, or if the subject touches an external support or receives assistance from the examiner. Subjects should understand that they must maintain their balance while attempting the tasks. The choices of which leg to stand on or how far to reach are left to the subject. Poor judgment will adversely influence the performance and the scoring.</li><li>Equipment required for testing are a stopwatch or watch with a second hand, and a ruler or otherindicator of 2, 5 and 10 inches (5, 12 and 25 cm). Chairs used during testing should be of reasonable height. Either a step or a stool (of average step height) may be used for item #12. Please use the timer on the top to answer the questions.</li></ul>"
    }
   ],
   readOnly: true,
   title: "Rules of the survey"
  },
  {
   name: "pa",
   elements: [
    {
     type: "html",
     name: "question18",
     html: "<p style=\"font-weight:bold\">INSTRUCTIONS: Please stand up. Try not to use your hands for support.</p>"
    },
    {
     type: "html",
     name: "question17",
     html: "\n<img src=\"https://thumbs.gfycat.com/BareSpanishBovine-size_restricted.gif\" style=\"height:20vh; display: block;\n  margin-left: auto;\n  margin-right: auto;\" >"
    },
    {
     type: "radiogroup",
     name: "Select one of the following:",
     indent: 1,
     isRequired: true,
     choices: [
      {
       value: "0",
       text: "0 ( needs moderate or maximal assist to stand.)"
      },
      {
       value: "1",
       text: "1 ( needs minimal aid to stand or to stabilize.)"
      },
      {
       value: "2",
       text: "2 ( able to stand using hands after several tries.)"
      },
      {
       value: "3",
       text: "3 ( able to stand independently without using hands.)"
      },
      {
       value: "4",
       text: "4 ( able to stand without using hands and stabilize independently.)"
      }
     ]
    },
    {
     type: "panel",
     name: "panel1"
    }
   ],
   title: "SITTING TO STANDING",
   questionsOrder: "initial"
  },
  {
   name: "S",
   elements: [
    {
     type: "html",
     name: "question21"
    },
    {
     type: "html",
     name: "question2",
     html: "<p style=\"font-weight:bold\"> INSTRUCTIONS: Please stand for two minutes without holding. </p>"
    },
    {
     type: "html",
     name: "question22",
     html: "<img src=\"https://i.pinimg.com/originals/fb/69/b0/fb69b0b94fd3e40bf041be3db4b8b5e9.gif\" style=\"height:20vh; display: block;  margin-left: auto;  margin-right: auto;\">"
    },
    {
     type: "radiogroup",
     name: "Standing Unsupported",
     title: "Select one of the following:",
     isRequired: true,
     choices: [
      {
       value: "0",
       text: "0 ( unable to stand 30 seconds unassisted.)"
      },
      {
       value: "1",
       text: "1 ( needs several tries to stand unsupported.)"
      },
      {
       value: "2",
       text: "2 ( able to stand 30 seconds unsupported.)"
      },
      {
       value: "3",
       text: "3 ( able to stand 2 minutes with supervision.)"
      },
      {
       value: "4",
       text: "4 ( able to stand safely for 2 minutes.)"
      }
     ]
    }
   ],
   title: "STANDING UNSUPPORTED",
   description: "NSTRUCTIONS: Please stand for two minutes without holding."
  },
  {
   name: "page4",
   elements: [
    {
     type: "html",
     name: "question23",
     html: "<p style=\"font-weight:bold\">INSTRUCTIONS: Please sit with arms folded for 2 minutes. If a subject is able to stand 2 minutes unsupported, score full points for sitting unsupported. Proceed to item #4.</p>"
    },
    {
     type: "html",
     name: "question24",
     html: "<img src=\"https://lh3.googleusercontent.com/proxy/duSWG6-GiS2SJhqMSNWyND52IAWvgdu1Kxr0w0GBKHqlieA7CzW7TSYcYAFvqu9tAUXGV8-bNa-e2LTN-txD32FRF6Sfqz62jD3v\" style=\"height:20vh; display: block;  margin-left: auto;  margin-right: auto;\">"
    },
    {
     type: "radiogroup",
     name: "question1",
     title: "Select one of the following:",
     isRequired: true,
     choices: [
      {
       value: "0",
       text: "0 ( unable to sit without support for 10 seconds.)"
      },
      {
       value: "1",
       text: "1 ( able to sit 10 seconds.)"
      },
      {
       value: "2",
       text: "2 ( able to sit 30 seconds.)"
      },
      {
       value: "3",
       text: "3 ( able to sit 2 minutes under supervision.)"
      },
      {
       value: "4",
       text: "4 ( able to sit safely and securely for 2 minutes.)"
      }
     ]
    }
   ],
   title: "SITTING WITH BACK UNSUPPORTED BUT FEET SUPPORTED ON FLOOR OR ON A STOOL",
   description: "INSTRUCTIONS: Please sit with arms folded for 2 minutes. If a subject is able to stand 2 minutes unsupported, score full points for sitting unsupported. Proceed to item #4."
  },
  {
   name: "page5",
   elements: [
    {
     type: "html",
     name: "question25",
     html: "<p style=\"font-weight:bold\">INSTRUCTIONS: Please sit down.</p>"
    },
    {
     type: "html",
     name: "question26",
     html: "<img src=\"https://www.clevelandclinic.org/healthinfo/ShowImage.ashx?PIC=590\"style=\"height:20vh; display: block;  margin-left: auto;  margin-right: auto;\">"
    },
    {
     type: "radiogroup",
     name: "question3",
     title: "Select one of the following:",
     isRequired: true,
     choices: [
      {
       value: "0",
       text: "0 ( needs assistance to sit.)"
      },
      {
       value: "1",
       text: "1  ( sits independently but has uncontrolled descent.)"
      },
      {
       value: "2",
       text: "2 ( uses back of legs against chair to control descent.)"
      },
      {
       value: "3",
       text: "3 ( controls descent by using hands.)"
      },
      {
       value: "4",
       text: "4 ( sits safely with minimal use of hands.)"
      }
     ]
    }
   ],
   title: "STANDING TO SITTING",
   description: "INSTRUCTIONS: Please sit down."
  },
  {
   name: "page6",
   elements: [
    {
     type: "html",
     name: "question27",
     html: "<p style=\"font-weight:bold\">INSTRUCTIONS: Arrange chairs(s) for a pivot transfer. Ask subject to transfer one way toward a seat with armrests and one way toward a seat without armrests. You may use two chairs (one with and one without armrests) or a bed and a chair.</p>"
    },
    {
     type: "html",
     name: "question28",
     html: "<img src=\"https://designaddict.com/wp-content/uploads/2019/05/11760641_master.jpg\"style=\"height:20vh; display: block;  margin-left: auto;  margin-right: auto;\">"
    },
    {
     type: "radiogroup",
     name: "question4",
     title: "Select one of the following:",
     choices: [
      {
       value: "0",
       text: "0 ( needs two people to assist or supervise to be safe.)"
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
       text: "3 ( able to transfer safely with definite need of hands.)"
      },
      {
       value: "4",
       text: "4 ( able to transfer safely with minor use of hands.)"
      }
     ]
    }
   ],
   title: "TRANSFERS",
   description: "INSTRUCTIONS: Arrange chairs(s) for a pivot transfer. Ask subject to transfer one way toward aseat with armrests and one way toward a seat without armrests. You may use two chairs (one with and one without armrests) or a bed and a chair."
  },
  {
   name: "page7",
   elements: [
    {
     type: "html",
     name: "question30",
     html: "<p style=\"font-weight:bold\">INSTRUCTIONS: Please close your eyes and stand still for 10 seconds.</p>"
    },
    {
     type: "html",
     name: "question29",
     html: "<img src=\"https://image.freepik.com/free-photo/woman-standing-with-eyes-closed-beach_107420-9928.jpg?1\" style=\"height:20vh; display: block;  margin-left: auto;  margin-right: auto;\" >"
    },
    {
     type: "radiogroup",
     name: "question15",
     title: "Select one of the following:",
     isRequired: true,
     choices: [
      {
       value: "0",
       text: "0 ( needs help to keep from falling.)"
      },
      {
       value: "1",
       text: "1 ( unable to keep eyes closed 3 seconds but stays steady.)"
      },
      {
       value: "2",
       text: "2 ( able to stand 3 seconds.)"
      },
      {
       value: "3",
       text: "3 ( able to stand 10 seconds with supervision.)"
      },
      {
       value: "4",
       text: "4 ( able to stand 10 seconds safely.)"
      }
     ]
    }
   ],
   title: "STANDING UNSUPPORTED WITH EYES CLOSED",
   description: "INSTRUCTIONS: Please close your eyes and stand still for 10 seconds."
  },
  {
   name: "page8",
   elements: [
    {
     type: "html",
     name: "question31",
     html: "<p style=\"font-weight:bold;\">INSTRUCTIONS: Place your feet together and stand without holding.</p>"
    },
    {
     type: "html",
     name: "question32",
     html: "<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOkAAADYCAMAAAA5zzTZAAAAgVBMVEUAAAD////8/Pz5+fny8vLo6Ojs7Oypqamvr69SUlLb29uUlJT29vbu7u7e3t7k5OR/f3+amprLy8u1tbWHh4e7u7vFxcXT09N3d3dDQ0NLS0swMDA9PT1fX1+NjY1vb281NTUQEBAZGRl7e3tZWVlnZ2ckJCQdHR0lJSVHR0cLCwvcQ9ZRAAAPGElEQVR4nNVd6VoquxJtQAVEZVLAjQOobNm8/wNeeu5UpqpVgfPd9U9o01ndSaVmsl5S3M1/9tnvYTTQDPKy2X1tD8ObVJMqkaUcbPCZ1ZjAgwybMWb9hHNLyvQ+6+DtARqj/6czxn6acHYJma4zA3tk9Q2O5iD36aaXjultRnAEBnmjgzwmm186pkc6yexTPMa3NcY22fySMZ1Yk8yyhXCMtWOMeaoJpmL64JikeP3uXINgks0GzHQ6Nabw7JpkthINuXKO8WFcc3uHThhjelscnP86RJyTzP6JRh27B2kvWP/kf88wKQUxHdWT+KnP9hf3JDPJG7jxjNE8z0YveUEmjTAdtbPYDsgkCIbYsAZqEd45gRCqANNpdxqv5WdfnlkeBOP6ntZX+bWxtm/l0waY/jPmUSi4j55JZpLhvWMU+3JufPRHPm05U3ro5fNYeGfJPyMG3jHyY5luYrmaKGe6Iff87vm3WJY9scd98o4x6tmn2EY8bzlTayJ9t4LUvg8eXApSiYnrrvJ5R6+4zyXFeyPtptY9z199eGfJ1x3cekOOD9cp1hh0i81XdpzF7bso01k18nHtm9AmxJR/HviO5Cx7dqn+1SOc1mfPR3j0ONOO6B8VHwyte26v8E531odD+ni+dUyX3cELqnN6y3zLOD6ssGYz9e/TuesEmhOi0eUTYWpP20HqMbDy+P4Ry5LvUHAoijlTIq41TJfmUHv7o5LNvf0h6+7mVHxYO8Rgtjz/x1/7I5TpDxl+4lxk017fN8k3AVPLs1Jj4Hrfa3t5vSuYOm7qMLkHVENsEZWIHbhN3EK1duhPN47HizO9s8YausRgzy+SJP4Vn0rpVBy2LsUsaCMGmdrb79WhD417fnEiIOrdqLlQs4z082L5Y10ZVIaFTM+LxiJVyHv7ttV8BHAv38IutNbM1LWNpEzXL6s7L9OzJvBOPipsRfe5L/OD2JslR3FMUuE7di72iunDYuXgbDEtn97rynPruXXXcfl/Lsn5LCLaap5dVA5fsmaeXMpa+cxLZ9N+FGN6qP+r8Ba4J2/u1Moucxx5mTSC5DJRq7djLq98Fo61nl/YGJXUr06YdvbDceDy1hXaZffjieNfK0gd26490Oz0LrHC5WgvgD+9Xr+ztIgPy2Rq7PKta/az4rp2q3aeHPUDSbxlNegNf9qvmtVWuVZspued9dr92wzimkzNG306Do/qGdebxGBjUkWI0hkYWk+9aapVZNtPU2LcmTMwmZLVurCXb73RB6PN+HNIvERz438xdI0FEm5+nP+8vjehcktx+Ec11XGAKfnfo63lhv1Cd5U8OE3wcPZDvSMPYTvIOgIXvR35xORm/mX9Mzk8v2Lz7C9Gw6UyvttfDCfzVdSruKdv0HotxuVhpgeqidgxvv7TYjmf5Jgv1+niujkG96vRfD6ZD0cL18hELX20XeMCphm10oxFOX35+CHO+/1hqUpbafGy2ZpD7w7zlcHXPH1XMf+h+deWXrs2z7hWzDwNqVLYYKPPw3j0WXBfn6PWYOnObOnYuH8DTK33n4vap+a9VZ6a/op6twl+dBt16ovQlNg/1w+8Fb/rnkMYm0Ehk6nlOin35bDIYXgv39XLgV7k4gqEiCrchHmW2JRkn4pT8FSeRpaaY6q+AR2pZXpeTut1sf/WtuPVAzT1yqG4u/FcHHg3i0V98FlMzTShnOnDavhS7S36PA1Z2x9a+ziAVyRBYeCJi7vvYLrIKNNq8T6uXhb9kml5xVthp1GLpDPWnU9K+HCSpyTc/I0Pa2DSeW906xXvel2ae8OcaUPgkDMnenMjRiNSwg3pWx38yu8xa54neUtFNK4RnZNe1vEOF6F846nWaTa3HClk41XIVLJ0W3zX79WY+r5v2nDTrLsmdz3iZygX70PkUPFDljbFFkYUz6VCYxwz+Wrs2nAf2a77df7Gb0/Nn6Uh6A+6xCFZv173OAOlgdZhlm9SYydS709+Ag/qpVoQXfiSNViQOAf94WYGtvnMm9U6zhe0P4SSo9xZ95vfSoYPEEHUhYCp8k7f+RIuzsFDqVbQXb8z/6yP4UGx9P0xTS748VN/VggTpyKCOagtDCKKtxmRNoZqw1aI/IjFb1u4XKBCGHuFiJfPjIQ+Ox6Ju53+3tkvm6lE//LhtaNIkMW7zIjEO6VbTSW4OerOtFk52hg8cUkMMupjqy+EDzfvrcPwB/9laPRX8+PZWRs0X2r9Tv05GkJwnaH+5C0ham3lZHw6yDV8Y5lWruQE4qEC13pTnaYGKrlk7NNVabV1F2ppvUrNlgC4ZQfag7uD8uEOySeZ+eG+uEij/1GMPcwoMO3ejXLHtH8XC7qUQPe1iC+cIv6cGwDcBHVfpgSEQl+prbSvUmWqZe3qsM+OH4V+4YoP4uAWvOyS3rUwWm9mZ6k0roWxQzGV2v1hcFWHtHetn2/H+WwzTSd2C+yZTFUmkw3biLKYhm0dObhM9/GhRLDc6xbTpJIhx3/E1MrUpxNJpZS1YDJNfl+qhtKJpDzWCkTjkBUS71MjccDF1J96ioJbxWcXdWpB3M2EaTLFvsGOyXSX/M5E4yZMU8sFvs/3NT6UEGTfmEz9NSswuNVK7sRDFcycDJNpKvO7AyoYfKBJ0wkQytLBghJB/AdWW41QpBiIAMXAzZJMaBLXCEX/09+NHZpJaRPX8DNNf5ry/UgXEBFmlarBNLV2n4Nb7pXU/K9gJJYYTNMrvdf3gnrvffF3yi1AvcBRHmCa1q9Sgpty5i8pxmHYqAZTTazWBybRi8h94ylf+pThd4hJEYEiMLkZf6VXybjK4CXuHcpkTn988yvXEwRrCUyzzWSaXtTzs1fSP2UzQZ5IjOR3S1E9jYJQM/9M7OyV1BQnP+LIxiFMk+sObKLp1xPRzuhUdmnvJsmnS+xfoecbZZp4t0hq+BJbqNS0sJZX2gNc0sgorTVjeV8tpolSVipIykr8rYcQWELfFhnemgkAXAd+iZQuWDsUbzNN+WhlpbYpjzi74sFxDCT0c6TowgfBoZq5Drx0TmZZPVQ6E9XVMMPF1NcOTwxu3kqNZIE+V62DU4lJtYykxbap9o2zAYtbXUtkQUkL3BKpvu6wgUcxTRLN5Ge81kgSLvYcbR6mSXzcMzHTJGvJ4430GRsp7GJ5T8sUCqEvJdNrVp3iY8YgrzB29yORwTe29wv9S5Vv0xTBPm+WrZep/lANt6ByQ690e8sG/U4BddQYqUBV5zP7H6+fqdpPGG6g5oajH5wM/oYZAUeP1ibntxpsoX28AdkQYKrVzZDe31rhG3AvB5hqZRLSkEQbAwscbCE3pU4Q7gGiWr9DKAoUYqozaSRNFVt42yuyENLKgq5n1V2lxmkJnYkaJBP6UuXYkbRNb6E6xYOFkUGmKpkvt2RyqNzbwe5Twr6gAmBNOlRKUphL8FtNui/2cykawyLscw0z1YTers80rJSJejKLgPWm0yhmESrhrxUC4upMIyIwwlQhfa3GnCwoCm4jff9iQev/I6YxJpHvceUBW70401g+UIwpHk699j6NRbtiTHEz6tqnTCzaFU0ugRXRKzON+ueiTGHPzpW1wagAjDKFPQ+ybuJqplE3ejw1Co0by3/VJwcamYknPsWZojsHcWzjHp24VIgzRRPkgZ/f6uErKN6fk5HYBwY1MT8SmFJ3io/MYApuHVkuUg0wBMUQCgymqIvwmv5eRqiWwRRNnkF+pxjtB8Xo9sdJwAU9k0gTX9DJwZF+HKag1o30iQcNCo7myWEKnjOIMQMabZzlw0ofx26PqIOgM5JFgnMRZs8gTnyshpqljrGYYhsVUR2wABTLQGQxBSWi/EAFj1NW9J1X5oFNgP/bpzXAxEEeB9ZVmDYqF77YNuE1POExxRzc/DrFGpjNxovq8ZiCLhbpT1iA25SXDsRjCuoOsjR82JbgyQMeU/BhS09UsCMJT8YzS+x22Bxkyxd8nswCbSZT0BqXJdSB2b1M1xyTKWjOcFtllgCtQ+ZhxmSKhmckP76CFl8x5R6TKToLiSMfdbcy8xO5Rb9osrqAKZpIxxyeex3qh718P3xu2TKXKZrwwPfko0E9boYXlykcq+YWWMCRLq4dwWUKp3ZcvLsX1zHHZQo/cq4rH64v47qV2cIRLjnjPXN4zTAiMkKmcPktT82H2w2yO0awmeLZZpzlhf9qBTu5ls0UT5/hCEc8DYntwmEzxROTOG4ePP2eHRNhM1XUlMR9AopiYnZBJF8xxcs042ELRaY2e/78K/HeB/vo2HgxJt8C5jNVpPrGfOyK1HB+XQOfqSLHOLZ8FYuX7z3nM1UkNcc0QsVvVvDD0XymmoK+cGMHTaMBfjKFwCmgqJEPrzHNT0Dxpy+4VNHkMaz7Kiq8BMVzAqaaMqHwHHAIMgwETDVtJULeUE0dscB1LmCq6f8SEpGazmmCYPSVWh+GRNLlyp5gpoof2QkV1yn2vyRpRMJUoQ+GhK9C9EpqXCVMFSIpdBooTi9JLE/CVCGSQjHOHT6spKmWhKlCJIU8eIpGV6LJSy5W7KjQFGCIihpETBXnwUWYisqsREwVFvNFmIpypUVMFZO69qBapvhGvQRTWe2RjClczrcPDAo3lZFVLcuYwn6HkHd7hw4qa8AkYwqrvqFkSVRHEmZKC5mijpDQL3yhYTZhUq2QKVolFDr50Gg4oxpIwRS1Z0KqOCjmgi2CEjAFU7BCvgEwpVaSvoYwBRs8hOeAQFyyLGYK7dRwnAjK8hfuUoApJH7D6YNIWEZezSBnioQXw8E2IOIDVB0BTAFFKTYJMYD+lABTeWFALPdV7B2Ud3vGmIpnFnsD0mAb1PYOYiqs4InnXsmsQaxnI8ZUpunHz3iR15FX3GUBZNoXJBBx4mECJfMorayqADIVUOU1Fmeb41uxylABZco/VnluLe6Z+oZ0iSiAM2XalVxlhme7YW1rCiiYsty//F8N2jBGw7pLldAw7d1HkzwkJ198jSAdIhqomPb6kdnJeplFFJJ3VBaV0DHt9RaBrKmT9B2E1MwTogF2oWUa2K3PcjH54N2smh1aQs+01x+6DsMZ0g7/rC0598NEt3ALJGB6xoooru9L+NjrPQzJST3WrtsSaZiesZ5/vu2z/e7wvETaBRnor4ezcZ7z+/v+sUrwOgv8D9Koxh84GR1MAAAAAElFTkSuQmCC\" style=\"height:20vh; display: block;  margin-left: auto;  margin-right: auto;\" >"
    },
    {
     type: "radiogroup",
     name: "question6",
     title: "Select one of the following:",
     isRequired: true,
     choices: [
      {
       value: "0",
       text: "0 ( needs help to attain position and unable to hold for 15 seconds.)"
      },
      {
       value: "1",
       text: "1 ( needs help to attain position but able to stand 15 seconds feet together.)"
      },
      {
       value: "2",
       text: "2 ( able to place feet together independently but unable to hold for 30 seconds.)"
      },
      {
       value: "3",
       text: "3 ( able to place feet together independently and stand for 1 minute with supervision.)"
      },
      {
       value: "4",
       text: "4 ( able to place feet together independently and stand 1 minute safely.)"
      }
     ]
    }
   ],
   title: "STANDING UNSUPPORTED WITH FEET TOGETHER",
   description: "INSTRUCTIONS: Place your feet together and stand without holding."
  },
  {
   name: "page2",
   elements: [
    {
     type: "html",
     name: "question16",
     html: "<p style=\"font-weight:bold\">THE FOLLOWING ITEMS ARE TO BE PERFORMED WHILE STANDING UNSUPPORTED.</p>\n"
    }
   ],
   description: "THE FOLLOWING ITEMS ARE TO BE PERFORMED WHILE STANDING UNSUPPORTED."
  },
  {
   name: "page9",
   elements: [
    {
     type: "html",
     name: "question34",
     html: "<p style=\"font-weight:bold\">INSTRUCTIONS: Lift arm to 90 degrees. Stretch out your fingers and reach forward as far as you can. (Examiner places a ruler at end of fingertips when arm is at 90 degrees. Fingers should nottouch the ruler while reaching forward. The recorded measure is the distance forward that thefinger reaches while the subject is in the most forward lean position. When possible, ask subject to use both arms when reaching to avoid rotation of the trunk).</p>"
    },
    {
     type: "html",
     name: "question33",
     html: "<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQwAAAC8CAMAAAC672BgAAAAS1BMVEX/////1Kr/0qb/0aT/69n/0qf/2LP/0aP/8OL/3bz/3r//1q7//Pn/+PH/6dT/9ez/4sf/8ub/5c3/7t7/9+//3b3/+vb/6tf/5MrT9w/oAAAE0UlEQVR4nO3c22KqOhAG4GZCgiEcAij6/k+6E1DAmlh3FdIF/3elrctOBsiBDOvrCwAAAAAAAAAAAAAAAAAAAAAAAAAAAP6uvJGqjB3E33DMUmKCZ7Hj+AMqRYL18tihxFZk/JqK3SejM1MqhIodTVwlERuldexwYjqwWSoYv8SOJ6JOzVMheBM7oIhKGjsLRlyfqtgBxVNIPqWCNcfY8cSUTGMIl4fY0URVT6eFEEnsaOLJiyTT0xXCVWCelVfFuoGtqquTJpOa8Vm/yUIjSGWIc73NaUeVGJlymqdhmGW1vk93pRx6lHRzA0zenojm88zZeeE59HUj01vOhFw/3CVVmXg4H8ZcfB9FqlISv5uTRol5Ia3moUzY2cXdvZy+X334cKzAP+88GzU89PTJ2mjuOYG2M0E/M28/MTN0j93BMO77qOBPV/RCMy0dlV2Z3qUpm15ZnpNRezgcyov94fS2V1eDYtJ1VXW0+tefuMHSNf4u8w6RlDrl3itJEFfPJ6bTR0d059t7+3fcD6e3d+b/jmY/eYxtOAIDNblkw3G5lG19nOUwrzLvoX4diVN7/b6i+ykZMc0OhBje9rkkpm3O1Em5eVW413wBcXnNRN+phuaoH2rOgsRbaXCIzNCXjJ0qmX80GW+iVCbuPLATtVlXor2nRsw4lyc4a9zirDjLb+Ps3pJhM5HZ0SOvL/phHNK+XGw2GYJrY5cpXXJinhF5V30GyfL4VbT+Saj7vX9wXTvMVehze1EUSIQbaAPr+HWjXEtgfc/6aSgzf3rStRZB2rRPbv3Fjm891HckT8UOcSW3CQeSYXvM7KUbwbHjXJ7gsgz1mLtJRn+HgWyXORtH87pRUjZ7G01INWd302nW7rqRop97EAU60thBL4Tup1XV2Ug+uzvkX5psNRlCHW63tQ6N22y6n4z6dle2mww3lro7i9o/GaV9JeM5+ldv+y0gsILfZTJ4aL81dmCrEySC9eSxY1uVEMRUEt7Rih3feogzVT6vzogd4joEcdFUP25yxg5zYW5z1E49VfNSwU7saD9uaD3T2m1NSmWapH5xzRo3GdM+txi3sfuV5u0169ukGX9p09l9iZany/lQ5L/b9l+woeN2/LWV/Zb+8NtrFcQpG4ofXNnDOXGLzLo7HuzLpLWvi+66DZ93dsH5vB7BplBnSfVm7cPvWkrXtg5VB0M5QupwPpZ7mIvVF3jYZlZDncYbwRYmfbIDfXn9WvjfyRhP4LtGU99ke4SMO5h9sUpd165EpbPNXPyJn+4UKmHin8iE1Xc3w6EVbOx2LFfC4w6rbXXfZlecc/xICc7vtYFLRXzq+21Dq+PRncHLH9u3Fdp7qfAtl0GH5dJbt7bXB9G82aCN1oT/SPn31W9FWzuj/N0oCbO5IvkXnAKDCnGzw7PDBAsO/IVr21amoWxs7AmKl9Sa++tDaY/Z+GqN0r467NCd780r2uyxjpp7n8vah/qhwl7ssBMdzf+HiF1fKIPifnG/61Pj69vins6xw4ms01M6druIncyWLBQ7lvjk2I0GKg72pGNIxqS4nRqbeqr5t4rhudddrtYe5SoVjGif94cfVUZmyAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALzsP08PRdp0DqYHAAAAAElFTkSuQmCC\" style=\"height:20vh; display: block;  margin-left: auto;  margin-right: auto;\" >"
    },
    {
     type: "radiogroup",
     name: "question7",
     title: "Select one of the following:",
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
   title: "REACHING FORWARD WITH OUTSTRETCHED ARM WHILE STANDING",
   description: "INSTRUCTIONS: Lift arm to 90 degrees. Stretch out your fingers and reach forward as far as youcan. (Examiner places a ruler at end of fingertips when arm is at 90 degrees. Fingers should nottouch the ruler while reaching forward. The recorded measure is the distance forward that thefinger reaches while the subject is in the most forward lean position. When possible, ask subject to use both arms when reaching to avoid rotation of the trunk)."
  },
  {
   name: "page10",
   elements: [
    {
     type: "html",
     name: "question36",
     html: "<p style=\"font-weight:bold\">INSTRUCTIONS: Pick up the shoe/slipper which is placed in front of your feet.</p>"
    },
    {
     type: "html",
     name: "question35",
     html: "<img src=\"https://c8.alamy.com/comp/XE3AY0/man-in-boxers-picking-up-polished-shoes-from-hotel-room-door-XE3AY0.jpg\" style=\"height:20vh; display: block;  margin-left: auto;  margin-right: auto;\" >"
    },
    {
     type: "radiogroup",
     name: "question5",
     title: "Select one of the following:",
     isRequired: true,
     choices: [
      {
       value: "0",
       text: "0 ( unable to try/needs assist to keep from losing balance or falling.)"
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
       text: "4 ( able to pick up the slipper safely and easily.)"
      }
     ]
    }
   ],
   title: "PICK UP OBJECT FROM THE FLOOR FROM A STANDING POSITION",
   description: "INSTRUCTIONS: Pick up the shoe/slipper which is placed in front of your feet."
  },
  {
   name: "page11",
   elements: [
    {
     type: "html",
     name: "question38",
     html: "<p style=\"font-weight:bold\">INSTRUCTIONS: Turn to look directly behind you over toward left shoulder. Repeat to the right. Examiner may pick an object to look at directly behind the subject to encourage a better twist turn.</p>"
    },
    {
     type: "html",
     name: "question37",
     html: "<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN0AAADkCAMAAAArb9FNAAAA8FBMVEX/wID///8AAAD/xoT/w4L/wYH/xYv/vnv/x4X4+Ph9Xj//v30xMTH/yYb/27q2iVv/vHb/+PL/5MzR0dFQUFDi4uJqUDX/zZ69jl9aWlosLCz/69ru7u7zt3qCYkH/zYlsbGx1dXWZc03WoWthSTG9vb2Oa0fGlWOysrKielGTk5Pjq3LHx8fRnWlJNyUQDAggGBA7LR6fn58ZGRmIiIg/Pz8uIxdzVzpFNCNJSUmoqKhxcXH/7+EaFA2Xl5fb29v/t2v/4MPHvrf/zZUUAAA5OTkhISFWQCtbQSTOuab/3bqWfGMlFABKRD7/0abgsoaxpmsSAAAPuklEQVR4nO2de1viuhaHe4sUmArogDfKXRAREUVwZjujs2er5zrn+3+b0yRtadqkTdtA23n27499zjPc8rqSlZWVlVSSf2dJ+/25H4csNXbxcyLpfmgHUSoxBRo74BNId1SvRkpiq/56dHT0LK45UELoLk4s/QprOhbQtLCXS6X6wcmhiAY5EkFnGy0azpzM1Yj3VOtHAlrkSADdRT2Sy6YbKspEj6A7+XPVb6ZvFFZquhMQbTQPnXIajqedWu85FkEGlZbuiNdwDp0S3jkN+JYXIWhyarrGAT+cpdkS4oW5FjVHdA0OX+IR0Eyr7WMQAtey3nAviC0lXeOADgdUhnkApFMAG8/oWK9fi4JLQ/fcqDPgQIsxuNQ5pLtlOhZtAl+/yp7u+bDOcij6hjG4VORWlA+DRQdaQuES0z1LJWYTgdXEQdB4QEeWs2ynMbomGpZKO1u6xtHFCXsiACZ0jNOuv+WGCaey24H1n5ZJxzNurRfPypnSrX7WSyGuEs3HyrLVNXRNQ4Gl9V+1O2nBpi9MY2r9z4zqdbTJQmzHTEC3+ssMjYUxHdR6OJ/PdVWbz4cj/C9LCUjGmEEHJOgwzwTCJaC7Vp4YHctPhzQed9z/v4Z/FzCs1ahfgEedsCgsKZ3yjen0MN3dnULTNwmZzFoHUf86BhyvDyLhktGFBlMW3WY4aAXhlhE9eijcdAnpNiGBPpBGI0M1h7MNCTcJh5NU1INvMqa7RKMppKV6a6TC7qcak02lYhmxU6lsVIM1yTmmQ5PhSihckhnhHTYjpK1geGtP5Zqq6ubpxFBVNRwNmg651X7mdG2INwpxLIRdI3Ip7meQw1TEwiWKVZpvlnOnT8iJZSDTfc8BndyDUYdQPLw4EBliJqeTzxRmOJVQyGF+FQyXkO4GRR7i8PCoexNtuqQroBVszTQiexcD7m4H04GcmO4YDZPTsIiMX8C83cFsAJV09YrxalGpZS7hfERPKBdW4szDC8YT0DntfMSlSCxbybNGGO9UT+lagDGEa1ahi1ZXKXJiL6hVtXSeE5jrnVkuXT4TW8+aGCKDSKY0CTmU3VguZbYWuxZlFrG2CbGctEvLpc2023gjkMx3angq2Blc2l0SG+820cSuqetddks5/Q7XcR/zDYzYvRNMlru1nIi912uM1xlGrb5JNK07VnZsOSE7y/dOVmgmsfZ+AlJNJy8objuLIhFVAd+dxFBnOjNCtq88hpsu7Y+cC9uJpElIRUf7s8O33khmRKoBWB14my77LOL3mRJUjdNcue1VJjUjJEkEzNPp9r3FoLOcZ2/b5EpLMgwdEJ0UQKmG0b1VlOLRyXL5E9Hu0WxoqrabUVXVHA6Hs4rn5YmudgtEJzevFFIfg7FpQI0Hgw/ylRpcW6hForPcS/nxgQRcL6GIf7pbT00ThW4Fo7N0fP39ixKiynhmTft4RBaPzlKfzTYZemf8wtI9bTYVEmy0aXVdqxWcbtpVjVOvapIeWCYVlg5WdGiEKBN8oeki9TddKv1NF1d/0zl0XwTWTQW1A7rmoxVtDXmyELCQNvdrc59gUcSSa3cI0gnfkfRqR3Tr35puwpU+KiIdzJGF1skRdIqwoxUU7YBO+Z3permja19dXYmaeGD2byRx0WmbHU8JmO5NEVYJcwP3LDn303Hlm5jfpQrR4W1GIXhNlDkJPQzjp+uL+F26EB1OJQsphkFZhxZnpQeunxJfpuIK0Z3ZyYH0Q6+MvqfDu1mpoQIqsfW0XiE6Jw/5ybbey33CH2zjdJj/LAJTuJ62L4glKOxVvtp478h6zYekvQXVjyk17o1KsJOqzK0wXfPcxnuA1kvcW9wiCF46Sa8IG/E+lS9v3Nm86VjvrYwLn5PQ4QKWWJWNACC8L0LBkHpwy9qNVZwdVAUPwgR0uELgLl55h30241z0IraHnLFLZ//hHcWma+M/z7e4pUc6xhO8Rkfh4LUnzmymoSuv7O2t+IU5ag1bLz3S9ZtTYYBz/V46d9aLT+dubSUqtzXwPvOXy5QnLaDDxnh/4NasvHTlzwnp+o/OpxJVxGkz+9OLXqruieZaWPzi7NK0iRXQfQK645ftZ2I6lC2e6Z6K6iUvgXAa0rQtZ3l/cn0Xl6597SkGUKaJaxld68HBkpTP2/OgYEojOV273H/3fKBipilk9OA9fC63k/RQwm3YaWAPXfstBt3VpRdNuR0YydkQ3sD7dY9X8YvHfHRXPrpL74vhdGc94pvGMzNt+bemDmfEd/biVoGTdHjFv6U7Jl5l0zWJvwIsL9JVnvKpKAHQnWzIyojH4xium6CzVwEu3Q3ZZubXrsg9/9ZkKOrMhWVAnSxEsnS94q0BJOhefHT35LfS6dpfvfHasmOZLIUvoQieZzOXpAWVZpMnb0bQyT667+Q30ujKX4lilKmpi+iRQUDdGEzHZHOuvka6GVqo5dK1m4QoPvneDUmUhTKbzaLPQyaWqoLZrKYsPD1lcRbhZkivckzSRajtGZcd0zA4j0Qml6ZphtEddLxGvL8JWeb6ZoRYdK7dnubzdFNbLKmqMZl72vyZfboyOZ1bPTS61XdtNL8sI+qd0fZ8/iXDfonpHLhWzRDn/uNINea1kdNuRhaGpOvz0l3avXIxkvZsNo801TRr9g0L531aM3vv567e7XdE0zmhyXqm72+8UWT5McO0fcwf0Tbho3N8ZcqzWmKkGXah/xlflB1B13a8SepzdoKkdce4sJprRzqcrm3ngjb7dpQhUs0n7DvT0pVtdyLxbTbuSZqEj5JyhNdhdHb+/Snx8bodCdgnZVPRlTHcIm9wknMQuJ+GDk8Fy1z1SkfqKdfEwKbDU8E6h5aTnEvLIq3HpMOWu8swPAmVpq058Fh02HIRFy1lKXzJU8Q9SAw6O4WUXzjLG6Cdv/DNFQbdKpdTASHQRZvuocW5DDpkOa762OwENGi997CkIJWujLLSYZeG5ULAQMmzkGwEjQ4f9NyIzeXtQnhbOuSqJxodcimbXWTzRAvv27KXCxQ6tBHW6hYATtLQFc3s+0QpdMhfctaxZS28K80sCAnSoXl8LObGot2rG+pYgnTir0LbpYAE77JkpakDdGhn7rYopnMcCyMg89Oh2oyPXK56GOou2dG0jw4lUp7yujCgCofTdLfpo3soQATmE0BXI71x0GF/WSg4y3hw5D1QRx5JBzcMKnkPLwPSYIaaWi9L0KEoZVMw01nqwnbTdp8JunOUAiuQv7SF+iYtYAnUGhVmHveIeWrDS4eqh4cFpAMm47kKXjoYppwWEM4KWBh+xUMHrxJ+4j5KkCsBeI/jl6Bf8dWJfRRuOsAy1tRg00MH13VFCjC9MhbUrrmlQ9tZBZwOkPB5qRA6mE05Ld5MjoXLV0PoLJ9yW8TJDglfwBZIH23pHvnPzeVQKPkXyEsTNX7FnOyw0DX2fuMR9ZnFnOyw9A9KuOLQwXMyH0X1KVA6LTnm0PULGmK6wpF0mUpXLuCanBTQlGACQtqarth0EtrvOmfSFStZFBAKV6h0MFu0LrLHlOiH1zEd3LBbFHcqR6Jt5mG6nFcA8EkPHs3fnqYvbIzpSK3Q6WBJ8bSga5+tUPqBXMJu6YpuOjutqfjpbh6sxU9R160e6VQ6mOljP6W0OMIPKqPR8V2RlW8FF+iS7TLzX5wSLSpduZfnZFiMshkqXTvHHhPdf877ZiZdXocdsOKPDjeePg3SrfJLZz8xnLdx2qymDI5Iuve804U/PdcrTZO0+hFBd57fRKZ979GUf+UJpCBdJ6ebIzZdrCtp6hdeuuZDfvfKbbo4Lr1EjrtVjlc/Dp3CHye+kj5z9Y9ljA/vV/ahihh5g/ozSffP6oz/erN9S7VPE3L7dD/dv0o5Olznl4avdOJ2e6VDmaQ7LPH+FFD37nwcug/OKS9A1wBVvl8C5sdm3wPUoePtmgcNH518+JPPevCXuO+OFCX7Oi7OOaF6IPvp5MYBl/X0LLLxqvOQey46b5zi0Mlyneej3UWWdFw/DBo0uleOT6ItpOzoePaFSz7T2XRHHCMPJUOzo+NJazHoLji6JryFdf87KS4dzzLINx/EodPHseI9QXLpuO6LrVPHHQcdGnb7j7YR3RlMlg845vNqcL7jpNtkQqe3UCUD3D3lCVcCsQonHboxfrb3vKDWQnmgG84/bUI61DHFPM48jlAkVsZ033i8ZjI6dAhz/1lPhw4964TDYSejA/CJyKP9L3IdOpRB4Jhsk9FpMA+aQeGtSwcvNOXYhUtou6zpZL5lEJUuagWLszcZJCi2dOi8auTIo9K9Rv0IostgF2xL1+RK21Lpojpm95uSzS7Ylg6VWEYmIJLQaZNF9nTXPOugJHS4VuIuWzp8UWJEG5LQ6YNYOUWB8tJ94vBsCei02V0e6NDpwKfwWYlG9xxOp07j5YMFykuHLyMKd5s0upPwnJgRM9stUARd+zFyjQ4o67twOmcjJnO66OOPpV9yXDqjxZ+VEi0fXVQs/UrLPITS4ZrVjC5c8dG9hIdM4Iccl07qYLpKFvuzPjpkvApjIVZ/lf2KpAOS9YX3n3JC117AS1hpxivVn5/j0xlw9/PmMSd06GzuNDjnlaSTRoAtmk6b38GHYLzlhQ5dxkrmd6rVaunwgsIWTYdCTBQF5YMOLxW80WbpwBIdLopOhRFmL0O64dJH93JOGq90QgfjoYOlxvCWyqzo0GRLHl2CZyfWbsBS+hkCF0FnwH2fyyzp1ACd7I0sqqFw4XQAXte1kHNGB+e8OzvDUmcMOB667fNYs6MbBw5EHsNEAT6S5Y8r49Chx5vhi9Yyo5OMfwcuOOi7GRY+OmrCDwWY9q0l2dFRANC5/7lFVy3RpnA/HdV4+HrK+xzSwYBlYrWm/tO/10qno+Wi0SMhr+XM6Wjm6f2nK5VeLyIs59A9B+NSYH5TlAfnkV/Z0dWpzf6vWf8RhebSUVLtBgzB+s7b8kZ39ae/vCGM7pefTpsvvBFe3ug4ZdNd+N2K77RXsenkOolnoCTfdh7NjK4aXHAnoCMr4fAJWc9z1TOjO4j0izx0csPjNoEGT7K9e4KErOgC1UMJ6eTGq2s9dJuHcuZ5W0Z0VS6/z0MnHzqdU5utfXAZ0dVPuPw+F53csCMWtCAnrynOgq5Uf0416Hx08gnCA8h05DUzWdD9ilgAxKWzpj3IB23nux58/3T1VBMdlQ7WocKoxfQ/u3DvdIFCUiF08sUva2Kv/s+3ZNw3nRg42k3mDQAO/P/2vmc6Ed2STkfT9dle6UrhySDRdPLVXs/ovYrpmNx07mQYUyWGQvZlSiVB/TIG3c9SlU91QodHdP1Er9I+/vrjSJDl4tgOHHAJPDe8Yn4dUvA7AfsjCcRNV0j93nT/B8vNXU1OM7NsAAAAAElFTkSuQmCC\" style=\"height:20vh; display: block;  margin-left: auto;  margin-right: auto;\">"
    },
    {
     type: "radiogroup",
     name: "question8",
     title: "Select from one of the following:",
     isRequired: true,
     choices: [
      {
       value: "0",
       text: "0 ( needs assist to keep from losing balance or falling.)"
      },
      {
       value: "1",
       text: "1 ( needs supervision when turning.)"
      },
      {
       value: "2",
       text: "2 ( turns sideways only but maintains balance.)"
      },
      {
       value: "3",
       text: "3 ( looks behind one side only; other side shows less weight shift.)"
      },
      {
       value: "4",
       text: "4 ( looks behind from both sides and weight shifts well.)"
      }
     ]
    }
   ],
   title: "TURNING TO LOOK BEHIND OVER LEFT AND RIGHT SHOULDERS WHILE STANDING",
   description: "INSTRUCTIONS: Turn to look directly behind you over toward left shoulder. Repeat to the right.Examiner may pick an object to look at directly behind the subject to encourage a better twist turn."
  },
  {
   name: "page12",
   elements: [
    {
     type: "html",
     name: "question40",
     html: "<p style=\"font-weight:bold\">INSTRUCTIONS: Turn completely around in a full circle. Pause. Then turn a full circle in the other direction.</p>"
    },
    {
     type: "html",
     name: "question39",
     html: "<img src=\"data:image/png;base64,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\" style=\"height:20vh; display: block;  margin-left: auto;  margin-right: auto;\">"
    },
    {
     type: "radiogroup",
     name: "question9",
     title: "Select one of the following:",
     isRequired: true,
     choices: [
      {
       value: "0",
       text: "0 ( needs assistance while turning.)"
      },
      {
       value: "1",
       text: "1 ( needs close supervision or verbal cueing.)"
      },
      {
       value: "2",
       text: "2 ( able to turn 360 safely but slowly.)"
      },
      {
       value: "3",
       text: "3 ( able to turn 360 safely one side only in <4 seconds.)"
      },
      {
       value: "4",
       text: "4 ( able to turn 360 degrees safely in 4 seconds or less.)"
      }
     ]
    }
   ],
   title: "TURN 360 DEGREES",
   description: "INSTRUCTIONS: Turn completely around in a full circle. Pause. Then turn a full circle in the other direction."
  },
  {
   name: "page13",
   elements: [
    {
     type: "html",
     name: "question41",
     html: "<p style=\"font-weight:bold\">INSTRUCTIONS: Place each foot alternately on the step/stool. Continue until each foot has touched the step/stool four times.</p>"
    },
    {
     type: "html",
     name: "question42",
     html: "<img src=\"https://media3.giphy.com/media/3o85xsw5ygzVXxzsxW/200.gif\" style=\"height:20vh; display: block;  margin-left: auto;  margin-right: auto;\">"
    },
    {
     type: "radiogroup",
     name: "question10",
     title: "Select one of the following:",
     isRequired: true,
     choices: [
      {
       value: "0",
       text: "0 ( needs assistance to keep from falling/unable to try.)"
      },
      {
       value: "1",
       text: "1 ( able to complete >2 steps needs minimal assistance.)"
      },
      {
       value: "2",
       text: "2 ( able to complete 4 steps without aid with supervision.)"
      },
      {
       value: "3",
       text: "3 ( able to stand independently and complete 8 steps in >20 seconds.)"
      },
      {
       value: "4",
       text: "4 ( able to stand independently and safely and complete 8 steps in 20 seconds.)"
      }
     ]
    }
   ],
   title: ". PLACING ALTERNATE FOOT ON STEP OR STOOL WHILE STANDING UNSUPP",
   description: "INSTRUCTIONS: Place each foot alternately on the step/stool. Continue until each foot has touched the step/stool four times."
  },
  {
   name: "page14",
   elements: [
    {
     type: "html",
     name: "question44",
     html: "<p style=\"font-weight:bold;\">INSTRUCTIONS: (DEMONSTRATE TO SUBJECT) Place one foot directly in front of the other. If you feel that you cannot place your foot directly in front, try to step far enough ahead that the heel of your forward foot is ahead of the toes of the other foot. (To score 3 points, the length of the step should exceed the length of the other foot and the width of the stance should approximate the subject's normal stride width).</p>"
    },
    {
     type: "html",
     name: "question43",
     html: "<img src=\"https://cdn.drawception.com/images/panels/2012/4-2/8tmx2LzsAD-2.png\" style=\"height:20vh; display: block;  margin-left: auto;  margin-right: auto;\">"
    },
    {
     type: "radiogroup",
     name: "question11",
     title: "Select one of the following:",
     isRequired: true,
     choices: [
      {
       value: "0",
       text: "0 ( loses balance while stepping or standing.)"
      },
      {
       value: "1",
       text: "1 ( needs help to step but can hold 15 seconds.)"
      },
      {
       value: "2",
       text: "2 ( able to take small step independently and hold 30 seconds.)"
      },
      {
       value: "3",
       text: "3 ( able to place foot ahead of other independently and hold 30 seconds.)"
      },
      {
       value: "4",
       text: "4 ( able to place foot tandem independently and hold for 30 seconds.)"
      }
     ]
    }
   ],
   title: "STANDING UNSUPPORTED ONE FEET IN FRONT",
   description: "INSTRUCTIONS: (DEMONSTRATE TO SUBJECT) Place one foot directly in front of the other. If you feel that you cannot place your foot directly in front, try to step far enough ahead that the heel of your forward foot is ahead of the toes of the other foot. (To score 3 points, the length of the stepshould exceed the length of the other foot and the width of the stance should approximate the subject's normal stride width)."
  },
  {
   name: "page15",
   elements: [
    {
     type: "html",
     name: "question45"
    },
    {
     type: "html",
     name: "question46",
     html: "<p style=\"font-weight:bold;\">INSTRUCTIONS: Stand on one leg as long as you can without holding.</p>"
    },
    {
     type: "html",
     name: "question47",
     html: "<img src=\"https://static.abcteach.com/free_preview/s/standingononefootcolor_p.png\" style=\"height:20vh; display: block;  margin-left: auto;  margin-right: auto;\"> "
    },
    {
     type: "radiogroup",
     name: "question12",
     title: "Select one of the following:",
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
       text: "2 ( able to lift leg independently and hold = or >3 seconds.)"
      },
      {
       value: "3",
       text: "3 ( able to lift leg independently and hold 5-10 seconds.)"
      },
      {
       value: "4",
       text: "4 ( able to lift leg independently and hold >10 seconds.)"
      }
     ]
    }
   ],
   title: "STANDING ON ONE LEG",
   description: "INSTRUCTIONS: Stand on one leg as long as you can without holding."
  }
 ],
 calculatedValues: [
  {
   name: "var1"
  }
 ],
 showTitle: false,
 showPageNumbers: true,
 showQuestionNumbers: "off",
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
