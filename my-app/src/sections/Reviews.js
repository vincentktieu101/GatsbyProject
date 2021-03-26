import React from "react"
import Container from "@material-ui/core/Container"
import StarIcon from '@material-ui/icons/Star'

export default function Reviews() {
  return (
    <div id="reviews">
      <Container>
        <div className="reviews-content">
          <h2>REVIEWS</h2>
          <hr />
          <div className="flex-box">
            <div className="review-text">
              <div>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <br/>
                <div className="text-secondary">a week ago</div>
              </div>
              <div>
                "This place is awesome for manicures and pedicures...what are you waiting for?!! Excellent service and highly recommended!"
              </div>
              <b>David C</b>
            </div>
            <div className="review-text">
              <div>
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <br/>
                  <div className="text-secondary">a month ago</div>
                </div>
                <div>
                  "Always a great job on my toes and fingers!!! ❤"
                </div>
                <b>Darlene G</b>
            </div>
            <div className="review-text">
              <div>
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <br/>
                  <div className="text-secondary">3 years ago</div>
                </div>
                <div>
                  "I've been going here since the beginning of 2017. Ava is the woman who does my acrylic nails and I 
                  can't recommend her enough. When I brought my mother here, she got her acrylic nails done with Ava's 
                  husband Tony. We are regular customers due to their kindness, service, speed, and the quality results. 
                  The inside is nice and there are plenty of seats for gel, regular, acrylic, pedicure, and they have 
                  nice massage chairs too. Definitely worth stopping by and checking them out. Also, cash is the way to tip 
                  here because they don't do tips on cards."
                </div>
                <b>Brigette</b>
            </div>
          </div>
          <br />
          <a
            href="https://www.google.com/search?hl=en-US&gl=us&q=Touch+of+Elegance+nails+%26+Spa,+1846+Westwood+Blvd,+Los+Angeles,+CA+90025&ludocid=6965767719597375710&lsig=AB86z5VILFIZw9r4QFSgNVZuwSwb#lrd=0x80c2bb9cebfea351:0x60ab60d5b27c00de,1"
          >
            <div>Write a Review / Read More</div>
          </a>
        </div>
      </Container>
    </div>
  )
}
