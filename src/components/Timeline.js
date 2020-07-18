import React from 'react'
import { Timeline, TimelineEvent } from 'react-event-timeline'

export default function TimelineComponent() {
  return(
    <Timeline>
      <TimelineEvent 
        title="Creation of Ivy Council"
        createdAt="1993"
        titleStyle={{fontWeight: "bold"}}
      >
        <p>Founded in 1993 as a way to collaborate and exchange ideas on common student life issues at their respective school, student government leaders set the stage for the Ivy Council that exists today. In 1997, in response to the complexities of running a loose federation of organizations over seven states, a defining structure was created.</p>
        The Ivy Council draws its membership from the Brown University Undergraduate Council of Students, Columbia University (the Columbia College Student Council, the Columbia Engineering Student Council, and the Columbia General Studies Student Council), the Cornell University Student Assembly, the Dartmouth College Student Assembly, the Harvard University Undergraduate Council, the University of Pennsylvania Undergraduate Assembly, the Princeton University Undergraduate Student Government, and the Yale College Council.
      </TimelineEvent>
      <TimelineEvent
        title="Creation of the first ever ILS"
        createdAt="2000"
        titleStyle={{fontWeight: "bold"}}
      >
        <p>ILS was originally created to promote the exchange of ideas between students of the Ivy League and today’s leaders on subjects of public policy such as affirmative action and ethics in science and technology. The first ILS was held at Yale University in 2000 and had the topic of “Integrity and Ethics.” Eighty participants were selected from a pool of applicants throughout the Ivy League.</p>
        The main activities of the conference were keynote speakers, panels, and roundtable discussions. Since then, Ivy Council has held six conferences each with their own topics of discussion. Past speakers have included Steve Forbes, Chairman and CEO of Forbes magazine; Nasreen Berwari, Iraqi Minister of Municipalities and General Works; Jeffrey Sachs, special adviser to the UN’s Millennium Development; Theodore Roosevelt IV, Managing Director at Lehman Brothers and prominent environmentalist; and Dov Zakheim, US Undersecretary of Defense.
      </TimelineEvent>
      <TimelineEvent
        title="Creation of the first ever IPC"
        createdAt="2008"
        titleStyle={{fontWeight: "bold"}}
      >
        Ivy Policy Conference (IPC) is an annual conference hosted every spring by the Ivy Council. IPC emphasizes in-depth, candid conversation on public policy solutions to the social, intellectual, political, and cultural issues facing today’s college students. Ivy League schools take turns hosting IPC on their respective campuses.
      </TimelineEvent>
      <TimelineEvent
        title="Creation of the first international partnership of Ivy Council with China"
        createdAt="2008"
        titleStyle={{fontWeight: "bold"}}
      >
        <p>In May-June 2008, then-President Bing Chen (Penn '09) and then-VP External Affairs Sue Yang (Columbia '10) facilitated two dozen student government Presidents and student journalists to travel to Beijing, Wuhan, and Shanghai for the first Ivy League student delegation through mainland China.</p>
        The American students held a dialogue with their Chinese peers on international student relations at Peking University, and met with Chinese leaders. Currently, the Ivy-China program is in its seventh year, and has brought a delegation of 8 Chinese students from the top universities in China, who visited the Ivy League Universities and continued with the goal of international cultural exchange. The program has also seen expansions to Europe and the Middle East.
      </TimelineEvent>
      <TimelineEvent
        title="Expansion of Ivy Council events in other countries"
        createdAt="2008"
        titleStyle={{fontWeight: "bold"}}
      >
        In the 7th year of Ivy Council with China, Ivy Council brought a delegation of 8 Chinese students from the top universities in China, who visited the Ivy League universities and continued with the goal of international exchange. As a result, the program has seen expansions to Europe and the Middle East.
      </TimelineEvent>
      <TimelineEvent
        title="Expansion of IvyCORPS"
        createdAt="2018"
        titleStyle={{fontWeight: "bold"}}
      >
        The IvyCORPS (Ivy Community Outreach and Public Service) is the philanthropy arm of the Ivy Council - a student union group of the Ivy League. This year, the Cornell Ivy Council chapter is launching a series of community service events through the summer of 2018 in Manhattan, New York.
      </TimelineEvent>
      <TimelineEvent
        title="Creation of the Ivy Fund"
        createdAt="2020"
        titleStyle={{fontWeight: "bold"}}
      >
        The Ivy Fund is created to support nonprofits in developing countries and to make an impact in local communities.
      </TimelineEvent>
    </Timeline>
  )
}