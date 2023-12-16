import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "../App.css"
export default function BasicAccordion() {
  return (
    <div className = "basic-accordian">
      <Accordion>
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="basic-accordianaa" >What is Cinefirma?</Typography>
        </AccordionSummary>
        <AccordionDetails className="basic-accordian">
          <Typography  >
          Cinefirma is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          
        >
          <Typography>Where Can i Watch?</Typography>
        </AccordionSummary>
        <AccordionDetails className="basic-accordian">
          <Typography>
          Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Cinefirma with you anywhere.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          
        >
          <Typography>Is Cinefirma good for Kids?</Typography>
        </AccordionSummary>
        <AccordionDetails className="basic-accordian">
          <Typography>
          The Cinefirma Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.

Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
          </Typography>
        </AccordionDetails>
      </Accordion>
     
    </div>
  );
}
