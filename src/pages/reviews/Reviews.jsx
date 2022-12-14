import React,{useEffect} from "react";
import "./review.css";
import { motion } from "framer-motion";
import { type } from "@testing-library/user-event/dist/type";
const mainVariants={
  initial:{
    opacity:0,
    x:'100vw'
  },
  final:
  {
    opacity:1,
    x:0
  ,
  transition:
  {type:'spring',
  mass:0.4,
  damping:8,
  when:'beforeChildren',
  staggerChildren:0.7
  }
},
exit:{
  x:'-100vw'
}
}
const childVariants={
  initial:{
   opacity:0,
  },
  final:{
    opacity:1
  }
}
function Reviews() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <motion.div
    variants={mainVariants}
    initial='initial'
    animate='final'
    exit='exit'
    >
      <h1>
        Reviews
        </h1>
      <div 
      className="review-main">
        <div className="article">
          <motion.h3
          variants={childVariants}>
            Thallumaala Movie Review : Style-filled fight fest
            </motion.h3>
          <motion.p
          variants={childVariants}>
            Thallumala is almost literally what that; a chain of fights. In the
            midst of this, the story is that Waseem (Tovino) falls for blogger
            Beepathu (Kalyani Priyadarshan) and the day before and on the day of
            his wedding, different gangs, that he and his friends have been in
            fights with, come to apologise or pick more fights. Will Waseem get
            married to his lady love and how he and his friends settle scores
            form the rest of the movie. The film, directed by Khalid Rahman, is
            a mass entertainer made for the youth, with rap, Mappilla pattu and
            some well-choreographed fight sequences. As the young men get into
            one fight after another, the film shows how the family suffers.
            Tovino is dashing and charming, Kalyani is adorable, and the pair
            have a sweet chemistry and it is a pleasure to watch them on screen.
            Shine Tom Chacko plays an SI, with all kinds of youthful barbarism,
            and again proves his mettle. Khalid Rahman who assisted on hit
            movies like Ustad Hotel, ABCD, and North 24 Kaatham, and made a
            movie that is full of youthful style. Music gets well with the
            high-voltage action and rap songs sung by Tovino and Kalyani
            themselves. Youngsters will enjoy this movie for Tovino and
            Kalyani???s style and charm.
          </motion.p>
          <h5>~ Vinod Nair, Times Of India</h5>
          <a
            target="_blank"
            href="https://timesofindia.indiatimes.com/entertainment/malayalam/movie-reviews/thallumaala/movie-review/93521414.cms"
          >
            Read Full article on Times of India Website
          </a>
        </div>
        <div className="image">
          <img src="https://english.dailynews24.in//wp-content/uploads/2022/08/93315518.jpg" />
        </div>
        <div className="article">
          <h3>Tovino's 'Thallumala':A fun ride anchoring on new gen vibe</h3>
          <p>
            Khalid Rahman's "Thallumala" starts on a colorful note,wasting no
            time to reveal that the movie rides on a new generation vibe.From
            the onset,we are introduced to several funky characters,who seem to
            thrive on brawls and fist fights. Their bond with the protagonist
            and each other is revealed only in intervals,as the story is told in
            a non-linear fashion. Normally directors use the non-liner narrative
            to tell stories of a serious genre.That Khalid Rahman has used this
            style in a simple,light-hearted film,is truely is price
            worthy,especially as he pulls it off successfully.
          </p>
          <h5>~ Princy Alexander, Manorama Online</h5>
          <a
            target="_blank"
            href="https://www.onmanorama.com/entertainment/movie-reviews/2022/08/12/tovino-thomas-kalyani-priyadarshan-thallumala-movie-review.html"
          >
            Read Full article on Manorama Online
          </a>
        </div>
        <div className="image">
          <img src="https://igimages.gumlet.io/tamil/home/thallumaala310722_2.jpg?w=376&dpr=2.6" />
        </div>
        <div className="article">
          <h3>Thallumala</h3>
          <p>
            Trying to be unconventional and, at the same time, aspiring to have
            a mass appeal is a risky business. Only a few films had managed to
            pull it off in the past. Director Khalid Rahman???s new film
            Thallumaala is a very novel attempt that is uneven in the packaging.
            Rahman???s eye for detailing and how he maintains this eccentric tempo
            is fun for sure. But finding the right balance is not easy when the
            treatment is unfamiliar. Thus Thallumaala ends up being a passable
            entertainer with scattered highs and lows. Wazim is our hero. The
            film starts off with his wedding with Fathima Beevi, aka Beevi,
            getting canceled. Wazim has a few close friends, and the bonding of
            these guys happened over the course of fights. A series of
            interconnected events with fights that ultimately has a major impact
            on Wazim???s love life is what we witness in Thallumaala.
          </p>
          <h5>~ Lens Men Reviws</h5>
          <a
            target="_blank"
            href="https://lensmenreviews.com/thallumaala-malayalam-movie-review-2022/"
          >
            Read Full article on Lens Men Reviews
          </a>
        </div>
        <div className="image">
        <img src="https://english.mathrubhumi.com/image/contentid/policy:1.7789654:1660655334/Capture.PNG?$p=d11b36d&f=16x10&w=856&q=0.8" />
        </div>
        
      </div>
    </motion.div>
  );
}

export default Reviews;
